// ─── EXPÉRIENCE : Equinox / Altered (Senior Product Designer, 2022-2025) ───
// Modifier ici : les infos d'en-tête (titre, année, entreprise…) et les blocs
// de contenu de la page détail, dans l'ordre d'affichage.
// Les images sont dans public/experiences/equinox-altered/.
// Types de blocs : heading, text, image, section_vertical (image au-dessus ou
// insérée via [IMAGE] dans le texte), section_horizontal (image à côté du texte),
// bullet_list, quote, divider. Le HTML (<strong>, <em>…) est accepté dans les textes.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.
// Le marqueur [IMAGE] doit être conservé identique dans les deux langues.
// keyFigures n'est pas bilingue (composant KeyFiguresSection actuellement hors périmètre/non utilisé).

import type { Experience } from '../../src/lib/content-types';

export const equinoxAltered: Experience = {
  id: 'equinox-altered',
  titre: { fr: 'Senior Product Designer', en: 'Senior Product Designer' },
  annee: '2022-2025',
  entreprise: 'Equinox',
  description: {
    fr: 'Écosystème phygital pour un jeu de cartes à collectionner nouvelle génération',
    en: 'Phygital ecosystem for a next-generation trading card game',
  },
  logourl: '/experiences/equinox-altered/logo.webp',
  hero_image_url: '/experiences/equinox-altered/hero.jpg',
  project_title: {
    fr: 'Altered — Écosystème phygital pour un jeu de cartes à collectionner',
    en: 'Altered — Phygital ecosystem for a trading card game',
  },
  role_duration: { fr: 'Senior Product Designer · 2021-2025', en: 'Senior Product Designer · 2021-2025' },
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
      content: { text: { fr: 'Context', en: 'Context' }, level: 2, alignment: 'left' },
    },
    {
      type: 'section_vertical',
      content: {
        image_alt: { fr: 'Altered Kickstarter Success', en: 'Altered Kickstarter Success' },
        image_url: '/experiences/equinox-altered/kickstarter.png',
        text_content: {
          fr: "<strong>Equinox est un studio indépendant développant Altered, un jeu de cartes à collectionner nouvelle génération, pensé dès l'origine comme un écosystème phygital associant cartes physiques et services digitaux avancés.</strong>\n\n[IMAGE]\n\nLe projet a connu un succès majeur lors de sa campagne Kickstarter — 14 997 contributeurs ont engagé 6 213 305 €, validant fortement la proposition de valeur et donnant naissance à une communauté internationale de joueurs très engagée. Ce succès a rapidement placé l'équipe dans un contexte de forte exposition publique, avec des deadlines serrées, des enjeux de passage à l'échelle et un haut niveau d'exigence sur la qualité du produit.",
          en: "<strong>Equinox is an independent studio developing Altered, a next-generation trading card game, designed from the outset as a phygital ecosystem combining physical cards and advanced digital services.</strong>\n\n[IMAGE]\n\nThe project achieved major success during its Kickstarter campaign — 14,997 backers pledged €6,213,305, strongly validating the value proposition and giving rise to a highly engaged international community of players. This success quickly placed the team in a context of high public exposure, with tight deadlines, scaling challenges and a high bar for product quality.",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Vision produit & Stratégie', en: 'Product Vision & Strategy' }, level: 2, alignment: 'left' },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'Plan de déploiement en trois temps', en: 'Three-phase rollout plan' },
        url: '/experiences/equinox-altered/plan-trois-temps.png',
        width: 'medium',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Face à la complexité du produit et à la pression des délais, j'ai défendu un plan de déploiement en trois temps, conçu pour aligner produit, design et tech sur une vision commune de la progression des usages.",
          en: "Faced with the product's complexity and tight deadlines, I championed a three-phase rollout plan, designed to align product, design and tech around a shared vision of usage progression.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'section_horizontal',
      content: {
        heading_text: { fr: 'Temps 1', en: 'Phase 1' },
        heading_level: 3,
        subtitle: {
          fr: "Meet the Lore : Poser les fondations de l'univers et de l'identité joueur",
          en: 'Meet the Lore: Laying the foundations of the universe and player identity',
        },
        intro_text: {
          fr: "Altered est un univers riche et complexe — factions, Héros, personnages, Cartes. Avant d'activer la moindre mécanique de jeu ou logique économique, il fallait donner aux joueurs le temps et les outils pour s'y immerger, se l'approprier, et y construire leur identité.",
          en: 'Altered is a rich and complex universe — factions, Heroes, characters, Cards. Before activating any game mechanic or economic logic, players needed time and tools to immerse themselves, make it their own, and build their identity within it.',
        },
        image_url: '/experiences/equinox-altered/temps-1-meet-the-lore.png',
        image_alt: { fr: 'Temps 1 - Meet the Lore', en: 'Phase 1 - Meet the Lore' },
        image_position: 'left',
        text_content: {
          fr: "• Création et gestion du compte joueur\n• Découverte de l'univers, du lore et des factions\n• Premières briques de gestion de collection digitale\n• Revendication des cartes physiques via QR codes\n• Profils joueurs et éléments d'identité",
          en: '• Player account creation and management\n• Discovery of the universe, lore and factions\n• First building blocks of digital collection management\n• Claiming physical cards via QR codes\n• Player profiles and identity elements',
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Pour mesurer le succès de Meet the Lore, trois métriques clés. Tout d'abord, le nombre de création de compte. Ensuite, le nombre de cartes scannées — signal fort d'appropriation du produit physique — Enfin, la lecture d'articles de lore, qui indique que le joueur s'immerge dans l'univers au-delà du simple onboarding.",
          en: 'To measure the success of Meet the Lore, three key metrics. First, the number of accounts created. Then, the number of cards scanned — a strong signal of physical product adoption. Finally, lore article reads, which indicates the player is immersing themselves in the universe beyond simple onboarding.',
        },
        alignment: 'left',
      },
    },
    {
      type: 'section_horizontal',
      content: {
        heading_text: { fr: 'Temps 2', en: 'Phase 2' },
        heading_level: 3,
        subtitle: {
          fr: 'Meet the Game : Connecter le digital au jeu et aux usages cœur',
          en: 'Meet the Game: Connecting digital to the game and core usages',
        },
        intro_text: {
          fr: "L'univers approprié, le digital devait devenir un vrai prolongement du jeu — facilitant la pratique, renforçant les liens entre joueurs et donnant vie à une scène compétitive naissante.",
          en: 'With the universe embraced, digital had to become a true extension of the game — facilitating play, strengthening bonds between players, and bringing an emerging competitive scene to life.',
        },
        image_url: '/experiences/equinox-altered/temps-2-meet-the-game.png',
        image_alt: { fr: 'Temps 2 - Meet the Game', en: 'Phase 2 - Meet the Game' },
        image_position: 'left',
        text_content: {
          fr: "• Outils de gameplay\n• Gestion d'événements et de tournois\n• Gamification de l'expérience\n• Fonctionnalités sociales et communautaires\n• Intégration des boutiques partenaires\n• Optimisation des parcours pour les joueurs réguliers",
          en: '• Gameplay tools\n• Event and tournament management\n• Gamification of the experience\n• Social and community features\n• Partner store integration\n• Optimized journeys for regular players',
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Pour mesurer le succès de Meet the Game, trois métriques clés : le nombre d'événements et tournois organisés par les boutiques depuis notre plateforme, le taux d'utilisation des outils de gameplay — signal fort que le digital est devenu un vrai prolongement du jeu physique — et la fréquence de retour sur la plateforme, qui indique que les joueurs s'y retrouvent régulièrement dans leur pratique quotidienne.",
          en: 'To measure the success of Meet the Game, three key metrics: the number of events and tournaments organized by stores through our platform, the usage rate of gameplay tools — a strong signal that digital has become a true extension of the physical game — and the frequency of return visits to the platform, indicating that players come back regularly as part of their daily practice.',
        },
        alignment: 'left',
      },
    },
    {
      type: 'section_horizontal',
      content: {
        heading_text: { fr: 'Temps 3', en: 'Phase 3' },
        heading_level: 3,
        subtitle: {
          fr: "Meet the Market : Activer l'économie et les échanges à l'échelle",
          en: 'Meet the Market: Activating the economy and trading at scale',
        },
        intro_text: {
          fr: "Les usages installés, la communauté engagée, il était temps d'activer la dimension économique du produit — dans un cadre sécurisé, conforme à l'international, et pensé pour accompagner la croissance du projet sur le long terme.",
          en: 'With usage established and the community engaged, it was time to activate the economic dimension of the product — within a secure, internationally compliant framework, designed to support the project\'s long-term growth.',
        },
        image_url: '/experiences/equinox-altered/temps-3-meet-the-market.png',
        image_alt: { fr: 'Temps 3 - Meet the Market', en: 'Phase 3 - Meet the Market' },
        image_position: 'left',
        text_content: {
          fr: "• Cagnotte intégrée et gestion des flux financiers\n• Échanges et transactions entre joueurs\n• Prise en compte des contraintes réglementaires et fiscales\n• Sécurisation des parcours de paiement\n• Services à valeur ajoutée autour de la collection",
          en: '• Built-in wallet and financial flow management\n• Trading and transactions between players\n• Compliance with regulatory and tax constraints\n• Securing payment journeys\n• Value-added services around the collection',
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Pour mesurer le succès de Meet the Market, trois métriques clés : le volume de transactions réalisées entre joueurs, le taux d'activation de la cagnotte et les services payants — signal fort que la communauté fait confiance au système de paiement — et le nombre de pays actifs sur la plateforme, qui valide la capacité du service à absorber les contraintes réglementaires à l'international.",
          en: "To measure the success of Meet the Market, three key metrics: the volume of transactions between players, the activation rate of the wallet and paid services — a strong signal that the community trusts the payment system — and the number of active countries on the platform, which validates the service's ability to absorb international regulatory constraints.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "<strong>Ce découpage s'est révélé structurant bien au-delà du produit : repris par l'équipe marketing pour piloter sa relation avec la communauté, il a donné une cohérence narrative à chaque livraison, canalisé les attentes des joueurs autour de jalons clairs, et accompagné la montée en puissance du projet auprès d'une communauté déjà très engagée.</strong>",
          en: "<strong>This breakdown proved structuring well beyond the product itself: adopted by the marketing team to drive its relationship with the community, it gave narrative coherence to each release, channeled players' expectations around clear milestones, and supported the project's ramp-up with an already highly engaged community.</strong>",
        },
        alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Démarche et Méthodologie design', en: 'Design Approach and Methodology' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: '<em>Double diamant appliqué à un cas concret : le système de paiement.</em>',
          en: '<em>Double diamond applied to a concrete case: the payment system.</em>',
        },
        alignment: 'left',
      },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'Schéma du double diamant', en: 'Double diamond diagram' },
        url: '/experiences/equinox-altered/double-diamant.png',
        width: 'full',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "L'écosystème Altered repose sur deux flux financiers distincts — les transactions entre joueurs et nos services payants. Concevoir le système de paiement, c'était rendre ces mécaniques fluides et transparentes pour le joueur, tout en absorbant une complexité légale et technique réelle.",
          en: "The Altered ecosystem relies on two distinct financial flows — transactions between players and our paid services. Designing the payment system meant making these mechanics smooth and transparent for the player, while absorbing real legal and technical complexity.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: { fr: '① Explorer', en: '① Explore' },
        heading_level: 3,
        subtitle: { fr: 'Comprendre les usages et le marché', en: 'Understanding usage and the market' },
        intro_text: {
          fr: "Les usages installés, la communauté engagée, il était temps d'activer la dimension économique du produit — dans un cadre sécurisé, conforme à l'international, et pensé pour accompagner la croissance du projet sur le long terme.",
          en: 'With usage established and the community engaged, it was time to activate the economic dimension of the product — within a secure, internationally compliant framework, designed to support the project\'s long-term growth.',
        },
        image_url: '/experiences/equinox-altered/explorer.png',
        image_alt: { fr: 'Explorer - Comprendre les usages', en: 'Explore - Understanding usage' },
        text_content: {
          fr: "Le projet m'a été confié via un cahier des charges rédigé par l'équipe dirigeante — posant les grandes orientations du service, ses objectifs et ses contraintes. Point de départ structurant, mais qui soulevait autant de questions qu'il n'en résolvait : nos cartes phygitales étaient-elles des biens physiques ou numériques ? Fallait-il un paiement direct ou une logique de cagnotte ? Le joueur devait-il passer par un panier ou payer au moment de l'action ? Comment la communauté percevait-elle ce type de service ?\n\n<strong>Pour ancrer ces décisions dans les usages réels, j'ai mené des entretiens utilisateurs à distance et en présentiel, animé des ateliers avec l'équipe décisionnaire, et conduit un benchmark du secteur et des acteurs pure-players. Ces différentes sources ont généré des learnings terrain, regroupés et synthétisés en insights clés — eux-mêmes mis en regard de nos grands principes de design pour orienter nos choix de conception.</strong>",
          en: "The project was entrusted to me via a brief written by the leadership team — laying out the service's broad direction, objectives and constraints. A structuring starting point, but one that raised as many questions as it answered: were our phygital cards physical or digital goods? Did we need direct payment or a wallet-based logic? Should the player go through a cart or pay at the moment of action? How did the community perceive this type of service?\n\n<strong>To ground these decisions in real-world usage, I conducted remote and in-person user interviews, facilitated workshops with the decision-making team, and ran a benchmark of the sector and pure-player competitors. These various sources generated field learnings, grouped and synthesized into key insights — themselves compared against our core design principles to guide our design choices.</strong>",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: { fr: '② Cadrer', en: '② Frame' },
        heading_level: 3,
        subtitle: { fr: 'Poser les fondations légales et produit', en: 'Laying the legal and product foundations' },
        image_url: '/experiences/equinox-altered/cadrer.png',
        image_alt: { fr: 'Cadrer - Fondations légales', en: 'Frame - Legal foundations' },
        text_content: {
          fr: "Le sujet se trouvait dans un flou juridique aux conséquences directes sur notre modèle économique : la nature de nos cartes phygitales conditionnait l'ensemble de notre fiscalité et de nos obligations légales à l'international.\n\n[IMAGE]\n\n<strong>J'ai identifié un cabinet d'avocats spécialisé pour nous accompagner sur ces questions, et collaboré étroitement avec notre prestataire de paiement pour aligner contraintes techniques et réglementaires avec les parcours à concevoir. Dans ce contexte, j'ai utilisé le design comme outil d'aide à la décision — en produisant des livrables clairs et en animant des ateliers d'alignement avec les équipes concernées, pour aider la direction à faire des choix structurants en ayant pleinement conscience de leurs implications produit, légales et économiques.</strong>",
          en: "The topic sat in legal grey area with direct consequences on our business model: the nature of our phygital cards determined our entire tax treatment and legal obligations internationally.\n\n[IMAGE]\n\n<strong>I identified a specialized law firm to support us on these questions, and collaborated closely with our payment provider to align technical and regulatory constraints with the journeys to be designed. In this context, I used design as a decision-support tool — producing clear deliverables and facilitating alignment workshops with the relevant teams, to help leadership make structuring choices while being fully aware of their product, legal and economic implications.</strong>",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: { fr: '③ Concevoir', en: '③ Design' },
        heading_level: 3,
        subtitle: { fr: 'Des parcours simples pour des mécanismes complexes', en: 'Simple journeys for complex mechanics' },
        image_url: '/experiences/equinox-altered/concevoir.png',
        image_alt: { fr: 'Concevoir - Parcours simples', en: 'Design - Simple journeys' },
        text_content: {
          fr: "J'ai démarré par des wireframes co-construits avec l'équipe tech, pour valider la faisabilité des parcours au regard des contraintes identifiées en amont. Une fois la logique fonctionnelle stabilisée, j'ai produit des maquettes haute fidélité testées directement auprès des utilisateurs finaux — pour m'assurer que la complexité du service ne transparaissait jamais dans l'expérience joueur. Tout au long de cette phase, je me suis assuré que chaque nouvel écran respectait le design system en vigueur, réalisé par notre UI designer, garantissant la cohérence visuelle du service avec le reste de l'écosystème Altered.\n\n<strong>La phase s'est conclue par une passation formelle à l'équipe tech : rédaction de la documentation fonctionnelle, traduction des choix de design en spécifications exploitables, et vérification qu'aucun angle mort ne subsistait avant le passage en développement.</strong>",
          en: "I started with wireframes co-built with the tech team, to validate the feasibility of the journeys against the constraints identified upstream. Once the functional logic was stabilized, I produced high-fidelity mockups tested directly with end users — to make sure the service's complexity never showed through in the player experience. Throughout this phase, I made sure every new screen complied with the design system in place, built by our UI designer, ensuring the service's visual consistency with the rest of the Altered ecosystem.\n\n<strong>The phase concluded with a formal handoff to the tech team: writing functional documentation, translating design choices into actionable specifications, and checking that no blind spots remained before moving into development.</strong>",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'image',
      content: {
        alt: { fr: 'Go Moonbound Demo', en: 'Go Moonbound Demo' },
        url: '/experiences/equinox-altered/demo.gif',
        width: 'full',
      },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: { fr: '④ Déployer', en: '④ Deploy' },
        heading_level: 3,
        subtitle: { fr: 'Un service conforme, lancé dans plusieurs pays', en: 'A compliant service, launched in multiple countries' },
        image_url: '/experiences/equinox-altered/deployer.png',
        image_alt: { fr: 'Déployer - Lancement international', en: 'Deploy - International launch' },
        text_content: {
          fr: "Le service a été lancé simultanément dans plusieurs pays, chacun avec ses contraintes légales spécifiques absorbées côté produit — et conçu avec suffisamment de souplesse pour intégrer de nouveaux pays en cours de route, sans refonte des parcours. Un lancement qui s'est fait malgré de nombreux imprévus gérés en temps réel : ajustements réglementaires de dernière minute, contraintes techniques non anticipées, arbitrages produit sous pression. <strong>Résultat : une expérience fluide pour le joueur, une conformité réglementaire assurée à l'international, et des frictions de paiement réduites au minimum.</strong>\n\nAu-delà de la rédaction de la documentation technique à destination des développeurs, j'ai maintenu un wiki produit enrichissant une base de connaissances interne partagée.\n\n<img src=\"/experiences/equinox-altered/wiki-doc.png\" alt=\"Wiki produit Altered\" style=\"max-width: 100%; height: auto; margin: 20px 0;\" />\n\nPensé comme un véritable produit interne, ce wiki centralisait les décisions, les itérations et les arbitrages réalisés tout au long du développement. Il permettait d'aligner durablement les équipes produit, design et tech autour d'une compréhension commune.\n\nChaque évolution de feature impliquait une mise à jour systématique de cette documentation, garantissant sa fiabilité et son adoption.\n\n<strong>La rédaction, la structuration et la diffusion de ce contenu faisaient partie intégrante de mon rôle, jusqu'à devenir une étape clé dans la livraison des fonctionnalités.</strong>",
          en: "The service was launched simultaneously in several countries, each with specific legal constraints absorbed on the product side — and designed with enough flexibility to integrate new countries along the way, without redesigning the journeys. A launch that happened despite numerous unforeseen issues handled in real time: last-minute regulatory adjustments, unanticipated technical constraints, product trade-offs under pressure. <strong>Result: a smooth experience for the player, guaranteed international regulatory compliance, and payment friction reduced to a minimum.</strong>\n\nBeyond writing technical documentation for developers, I maintained a product wiki feeding a shared internal knowledge base.\n\n<img src=\"/experiences/equinox-altered/wiki-doc.png\" alt=\"Altered product wiki\" style=\"max-width: 100%; height: auto; margin: 20px 0;\" />\n\nDesigned as a genuine internal product, this wiki centralized decisions, iterations and trade-offs made throughout development. It helped durably align product, design and tech teams around a shared understanding.\n\nEvery feature change required a systematic update to this documentation, ensuring its reliability and adoption.\n\n<strong>Writing, structuring and distributing this content was an integral part of my role, eventually becoming a key step in feature delivery.</strong>",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Conclusion', en: 'Conclusion' }, level: 2, alignment: 'left' },
    },
    {
      type: 'heading',
      content: {
        text: { fr: 'Un produit vivant, une communauté qui ne cesse de grandir', en: 'A living product, a community that keeps growing' },
        level: 3,
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Depuis 2021, Altered est passé par toutes les phases d'un produit ambitieux : campagne Kickstarter, première release, puis livraisons successives en suivant le plan défini. À chaque étape, le produit a tenu ses promesses — et la communauté a répondu présente.\n\nAujourd'hui, après 3 ans de développement, les chiffres parlent d'eux-mêmes :",
          en: 'Since 2021, Altered has gone through every phase of an ambitious product: Kickstarter campaign, first release, then successive deliveries following the defined plan. At every stage, the product delivered on its promises — and the community showed up.\n\nToday, after 3 years of development, the numbers speak for themselves:',
        },
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: '• 7 788 484 cartes scannées\n• 15+ pays couverts\n• +1 000 joueurs réunis lors de tournois\n• Des dizaines de milliers de comptes créés',
          en: '• 7,788,484 cards scanned\n• 15+ countries covered\n• +1,000 players gathered at tournaments\n• Tens of thousands of accounts created',
        },
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "<strong>De nouveaux pays ont rejoint l'aventure, la scène compétitive s'est structurée, et le premier championnat du monde s'est tenu en juin 2025. La communauté, toujours plus active, continue de porter le projet. Aujourd'hui, la sixième extension est en cours de financement participatif — et sortira dans le courant de l'année.</strong>",
          en: "<strong>New countries have joined the adventure, the competitive scene has taken shape, and the first world championship was held in June 2025. The community, more active than ever, continues to carry the project forward. Today, the sixth expansion is being crowdfunded — and will launch later this year.</strong>",
        },
        alignment: 'left',
      },
    },
  ],
};
