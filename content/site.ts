// ─── SITE : identité, navigation, textes d'interface ───
// Modifier ici : le nom affiché dans le header, les liens de navigation,
// et les libellés d'interface (bouton retour, page introuvable).
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { SiteContent } from '../src/lib/content-types';

export const site: SiteContent = {
  prenom: 'Olivier',
  nom: 'Tousche',
  imageProfilUrl: '/images/hero.png',
  imageProfilAlt: { fr: 'Olivier Tousche', en: 'Olivier Tousche' },
  navigation: [
    { label: { fr: 'À propos', en: 'About' }, sectionId: 'about' },
    { label: { fr: 'Parcours', en: 'Work' }, sectionId: 'parcours' },
    { label: { fr: 'Contact', en: 'Contact' }, sectionId: 'contact' },
  ],
  uiTexts: {
    backButton: { fr: 'RETOUR', en: 'BACK' },
    experienceNonTrouvee: { fr: 'Expérience non trouvée', en: 'Experience not found' },
    roleLabel: { fr: 'Rôle', en: 'Role' },
    produitLabel: { fr: 'Produit', en: 'Product' },
    dureeLabel: { fr: 'Durée', en: 'Duration' },
    workInProgress: { fr: 'En cours', en: 'Work in progress' },
    closeLabel: { fr: 'Fermer', en: 'Close' },
    zoomInLabel: { fr: 'Zoom avant', en: 'Zoom in' },
    zoomOutLabel: { fr: 'Zoom arrière', en: 'Zoom out' },
    resetZoomLabel: { fr: 'Réinitialiser', en: 'Reset' },
    nextSectionLabel: { fr: 'Aller à la section suivante', en: 'Go to next section' },
  },
};
