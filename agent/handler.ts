// ─── HANDLER de l'agent : validation, limite par visiteur, appel Claude, logs ───
// Séparé de api/chat.ts pour que les évals (scripts/eval-agent.ts) appellent
// exactement le même code que la production, sans serveur.

import Anthropic from '@anthropic-ai/sdk';
import { MODEL, systemPrompt } from './prompt';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

// Limites d'entrée : un recruteur n'a pas besoin de plus, un abus si
export const LIMITS = {
  userChars: 800,        // longueur max d'une question
  assistantChars: 4000,  // longueur max d'une réponse renvoyée par le client
  historyKept: 12,       // seuls les derniers messages partent au modèle
  turnsPerChat: 15,      // questions max par conversation
  maxTokens: 2000,       // plafond de sortie (réflexion comprise)
};

export interface Store {
  // true si le visiteur peut encore envoyer un message
  allow(visitor: string): Promise<boolean>;
  log(entry: Record<string, unknown>): Promise<void>;
}

const FALLBACK = {
  fr: 'Je préfère rester sur le parcours d’Olivier. Une question sur ses projets ou sa façon de travailler ?',
  en: 'I’d rather stay on Olivier’s background. Any question about his projects or how he works?',
};

const json = (status: number, error: string) =>
  new Response(JSON.stringify({ error }), { status, headers: { 'content-type': 'application/json' } });

export function validate(body: unknown): { messages: ChatMessage[]; lang: 'fr' | 'en' } | string {
  if (!body || typeof body !== 'object') return 'invalid_body';
  const { messages, lang } = body as { messages?: unknown; lang?: unknown };
  if (!Array.isArray(messages) || messages.length === 0) return 'invalid_messages';
  for (const [i, m] of messages.entries()) {
    if (!m || typeof m !== 'object') return 'invalid_messages';
    const { role, content } = m as Record<string, unknown>;
    // Alternance stricte, en commençant et finissant par le visiteur
    if (role !== (i % 2 === 0 ? 'user' : 'assistant')) return 'invalid_messages';
    if (typeof content !== 'string' || !content.trim()) return 'invalid_messages';
    if (content.length > (role === 'user' ? LIMITS.userChars : LIMITS.assistantChars)) return 'message_too_long';
  }
  if (messages.length % 2 === 0) return 'invalid_messages';
  if ((messages.length + 1) / 2 > LIMITS.turnsPerChat) return 'conversation_too_long';
  return {
    messages: (messages as ChatMessage[]).slice(-LIMITS.historyKept).map(({ role, content }) => ({ role, content })),
    lang: lang === 'en' ? 'en' : 'fr',
  };
}

export async function handleChat(req: Request, deps: { client: Anthropic; store?: Store; visitor: string }) {
  if (req.method !== 'POST') return json(405, 'method_not_allowed');
  let body: unknown;
  try { body = await req.json(); } catch { return json(400, 'invalid_body'); }
  const input = validate(body);
  if (typeof input === 'string') return json(input === 'invalid_body' || input === 'invalid_messages' ? 400 : 413, input);
  if (deps.store && !(await deps.store.allow(deps.visitor))) return json(429, 'rate_limited');

  const { messages, lang } = input;
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      let answer = '';
      let outcome = 'ok';
      try {
        const run = deps.client.messages.stream({
          model: MODEL,
          max_tokens: LIMITS.maxTokens,
          output_config: { effort: 'low' },
          system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
          messages,
        });
        for await (const event of run) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            answer += event.delta.text;
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await run.finalMessage();
        if (final.stop_reason === 'refusal') {
          outcome = 'refusal';
          const text = (answer ? '\n\n' : '') + FALLBACK[lang];
          answer += text;
          controller.enqueue(encoder.encode(text));
        } else if (final.stop_reason === 'max_tokens') {
          outcome = 'max_tokens';
        }
      } catch (error) {
        outcome = error instanceof Anthropic.APIError ? `api_${error.status}` : 'error';
        console.error('agent error', outcome, error instanceof Error ? error.message : error);
        const text = lang === 'en'
          ? 'Sorry, I can’t answer right now. You can reach Olivier at otousche@gmail.com.'
          : 'Désolé, je ne peux pas répondre pour le moment. Vous pouvez écrire à Olivier : otousche@gmail.com.';
        controller.enqueue(encoder.encode((answer ? '\n\n' : '') + text));
      }
      controller.close();
      // Log anonymisé : la question, la réponse, la langue. Ni IP ni identifiant.
      await deps.store?.log({ at: new Date().toISOString(), lang, turn: (messages.length + 1) / 2, question: messages.at(-1)!.content, answer, outcome })
        .catch((e) => console.error('log error', e));
    },
  });
  return new Response(stream, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' },
  });
}
