// ─── EXPÉRIENCE : Logitech (Junior Designer, 2017-2018) ───
// Expérience non cliquable sur la timeline (is_clickable: false) :
// les blocs de contenu existent mais la page détail n'est pas accessible.
// Passer is_clickable à true pour l'activer.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { Experience } from '../../src/lib/content-types';

export const logitech: Experience = {
  id: 'logitech',
  titre: { fr: 'Junior Designer', en: 'Junior Designer' },
  annee: '2017-2018',
  entreprise: 'Logitech',
  description: {
    fr: "Support à l'équipe design sur la recherche, le prototypage et le design visuel pour différents projets clients.",
    en: 'Supported design team with research, prototyping, and visual design for various client projects.',
  },
  logourl: '/experiences/logitech/logo.png',
  hero_image_url: '/images/hero.png',
  project_title: {
    fr: 'Support design et recherche pour produits tech',
    en: 'Design and research support for tech products',
  },
  role_duration: { fr: '2017-2018 • 1 an', en: '2017-2018 • 1 year' },
  product_name: 'Logitech',
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
          fr: "Logitech est un leader mondial dans la conception et la fabrication de périphériques informatiques et de produits technologiques. Mon rôle de Junior Designer m'a offert une première immersion dans le monde du design produit au sein d'une entreprise internationale reconnue.",
          en: "Logitech is a global leader in the design and manufacturing of computer peripherals and technology products. My role as a Junior Designer gave me a first immersion into the world of product design within a renowned international company.",
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
      content: { text: { fr: 'Apprentissage & Contributions', en: 'Learning & Contributions' }, level: 2, alignment: 'left' },
    },
    {
      type: 'bullet_list',
      content: {
        items: [
          {
            fr: "Support à l'équipe design sur la recherche utilisateur et les tests d'usabilité",
            en: 'Supported the design team on user research and usability testing',
          },
          {
            fr: 'Création de prototypes et maquettes pour des projets internes',
            en: 'Created prototypes and mockups for internal projects',
          },
          {
            fr: "Participation aux sessions de brainstorming et d'idéation produit",
            en: 'Participated in brainstorming and product ideation sessions',
          },
          {
            fr: 'Assistance à la documentation des guidelines design',
            en: 'Assisted in documenting design guidelines',
          },
          {
            fr: 'Veille concurrentielle et analyse des tendances UX/UI',
            en: 'Conducted competitive analysis and UX/UI trend research',
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
      content: { text: { fr: "Environnement d'apprentissage", en: 'Learning environment' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Travailler chez Logitech m'a permis de découvrir les processus de design au sein d'une grande organisation, d'apprendre à collaborer avec des équipes multidisciplinaires et internationales, et de comprendre l'importance de l'alignement entre les objectifs business et les besoins utilisateurs.",
          en: 'Working at Logitech allowed me to discover design processes within a large organization, learn to collaborate with multidisciplinary and international teams, and understand the importance of aligning business objectives with user needs.',
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
      content: { text: { fr: 'Fondations professionnelles', en: 'Professional foundations' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Cette première expérience professionnelle a été déterminante dans ma carrière. Elle m'a permis d'acquérir les bases méthodologiques du design centré utilisateur et de développer des soft skills essentiels comme la communication en équipe, la gestion de feedback et l'adaptabilité.",
          en: 'This first professional experience was decisive for my career. It allowed me to acquire the methodological foundations of user-centered design and develop essential soft skills such as team communication, feedback management and adaptability.',
        },
        alignment: 'left',
      },
    },
  ],
};
