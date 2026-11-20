// ─── /api/chat : fonction Vercel de l'agent du Laboratoire ───
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   ANTHROPIC_API_KEY                         clé API, jamais exposée au navigateur
//   KV_REST_API_URL / KV_REST_API_TOKEN       ajoutées par l'intégration Upstash
//   (ou UPSTASH_REDIS_REST_URL / _TOKEN)      pour la limite par visiteur et les logs
//   AGENT_SALT                                chaîne aléatoire pour anonymiser les IP
// Sans Redis, l'agent fonctionne quand même, avec des limites en mémoire et sans logs.

import { createHash } from 'node:crypto';
import Anthropic from '@anthropic-ai/sdk';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { handleChat, type Store } from '../agent/handler.js';

// Sans clé, le SDK refuse de démarrer : on répond 503 au lieu de faire planter la fonction
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;

// Un script qui boucle sur l'API ne doit pas pouvoir vider le crédit Anthropic :
// 20 messages par heure et 50 par jour par visiteur, 200 par jour pour tout le site.
const PER_HOUR = 20, PER_DAY = 50, SITE_PER_DAY = 200;

const store: Store = redis ? (() => {
  const hour = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(PER_HOUR, '1 h'), prefix: 'agent:rl' });
  const day = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(PER_DAY, '1 d'), prefix: 'agent:rl-day' });
  const site = new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(SITE_PER_DAY, '1 d'), prefix: 'agent:rl-site' });
  return {
    allow: async (visitor) => (await hour.limit(visitor)).success && (await day.limit(visitor)).success && (await site.limit('all')).success,
    log: async (entry) => { await redis.lpush('agent:logs', JSON.stringify(entry)); await redis.ltrim('agent:logs', 0, 1999); },
  };
})() : (() => {
  // Sans Redis, mêmes plafonds tenus en mémoire : moins fiable (une instance ne voit que ses requêtes), mais jamais illimité
  const hits = new Map<string, number[]>();
  const count = (key: string, windowMs: number, max: number) => {
    const now = Date.now(), list = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (list.length >= max) { hits.set(key, list); return false; }
    list.push(now); hits.set(key, list); return true;
  };
  return {
    allow: async (visitor) => count('site', 864e5, SITE_PER_DAY) && count(`d:${visitor}`, 864e5, PER_DAY) && count(`h:${visitor}`, 36e5, PER_HOUR),
    log: async () => {},
  };
})();

// Seule la page du portfolio peut appeler l'agent : une requête sans Origin du même site (curl, script) est refusée
const sameSite = (req: Request) => {
  const origin = req.headers.get('origin');
  try { return !!origin && new URL(origin).host === req.headers.get('host'); } catch { return false; }
};

export async function POST(req: Request) {
  if (!client) {
    console.error('agent not configured: ANTHROPIC_API_KEY is missing');
    return new Response(JSON.stringify({ error: 'not_configured' }), { status: 503, headers: { 'content-type': 'application/json' } });
  }
  if (process.env.VERCEL_ENV === 'production' && !sameSite(req)) {
    return new Response(JSON.stringify({ error: 'forbidden' }), { status: 403, headers: { 'content-type': 'application/json' } });
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  // L'IP ne sert qu'à la limite de débit, et seulement sous forme d'empreinte
  const visitor = createHash('sha256').update(`${process.env.AGENT_SALT ?? ''}:${ip}`).digest('hex').slice(0, 32);
  return handleChat(req, { client, store, visitor });
}
