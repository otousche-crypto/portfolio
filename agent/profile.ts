// ─── PROFIL : la seule source de vérité de l'agent ───
// Modifier ici ce que l'agent sait d'Olivier. Tout ce qui n'est pas écrit ici,
// l'agent ne le sait pas (et doit le dire). N'y mettre RIEN de confidentiel :
// un visiteur obstiné finira toujours par faire réciter ce texte.

export const profile = `
# Olivier Tousche — Senior Product Designer & Product Builder

## En une phrase
Product designer depuis 2017, en grand groupe, en agence et en startup, sur des SaaS B2B et B2C et des écosystèmes phygitaux. Il articule stratégie, recherche et design pour transformer des irritants en produits clairs. Depuis 2025, il construit aussi ses propres produits avec des outils d'IA (Claude Code, Cursor) : moins de transferts entre design et code, des produits en production plus vite.

## Recherche actuelle
- Ouvert à un CDI comme à des missions freelance.
- Basé à Paris, ouvert au remote et à l'hybride.
- Disponible immédiatement.
- Rémunération / TJM : à discuter directement avec Olivier.
- Contact : otousche@gmail.com · LinkedIn : https://www.linkedin.com/in/olivier-tousche-a6160b122/ · CV téléchargeable en bas du portfolio.

## Façon de travailler
Le design comme levier de clarification et outil d'aide à la décision : face à la complexité des produits et des services, rendre les enjeux lisibles, aligner les équipes et concevoir des expériences utiles, cohérentes et centrées utilisateurs. En trois temps :
- Comprendre : chaque projet débute par une exploration pour clarifier les enjeux et comprendre les usages réels. Recherche utilisateur, analyse des irritants, cadrage produit et alignement des parties prenantes posent un socle commun et des objectifs clairs et partagés.
- Concevoir : à partir de ces enseignements, des solutions progressives et pragmatiques. Wireframes, parcours, prototypes et itérations successives transforment des problèmes complexes en expériences lisibles, en collaboration étroite avec les équipes produit et tech.
- Valider : les hypothèses sont systématiquement confrontées au réel. Tests utilisateurs, retours terrain et ajustements continus sécurisent les décisions et donnent des solutions utiles, viables et pérennes.
Méthodes : Double Diamond, discovery, ateliers de co-création, entretiens, focus groups, roadmapping et priorisation, Agile / Scrum, spécifications techniques.

## Sa vision du métier avec l'IA
Pendant des années, le travail reposait sur une séparation stricte : le designer prescrit, l'ingénieur exécute. À chaque transfert, l'intention se dilue et le temps se perd. Avec Claude Code et Cursor, ce circuit disparaît : le designer construit lui-même, teste en local des interactions complexes, des API, des logiques métier, ce qu'aucune maquette Figma ne permet de valider. Les tâches répétitives sont confiées à des agents IA dédiés, et le temps récupéré va à la réflexion, au cadrage et aux choix qui font le produit.
Ce qui change le plus, selon Olivier, c'est la posture : on passe d'un métier de prescription à quelque chose de plus proche de la sculpture. On voit le produit prendre forme en direct, on teste, on ajuste au geste, on expérimente le produit réel plutôt qu'une simulation. Résultat : des produits en production plus vite, des itérations plus rapides, et plus de temps pour la réflexion en amont, là où se joue vraiment un produit.

## Compétences et outils
- Product & stratégie : discovery, vision produit, roadmapping, priorisation, stakeholder management.
- UX : UX research, tests utilisateurs, ateliers, wireframing, prototypage, design system.
- Tech & delivery : plateformes SaaS, specs techniques, collaboration product/tech, vibe coding (Claude Code, Cursor, Lovable, Bolt), orchestration d'agents IA, framework BMAD, déploiement Vercel.
- Outils : Figma, FigJam, Miro, Notion, Jira, Cursor, Claude, Lovable, Bolt.
- Langues : français (natif), anglais (professionnel).

## Expériences

### Equinox — projet Altered · Senior Product Designer · 2022–2025 · Paris
Altered est un jeu de cartes à collectionner pensé comme un écosystème phygital : chaque carte physique a son double numérique (collection, marketplace, wallet). Après une campagne Kickstarter record (14 997 contributeurs, 6,2 M€), l'équipe devait livrer vite pour une communauté internationale exigeante. Olivier a piloté la conception de l'ensemble des services digitaux B2B et B2C.
- Décision 1 — livrer en trois temps : Meet the Lore (compte, collection digitale, scan des cartes physiques), Meet the Game (outils de jeu, tournois en boutique, social), Meet the Market (portefeuille, ventes entre joueurs, paiement sécurisé et conforme). Le marketing a repris ce découpage pour piloter la relation communauté.
- Indicateurs suivis par temps : Meet the Lore (comptes créés, cartes scannées, lecture des articles de lore), Meet the Game (tournois organisés par les boutiques, usage des outils de jeu, fréquence de retour), Meet the Market (volume de transactions entre joueurs, activation de la cagnotte et des services payants, nombre de pays actifs).
- Décision 2 — un paiement simple malgré un flou juridique, mené en Double Diamond. Point de départ : un cahier des charges de la direction qui soulevait autant de questions qu'il en résolvait (carte phygitale = bien physique ou numérique ? paiement direct ou cagnotte ? panier ou paiement à l'action ? perception de la communauté ?).
  - Explorer : entretiens joueurs à distance et en présentiel, ateliers avec l'équipe décisionnaire, benchmark du secteur et des pure players ; learnings synthétisés en insights, confrontés aux principes de design.
  - Cadrer : la nature des cartes conditionnait toute la fiscalité et les obligations légales à l'international. Olivier a trouvé un cabinet d'avocats spécialisé, travaillé avec le prestataire de paiement, et utilisé le design comme outil de décision (livrables clairs, ateliers d'alignement) pour que la direction tranche en connaissant les conséquences produit, légales et économiques.
  - Concevoir : wireframes co-construits avec l'équipe tech pour valider la faisabilité, puis maquettes haute fidélité testées auprès des joueurs, dans le respect du design system réalisé par l'UI designer ; passation formelle à la tech (documentation fonctionnelle, spécifications, chasse aux angles morts).
  - Déployer : arbitrage pour un portefeuille unique (services payants et ventes entre joueurs, toutes devises) ; lancement simultané dans plusieurs pays, chacun avec ses contraintes légales, avec des parcours assez souples pour ajouter des pays sans refonte, malgré des imprévus réglementaires et techniques gérés en temps réel.
- Décision 3 — un wiki produit pensé comme un produit interne : il centralisait décisions, itérations et arbitrages, était mis à jour à chaque évolution de fonctionnalité, et sa mise à jour est devenue une étape de la livraison. C'était la référence commune produit / design / tech.
- Aussi : parcours critiques (onboarding, transactions, revendication de cartes via QR code), tests utilisateurs sur prototypes fonctionnels, contribution au design system, spécifications techniques.
- Résultats : 7,8 M de cartes scannées, 15+ pays, 1 000+ joueurs réunis en tournoi, des dizaines de milliers de comptes, un premier championnat du monde en juin 2025.

### Oodrive · Product Designer · 2021–2022 · Paris
Garant du design d'Oodrive Media, SaaS B2B de Digital Asset Management, en contexte Agile et en lien étroit avec le service client. Focus groups et entretiens pour identifier besoins et irritants, conception et validation par tests itératifs, contribution à la roadmap et au design system, coordination avec les développeurs.

### We Digital Garden (agence) · UX Designer · 2018–2021 · Paris
Projets digitaux pour PME et grands comptes : ateliers de co-création, interviews, prototypage, tests.
- Sodexo : refonte d'un écosystème digital international d'avantages salariés.
- Allianz : espace adhérent unifié lors d'une fusion d'assurances militaires.
- TotalEnergies : solution intégrée à Microsoft Teams pour optimiser les réunions.
- Domido : plateforme mobile pour le secteur ambulancier.

### Logitech FuturLab · UX Designer (stage) · 2017–2018 · Lausanne
Recherche prospective au sein du laboratoire d'innovation : hearables, écouteurs connectés, assistants vocaux, tendances des réseaux sociaux.

## Projets personnels (product builder)

### Go MoonBound · 2026 · gomoonbound.com
Une web app connectée à l'API Strava : chaque course, sortie vélo, nage ou marche s'additionne et place le « voyageur » sur les 384 400 km entre la Terre et la Lune, dans une scène 3D. Construite seul, de l'idée à la production en 2 semaines, en orchestrant des agents IA (un « Senior Product Engineer » qui challenge le concept et structure le PRD, un « Prompt Master » qui traduit le brief pour Claude Code, Claude Code qui écrit le code, un agent conformité pour le dossier Strava). Olivier garde l'intention, les arbitrages, les tests et les mises en production. Le concept : donner de l'émotion aux chiffres bruts (10 000 km de vélo, c'est abstrait ; se voir à 2,6 % du chemin vers la Lune dans une scène 3D, c'est autre chose). Le défi était double : technique (API Strava, expérience 3D interactive impossible à valider sur une maquette) et de méthode (aller vite, viser des utilisateurs réels plutôt que la perfection). Boucle de travail : Claude Code livre en local, Olivier teste le produit réel, ajuste, relivre. Déploiement continu sur Vercel : chaque push crée une URL de test, chaque fusion sur main part en production, retour arrière en un clic. « Zéro handoff, zéro ticket. » Strava a validé le produit et ouvert l'API à 999 utilisateurs. 13 versions publiées au fil des retours (profil, badges, récap hebdo par email, robustesse dans les navigateurs in-app LinkedIn / Instagram, webhook sécurisé…).
Chiffres (relevé du 19 nov. 2026) : 669 voyageurs connectés, jusqu'à 23 % des visiteurs s'inscrivent, 72 % des voyageurs actifs en novembre, 25 % laissent leur email quand on le leur propose.

### Sklip · 2026 · Product Designer & Builder, solo
Outil web pour composer des boucles « skip-proof » destinées aux DJs de scratch (Serato, Traktor, Phase). Contrainte centrale : à 33⅓ tours/min, un tour dure exactement 1 800 ms ; une boucle mal calée dérive à chaque tour. Le produit rend cette contrainte visible sans demander de calcul, avec des sons dont la licence est documentée. Méthode : framework BMAD (agents analyste, product manager, architecte, développeur ; chaque livrable versionné nourrit le suivant : PRD de 26 exigences fonctionnelles, 10 décisions d'architecture, 5 epics, 23 stories), la conception UX et les mises en production restant décidées par Olivier. Personae issus d'une étude de marché (compétiteur qui enseigne, créatrice de contenu mobile, passionné du soir).

### NoveliA · Collaboration & orchestration agentique · 2026 · Product Designer & Builder
Projet en bêta fermée (l'étude de cas est protégée par un code d'accès : n'en dis pas plus que ce résumé public). NoveliA, une série littéraire participative pilotée par la communauté, sert de terrain d'expérimentation. Le vrai projet : un système d'orchestration agentique et un espace de travail collaboratif partagé, pour co-construire un produit à plusieurs avec des agents IA spécialisés.

### Stampit · 2026
Outil web qui génère un badge « Made by » et le prompt pour l'intégrer, pour signer tout ce qu'on livre.

### Décadi · 2026
Web app éphéméride (PWA) : le calendrier républicain, un jour à la fois.

### Cet agent · 2026
L'assistant avec lequel le visiteur parle en ce moment, présenté dans la section Laboratoire du portfolio : une démonstration de mise en production d'un LLM avec garde-fous.

## Formation et certifications
- Strate École de Design, Paris — spécialisation Interaction Design, 2012–2017.
- AHO (Oslo National Academy of the Arts) — échange Erasmus, Tangible Interaction Design, 2015.
- Certification Vibe Coding / No Code (Lovable, Bolt, Claude), Airmakers, 2025, mention Très Bien.
- Certification Anthropic : AI Fluency, Framework & Foundations.
`.trim();
