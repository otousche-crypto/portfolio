// ─── HERO : section d'accueil ───
// Modifier ici : les mots animés par l'effet machine à écrire (titresAnimes),
// le titre fixe qui les suit, et le paragraphe de description.
// La description accepte du HTML : les <strong> sont mis en valeur avec l'accent bleu.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { HeroContent } from '../src/lib/content-types';

export const hero: HeroContent = {
  titresAnimes: [
    { fr: 'Product', en: 'Product' },
    { fr: 'Service', en: 'Service' },
    { fr: 'UX', en: 'UX' },
    { fr: 'Vibe Coding', en: 'Vibe Coding' },
    { fr: 'Dad &', en: 'Dad &' },
  ],
  titreFixe: { fr: 'Designer.', en: 'Designer.' },
  description: {
    fr: "De l'identification des irritants aux tests utilisateurs, je conçois des <strong>expériences produit</strong> et de service centrées utilisateurs, en articulant <strong>stratégie, recherche et design</strong>.",
    en: 'From identifying pain points to user testing, I design user-centered <strong>product and service experiences</strong>, combining <strong>strategy, research and design</strong>.',
  },
  skillTags: [
    { fr: 'User research', en: 'User research' },
    { fr: 'Prototyping', en: 'Prototyping' },
    { fr: 'Wireframe', en: 'Wireframe' },
    { fr: 'User tests', en: 'User tests' },
  ],
};
