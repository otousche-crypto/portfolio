// ─── EXPÉRIENCE : WeDigitalGarden (UX Designer, 2018-2021) ───
// Expérience non cliquable sur la timeline (is_clickable: false) :
// les blocs de contenu existent mais la page détail n'est pas accessible.
// Passer is_clickable à true pour l'activer.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { Experience } from '../../src/lib/content-types';

export const wedigitalgarden: Experience = {
  id: 'wedigitalgarden',
  titre: { fr: 'UX Designer', en: 'UX Designer' },
  annee: '2018-2021',
  entreprise: 'WeDigitalGarden',
  description: {
    fr: 'Création de designs centrés utilisateurs pour des plateformes e-commerce, développement de wireframes et de maquettes haute-fidélité.',
    en: 'Created user-centered designs for e-commerce platforms, developed wireframes and high-fidelity mockups.',
  },
  logourl: '/experiences/wedigitalgarden/logo.png',
  hero_image_url: '/images/hero.png',
  project_title: {
    fr: 'Design UX pour des plateformes e-commerce et applications web',
    en: 'UX design for e-commerce platforms and web applications',
  },
  role_duration: { fr: '2018-2021 • 3 ans', en: '2018-2021 • 3 years' },
  product_name: 'WeDigitalGarden',
  is_clickable: false,

  contentBlocks: [
    {
      type: 'heading',
      content: { text: { fr: 'Context', en: 'Context' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "WeDigitalGarden est une agence digitale spécialisée dans la création d'expériences utilisateur pour des plateformes e-commerce et des applications web. Durant mes trois années en tant qu'UX Designer, j'ai eu l'opportunité de travailler sur des projets variés pour des clients de différents secteurs.",
          en: "WeDigitalGarden is a digital agency specialized in creating user experiences for e-commerce platforms and web applications. During my three years as a UX Designer, I had the opportunity to work on varied projects for clients across different sectors.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: { fr: 'Projets & Responsabilités', en: 'Projects & Responsibilities' }, level: 2, alignment: 'left' },
    },
    {
      type: 'bullet_list',
      content: {
        items: [
          {
            fr: "Conception d'expériences utilisateur pour des sites e-commerce à forte conversion",
            en: 'Designed user experiences for high-conversion e-commerce sites',
          },
          {
            fr: 'Création de wireframes, prototypes interactifs et maquettes haute-fidélité',
            en: 'Created wireframes, interactive prototypes and high-fidelity mockups',
          },
          {
            fr: "Animation d'ateliers de co-création avec les clients et les équipes",
            en: 'Facilitated co-creation workshops with clients and teams',
          },
          {
            fr: "Réalisation d'audits UX et recommandations d'optimisation",
            en: 'Conducted UX audits and optimization recommendations',
          },
          {
            fr: 'Développement et maintenance de guidelines design pour plusieurs clients',
            en: 'Developed and maintained design guidelines for several clients',
          },
          {
            fr: 'Mentorat de designers juniors sur les méthodologies UX',
            en: 'Mentored junior designers on UX methodologies',
          },
        ],
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: { fr: 'Méthodologie', en: 'Methodology' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Mon approche s'est construite autour d'une méthodologie design thinking rigoureuse : recherche utilisateur approfondie, définition des personas, idéation collaborative, prototypage rapide et tests itératifs. Chaque projet était l'occasion d'affiner cette méthodologie en fonction des contraintes et objectifs spécifiques des clients.",
          en: "My approach was built around a rigorous design thinking methodology: in-depth user research, persona definition, collaborative ideation, rapid prototyping and iterative testing. Each project was an opportunity to refine this methodology according to the specific constraints and objectives of each client.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: { fr: 'Compétences développées', en: 'Skills developed' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Cette expérience m'a permis de développer une solide expertise en conception d'interfaces e-commerce, en optimisation de parcours de conversion, et en collaboration client. J'ai également renforcé mes compétences en facilitation d'ateliers et en présentation de concepts design à des audiences variées.",
          en: 'This experience allowed me to develop solid expertise in e-commerce interface design, conversion funnel optimization, and client collaboration. I also strengthened my skills in facilitating workshops and presenting design concepts to varied audiences.',
        },
        alignment: 'left',
      },
    },
  ],
};
