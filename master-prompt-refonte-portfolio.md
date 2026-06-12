# Master Prompt Claude Code — Refonte Portfolio Olivier Tousche (design + contenu fichiers)

> Prérequis : installer le plugin frontend-design avant de lancer le build :
> `npx claude-plugins install @anthropics/claude-code-plugins/frontend-design`

## 1. Mission

Deux chantiers en un :
1. **Refonte visuelle** complète du portfolio (style "Myna" : mono, accent bleu, brutalisme doux).
2. **Migration du contenu** : remplacer Supabase par des fichiers de contenu TypeScript locaux, éditables directement.

Le routing et la structure des pages restent identiques.

## 2. Contexte produit

- Portfolio de Olivier Tousche, Senior Product Designer (8 ans d'expérience), en recherche active de CDI.
- Cible : recruteurs, design managers, fondateurs.
- Identité à refléter : design produit + affinité vibe coding / outils AI.
- Site actuel : esthétique "AI slop" (blobs pastel, gradients, font-light) + contenu en base Supabase. On élimine les deux.

## 3. Objectif

- Identité visuelle distinctive : monospace, une couleur d'accent, angles droits, zéro gradient.
- Contenu 100% fichiers : modifier un texte = éditer un fichier dans `content/`, rien d'autre.
- Terminé = toutes les sections restylées, Supabase entièrement retiré, contenu actuel migré sans perte.

## 4. Architecture cible des dossiers

```
portfolio/
├── content/                      ← contenu éditable (la seule zone à toucher au quotidien)
│   ├── site.ts                   nom, navigation, URL LinkedIn, textes UI (loading, labels)
│   ├── hero.ts                   titres animés (typewriter), titre fixe, description
│   ├── methodologie.ts           titre section, paragraphes, les 3 blocs (titre + description)
│   ├── contact.ts                titre, email, CTA
│   └── experiences/
│       ├── index.ts              importe et ordonne les expériences (tableau exporté)
│       └── [slug].ts             1 fichier = 1 expérience : année, titre, entreprise,
│                                 logo, clickable, chiffres clés, content blocks
├── public/
│   ├── images/                   images renommées proprement, rangées par usage
│   │   ├── hero.png
│   │   └── experiences/[slug]/...
│   └── cv/Olivier_Tousche_CV.pdf un seul CV (garder la version compressée la plus légère)
├── src/
│   ├── components/
│   ├── pages/
│   └── lib/content-types.ts      interfaces TypeScript de tout le contenu
└── configs
```

Règles :
- Chaque fichier de `content/` exporte un objet typé par `src/lib/content-types.ts`.
- Les types reprennent les structures Supabase existantes (Experience, ContentBlock, Methodologie, etc.) pour migrer sans réécrire les composants en profondeur.
- Commentaires en français en tête de chaque fichier content/ expliquant quoi éditer.

## 5. Migration du contenu (étape critique)

1. AVANT toute suppression : exporter le contenu actuel de Supabase (un script de dump ou copie manuelle des données via les fetches existants) et le transposer dans les fichiers `content/`.
2. Remplacer chaque fetch Supabase par un import statique du fichier content correspondant.
3. Supprimer : `src/lib/supabase.ts`, `ContentEditorPage.tsx`, `ContentBlockForm.tsx`, le dossier `supabase/`, la dépendance `@supabase/supabase-js`, le fichier `.env`.
4. Supprimer tous les états `loading` devenus inutiles (le contenu est synchrone).
5. Nettoyer `public/` : supprimer les doublons de CV (garder 1 version compressée), les captures d'écran orphelines, les `Group_3_*.png` vides ; renommer les images restantes proprement.

## 6. Direction artistique (à respecter strictement)

### Typographie
- Police unique : **IBM Plex Mono** (Google Fonts), graisses 400, 500, 700.
- Titres `font-bold uppercase tracking-tight` (style Myna).
- Corps en mono 400. Supprimer tous les `font-light`.

### Couleurs
- Accent principal : **#4CB8FF** (bleu de la casquette de l'avatar hero — signature du site).
- Accent clair : **#93D4FF** (hovers, badges, fonds de pictos).
- Texte noir #0A0A0A sur blanc #FFFFFF, gris Tailwind pour le secondaire.
- **Texte noir sur les boutons bleus** (jamais de blanc sur #4CB8FF — contraste insuffisant).
- AUCUN gradient, blob, blur décoratif ou shadow. Supprimer AnimatedBackground.tsx et les blobs du Hero.

### Formes
- `rounded-none` partout. Cartes en `border border-gray-200`, fond blanc, pas d'ombres.
- Hover : `border-black` ou fond `#93D4FF/20`.

### Animations (Framer Motion à installer)
- Hero : titre mot par mot, `blur(10px)→blur(0)` + `y:20→0`, cascade ~0.15s.
- Sections : fade-in + translate-y au scroll (useInView, once: true).
- CONSERVER l'effet typewriter du Hero, stylé en mono bold uppercase.
- Respecter `prefers-reduced-motion`. Rien d'autre (pas de pulse, parallax, glow).

## 7. Ordre de build

1. **Types + content/** — créer `content-types.ts`, puis les fichiers content/ avec le contenu migré de Supabase.
2. **Brancher le contenu** — remplacer les fetches par les imports dans tous les composants ; vérifier que tout s'affiche.
3. **Purge Supabase** — suppression des fichiers, dépendances et états loading.
4. **Tokens design** — tailwind.config + index.css + import IBM Plex Mono dans index.html.
5. **Header** — nav mono uppercase text-xs tracking-wider ; conserver le bloc nom "Olivier / Tousche" avec sa barre verticale.
6. **HeroSection** — sans blobs ; layout conservé (avatar gauche / texte droite) ; titre animé + typewriter ; styler les `<strong>` de la description avec l'accent.
7. **AboutSection** — icônes en carrés `bg-accent-light/30` icône noire, plus de gradient ni pulse ; fond `bg-gray-50` conservé.
8. **TimelineSection** — bordures nettes, hover `bg-accent-light/10`, flèche translatée au hover ; logos carrés avec border.
9. **KeyFigures, Contact, ContentBlock, modales** — mêmes patterns.
10. **ExperienceDetailPage** — cohérence avec la home.
11. **Nettoyage public/** + passe responsive (375 / 768 / 1280px).

## 8. Stack technique

- Conservé : React 18, Vite, Tailwind, lucide-react, react-router-dom
- Ajouté : framer-motion
- Retiré : @supabase/supabase-js

## 9. Exigences non fonctionnelles

- Responsive mobile-first, breakpoints existants conservés.
- Contraste AA minimum, focus visibles, prefers-reduced-motion.
- Aucune régression de routing ni de contenu (tout le contenu Supabase actuel doit se retrouver dans content/).

## 10. Contraintes

- Pas de dark mode. Pas de dépendances au-delà de framer-motion.
- Pas de CMS, pas de markdown parser : du TypeScript typé simple.
- Refonte de skin + migration contenu : pas de refonte d'architecture des composants au-delà du nécessaire.

## 11. Hypothèses explicites

- Confirmé : accent #4CB8FF, mono, style Myna, mode clair, contenu en fichiers TS, suppression Supabase.
- Supposé : IBM Plex Mono (alternative : JetBrains Mono si meilleur rendu des accents français — vérifier "é, è, à").
- À arbitrer plus tard : favicon, page 404, iconographie custom.

## 12. Instructions finales pour Claude Code

1. Lis d'abord tous les composants `src/components` et `src/pages` + les types de `src/lib/supabase.ts` pour reproduire fidèlement les structures de données dans content-types.ts.
2. La migration du contenu (étapes 1-3) passe AVANT le restyle : on sécurise les données, puis on fait beau.
3. Après chaque étape, lance le dev server et vérifie avant de continuer.
4. Utilise le skill frontend-design activement — objectif : un rendu distinctif, pas un template générique.
