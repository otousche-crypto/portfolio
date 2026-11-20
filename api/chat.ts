// ─── /api/chat : fonction Vercel de l'agent du Laboratoire ───
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   ANTHROPIC_API_KEY                         clé API, jamais exposée au navigateur
//   KV_REST_API_URL / KV_REST_API_TOKEN       ajoutées par l'intégration Upstash
//   (ou UPSTASH_REDIS_REST_URL / _TOKEN)      pour la limite par visiteur et les logs
//   AGENT_SALT                                chaîne aléatoire pour anonymiser les IP
// Sans Redis, l'agent fonctionne quand même, sans limite ni logs (pratique en local).

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

const store: Store | undefined = redis ? (() => {
  // 20 messages par heure et par visiteur
  const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(20, '1 h'), prefix: 'agent:rl' });
  return {
    allow: async (visitor) => (await limiter.limit(visitor)).success,
    log: async (entry) => { await redis.lpush('agent:logs', JSON.stringify(entry)); await redis.ltrim('agent:logs', 0, 1999); },
  };
})() : undefined;

export async function POST(req: Request) {
  if (!client) {
    console.error('agent not configured: ANTHROPIC_API_KEY is missing');
    return new Response(JSON.stringify({ error: 'not_configured' }), { status: 503, headers: { 'content-type': 'application/json' } });
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  // L'IP ne sert qu'à la limite de débit, et seulement sous forme d'empreinte
  const visitor = createHash('sha256').update(`${process.env.AGENT_SALT ?? ''}:${ip}`).digest('hex').slice(0, 32);
  return handleChat(req, { client, store, visitor });
}
