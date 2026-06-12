// ─── MÉTHODOLOGIE : section "About" de la page d'accueil ───
// Modifier ici : le titre de section, le paragraphe principal (HTML accepté,
// les <strong> sont mis en valeur) et les 3 blocs Comprendre / Concevoir / Valider.

import type { MethodologieContent } from '../src/lib/content-types';

export const methodologie: MethodologieContent = {
  titreSection: 'Methodologie',
  paragraphePrincipal:
    "Je conçois le design comme un <strong>levier de clarification</strong>, un outil d'aide à la decision. Face à la complexité des produits et des services, ma démarche vise à rendre les <strong>enjeux lisibles</strong>, à aligner les équipes et à concevoir des expériences utiles, <strong>cohérentes et centrées utilisateurs</strong>.",
  paragrapheSecondaire: '',
  blocs: [
    {
      titre: 'Comprendre',
      description:
        "Chaque projet débute par une phase d'exploration destinée à clarifier les enjeux et à comprendre les usages réels. Recherche utilisateur, analyse des irritants, cadrage produit et alignement des parties prenantes permettent de poser un socle commun et de définir des objectifs clairs et partagés.",
    },
    {
      titre: 'Concevoir',
      description:
        "À partir de ces enseignements, je conçois des solutions progressives et pragmatiques. Wireframes, parcours, prototypes et itérations successives transforment des problématiques complexes en expériences lisibles et cohérentes, en collaboration étroite avec les équipes produit et techniques.",
    },
    {
      titre: 'Valider',
      description:
        "Les hypothèses de conception sont systématiquement confrontées au réel. Tests utilisateurs, retours terrain et ajustements continus permettent de sécuriser les décisions et de construire des solutions utiles, viables et pérennes.",
    },
  ],
};
