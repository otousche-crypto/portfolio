// ─── EXPÉRIENCE : Logitech (Junior Designer, 2017-2018) ───
// Expérience non cliquable sur la timeline (is_clickable: false) :
// les blocs de contenu existent mais la page détail n'est pas accessible.
// Passer is_clickable à true pour l'activer.

import type { Experience } from '../../src/lib/content-types';

export const logitech: Experience = {
  id: 'logitech',
  titre: 'Junior Designer',
  annee: '2017-2018',
  entreprise: 'Logitech',
  description:
    'Supported design team with research, prototyping, and visual design for various client projects.',
  logourl: '/experiences/logitech/logo.png',
  hero_image_url: '/images/hero.png',
  project_title: 'Support design et recherche pour produits tech',
  role_duration: '2017-2018 • 1 an',
  product_name: 'Logitech',
  is_clickable: false,

  contentBlocks: [
    {
      type: 'heading',
      content: { text: 'Context', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Logitech est un leader mondial dans la conception et la fabrication de périphériques informatiques et de produits technologiques. Mon rôle de Junior Designer m'a offert une première immersion dans le monde du design produit au sein d'une entreprise internationale reconnue.",
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Apprentissage & Contributions', level: 2, alignment: 'left' },
    },
    {
      type: 'bullet_list',
      content: {
        items: [
          "Support à l'équipe design sur la recherche utilisateur et les tests d'usabilité",
          'Création de prototypes et maquettes pour des projets internes',
          "Participation aux sessions de brainstorming et d'idéation produit",
          'Assistance à la documentation des guidelines design',
          'Veille concurrentielle et analyse des tendances UX/UI',
        ],
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: "Environnement d'apprentissage", level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Travailler chez Logitech m'a permis de découvrir les processus de design au sein d'une grande organisation, d'apprendre à collaborer avec des équipes multidisciplinaires et internationales, et de comprendre l'importance de l'alignement entre les objectifs business et les besoins utilisateurs.",
        alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: {},
    },
    {
      type: 'heading',
      content: { text: 'Fondations professionnelles', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Cette première expérience professionnelle a été déterminante dans ma carrière. Elle m'a permis d'acquérir les bases méthodologiques du design centré utilisateur et de développer des soft skills essentiels comme la communication en équipe, la gestion de feedback et l'adaptabilité.",
        alignment: 'left',
      },
    },
  ],
};
