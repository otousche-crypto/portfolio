// ─── CONTACT : coordonnées affichées en bas de page ───
// Modifier ici : email, LinkedIn, lien du CV et téléphone.
// Le fichier CV se trouve dans public/cv/ — remplacer le PDF et garder le même nom,
// ou mettre à jour cv.url ci-dessous.

import type { ContactContent } from '../src/lib/content-types';

export const contact: ContactContent = {
  titreSection: 'Contact',
  email: { label: 'Email', value: 'otousche@gmail.com' },
  linkedin: {
    label: 'LinkedIn',
    texte: 'Olivier Tousche',
    url: 'https://www.linkedin.com/in/olivier-tousche-a6160b122/',
  },
  cv: {
    label: 'CV',
    texte: 'Télécharger mon CV',
    url: '/cv/Olivier_Tousche_CV.pdf',
  },
  telephone: { label: 'Téléphone', value: '+33 6 78 19 88 88' },
};
