// ─── EXPÉRIENCE : Equinox / Altered (Service Designer, 2022-2025) ───
// Modifier ici : les infos d'en-tête (titre, année, entreprise…) et les blocs
// de contenu de la page détail, dans l'ordre d'affichage.
// Les images sont dans public/experiences/equinox-altered/.
// Types de blocs : heading, text, image, section_vertical (image au-dessus ou
// insérée via [IMAGE] dans le texte), section_horizontal (image à côté du texte),
// bullet_list, quote, divider. Le HTML (<strong>, <em>…) est accepté dans les textes.

import type { Experience } from '../../src/lib/content-types';

export const equinoxAltered: Experience = {
  id: 'equinox-altered',
  titre: 'Service Designer',
  annee: '2022-2025',
  entreprise: 'Equinox',
  description: 'Écosystème phygital pour un jeu de cartes à collectionner nouvelle génération',
  logourl: '/experiences/equinox-altered/logo.webp',
  hero_image_url: '/experiences/equinox-altered/hero.jpg',
  project_title: 'Altered — Écosystème phygital pour un jeu de cartes à collectionner',
  role_duration: 'Service Designer · 2021-2025',
  product_name: 'Altered',
  is_clickable: true,

  keyFigures: [
    { label: 'Cartes scannées', value: '7 788 484', icon: 'Scan' },
    { label: 'Pays couverts', value: '15+', icon: 'Globe' },
    { label: 'Joueurs en tournois', value: '+1 000', icon: 'Users' },
    { label: 'Comptes créés', value: 'Dizaines de milliers', icon: 'Award' },
  ],

  contentBlocks: [
    {
      type: 'heading',
      content: { text: 'Context', level: 2, alignment: 'left' },
    },
    {
      type: 'section_vertical',
      content: {
        image_alt: 'Altered Kickstarter Success',
        image_url: '/experiences/equinox-altered/kickstarter.png',
        text_content:
          "<strong>Equinox est un studio indépendant développant Altered, un jeu de cartes à collectionner nouvelle génération, pensé dès l'origine comme un écosystème phygital associant cartes physiques et services digitaux avancés.</strong>\n\n[IMAGE]\n\nLe projet a connu un succès majeur lors de sa campagne Kickstarter — 14 997 contributeurs ont engagé 6 213 305 €, validant fortement la proposition de valeur et donnant naissance à une communauté internationale de joueurs très engagée. Ce succès a rapidement placé l'équipe dans un contexte de forte exposition publique, avec des deadlines serrées, des enjeux de passage à l'échelle et un haut niveau d'exigence sur la qualité du produit.",
        text_alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: 'Vision produit & Stratégie', level: 2, alignment: 'left' },
    },
    {
      type: 'image',
      content: {
        alt: 'Plan de déploiement en trois temps',
        url: '/experiences/equinox-altered/plan-trois-temps.png',
        width: 'medium',
      },
    },
    {
      type: 'text',
      content: {
        text: "Face à la complexité du produit et à la pression des délais, j'ai défendu un plan de déploiement en trois temps, conçu pour aligner produit, design et tech sur une vision commune de la progression des usages.",
        alignment: 'left',
      },
    },
    {
      type: 'section_horizontal',
      content: {
        heading_text: 'Temps 1',
        heading_level: 3,
        subtitle: "Meet the Lore : Poser les fondations de l'univers et de l'identité joueur",
        intro_text:
          "Altered est un univers riche et complexe — factions, Héros, personnages, Cartes. Avant d'activer la moindre mécanique de jeu ou logique économique, il fallait donner aux joueurs le temps et les outils pour s'y immerger, se l'approprier, et y construire leur identité.",
        image_url: '/experiences/equinox-altered/temps-1-meet-the-lore.png',
        image_alt: 'Temps 1 - Meet the Lore',
        image_position: 'left',
        text_content:
          "• Création et gestion du compte joueur\n• Découverte de l'univers, du lore et des factions\n• Premières briques de gestion de collection digitale\n• Revendication des cartes physiques via QR codes\n• Profils joueurs et éléments d'identité",
        text_alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "Pour mesurer le succès de Meet the Lore, trois métriques clés. Tout d'abord, le nombre de création de compte. Ensuite, le nombre de cartes scannées — signal fort d'appropriation du produit physique — Enfin, la lecture d'articles de lore, qui indique que le joueur s'immerge dans l'univers au-delà du simple onboarding.",
        alignment: 'left',
      },
    },
    {
      type: 'section_horizontal',
      content: {
        heading_text: 'Temps 2',
        heading_level: 3,
        subtitle: 'Meet the Game : Connecter le digital au jeu et aux usages cœur',
        intro_text:
          "L'univers approprié, le digital devait devenir un vrai prolongement du jeu — facilitant la pratique, renforçant les liens entre joueurs et donnant vie à une scène compétitive naissante.",
        image_url: '/experiences/equinox-altered/temps-2-meet-the-game.png',
        image_alt: 'Temps 2 - Meet the Game',
        image_position: 'left',
        text_content:
          "• Outils de gameplay\n• Gestion d'événements et de tournois\n• Gamification de l'expérience\n• Fonctionnalités sociales et communautaires\n• Intégration des boutiques partenaires\n• Optimisation des parcours pour les joueurs réguliers",
        text_alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "Pour mesurer le succès de Meet the Game, trois métriques clés : le nombre d'événements et tournois organisés par les boutiques depuis notre plateforme, le taux d'utilisation des outils de gameplay — signal fort que le digital est devenu un vrai prolongement du jeu physique — et la fréquence de retour sur la plateforme, qui indique que les joueurs s'y retrouvent régulièrement dans leur pratique quotidienne.",
        alignment: 'left',
      },
    },
    {
      type: 'section_horizontal',
      content: {
        heading_text: 'Temps 3',
        heading_level: 3,
        subtitle: "Meet the Market : Activer l'économie et les échanges à l'échelle",
        intro_text:
          "Les usages installés, la communauté engagée, il était temps d'activer la dimension économique du produit — dans un cadre sécurisé, conforme à l'international, et pensé pour accompagner la croissance du projet sur le long terme.",
        image_url: '/experiences/equinox-altered/temps-3-meet-the-market.png',
        image_alt: 'Temps 3 - Meet the Market',
        image_position: 'left',
        text_content:
          "• Cagnotte intégrée et gestion des flux financiers\n• Échanges et transactions entre joueurs\n• Prise en compte des contraintes réglementaires et fiscales\n• Sécurisation des parcours de paiement\n• Services à valeur ajoutée autour de la collection",
        text_alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "Pour mesurer le succès de Meet the Market, trois métriques clés : le volume de transactions réalisées entre joueurs, le taux d'activation de la cagnotte et les services payants — signal fort que la communauté fait confiance au système de paiement — et le nombre de pays actifs sur la plateforme, qui valide la capacité du service à absorber les contraintes réglementaires à l'international.",
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "<strong>Ce découpage s'est révélé structurant bien au-delà du produit : repris par l'équipe marketing pour piloter sa relation avec la communauté, il a donné une cohérence narrative à chaque livraison, canalisé les attentes des joueurs autour de jalons clairs, et accompagné la montée en puissance du projet auprès d'une communauté déjà très engagée.</strong>",
        alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: 'Démarche et Méthodologie design', level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: '<em>Double diamant appliqué à un cas concret : le système de paiement.</em>',
        alignment: 'left',
      },
    },
    {
      type: 'image',
      content: {
        alt: 'Schéma du double diamant',
        url: '/experiences/equinox-altered/double-diamant.png',
        width: 'full',
      },
    },
    {
      type: 'text',
      content: {
        text: "L'écosystème Altered repose sur deux flux financiers distincts — les transactions entre joueurs et nos services payants. Concevoir le système de paiement, c'était rendre ces mécaniques fluides et transparentes pour le joueur, tout en absorbant une complexité légale et technique réelle.",
        alignment: 'left',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: '① Explorer',
        heading_level: 3,
        subtitle: 'Comprendre les usages et le marché',
        intro_text:
          "Les usages installés, la communauté engagée, il était temps d'activer la dimension économique du produit — dans un cadre sécurisé, conforme à l'international, et pensé pour accompagner la croissance du projet sur le long terme.",
        image_url: '/experiences/equinox-altered/explorer.png',
        image_alt: 'Explorer - Comprendre les usages',
        text_content:
          "Le projet m'a été confié via un cahier des charges rédigé par l'équipe dirigeante — posant les grandes orientations du service, ses objectifs et ses contraintes. Point de départ structurant, mais qui soulevait autant de questions qu'il n'en résolvait : nos cartes phygitales étaient-elles des biens physiques ou numériques ? Fallait-il un paiement direct ou une logique de cagnotte ? Le joueur devait-il passer par un panier ou payer au moment de l'action ? Comment la communauté percevait-elle ce type de service ?\n\n<strong>Pour ancrer ces décisions dans les usages réels, j'ai mené des entretiens utilisateurs à distance et en présentiel, animé des ateliers avec l'équipe décisionnaire, et conduit un benchmark du secteur et des acteurs pure-players. Ces différentes sources ont généré des learnings terrain, regroupés et synthétisés en insights clés — eux-mêmes mis en regard de nos grands principes de design pour orienter nos choix de conception.</strong>",
        text_alignment: 'left',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: '② Cadrer',
        heading_level: 3,
        subtitle: 'Poser les fondations légales et produit',
        image_url: '/experiences/equinox-altered/cadrer.png',
        image_alt: 'Cadrer - Fondations légales',
        text_content:
          "Le sujet se trouvait dans un flou juridique aux conséquences directes sur notre modèle économique : la nature de nos cartes phygitales conditionnait l'ensemble de notre fiscalité et de nos obligations légales à l'international.\n\n[IMAGE]\n\n<strong>J'ai identifié un cabinet d'avocats spécialisé pour nous accompagner sur ces questions, et collaboré étroitement avec notre prestataire de paiement pour aligner contraintes techniques et réglementaires avec les parcours à concevoir. Dans ce contexte, j'ai utilisé le design comme outil d'aide à la décision — en produisant des livrables clairs et en animant des ateliers d'alignement avec les équipes concernées, pour aider la direction à faire des choix structurants en ayant pleinement conscience de leurs implications produit, légales et économiques.</strong>",
        text_alignment: 'left',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: '③ Concevoir',
        heading_level: 3,
        subtitle: 'Des parcours simples pour des mécanismes complexes',
        image_url: '/experiences/equinox-altered/concevoir.png',
        image_alt: 'Concevoir - Parcours simples',
        text_content:
          "J'ai démarré par des wireframes co-construits avec l'équipe tech, pour valider la faisabilité des parcours au regard des contraintes identifiées en amont. Une fois la logique fonctionnelle stabilisée, j'ai produit des maquettes haute fidélité testées directement auprès des utilisateurs finaux — pour m'assurer que la complexité du service ne transparaissait jamais dans l'expérience joueur. Tout au long de cette phase, je me suis assuré que chaque nouvel écran respectait le design system en vigueur, réalisé par notre UI designer, garantissant la cohérence visuelle du service avec le reste de l'écosystème Altered.\n\n<strong>La phase s'est conclue par une passation formelle à l'équipe tech : rédaction de la documentation fonctionnelle, traduction des choix de design en spécifications exploitables, et vérification qu'aucun angle mort ne subsistait avant le passage en développement.</strong>",
        text_alignment: 'left',
      },
    },
    {
      type: 'image',
      content: {
        alt: 'Go Moonbound Demo',
        url: '/experiences/equinox-altered/demo.gif',
        width: 'full',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: '④ Déployer',
        heading_level: 3,
        subtitle: 'Un service conforme, lancé dans plusieurs pays',
        image_url: '/experiences/equinox-altered/deployer.png',
        image_alt: 'Déployer - Lancement international',
        text_content:
          "Le service a été lancé simultanément dans plusieurs pays, chacun avec ses contraintes légales spécifiques absorbées côté produit — et conçu avec suffisamment de souplesse pour intégrer de nouveaux pays en cours de route, sans refonte des parcours. Un lancement qui s'est fait malgré de nombreux imprévus gérés en temps réel : ajustements réglementaires de dernière minute, contraintes techniques non anticipées, arbitrages produit sous pression. <strong>Résultat : une expérience fluide pour le joueur, une conformité réglementaire assurée à l'international, et des frictions de paiement réduites au minimum.</strong>\n\nAu-delà de la rédaction de la documentation technique à destination des développeurs, j'ai maintenu un wiki produit enrichissant une base de connaissances interne partagée.\n\n<img src=\"/experiences/equinox-altered/wiki-doc.png\" alt=\"Wiki produit Altered\" style=\"max-width: 100%; height: auto; margin: 20px 0;\" />\n\nPensé comme un véritable produit interne, ce wiki centralisait les décisions, les itérations et les arbitrages réalisés tout au long du développement. Il permettait d'aligner durablement les équipes produit, design et tech autour d'une compréhension commune.\n\nChaque évolution de feature impliquait une mise à jour systématique de cette documentation, garantissant sa fiabilité et son adoption.\n\n<strong>La rédaction, la structuration et la diffusion de ce contenu faisaient partie intégrante de mon rôle, jusqu'à devenir une étape clé dans la livraison des fonctionnalités.</strong>",
        text_alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: 'Conclusion', level: 2, alignment: 'left' },
    },
    {
      type: 'heading',
      content: { text: 'Un produit vivant, une communauté qui ne cesse de grandir', level: 3, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: "Depuis 2021, Altered est passé par toutes les phases d'un produit ambitieux : campagne Kickstarter, première release, puis livraisons successives en suivant le plan défini. À chaque étape, le produit a tenu ses promesses — et la communauté a répondu présente.\n\nAujourd'hui, après 3 ans de développement, les chiffres parlent d'eux-mêmes :",
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: '• 7 788 484 cartes scannées\n• 15+ pays couverts\n• +1 000 joueurs réunis lors de tournois\n• Des dizaines de milliers de comptes créés',
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: "<strong>De nouveaux pays ont rejoint l'aventure, la scène compétitive s'est structurée, et le premier championnat du monde s'est tenu en juin 2025. La communauté, toujours plus active, continue de porter le projet. Aujourd'hui, la sixième extension est en cours de financement participatif — et sortira dans le courant de l'année.</strong>",
        alignment: 'left',
      },
    },
  ],
};
