// ─── EXPÉRIENCE : Oodrive (Product Designer, 2021-2022) ───
// Expérience non cliquable sur la timeline (is_clickable: false) :
// les blocs de contenu existent mais la page détail n'est pas accessible.
// Passer is_clickable à true pour l'activer.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { Experience } from '../../src/lib/content-types';

export const oodrive: Experience = {
  id: 'oodrive',
  titre: { fr: 'Product Designer', en: 'Product Designer' },
  annee: '2021-2022',
  entreprise: 'Oodrive',
  description: {
    fr: 'Conception d\'expériences mobiles et web pour des produits fintech, conduite de tests utilisateurs et améliorations itératives.',
    en: 'Designed mobile and web experiences for fintech products, conducted user testing and iterative improvements.',
  },
  logourl: '/experiences/oodrive/logo.svg',
  hero_image_url: '/images/hero.png',
  project_title: {
    fr: 'Conception et amélioration continue des solutions cloud sécurisées',
    en: 'Design and continuous improvement of secure cloud solutions',
  },
  role_duration: { fr: '2021-2022 • 1 an', en: '2021-2022 • 1 year' },
  product_name: 'Oodrive',
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
          fr: "Oodrive est un acteur majeur européen des solutions de stockage et de partage de données sécurisées pour les entreprises. En tant que Product Designer, j'ai travaillé sur l'amélioration continue des interfaces web et mobile, en collaboration étroite avec les équipes produit et développement.",
          en: 'Oodrive is a major European player in secure data storage and sharing solutions for businesses. As a Product Designer, I worked on the continuous improvement of web and mobile interfaces, in close collaboration with product and engineering teams.',
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
      content: { text: { fr: 'Missions principales', en: 'Main responsibilities' }, level: 2, alignment: 'left' },
    },
    {
      type: 'bullet_list',
      content: {
        items: [
          {
            fr: "Refonte des interfaces utilisateur pour améliorer l'expérience de partage de fichiers",
            en: 'Redesigned user interfaces to improve the file-sharing experience',
          },
          {
            fr: 'Conception de nouveaux parcours utilisateurs pour les fonctionnalités de collaboration',
            en: 'Designed new user flows for collaboration features',
          },
          {
            fr: 'Participation aux tests utilisateurs et analyse des retours',
            en: 'Participated in user testing and feedback analysis',
          },
          {
            fr: 'Création de design systems et documentation des composants',
            en: 'Created design systems and component documentation',
          },
          {
            fr: 'Collaboration avec les équipes de développement pour garantir la faisabilité technique',
            en: 'Collaborated with engineering teams to ensure technical feasibility',
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
      content: { text: { fr: 'Approche & Méthodologie', en: 'Approach & Methodology' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Mon travail s'est articulé autour d'une approche user-centric, en mettant l'accent sur la compréhension des besoins des utilisateurs professionnels. J'ai régulièrement conduit des sessions de recherche utilisateur et d'tests d'usabilité pour valider les hypothèses de design.",
          en: 'My work was structured around a user-centric approach, focusing on understanding the needs of professional users. I regularly conducted user research and usability testing sessions to validate design hypotheses.',
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
      content: { text: { fr: 'Impact & Résultats', en: 'Impact & Results' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Les améliorations apportées ont contribué à une meilleure satisfaction utilisateur et à une réduction significative du temps d'apprentissage pour les nouvelles fonctionnalités. La mise en place d'un design system cohérent a également permis d'accélérer les cycles de développement.",
          en: 'The improvements contributed to better user satisfaction and a significant reduction in the learning curve for new features. Implementing a coherent design system also helped accelerate development cycles.',
        },
        alignment: 'left',
      },
    },
  ],
};
