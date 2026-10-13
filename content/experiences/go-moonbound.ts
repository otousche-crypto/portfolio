// ─── EXPÉRIENCE : Go Moonbound (Product Builder, 2025-2026) ───
// Modifier ici : les infos d'en-tête et les blocs de contenu de la page détail.
// Les images sont dans public/experiences/go-moonbound/.
// Types de blocs : heading, text, image, section_vertical, section_horizontal,
// bullet_list, quote, divider, changelog. Le HTML (<strong>, <em>…) est accepté dans les textes.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { Experience } from '../../src/lib/content-types';

export const goMoonbound: Experience = {
  id: 'go-moonbound',
  titre: { fr: 'Product Builder', en: 'Product Builder' },
  annee: '2025-2026',
  entreprise: 'Go Moonbound',
  description: {
    fr: "Go Moonbound est un side project construit en autonomie complète, de la génération du premier prompt à la mise en production, en utilisant Cursor, Claude Code, et l'API Strava.",
    en: 'Go Moonbound is a side project built in complete autonomy, from the first prompt to production deployment, using Cursor, Claude Code, and the Strava API.',
  },
  logourl: '/experiences/go-moonbound/logo.png',
  hero_image_url: '/experiences/go-moonbound/hero.png',
  project_title: {
    fr: "Go MoonBound - Visualiser vos performances Strava d'une autre manière!",
    en: 'Go MoonBound - Visualize your Strava performance in a whole new way!',
  },
  role_duration: { fr: '2 semaines', en: '2 weeks' },
  product_name: 'Go Moonbound',
  is_clickable: true,

  contentBlocks: [
    {
      type: 'heading',
      content: { text: { fr: 'Context', en: 'Context' }, level: 2 },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: 'En 2026, le vibe coding apporte une nouvelle façon de travailler en tant que Product Designer.',
          en: 'In 2026, vibe coding brings a new way of working as a Product Designer.',
        },
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Pendant des années, le workflow reposait sur une séparation stricte des rôles : le designer prescrit, l'ingénieur exécute. Cela engendrait de la friction — du temps perdu, de la traduction, de la perte. L'idée initiale pouvait se retrouver diluée à chaque transfert, et une attention toute particulière était nécessaire pour s'assurer que le résultat final restait aligné avec l'intention de départ.",
          en: "For years, the workflow relied on a strict separation of roles: the designer prescribes, the engineer executes. This created friction — wasted time, translation, loss. The initial idea could get diluted at each handoff, and particular attention was needed to ensure the final result stayed aligned with the original intent.",
        },
      },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'Schéma du workflow itératif', en: 'Diagram of the iterative workflow' },
        url: '/experiences/go-moonbound/workflow-iteratif.png',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Avec des outils comme Claude Code ou Cursor, ce circuit disparaît. Le designer construit lui-même, teste en local des interactions complexes, des API, des logiques métier — des choses impossibles à vraiment valider sur une maquette Figma. Les tâches répétitives à faible valeur pour le Product Designer sont confiées à des agents IA dédiés. Le temps récupéré va là où il a de la valeur : la réflexion, le cadrage, les choix qui font le produit.",
          en: 'With tools like Claude Code or Cursor, this circuit disappears. The designer builds it themselves, testing complex interactions, APIs, and business logic locally — things impossible to truly validate on a Figma mockup. Low-value repetitive tasks for the Product Designer are handed off to dedicated AI agents. The time saved goes where it has value: thinking, framing, the choices that shape the product.',
        },
      },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'Schéma du flow Vibecoding', en: 'Diagram of the Vibecoding flow' },
        url: '/experiences/go-moonbound/flow-vibecoding.png',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Mais ce qui change le plus, c'est la posture. On passe d'un métier de prescription à quelque chose de plus proche de la sculpture — on observe son œuvre prendre forme en direct, on teste, on ajuste au geste, on expérimente le produit réel plutôt qu'une simulation de celui-ci. L'intention et l'exécution ne font plus qu'un.",
          en: "But what changes the most is the posture. We move from a prescriptive profession to something closer to sculpture — watching the work take shape live, testing, adjusting by feel, experiencing the real product rather than a simulation of it. Intention and execution become one.",
        },
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: 'Ce projet documente cette façon de travailler.',
          en: 'This project documents this way of working.',
        },
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Projet', en: 'Project' }, level: 2 },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Go Moonbound est un side project construit en autonomie complète, de la génération du premier prompt à la mise en production, en utilisant Cursor, Claude Code, et l'API Strava.",
          en: 'Go Moonbound is a side project built in complete autonomy, from the first prompt to production deployment, using Cursor, Claude Code, and the Strava API.',
        },
      },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'Cursor + Claude Code + Strava', en: 'Cursor + Claude Code + Strava' },
        url: '/experiences/go-moonbound/outils.png',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Le concept : donner de l'émotion aux chiffres bruts. 10 000 km de vélo, c'est abstrait. Voir que tu es à 2,6% du chemin vers la Lune sur une scéne 3D, c'est autre chose. Via l'API Strava, chaque activité — course, vélo, natation, marche — s'additionne et te positionne quelque part dans l'espace, sur les 384 400 km qui séparent les deux astres.",
          en: "The concept: give emotion to raw numbers. 10,000 km of cycling is abstract. Seeing that you're 2.6% of the way to the Moon on a 3D scene is something else entirely. Through the Strava API, every activity — running, cycling, swimming, walking — adds up and places you somewhere in space, along the 384,400 km that separate the two celestial bodies.",
        },
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Le défi était double. D'abord technique : connecter l'API Strava pour faire remonter des données réelles, et construire une expérience 3D interactive — impossible à vraiment valider sur une maquette Figma. Ensuite de méthode : aller vite. L'objectif n'était pas la perfection, c'était de mettre le produit entre les mains d'utilisateurs réels le plus tôt possible, pour obtenir des retours concrets et itérer.",
          en: "The challenge was twofold. First technical: connecting the Strava API to pull real data, and building an interactive 3D experience — impossible to truly validate on a Figma mockup. Then methodological: move fast. The goal wasn't perfection, it was getting the product into the hands of real users as early as possible, to get concrete feedback and iterate.",
        },
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Process', en: 'Process' }, level: 2 },
    },
    {
      type: 'section_horizontal',
      content: {
        text: {
          fr: 'Le process repose sur deux agents Claude aux rôles distincts, activés en séquence.\nD\'abord, un agent "Senior Product Engineer" — que j\'utilise en amont pour cadrer le concept, challenger mes décisions produit, structurer le PRD et anticiper les contraintes techniques. Une phase de réflexion itérative, en boucle avec la définition du concept, jusqu\'à ce que le brief soit solide.\nEnsuite, un agent "Prompt Master" — chargé de traduire ce brief en instructions précises pour Claude Code. Son rôle : formuler les prompts de façon à minimiser les allers-retours et maximiser la qualité du code généré dès la première passe.',
          en: 'The process relies on two Claude agents with distinct roles, activated in sequence.\nFirst, a "Senior Product Engineer" agent — which I use upfront to frame the concept, challenge my product decisions, structure the PRD and anticipate technical constraints. An iterative reflection phase, looping with the concept definition, until the brief is solid.\nThen, a "Prompt Master" agent — tasked with translating this brief into precise instructions for Claude Code. Its role: phrase prompts to minimize back-and-forth and maximize the quality of the generated code on the first pass.',
        },
        imageUrl: '/experiences/go-moonbound/agents-claude.png',
        imageAlt: { fr: 'Diagramme du process avec agents Claude', en: 'Diagram of the process with Claude agents' },
        imagePosition: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Une fois le prompt prêt, Claude Code prend le relais et livre en local. Je teste directement le produit réel — pas une maquette, pas un prototype — et j'itère sur ce que je vois et ressens. La boucle test → ajustement → nouvelle livraison locale tourne jusqu'à ce que le produit soit prêt.\n\nLe déploiement est automatisé avec Vercel, connecté au dépôt GitHub. Chaque push génère une URL de prévisualisation, ce qui me permet de tester une évolution en conditions réelles avant de la valider. Une fois la branche fusionnée sur main, la mise en production se fait automatiquement, sans intervention manuelle. Résultat : quelques minutes entre l'idée et la mise en ligne, et la possibilité de revenir à une version précédente en un clic en cas de problème.\nZéro handoff. Zéro ticket. De l'intention à la production, en autonomie complète.",
          en: 'Once the prompt is ready, Claude Code takes over and delivers locally. I test the real product directly — not a mockup, not a prototype — and iterate on what I see and feel. The test → adjust → new local delivery loop runs until the product is ready.\n\nDeployment is automated with Vercel, connected to the GitHub repo. Every push generates a preview URL, which lets me test a change in real conditions before validating it. Once the branch is merged into main, the production release happens automatically, with no manual step. The result: a few minutes from idea to live, and the ability to roll back to a previous version in one click if something goes wrong.\nZero handoff. Zero ticket. From intention to production, in complete autonomy.',
        },
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Résultats', en: 'Results' }, level: 2 },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Dès le premier prompt, l'effet est immédiat : une scène 3D fonctionnelle, connectée à l'API Strava, qui positionne l'utilisateur sur le trajet Terre → Lune. Pas une maquette. Un produit réel.\nLa suite : quelques sessions de debug, des ajustements d'affichage mobile, des itérations sur le rendu 3D, et l'ajout de nouvelles features au fil des retours. Achat du nom de domaine, création du repo GitHub, déploiement. En 2 semaines, https://gomoonbound.com est en ligne.",
          en: 'From the very first prompt, the effect is immediate: a functional 3D scene, connected to the Strava API, positioning the user on the Earth → Moon journey. Not a mockup. A real product.\nWhat followed: a few debugging sessions, mobile display adjustments, iterations on the 3D rendering, and new features added based on feedback. Domain name purchase, GitHub repo creation, deployment. In 2 weeks, https://gomoonbound.com was live.',
        },
      },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'GoMoonbound dashboard', en: 'GoMoonbound dashboard' },
        url: '/experiences/go-moonbound/dashboard.png',
        width: 'medium',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Seul frein : les requirements Strava pour ouvrir l'API au-delà d'un utilisateur. J'ai créé un agent Claude dédié pour préparer le dossier de validation et respecter les exigences de la plateforme. Apres soumission du dossier, une semaine aura suffit pour avoir un retour de Strava, m'ouvrant l'API pour 999 utilisateurs. Tu peux suivre ma propre progression ici : https://gomoonbound.com/share/2a1c034f-b5a4-4dce-b6f6-1d26bcea9a10",
          en: 'The only hurdle: Strava\'s requirements to open the API beyond a single user. I created a dedicated Claude agent to prepare the validation file and meet the platform\'s requirements. After submitting the file, it only took a week to get a response from Strava, opening up the API for 999 users. You can follow my own progress here: https://gomoonbound.com/share/2a1c034f-b5a4-4dce-b6f6-1d26bcea9a10',
        },
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: 'Le premiers utilisateurs sont déja la! et toi, où en es-tu ?  Pour le savoir, rends toi sur https://gomoonbound.com !',
          en: 'The first users are already here! And you, how far along are you? Find out at https://gomoonbound.com !',
        },
      },
    },
    {
      type: 'heading',
      content: {
        text: { fr: 'Changelog', en: 'Changelog' },
        level: 2,
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Le produit continue d'évoluer après le lancement, au fil des retours utilisateurs. Chaque version corrige un frein ou ajoute ce que l'usage réel a révélé comme manquant.",
          en: 'The product keeps evolving after launch, based on user feedback. Each version fixes a friction point or adds what real usage revealed was missing.',
        },
      },
    },
    {
      type: 'changelog',
      content: {
        entries: [
          {
            version: 'v1.0',
            date: { fr: '16 mars 2026', en: 'March 16, 2026' },
            description: {
              fr: 'Lancement de Go Moonbound — scène 3D Terre/Lune, auth Strava, classement, page de partage, support mobile Safari',
              en: 'Launch of Go Moonbound — 3D Earth/Moon scene, Strava auth, leaderboard, share page, mobile Safari support',
            },
          },
          {
            version: 'v1.1',
            date: { fr: '17 mars 2026', en: 'March 17, 2026' },
            description: {
              fr: 'Texture NASA Blue Marble, modals responsive, header aligné mobile/desktop, sécurité webhook Strava',
              en: 'NASA Blue Marble texture, responsive modals, aligned mobile/desktop header, Strava webhook security',
            },
          },
          {
            version: 'v1.2',
            date: { fr: '25 mars 2026', en: 'March 25, 2026' },
            description: {
              fr: 'Paramètre pour masquer les autres participants, robustesse in-app browsers (LinkedIn, Instagram)',
              en: 'Setting to hide other participants, robustness for in-app browsers (LinkedIn, Instagram)',
            },
          },
          {
            version: 'v1.3',
            date: { fr: '1er avril 2026', en: 'April 1, 2026' },
            description: {
              fr: 'SEO + image OG, changelog modal, CTA de partage quand un participant est introuvable dans le classement',
              en: "SEO + OG image, changelog modal, share CTA when a participant can't be found in the leaderboard",
            },
          },
          {
            version: 'v2.0',
            date: { fr: '7 mai 2026', en: 'May 7, 2026' },
            description: {
              fr: 'Sphères communautaires avec nuages de progression, podium or/argent/bronze, médailles au survol, correction du plafond de lignes PostgREST',
              en: 'Community spheres with progress clouds, gold/silver/bronze podium, hover medals, fix for the PostgREST row cap',
            },
          },
          {
            version: 'v2.1',
            date: { fr: '9 juin 2026', en: 'June 9, 2026' },
            description: {
              fr: `Menu "À propos" avec crédit design, suppression du vaisseau spatial, tracking source de trafic à l'inscription`,
              en: '"About" menu with design credit, removal of the spaceship, traffic source tracking on signup',
            },
          },
          {
            version: 'v2.2',
            date: { fr: '17 juin 2026', en: 'June 17, 2026' },
            description: {
              fr: 'Analytics GA + Vercel, lien club Strava, scène 3D sur la landing page avec hero animé, favicon orange Go Moonbound',
              en: 'GA + Vercel analytics, Strava club link, 3D scene on the landing page with animated hero, orange Go Moonbound favicon',
            },
          },
          {
            version: 'v2.3',
            date: { fr: '30 juin 2026', en: 'June 30, 2026' },
            description: {
              fr: 'Clic sur une sphère ou une ligne du classement affiche les stats du participant, bouton Share adaptatif, retour en un clic',
              en: "Clicking a sphere or leaderboard row shows the participant's stats, adaptive Share button, one-click back",
            },
          },
          {
            version: 'v3.0',
            date: { fr: '11 juillet 2026', en: 'July 11, 2026' },
            description: {
              fr: 'Bouton Profil (photo, progression, streak, classement), collection de 23 badges à débloquer, récap hebdomadaire de progression par email',
              en: 'Profile button (photo, progress, streak, rank), collection of 23 badges to unlock, weekly progress recap by email',
            },
          },
          {
            version: 'v3.1',
            date: { fr: '19 juillet 2026', en: 'July 19, 2026' },
            description: {
              fr: 'Flèches de mouvement quotidien dans le classement, objectif de dépassement dans le profil (km restants avant le voyageur suivant), paramètres du compte regroupés dans le profil',
              en: 'Daily movement arrows in the leaderboard, overtake goal in the profile (km left before the next traveler), account settings grouped in the profile',
            },
          },
          {
            version: 'v3.2',
            date: { fr: '19 juillet 2026', en: 'July 19, 2026' },
            description: {
              fr: "Badges d'invitation débloqués à 1, 5, 10 et 25 inscriptions depuis la page de partage",
              en: 'Invite badges unlocked at 1, 5, 10 and 25 sign-ups from the share page',
            },
          },
        ],
      },
    },
  ],
};
