// ─── /api/feedback : le 👍 / 👎 sous une réponse de l'agent ───
// Même Redis que /api/chat (liste agent:feedback). Sans Redis, le vote est accepté mais pas gardé.

import { createHash } from 'node:crypto';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { handleFeedback, type FeedbackStore } from '../agent/handler.js';

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;

const store: FeedbackStore | undefined = redis ? (() => {
  // 60 votes par heure et par visiteur : largement assez pour voter sur toute une conversation
  const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(60, '1 h'), prefix: 'agent:fb' });
  return {
    allow: async (visitor) => (await limiter.limit(visitor)).success,
    save: async (entry) => { await redis.lpush('agent:feedback', JSON.stringify(entry)); await redis.ltrim('agent:feedback', 0, 1999); },
  };
})() : undefined;

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const visitor = createHash('sha256').update(`${process.env.AGENT_SALT ?? ''}:${ip}`).digest('hex').slice(0, 32);
  return handleFeedback(req, { store, visitor });
}
