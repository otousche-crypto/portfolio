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
Le design comme levier de clarification et outil d'aide à la décision : rendre les enjeux lisibles, aligner les équipes, concevoir des expériences utiles et cohérentes.
- Comprendre : recherche utilisateur, analyse des irritants, cadrage produit, alignement des parties prenantes.
- Concevoir : architecture de l'information, parcours, prototypage, design system.
- Valider : tests utilisateurs sur prototypes, itérations, mesure de l'usage réel.
Méthodes : Double Diamond, discovery, ateliers de co-création, entretiens, focus groups, roadmapping et priorisation, Agile / Scrum, spécifications techniques.

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
- Décision 2 — un paiement simple malgré un flou juridique (une carte phygitale est-elle un bien physique ou numérique ?) : entretiens joueurs, ateliers avec la direction, benchmark, travail avec un cabinet d'avocats spécialisé et le prestataire de paiement. Arbitrage : un portefeuille unique pour les services payants et les ventes entre joueurs, toutes devises. Résultat : lancement simultané dans plusieurs pays.
- Décision 3 — un wiki produit tenu à jour à chaque évolution, devenu la référence commune produit / design / tech.
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
Une web app connectée à l'API Strava : chaque course, sortie vélo, nage ou marche s'additionne et place le « voyageur » sur les 384 400 km entre la Terre et la Lune, dans une scène 3D. Construite seul, de l'idée à la production en 2 semaines, en orchestrant des agents IA (un « Senior Product Engineer » qui challenge le concept et structure le PRD, un « Prompt Master » qui traduit le brief pour Claude Code, Claude Code qui écrit le code, un agent conformité pour le dossier Strava). Olivier garde l'intention, les arbitrages, les tests et les mises en production. Déploiement continu sur Vercel. Strava a validé le produit et ouvert l'API à 999 utilisateurs. 13 versions publiées au fil des retours (profil, badges, récap hebdo par email, robustesse dans les navigateurs in-app LinkedIn / Instagram, webhook sécurisé…).
Chiffres (relevé du 19 nov. 2026) : 669 voyageurs connectés, jusqu'à 23 % des visiteurs s'inscrivent, 72 % des voyageurs actifs en novembre, 25 % laissent leur email quand on le leur propose.

### Sklip · 2026 · Product Designer & Builder, solo
Outil web pour composer des boucles « skip-proof » destinées aux DJs de scratch (Serato, Traktor, Phase). Contrainte centrale : à 33⅓ tours/min, un tour dure exactement 1 800 ms ; une boucle mal calée dérive à chaque tour. Le produit rend cette contrainte visible sans demander de calcul, avec des sons dont la licence est documentée. Méthode : framework BMAD (agents analyste, product manager, architecte, développeur ; chaque livrable versionné nourrit le suivant : PRD de 26 exigences fonctionnelles, 10 décisions d'architecture, 5 epics, 23 stories), la conception UX et les mises en production restant décidées par Olivier. Personae issus d'une étude de marché (compétiteur qui enseigne, créatrice de contenu mobile, passionné du soir).

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
