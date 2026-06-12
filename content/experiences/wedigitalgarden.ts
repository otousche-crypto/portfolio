// ─── EXPÉRIENCE : WeDigitalGarden (UX Designer, 2018-2021) ───
// Expérience non cliquable sur la timeline (is_clickable: false) :
// les blocs de contenu existent mais la page détail n'est pas accessible.
// Passer is_clickable à true pour l'activer.

import type { Experience } from '../../src/lib/content-types';

export const wedigitalgarden: Experience = {
  id: 'wedigitalgarden',
  titre: 'UX Designer',
  annee: '2018-2021',
  entreprise: 'WeDigitalGarden',
  description:
    'Created user-centered designs for e-commerce platforms, developed wireframes and high-fidelity mockups.',
  logourl: '/experiences/wedigitalgarden/logo.png',
  hero_image_url: '/images/hero.png',
  project_title: 'Design UX pour des plateformes e-commerce et applications web',
  role_duration: '2018-2021 • 3 ans',
  product_name: 'WeDigitalGarden',
  is_clickable: false,

  contentBlocks: [
    {
      type: 'heading',
      content: { text: 'Context', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "WeDigitalGarden est une agence digitale spécialisée dans la création d'expériences utilisateur pour des plateformes e-commerce et des applications web. Durant mes trois années en tant qu'UX Designer, j'ai eu l'opportunité de travailler sur des projets variés pour des clients de différents secteurs.",
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Projets & Responsabilités', level: 2, alignment: 'left' },
    },
    {
      type: 'bullet_list',
      content: {
        items: [
          "Conception d'expériences utilisateur pour des sites e-commerce à forte conversion",
          'Création de wireframes, prototypes interactifs et maquettes haute-fidélité',
          "Animation d'ateliers de co-création avec les clients et les équipes",
          "Réalisation d'audits UX et recommandations d'optimisation",
          'Développement et maintenance de guidelines design pour plusieurs clients',
          'Mentorat de designers juniors sur les méthodologies UX',
        ],
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Méthodologie', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Mon approche s'est construite autour d'une méthodologie design thinking rigoureuse : recherche utilisateur approfondie, définition des personas, idéation collaborative, prototypage rapide et tests itératifs. Chaque projet était l'occasion d'affiner cette méthodologie en fonction des contraintes et objectifs spécifiques des clients.",
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Compétences développées', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Cette expérience m'a permis de développer une solide expertise en conception d'interfaces e-commerce, en optimisation de parcours de conversion, et en collaboration client. J'ai également renforcé mes compétences en facilitation d'ateliers et en présentation de concepts design à des audiences variées.",
        alignment: 'left',
      },
    },
  ],
};
