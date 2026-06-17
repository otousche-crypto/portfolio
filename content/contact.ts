// ─── CONTACT : coordonnées affichées en bas de page ───
// Modifier ici : email, LinkedIn, lien du CV et téléphone.
// Le fichier CV se trouve dans public/cv/ — remplacer le PDF et garder le même nom,
// ou mettre à jour cv.url ci-dessous.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { ContactContent } from '../src/lib/content-types';

export const contact: ContactContent = {
  titreSection: { fr: 'Contact', en: 'Contact' },
  email: { label: { fr: 'Email', en: 'Email' }, value: 'otousche@gmail.com' },
  linkedin: {
    label: { fr: 'LinkedIn', en: 'LinkedIn' },
    texte: { fr: 'Olivier Tousche', en: 'Olivier Tousche' },
    url: 'https://www.linkedin.com/in/olivier-tousche-a6160b122/',
  },
  cv: {
    label: { fr: 'CV', en: 'Resume' },
    texte: { fr: 'Télécharger mon CV', en: 'Download my resume' },
    url: '/cv/Olivier_Tousche_CV.pdf',
  },
  telephone: { label: { fr: 'Téléphone', en: 'Phone' }, value: '+33 6 78 19 88 88' },
};
