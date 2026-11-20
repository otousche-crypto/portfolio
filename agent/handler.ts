// ─── HANDLER de l'agent : validation, limite par visiteur, appel Claude, logs ───
// Séparé de api/chat.ts pour que les évals (scripts/eval-agent.ts) appellent
// exactement le même code que la production, sans serveur.

import Anthropic from '@anthropic-ai/sdk';
import { MODEL, systemPrompt } from './prompt.js';

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

// Langue de la réponse : celle de la question, sinon celle de la page. Le modèle, briefé en
// français, glisse parfois vers le français face à une question en anglais ; on le lui dit donc.
const FR = /[éèêàâçùûôîœ]|\b(le|la|les|des|du|est|une|il|elle|vous|quel|quelle|quels|pour|avec|sur|son|sa|ses|qui|que|quoi|comment|pourquoi|bonjour|merci|moi|parlez|avez|sont|aussi|projets?)\b|\b[dlnjqs][’']/gi;
const EN = /\b(the|is|are|what|how|why|does|did|do|his|he|him|you|your|with|for|about|and|of|can|which|who|hello|thanks)\b/gi;
export function replyLang(text: string, fallback: 'fr' | 'en'): 'fr' | 'en' {
  const fr = text.match(FR)?.length ?? 0, en = text.match(EN)?.length ?? 0;
  return fr === en ? fallback : fr > en ? 'fr' : 'en';
}

export async function handleChat(req: Request, deps: { client: Anthropic; store?: Store; visitor: string }) {
  if (req.method !== 'POST') return json(405, 'method_not_allowed');
  let body: unknown;
  try { body = await req.json(); } catch { return json(400, 'invalid_body'); }
  const input = validate(body);
  if (typeof input === 'string') return json(input === 'invalid_body' || input === 'invalid_messages' ? 400 : 413, input);
  if (deps.store && !(await deps.store.allow(deps.visitor))) return json(429, 'rate_limited');

  const { messages } = input;
  const lang = replyLang(messages.at(-1)!.content, input.lang);
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
          // Le bloc en cache reste identique d'une requête à l'autre ; la consigne de langue vient après
          system: [
            { type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } },
            { type: 'text', text: lang === 'en' ? 'The visitor writes in English: answer entirely in English.' : 'Le visiteur écrit en français : réponds en français.' },
          ],
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
          const text = (answer ? '\n---\n' : '') + FALLBACK[lang];
          answer += text;
          controller.enqueue(encoder.encode(text));
        } else if (final.stop_reason === 'max_tokens') {
          outcome = 'max_tokens';
        }
      } catch (error) {
        outcome = error instanceof Anthropic.APIError ? `api_${error.status}` : 'error';
        console.error('agent error', outcome, error instanceof Error ? error.message : error);
        const text = lang === 'en'
          ? 'I can’t answer you right now, there’s a technical issue… In the meantime, you can email Olivier: otousche@gmail.com.'
          : 'Je ne peux pas vous répondre pour le moment, il y a un problème technique… En attendant, vous pouvez écrire à Olivier : otousche@gmail.com.';
        controller.enqueue(encoder.encode((answer ? '\n---\n' : '') + text));
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
