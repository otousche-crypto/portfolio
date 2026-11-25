# Design system du portfolio

Référence : les pages publiques (accueil, études de cas, agent).

## Où ça vit

Trois couches, de l'atome à la page (catalogue complet : `site/design-system.html`, non liée, noindex) :

| Fichier | Contenu | Chargé par |
|---|---|---|
| `site/css/tokens.css` | Fondations : couleurs, typo, rayons, ombres, verre, motion + base | toutes les pages |
| `site/css/components.css` | Atomes et molécules communs à toutes les surfaces : pilule discrète `.tool`, `.chip`, picto `.ipic`, bulle `.msg`, `.panel`, tuiles `.tiles` | toutes les pages |
| `site/css/site.css` | Organismes publics : barre du haut, label, boutons, tags, certification, cadres MacBook/iPhone, carte projet `.card` + miniature Agent, contact et pied de page, kit étude de cas `cs-*`, lightbox | accueil, études de cas, catalogue |
| `<style>` de chaque page | Sa mise en page et les habillages produit (`.moon`, `.sklip`…) | — |
| `site/agent-dock.js` | Le dock de l'agent, injecté en bas des pages publiques | accueil, études de cas, catalogue |

**Fusions** : `.eq-nums`, `.eq-results` et `.bm-stats` ne font plus qu'un, `.tiles`. Les bulles, chips, picto « i » et pilules de l'agent sont des composants partagés. Les `.eq-*` partagés par deux études de cas sont renommés en `cs-*` (`cs-tldr`, `cs-keys`, `cs-eye`, `cs-step`, `cs-roles`, `cs-phases`).

## Tokens

**Couleurs.** Surfaces : `--bg` blanc, `--soft` #f3f3f5 (tuiles, survols), `--canvas` #f1f1f4 (fond de l'agent), `--raised` blanc (cartes et bulles sur `--canvas`). Texte : `--fg` #111113, `--fg-2` #55555c (texte de lecture), `--fg-3` #5f5f68 (contrôles discrets), `--muted` #9a9aa2 (méta, légendes), `--faint` #c4c4ca. Traits et états, translucides pour se lire pareil sur blanc et sur gris : `--line`, `--line-strong`, `--hover`, `--active`. Remplis : un seul noir, `--ink` #111113 (survol #2c2d32), pour les boutons primaires (`--pill`), les bulles du visiteur, les suggestions et le bouton d'envoi. `--accent` #4CB8FF, `--ok`, `--warn`, `--danger`.

**Typo.** Geist partout, Geist Mono réservé aux données techniques (compteur de caractères). Les labels sont en Geist, casse de phrase, graisse 500, jamais en mono majuscules : `--t-eyebrow` 14px, `--t-caption` 13,5px, `--t-small` 13px.

**Rayons.** `--radius` 28 (panneaux pleine largeur), `--r-lg` 24 (blocs), `--r-md` 18 (cartes, figures), `--r-sm` 14 (tuiles), `--r-xs` 10 (logos, vignettes), `--r-pill`. Les bulles de conversation gardent 20px avec le coin 6px côté locuteur.

**Ombres.** `--sh-ring` (contour 1px), `--sh-float` (bulle ou carte posée), `--sh-overlay` (feuille, dialogue).

## Audit : ce qui a été trouvé et corrigé

**Structure**
- Chaque page publique embarquait sa propre copie (~600 lignes) du CSS de l'accueil, y compris les panneaux produit qu'elle n'affiche pas. Les copies avaient divergé. → Extraction dans `tokens.css` + `site.css` ; chaque page ne garde que son spécifique (accueil 465 → 268 lignes, études de cas ~690 → 50-80 lignes ; au total −2 300 lignes).
- Les labels « sans mono » étaient obtenus par un bloc de surcharges en fin de chaque page, différent d'une page à l'autre. → La règle est écrite une fois, directement dans les composants.
- Une accolade orpheline après `@keyframes smScroll` invalidait la règle suivante dans les trois études de cas (masquée par une copie plus haut). → Supprimée.
- CSS mort retiré : badges Stampit, téléphone Décadi, gravure, `.browser .bar`, `.moon .km`, styles « À propos » sur les études de cas.

**Typographie**
- Légendes de figure : 14px/500 sur Altered, 13,5px/400 ailleurs → 13,5px/400 partout.
- Sous-titres `.cs-sub` : 14px sur Altered, 15px ailleurs → 15px.
- Légendes encore en Geist Mono majuscules sur Altered (`.cs-diagram`, `.showcase`) → style légende.
- Marge sous les titres du bloc Contact : 10px sur l'accueil, 6px sur les études de cas → 6px.

**Couleurs**
- 9 gris de texte différents (#4a4a52, #55555c, #5a5a62, #5f5f67, #5f5f68, #6b6b73, #8a8a92, #8b8b93, #9a9aa2) → 4 tokens.
- Noir de l'agent #0f0f12 vs #111113 sur le reste → #111113.
- Trait #e7e7ea (public) vs rgba(15,15,18,.08) (agent) → un seul trait translucide.
- Bleu #0a84ff (historique) vs #4CB8FF (agent) → `--accent`. Rouge #c2410c vs #e5484d → `--danger`.
- Deux noirs pour les surfaces pleines : #111113 sur les pages publiques, anthracite #2c2d32 dans l'agent (bulles, suggestions, envoi), avec un survol incohérent (#2a2a30). → Noir partout, survol `--ink-hover`.
- Fond de l'aparté Sklip #f6f6f8 → `--soft`.

**Composants**
- Lien « ← Tous les projets » en gris clair (`--muted`) alors que les liens de navigation sont en `--fg-3` → `--fg-3`.
- Tuiles chiffrées 16px vs cartes 14px vs cadre 20px → échelle de rayons ci-dessus.
- La vignette Agent de l'accueil reprend désormais les tokens de la vraie page (ombre de bulle, noir du bouton d'envoi).

**Historique des conversations** (`conversations.html`)
- Reconstruit sur les composants de la page Agent : fond `--canvas` à trame de points, barre vitrée, bulles identiques (taille, rayon, ombre), boutons pilules, cartes et feuille Analytics aux rayons/ombres du système, tuiles chiffrées des études de cas.
- Les réponses sont rendues comme sur l'agent : listes, italique, liens nus, picto « i », découpage en plusieurs bulles sur `---` et `~~~`, ligne `_meta` masquée. Avant, les `[[suggestions]]` et les séparateurs `~~~` s'affichaient en texte brut.
- Les suggestions proposées au visiteur apparaissent sous la réponse, en pilules noires estompées.
- En-têtes de jour en casse de phrase au lieu de majuscules.

Page de référence visuelle : `site/design-system.html` (non liée, noindex), qui lit les tokens en direct.

## Points ouverts (non tranchés)

1. **Contraste de `--muted`** (#9a9aa2) : 2,8:1 sur blanc (2,5:1 sur le gris de l'agent), sous le seuil AA (4,5:1) pour le petit texte (légendes, méta, statut de l'agent). #8a8a92 (l'ancienne valeur de l'agent) monte à 3,4:1 ; #6b6b73 passe AA (5,3:1). C'est un token à changer, mais ça éclaircit/assombrit aussi le mot tapé du hero.
2. **Schéma SVG d'Altered** : ses libellés internes sont encore en Geist Mono majuscules (« ABSORBÉ PAR LE PRODUIT »).
3. Classes `w-full` / `w-medium` sur les figures Go MoonBound sans aucune règle CSS.
4. Le dégradé « beam » de l'agent est copié en trois endroits (vignette d'accueil, page agent, `agent-dock.js`).
