// ─── APERÇU LOCAL AVEC LE VRAI MODÈLE : npm run dev:live ───
// Sert dist/ (npm run build d'abord) et branche /api/chat sur la vraie fonction, avec le prompt local.
// Besoin de ANTHROPIC_API_KEY dans .env (non versionné). Sans Redis : limites en mémoire, pas de logs.
// Chaque question tapée appelle Claude Haiku et coûte un peu (une suggestion cliquée, rien).

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { POST as chat } from '../api/chat';

const root = path.resolve('dist'), port = Number(process.env.PORT ?? 4318);
const types: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.pdf': 'application/pdf' };
if (!process.env.ANTHROPIC_API_KEY) console.warn('ANTHROPIC_API_KEY absente de .env : /api/chat répondra 503');

http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${port}`);
  if (url.pathname === '/api/chat' && req.method === 'POST') {
    let body = ''; for await (const c of req) body += c;
    const out = await chat(new Request(url, { method: 'POST', headers: { 'content-type': 'application/json', 'x-forwarded-for': '127.0.0.1' }, body }));
    res.writeHead(out.status, Object.fromEntries(out.headers));
    if (out.body) for await (const c of out.body) res.write(c);
    return res.end();
  }
  if (url.pathname === '/api/feedback') { res.writeHead(204); return res.end(); }
  let file = path.join(root, decodeURIComponent(url.pathname));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Aperçu avec le vrai modèle : http://localhost:${port}/agent.html`));
