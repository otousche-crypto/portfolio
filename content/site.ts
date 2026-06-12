// ─── SITE : identité, navigation, textes d'interface ───
// Modifier ici : le nom affiché dans le header, les liens de navigation,
// l'URL LinkedIn et les libellés d'interface (bouton retour, page introuvable).

import type { SiteContent } from '../src/lib/content-types';

export const site: SiteContent = {
  prenom: 'Olivier',
  nom: 'Tousche',
  imageProfilUrl: '/images/hero.png',
  imageProfilAlt: 'Olivier Tousche',
  linkedinUrl: 'https://www.linkedin.com/in/olivier-tousche-a6160b122/',
  navigation: [
    { label: 'About', sectionId: 'about' },
    { label: 'Work', sectionId: 'parcours' },
    { label: 'Contact', sectionId: 'contact' },
  ],
  uiTexts: {
    backButton: 'BACK',
    experienceNonTrouvee: 'Expérience non trouvée',
  },
};
