// ─── EXPÉRIENCE : Go Moonbound (Vibe Codeur, 2025-2026) ───
// Modifier ici : les infos d'en-tête et les blocs de contenu de la page détail.
// Les images sont dans public/experiences/go-moonbound/.
// Types de blocs : heading, text, image, section_vertical, section_horizontal,
// bullet_list, quote, divider. Le HTML (<strong>, <em>…) est accepté dans les textes.

import type { Experience } from '../../src/lib/content-types';

export const goMoonbound: Experience = {
  id: 'go-moonbound',
  titre: 'Vibe Codeur',
  annee: '2025-2026',
  entreprise: 'Go Moonbound',
  description:
    "Go Moonbound est un side project construit en autonomie complète, de la génération du premier prompt à la mise en production, en utilisant Cursor, Claude Code, et l'API Strava.",
  logourl: '/experiences/go-moonbound/logo.png',
  hero_image_url: '/experiences/go-moonbound/hero.png',
  project_title: "Go MoonBound - Visualiser vos performances Strava d'une autre manière!",
  role_duration: '2 semaines',
  product_name: 'Go Moonbound',
  is_clickable: true,

  contentBlocks: [
    {
      type: 'heading',
      content: { text: 'Context', level: 2 },
    },
    {
      type: 'text',
      content: {
        text: "En 2026, le vibe coding apporte une nouvelle façon de travailler en tant que Product Designer.",
      },
    },
    {
      type: 'text',
      content: {
        text: "Pendant des années, le workflow reposait sur une séparation stricte des rôles : le designer prescrit, l'ingénieur exécute. Cela engendrait de la friction — du temps perdu, de la traduction, de la perte. L'idée initiale pouvait se retrouver diluée à chaque transfert, et une attention toute particulière était nécessaire pour s'assurer que le résultat final restait aligné avec l'intention de départ.",
      },
    },
    {
      type: 'image',
      content: {
        alt: 'Schéma du workflow itératif',
        url: '/experiences/go-moonbound/workflow-iteratif.png',
      },
    },
    {
      type: 'text',
      content: {
        text: "Avec des outils comme Claude Code ou Cursor, ce circuit disparaît. Le designer construit lui-même, teste en local des interactions complexes, des API, des logiques métier — des choses impossibles à vraiment valider sur une maquette Figma. Les tâches répétitives à faible valeur pour le Product Designer sont confiées à des agents IA dédiés. Le temps récupéré va là où il a de la valeur : la réflexion, le cadrage, les choix qui font le produit.",
      },
    },
    {
      type: 'image',
      content: {
        alt: 'Schéma du flow Vibecoding',
        url: '/experiences/go-moonbound/flow-vibecoding.png',
      },
    },
    {
      type: 'text',
      content: {
        text: "Mais ce qui change le plus, c'est la posture. On passe d'un métier de prescription à quelque chose de plus proche de la sculpture — on observe son œuvre prendre forme en direct, on teste, on ajuste au geste, on expérimente le produit réel plutôt qu'une simulation de celui-ci. L'intention et l'exécution ne font plus qu'un.",
      },
    },
    {
      type: 'text',
      content: {
        text: 'Ce projet documente cette façon de travailler.',
      },
    },
    {
      type: 'heading',
      content: { text: 'Projet', level: 2 },
    },
    {
      type: 'text',
      content: {
        text: "Go Moonbound est un side project construit en autonomie complète, de la génération du premier prompt à la mise en production, en utilisant Cursor, Claude Code, et l'API Strava.",
      },
    },
    {
      type: 'image',
      content: {
        alt: 'Cursor + Claude Code + Strava',
        url: '/experiences/go-moonbound/outils.png',
      },
    },
    {
      type: 'text',
      content: {
        text: "Le concept : donner de l'émotion aux chiffres bruts. 10 000 km de vélo, c'est abstrait. Voir que tu es à 2,6% du chemin vers la Lune sur une scéne 3D, c'est autre chose. Via l'API Strava, chaque activité — course, vélo, natation, marche — s'additionne et te positionne quelque part dans l'espace, sur les 384 400 km qui séparent les deux astres.",
      },
    },
    {
      type: 'text',
      content: {
        text: "Le défi était double. D'abord technique : connecter l'API Strava pour faire remonter des données réelles, et construire une expérience 3D interactive — impossible à vraiment valider sur une maquette Figma. Ensuite de méthode : aller vite. L'objectif n'était pas la perfection, c'était de mettre le produit entre les mains d'utilisateurs réels le plus tôt possible, pour obtenir des retours concrets et itérer.",
      },
    },
    {
      type: 'heading',
      content: { text: 'Process', level: 2 },
    },
    {
      type: 'section_horizontal',
      content: {
        text: 'Le process repose sur deux agents Claude aux rôles distincts, activés en séquence.\nD\'abord, un agent "Senior Product Engineer" — que j\'utilise en amont pour cadrer le concept, challenger mes décisions produit, structurer le PRD et anticiper les contraintes techniques. Une phase de réflexion itérative, en boucle avec la définition du concept, jusqu\'à ce que le brief soit solide.\nEnsuite, un agent "Prompt Master" — chargé de traduire ce brief en instructions précises pour Claude Code. Son rôle : formuler les prompts de façon à minimiser les allers-retours et maximiser la qualité du code généré dès la première passe.',
        imageUrl: '/experiences/go-moonbound/agents-claude.png',
        imageAlt: 'Diagramme du process avec agents Claude',
        imagePosition: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "Une fois le prompt prêt, Claude Code prend le relais et livre en local. Je teste directement le produit réel — pas une maquette, pas un prototype — et j'itère sur ce que je vois et ressens. La boucle test → ajustement → nouvelle livraison locale tourne jusqu'à ce que le produit soit prêt. Puis déploiement.\nZéro handoff. Zéro ticket. De l'intention à la production, en autonomie complète.",
      },
    },
    {
      type: 'heading',
      content: { text: 'Résultats', level: 2 },
    },
    {
      type: 'text',
      content: {
        text: "Dès le premier prompt, l'effet est immédiat : une scène 3D fonctionnelle, connectée à l'API Strava, qui positionne l'utilisateur sur le trajet Terre → Lune. Pas une maquette. Un produit réel.\nLa suite : quelques sessions de debug, des ajustements d'affichage mobile, des itérations sur le rendu 3D, et l'ajout de nouvelles features au fil des retours. Achat du nom de domaine, création du repo GitHub, déploiement. En 2 semaines, https://gomoonbound.com est en ligne.",
      },
    },
    {
      type: 'image',
      content: {
        alt: 'GoMoonbound dashboard',
        url: '/experiences/go-moonbound/dashboard.png',
        width: 'medium',
      },
    },
    {
      type: 'text',
      content: {
        text: "Seul frein : les requirements Strava pour ouvrir l'API au-delà d'un utilisateur. J'ai créé un agent Claude dédié pour préparer le dossier de validation et respecter les exigences de la plateforme. Apres soumission du dossier, une semaine aura suffit pour avoir un retour de Strava, m'ouvrant l'API pour 999 utilisateurs. Tu peux suivre ma propre progression ici : https://gomoonbound.com/share/2a1c034f-b5a4-4dce-b6f6-1d26bcea9a10",
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "Le premiers utilisateurs sont déja la! et toi, où en es-tu ?  Pour le savoir, rends toi sur https://gomoonbound.com !",
      },
    },
  ],
};
