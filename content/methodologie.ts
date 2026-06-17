// ─── MÉTHODOLOGIE : section "About" de la page d'accueil ───
// Modifier ici : le titre de section, le paragraphe principal (HTML accepté,
// les <strong> sont mis en valeur) et les 3 blocs Comprendre / Concevoir / Valider.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.
// iconKey est stable (ne se traduit pas) : il pilote le choix de l'icône, indépendamment du titre affiché.

import type { MethodologieContent } from '../src/lib/content-types';

export const methodologie: MethodologieContent = {
  titreSection: { fr: 'Methodologie', en: 'Methodology' },
  paragraphePrincipal: {
    fr: "Je conçois le design comme un <strong>levier de clarification</strong>, un outil d'aide à la decision. Face à la complexité des produits et des services, ma démarche vise à rendre les <strong>enjeux lisibles</strong>, à aligner les équipes et à concevoir des expériences utiles, <strong>cohérentes et centrées utilisateurs</strong>.",
    en: "I see design as a <strong>tool for clarification</strong>, a support for decision-making. Faced with the complexity of products and services, my approach aims to make <strong>challenges legible</strong>, align teams, and design useful experiences that are <strong>coherent and user-centered</strong>.",
  },
  paragrapheSecondaire: { fr: '', en: '' },
  blocs: [
    {
      iconKey: 'comprendre',
      titre: { fr: 'Comprendre', en: 'Understand' },
      description: {
        fr: "Chaque projet débute par une phase d'exploration destinée à clarifier les enjeux et à comprendre les usages réels. Recherche utilisateur, analyse des irritants, cadrage produit et alignement des parties prenantes permettent de poser un socle commun et de définir des objectifs clairs et partagés.",
        en: 'Every project starts with an exploration phase aimed at clarifying the stakes and understanding real-world usage. User research, pain point analysis, product framing and stakeholder alignment help establish a common foundation and define clear, shared objectives.',
      },
    },
    {
      iconKey: 'concevoir',
      titre: { fr: 'Concevoir', en: 'Design' },
      description: {
        fr: "À partir de ces enseignements, je conçois des solutions progressives et pragmatiques. Wireframes, parcours, prototypes et itérations successives transforment des problématiques complexes en expériences lisibles et cohérentes, en collaboration étroite avec les équipes produit et techniques.",
        en: 'Building on these insights, I design progressive and pragmatic solutions. Wireframes, user flows, prototypes and successive iterations turn complex problems into clear, coherent experiences, in close collaboration with product and engineering teams.',
      },
    },
    {
      iconKey: 'valider',
      titre: { fr: 'Valider', en: 'Validate' },
      description: {
        fr: "Les hypothèses de conception sont systématiquement confrontées au réel. Tests utilisateurs, retours terrain et ajustements continus permettent de sécuriser les décisions et de construire des solutions utiles, viables et pérennes.",
        en: 'Design hypotheses are systematically tested against reality. User testing, field feedback and continuous adjustments help validate decisions and build solutions that are useful, viable and durable.',
      },
    },
  ],
};
