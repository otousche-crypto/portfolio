// ─── Les logs de l'agent regroupés par conversation (api/conversations.ts) ───
// La page conversations.html fait le même regroupement de son côté ; les deux doivent donner les mêmes clés.

export type Log = {
  at: string; cid?: string; lang: string; turn: number; question: string; answer: string; outcome: string;
  tokens?: { in: number; out: number; cr: number; cw: number };
};
export type Chat = { key: string; msgs: Log[] };

// Par conversation : l'identifiant tiré par la page ; les anciens logs, sans identifiant, sont coupés à chaque 1re question
export function groupChats(logs: Log[]): Chat[] {
  const out: Chat[] = [], byCid = new Map<string, Chat>();
  for (const l of [...logs].sort((a, b) => a.at.localeCompare(b.at))) {
    if (l.cid) {
      if (!byCid.has(l.cid)) { const c = { key: l.cid, msgs: [] }; byCid.set(l.cid, c); out.push(c); }
      byCid.get(l.cid)!.msgs.push(l);
    } else if (l.turn === 1 || !out.length || out.at(-1)!.msgs[0].cid) out.push({ key: 't' + l.at, msgs: [l] });
    else out.at(-1)!.msgs.push(l);
  }
  return out;
}
