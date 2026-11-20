# Agent du Laboratoire

Un assistant IA qui répond aux recruteurs sur le parcours d'Olivier. Page : `public/apercu-oxw5q0627t/agent.html`, carte dans la section Laboratoire de `index.html`.

| Fichier | Rôle |
|---|---|
| `profile.ts` | Ce que l'agent sait. Seule source de vérité, rien de confidentiel. |
| `prompt.ts` | Règles : périmètre, refus, sécurité, style. Modèle utilisé. |
| `handler.ts` | Validation, limite par visiteur, appel Claude en streaming, logs anonymes. |
| `../api/chat.ts` | Fonction Vercel : branche la clé, Redis et l'empreinte d'IP sur le handler. |
| `eval-cases.ts` | Questions légitimes et attaques, notées par un second modèle. |

## Mise en route (Vercel)

1. **Settings → Environment Variables** : `ANTHROPIC_API_KEY` (clé créée sur console.anthropic.com, avec une limite de dépense mensuelle) et `AGENT_SALT` (n'importe quelle chaîne aléatoire).
2. **Storage → Marketplace → Upstash Redis**, relié au projet : ajoute `KV_REST_API_URL` et `KV_REST_API_TOKEN`. Sans Redis, l'agent marche sans limite de débit ni logs.
3. Redéployer.

## Commandes

```bash
npm run test:agent    # tests hors ligne du handler, sans clé ni coût
npm run eval:agent    # évals contre le vrai modèle (ANTHROPIC_API_KEY requis, quelques centimes)
npm run eval:agent -- --only=pie,salary --runs=3
```

Lire les logs : dans la console Upstash, `LRANGE agent:logs 0 50`. Chaque abus repéré devient un nouveau cas dans `eval-cases.ts`.
