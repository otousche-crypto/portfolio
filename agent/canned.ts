// ─── RÉPONSES PRÉ-CALCULÉES : les questions suggérées au démarrage ───
// Les boutons de départ et de secours (site/agent.html, T.*.suggestions et T.*.more) reviennent
// dans la plupart des conversations : on y répond sans appeler le modèle, donc sans coût.
// Même format qu'une réponse de l'agent (bulles séparées par ---, suggestions [[…]] en dernière ligne).
// À relire si le profil change : ces textes ne se mettent pas à jour tout seuls.

const CANNED: Record<string, string> = {
  'son expérience en recherche ux ?': `La recherche est au cœur de sa méthode : Olivier commence chaque projet par comprendre les usages réels et les irritants.
---
Sur Altered, il a mené des entretiens joueurs, des ateliers avec la direction et un benchmark, puis testé ses maquettes auprès des joueurs. Avant ça : focus groups et entretiens chez Oodrive, et recherche prospective sur les hearables chez Logitech FuturLab.
---
Le détail est dans l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Parlez-moi d’Altered | Son approche du design ?]]`,

  "comment utilise-t-il l'ia ?": `Depuis 2025, Olivier construit lui-même ses produits avec Claude Code et Cursor : moins de transferts entre design et code, et des produits en production plus vite.
---
Exemple : [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), conçu en orchestrant des agents IA et en ligne en moins de 2 semaines. Depuis, il ne cesse d'évoluer au fil des attentes des utilisateurs.
---
Pour lui, le métier passe de la prescription à quelque chose de proche de la sculpture : on ajuste le produit réel, au geste.
[[Parlez-moi de Go MoonBound | Sa vision produit ?]]`,

  "parlez-moi d'altered": `Altered est un jeu de cartes à collectionner phygital : chaque carte physique a son double numérique. De 2022 à 2025, chez Equinox, Olivier a piloté la conception de tous les services digitaux B2B et B2C.
---
Résultats : 7,8 M de cartes scannées, plus de 15 pays et un premier championnat du monde en juin 2025.
---
Tout est dans l'[étude de cas](https://www.oliviertousche.com/equinox.html), dont le paiement conçu malgré un flou juridique.
[[Son expérience en recherche UX ? | Son approche du design ?]]`,

  'est-il disponible ?': `Oui, nous sommes disponibles tout de suite, en CDI comme en freelance.
---
Olivier est basé en région parisienne, ouvert au remote et à l'hybride. Le plus simple : lui écrire à otousche@gmail.com ou sur [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[Ses projets de product builder ? | Sa vision produit ?]]`,

  'sa vision produit ?': `Pour Olivier, le design est un levier de clarification et un outil d'aide à la décision : rendre les enjeux lisibles, aligner les équipes, transformer des irritants en produits clairs.
---
Son réflexe : confronter les hypothèses au réel. Avec l'IA, il construit lui-même le produit pour le tester en vrai, là où une maquette s'arrête.
---
Ce qui l'anime : apporter des solutions originales et singulières.
[[Ses projets de product builder ? | Comment utilise-t-il l’IA ?]]`,

  'son approche du design ?': `Olivier part toujours des usages réels, et son approche se joue en trois temps.
---
**Comprendre** : recherche utilisateur, irritants, cadrage. **Concevoir** : parcours, prototypes et itérations, avec les équipes produit et tech. **Valider** : tests utilisateurs et retours terrain, pour sécuriser chaque décision.
---
Un exemple complet : l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Son expérience en recherche UX ? | Comment utilise-t-il l’IA ?]]`,

  'ses projets de product builder ?': `Olivier conçoit et construit ses propres produits avec des agents IA : [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), qui place vos sorties Strava sur la route de la Lune, et [Sklip](https://www.oliviertousche.com/sklip.html), pour les DJs de scratch.
---
Dans le [Laboratoire](https://www.oliviertousche.com/#laboratoire) : Stampit, Décadi et cet agent. Et NoveliA, en bêta fermée : un système d'orchestration agentique pour co-construire un produit à plusieurs.
---
En test aussi : des proto-personae nourris de vraies données (Reddit, Facebook, stores) qui simulent des visites sur un site, pour repérer des problèmes avant les vrais tests utilisateurs.
[[Parlez-moi de Go MoonBound | Pourquoi cet agent IA ?]]`,

  'his ux research experience?': `Research is at the heart of his method: Olivier starts every project by understanding real usage and pain points.
---
On Altered, he ran player interviews, workshops with leadership and a benchmark, then tested his designs with players. Before that: focus groups and interviews at Oodrive, and foresight research on hearables at Logitech FuturLab.
---
The details are in the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[Tell me about Altered | His design approach?]]`,

  'how does he use ai?': `Since 2025, Olivier builds his own products with Claude Code and Cursor: fewer handoffs between design and code, and products shipped faster.
---
Example: [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), built by orchestrating AI agents and live in under 2 weeks. Since then, it has kept evolving with what users expect.
---
To him, the job is shifting from prescribing to something closer to sculpting: you shape the real product by hand.
[[Tell me about Go MoonBound | His product vision?]]`,

  'his product vision?': `To Olivier, design is a way to bring clarity and support decisions: make the stakes readable, align teams, turn pain points into clear products.
---
His reflex: test assumptions against reality. With AI, he builds the product himself to try it for real, where a mockup stops.
---
What drives him: bringing original, distinctive solutions.
[[His product builder projects? | How does he use AI?]]`,

  'his design approach?': `Olivier always starts from real usage, and his approach plays out in three steps.
---
**Understand**: user research, pain points, framing. **Design**: flows, prototypes and iterations, with product and tech teams. **Validate**: user tests and field feedback, to secure every decision.
---
A full example: the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[His UX research experience? | How does he use AI?]]`,

  'his product builder projects?': `Olivier designs and builds his own products with AI agents: [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), which puts your Strava activities on the road to the Moon, and [Sklip](https://www.oliviertousche.com/sklip.html), for scratch DJs.
---
In the [Lab](https://www.oliviertousche.com/#laboratoire): Stampit, Décadi and this agent. And NoveliA, in closed beta: an agentic orchestration system to co-build a product as a team.
---
Also in testing: proto-personas fed with real data (Reddit, Facebook, app stores) that simulate visits to a site, to catch issues before real user tests.
[[Tell me about Go MoonBound | Why this AI agent?]]`,

  'tell me about altered': `Altered is a phygital trading card game: every physical card has a digital twin. From 2022 to 2025, at Equinox, Olivier led the design of all the B2B and B2C digital services.
---
Results: 7.8M cards scanned, 15+ countries and a first world championship in June 2025.
---
It's all in the [case study](https://www.oliviertousche.com/equinox.html), including a payment flow designed despite legal uncertainty.
[[His UX research experience? | His design approach?]]`,

  'is he available?': `Yes, we're available right away, for a permanent role or freelance.
---
Olivier is based in the Paris region, open to remote and hybrid. The easiest way: email otousche@gmail.com or reach out on [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[His product builder projects? | His product vision?]]`,

  'parlez-moi de go moonbound': `Go MoonBound transforme vos sorties Strava en voyage vers la Lune : chaque course, sortie vélo, nage ou marche vous place sur les 384 400 km entre la Terre et la Lune, dans une scène 3D.
---
Olivier l'a conçu avec des agents IA et mis en ligne en moins de 2 semaines. Strava l'a validé et a ouvert son API à 999 utilisateurs ; 13 versions ont suivi, au fil des retours.
---
Tout est dans l'[étude de cas](https://www.oliviertousche.com/gomoonbound.html).
[[Ses projets de product builder ? | Comment utilise-t-il l’IA ?]]`,

  'ses passions ?': `Le vélo de route, d'abord : c'est d'ailleurs l'origine de Go MoonBound, connecté à Strava.
---
Et la musique, depuis plus de 10 ans : scratch, vinyles et beatmaking sur samplers, notamment la MPC2000XL. Il publie ses prods sous le nom de Floppysional.
---
Sur la MPC, tout tient sur une disquette de 1,44 Mo : la contrainte oblige à faire des choix, une démarche qui rejoint sa façon de concevoir des produits.
[[Parlez-moi de Go MoonBound | Son approche du design ?]]`,

  'comment a-t-il géré le paiement ?': `Le point de départ était flou : une carte phygitale, est-ce un bien physique ou numérique ? Paiement direct ou cagnotte ? Olivier a mené le sujet en Double Diamond.
---
Il a trouvé un cabinet d'avocats spécialisé, travaillé avec le prestataire de paiement, et fait du design un outil de décision pour que la direction tranche en connaissant les conséquences.
---
Résultat : un portefeuille unique, toutes devises, lancé dans plusieurs pays à la fois. Le détail est dans l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Son approche du design ? | Son expérience en recherche UX ?]]`,

  'pourquoi cet agent ia ?': `Olivier m'a conçu entièrement, from scratch. Il a imaginé chaque interaction : mon ton, les questions suggérées sous mes réponses, ou le fait de pouvoir me parler depuis n'importe quelle page du site.
---
Pourquoi ? Parce que la fenêtre de conversation devient une interaction à part entière. Plutôt que d'en parler, il fait sa proposition : je suis son bac à sable pour produire, tester et itérer.
---
Pour en savoir plus, cliquez sur le « i » en haut de cette fenêtre.
[[Comment utilise-t-il l’IA ? | Sa vision produit ?]]`,

  'tell me about go moonbound': `Go MoonBound turns your Strava activities into a trip to the Moon: every run, ride, swim or walk places you on the 384,400 km between Earth and the Moon, in a 3D scene.
---
Olivier built it with AI agents and shipped it in under 2 weeks. Strava approved it and opened its API to 999 users; 13 versions followed, driven by feedback.
---
It's all in the [case study](https://www.oliviertousche.com/gomoonbound.html).
[[His product builder projects? | How does he use AI?]]`,

  'his passions?': `Road cycling, first: it's actually where Go MoonBound comes from, connected to Strava.
---
And music, for over 10 years: scratching, vinyl, and beatmaking on samplers, including the MPC2000XL. He releases his beats as Floppysional.
---
On the MPC, everything fits on a 1.44 MB floppy disk: the constraint forces choices, an approach that echoes how he designs products.
[[Tell me about Go MoonBound | His design approach?]]`,

  'how did he handle payments?': `The starting point was blurry: is a phygital card a physical or a digital good? Direct payment or a wallet? Olivier led the topic with the Double Diamond.
---
He found a specialised law firm, worked with the payment provider, and used design as a decision tool so leadership could decide knowing the consequences.
---
The result: a single wallet, all currencies, launched in several countries at once. Details in the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[His design approach? | His UX research experience?]]`,

  'why this ai agent?': `Olivier designed me entirely, from scratch. He imagined every interaction: my tone, the questions suggested under my answers, and being able to talk to me from any page of the site.
---
Why? Because the chat window is becoming an interaction in its own right. Rather than talking about it, he makes his own take: I'm his sandbox to build, test and iterate.
---
To find out more, click the “i” at the top of this window.
[[How does he use AI? | His product vision?]]`,
};

// Même question, à la typographie près : apostrophes, espaces avant le « ? », majuscules
const normalize = (q: string) => q.trim().toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, ' ').replace(/\s*\?$/, ' ?');
const TABLE = new Map(Object.entries(CANNED).map(([q, a]) => [normalize(q), a]));

// Les suggestions que la page peut afficher : toutes ont une réponse toute prête, donc un clic ne coûte jamais rien.
// Le prompt demande à l'agent de choisir ses suggestions dans ces listes ; la page écarte toute autre suggestion.
// Les mêmes listes figurent dans site/agent.html (T.fr.more, T.en.more) : un test vérifie qu'elles concordent.
export const SUGGESTIONS = {
  fr: ['Comment utilise-t-il l’IA ?', 'Sa vision produit ?', 'Son approche du design ?', 'Est-il disponible ?', 'Ses projets de product builder ?', 'Parlez-moi de Go MoonBound', 'Son expérience en recherche UX ?', 'Parlez-moi d’Altered', 'Pourquoi cet agent IA ?'],
  en: ['How does he use AI?', 'His product vision?', 'His design approach?', 'Is he available?', 'His product builder projects?', 'Tell me about Go MoonBound', 'His UX research experience?', 'Tell me about Altered', 'Why this AI agent?'],
};

// Les questions qui ont une réponse toute prête (pour les tests de cohérence des suggestions)
export const cannedQuestions = () => [...TABLE.keys()];

export function cannedAnswer(question: string): string | undefined {
  return TABLE.get(normalize(question));
}
