// ─── COMPTE RENDU des conversations de l'agent ───
// Lit les logs anonymes gardés dans Upstash (listes agent:logs et agent:feedback) et les regroupe
// par conversation, en Markdown. Lecture seule : rien n'est modifié.
//   npm run report:agent                       tout ce qui est gardé (2 000 derniers messages)
//   npm run report:agent -- --since=2026-11-20 à partir d'une date
//   npm run report:agent -- --out=rapport.md   écrit dans un fichier au lieu de l'afficher
// Il faut dans .env : KV_REST_API_URL et KV_REST_API_READ_ONLY_TOKEN (Vercel → Settings → Environment Variables).

import { writeFileSync } from 'node:fs';
import { Redis } from '@upstash/redis';

type Log = { at: string; cid?: string; lang: string; turn: number; question: string; answer: string; outcome: string };
type Vote = { at: string; cid?: string; vote: 'up' | 'down'; question: string };

const arg = (name: string) => process.argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];
const since = arg('since') ?? '';
const out = arg('out');

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_READ_ONLY_TOKEN ?? process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
if (!url || !token) {
  console.error('Il manque KV_REST_API_URL et KV_REST_API_READ_ONLY_TOKEN dans .env');
  process.exit(1);
}
const redis = new Redis({ url, token });

// Le client décode déjà le JSON ; une entrée restée en texte est décodée ici
const parse = <T>(rows: unknown[]) => rows.map((r) => (typeof r === 'string' ? JSON.parse(r) : r) as T);
const logs = parse<Log>(await redis.lrange('agent:logs', 0, -1)).filter((l) => l.at >= since).reverse();
const votes = parse<Vote>(await redis.lrange('agent:feedback', 0, -1)).filter((v) => v.at >= since);

// Par conversation : l'identifiant tiré par la page ; les anciens logs, sans identifiant, sont coupés à chaque 1re question
const chats: Log[][] = [];
const byCid = new Map<string, Log[]>();
for (const l of logs) {
  if (l.cid) {
    if (!byCid.has(l.cid)) { byCid.set(l.cid, []); chats.push(byCid.get(l.cid)!); }
    byCid.get(l.cid)!.push(l);
  } else if (l.turn === 1 || !chats.length || chats.at(-1)![0].cid) chats.push([l]);
  else chats.at(-1)!.push(l);
}

const day = (iso: string) => new Date(iso).toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Paris' });
const cut = (s: string, n: number) => (s.length > n ? s.slice(0, n).trimEnd() + '…' : s);
const plain = (s: string) => s.replace(/\n?\[\[[^\]]*\]\]\s*$/, '').replace(/\n-{3,}\n/g, ' / ').replace(/\s+/g, ' ').trim();
const LABEL: Record<string, string> = { ok: '', canned: 'réponse toute prête', refusal: 'refus du modèle', max_tokens: 'réponse coupée' };

const count = (o: string) => logs.filter((l) => l.outcome === o).length;
const closed = chats.filter((c) => /\[\[\s*(FIN|END)\s*\]\]\s*$/.test(c.at(-1)!.answer)).length;
const errors = logs.filter((l) => l.outcome.startsWith('api_') || l.outcome === 'error').length;
const lines = [
  `# Conversations de l'agent${since ? ` depuis le ${since}` : ''}`,
  '',
  `- ${chats.length} conversations, ${logs.length} questions (${count('canned')} réponses toutes prêtes, ${logs.length - count('canned')} appels au modèle)`,
  `- ${closed} conversations fermées par l'agent, ${count('refusal')} refus du modèle, ${errors} erreurs techniques`,
  `- Votes : ${votes.filter((v) => v.vote === 'up').length} 👍, ${votes.filter((v) => v.vote === 'down').length} 👎`,
  '',
];
for (const [i, c] of chats.entries()) {
  const v = votes.filter((x) => x.cid && x.cid === c[0].cid);
  lines.push(`## ${i + 1}. ${day(c[0].at)} · ${c[0].lang.toUpperCase()} · ${c.length} question${c.length > 1 ? 's' : ''}${v.length ? ' · ' + v.map((x) => (x.vote === 'up' ? '👍' : '👎')).join('') : ''}`, '');
  for (const l of c) {
    const tag = l.outcome.startsWith('api_') || l.outcome === 'error' ? 'erreur ' + l.outcome : LABEL[l.outcome] ?? l.outcome;
    lines.push(`- **Q** ${cut(l.question.replace(/\s+/g, ' '), 300)}${tag ? ` _(${tag})_` : ''}`, `  **R** ${cut(plain(l.answer), 400) || '—'}`);
  }
  lines.push('');
}

const md = lines.join('\n');
if (out) { writeFileSync(out, md); console.log(`Compte rendu écrit dans ${out}`); } else console.log(md);
