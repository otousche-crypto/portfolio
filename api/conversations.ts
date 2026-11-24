// ─── /api/conversations : les logs de l'agent, pour la page privée conversations.html ───
// Lecture seule (listes agent:logs et agent:feedback). Protégé par ADMIN_TOKEN (Vercel → Settings → Environment Variables) :
// sans la variable, l'endpoint est fermé ; un mauvais mot de passe est limité à 10 essais par heure et par IP.

import { createHash, timingSafeEqual } from 'node:crypto';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_READ_ONLY_TOKEN ?? process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;
// Le compteur d'essais écrit dans Redis : il lui faut le jeton en écriture
const writer = url && (process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({ url, token: (process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN)! }) : null;
const tries = writer ? new Ratelimit({ redis: writer, limiter: Ratelimit.slidingWindow(10, '1 h'), prefix: 'agent:admin' }) : null;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
const digest = (s: string) => createHash('sha256').update(s).digest();
// Le client décode déjà le JSON ; une entrée restée en texte est décodée ici
const parse = (rows: unknown[]) => rows.map((r) => (typeof r === 'string' ? JSON.parse(r) : r));

export async function GET(req: Request) {
  const secret = process.env.ADMIN_TOKEN;
  if (!secret || !redis) return json({ error: 'unavailable' }, 503);
  const given = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ?? '';
  if (!timingSafeEqual(digest(given), digest(secret))) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (tries && !(await tries.limit(ip)).success) return json({ error: 'too_many' }, 429);
    return json({ error: 'forbidden' }, 401);
  }
  const [logs, votes] = await Promise.all([redis.lrange('agent:logs', 0, -1), redis.lrange('agent:feedback', 0, -1)]);
  return json({ logs: parse(logs), votes: parse(votes) });
}
