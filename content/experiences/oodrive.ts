// ─── EXPÉRIENCE : Oodrive (Product Designer, 2021-2022) ───
// Expérience non cliquable sur la timeline (is_clickable: false) :
// les blocs de contenu existent mais la page détail n'est pas accessible.
// Passer is_clickable à true pour l'activer.

import type { Experience } from '../../src/lib/content-types';

export const oodrive: Experience = {
  id: 'oodrive',
  titre: 'Product Designer',
  annee: '2021-2022',
  entreprise: 'Oodrive',
  description:
    'Designed mobile and web experiences for fintech products, conducted user testing and iterative improvements.',
  logourl: '/experiences/oodrive/logo.svg',
  hero_image_url: '/images/hero.png',
  project_title: 'Conception et amélioration continue des solutions cloud sécurisées',
  role_duration: '2021-2022 • 1 an',
  product_name: 'Oodrive',
  is_clickable: false,

  contentBlocks: [
    {
      type: 'heading',
      content: { text: 'Context', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Oodrive est un acteur majeur européen des solutions de stockage et de partage de données sécurisées pour les entreprises. En tant que Product Designer, j'ai travaillé sur l'amélioration continue des interfaces web et mobile, en collaboration étroite avec les équipes produit et développement.",
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Missions principales', level: 2, alignment: 'left' },
    },
    {
      type: 'bullet_list',
      content: {
        items: [
          "Refonte des interfaces utilisateur pour améliorer l'expérience de partage de fichiers",
          'Conception de nouveaux parcours utilisateurs pour les fonctionnalités de collaboration',
          'Participation aux tests utilisateurs et analyse des retours',
          'Création de design systems et documentation des composants',
          'Collaboration avec les équipes de développement pour garantir la faisabilité technique',
        ],
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Approche & Méthodologie', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Mon travail s'est articulé autour d'une approche user-centric, en mettant l'accent sur la compréhension des besoins des utilisateurs professionnels. J'ai régulièrement conduit des sessions de recherche utilisateur et d'tests d'usabilité pour valider les hypothèses de design.",
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Impact & Résultats', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Les améliorations apportées ont contribué à une meilleure satisfaction utilisateur et à une réduction significative du temps d'apprentissage pour les nouvelles fonctionnalités. La mise en place d'un design system cohérent a également permis d'accélérer les cycles de développement.",
        alignment: 'left',
      },
    },
  ],
};
