// ─── HERO : section d'accueil ───
// Modifier ici : les mots animés par l'effet machine à écrire (titresAnimes),
// le titre fixe qui les suit, et le paragraphe de description.
// La description accepte du HTML : les <strong> sont mis en valeur avec l'accent bleu.

import type { HeroContent } from '../src/lib/content-types';

export const hero: HeroContent = {
  titresAnimes: ['Product', 'Service', 'UX', 'Vibe Coding', 'Dad &'],
  titreFixe: 'Designer.',
  description:
    "De l'identification des irritants aux tests utilisateurs, je conçois des <strong>expériences produit</strong> et de service centrées utilisateurs, en articulant <strong>stratégie, recherche et design</strong>.",
  skillTags: ['User research', 'Prototyping', 'Wireframe', 'User tests'],
};
