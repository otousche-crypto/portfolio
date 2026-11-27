// ─── RÉPONSES PRÉ-CALCULÉES : les questions suggérées au démarrage ───
// Les boutons de départ et de secours (site/agent.html, T.*.suggestions et T.*.more) reviennent
// dans la plupart des conversations : on y répond sans appeler le modèle, donc sans coût.
// Même format qu'une réponse de l'agent (bulles séparées par ---, suggestions [[…]] en dernière ligne).
// À relire si le profil change : ces textes ne se mettent pas à jour tout seuls.

const CANNED: Record<string, string> = {
  'son expérience en recherche ux ?': `C'est vraiment par là qu'il commence. Avant de dessiner quoi que ce soit, Olivier veut voir comment les gens utilisent le produit, et ce qui les agace.
---
Sur [Altered](https://www.oliviertousche.com/equinox.html), il a rencontré des joueurs, animé des ateliers avec la direction et testé ses maquettes avec eux. Il avait l'habitude, il faisait déjà des focus groups chez Oodrive.
[[Parlez-moi d’Altered | Son approche du design ?]]`,

  "comment utilise-t-il l'ia ?": `Depuis 2025, il ne s'arrête plus à la maquette. Il construit ses produits lui-même avec Claude Code et Cursor, et ils arrivent bien plus vite en production.
---
Il dit que son métier passe de la prescription à quelque chose de proche de la sculpture. J'aime bien l'image, on ajuste le vrai produit au geste.
---
Et vous, ces outils font déjà partie de votre quotidien ?
[[Parlez-moi de Go MoonBound | Sa vision produit ?]]`,

  "parlez-moi d'altered": `Un jeu de cartes à collectionner un peu particulier, où chaque carte physique a son double numérique. Chez Equinox, de 2022 à 2025, Olivier a conçu tous les services digitaux autour.
---
Et le public a suivi, avec 7,8 millions de cartes scannées dans plus de 15 pays. Le morceau le plus coriace, c'était le paiement, il le raconte dans [l'étude de cas](https://www.oliviertousche.com/equinox.html).
[[Son expérience en recherche UX ? | Son approche du design ?]]`,

  'est-il disponible ?': `Oui, et tout de suite ! Nous sommes ouverts à un CDI comme à du freelance, depuis la région parisienne, en remote ou en hybride.
---
Le plus simple, c'est d'écrire à Olivier à otousche@gmail.com ou sur [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[Ses projets de product builder ? | Sa vision produit ?]]`,

  'sa vision produit ?': `Pour lui, le design sert d'abord à y voir clair, et à mettre tout le monde d'accord sur ce qui coince vraiment.
---
Ce qui l'anime, c'est de trouver des solutions qui ne ressemblent pas à tout le reste. Avec l'IA, il peut enfin les essayer sur un vrai produit, là où une maquette s'arrête.
[[Ses projets de product builder ? | Comment utilise-t-il l’IA ?]]`,

  'son approche du design ?': `Il part toujours de la façon dont les gens utilisent le produit, et il y revient à la fin avec des tests utilisateurs. Entre les deux, il prototype beaucoup, avec le produit et la tech plutôt qu'en bout de chaîne.
[[Son expérience en recherche UX ? | Comment utilise-t-il l’IA ?]]`,

  'ses projets de product builder ?': `Il construit ses propres produits avec des agents IA. [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html) envoie vos sorties Strava sur la route de la Lune, et [Sklip](https://www.oliviertousche.com/sklip.html) s'adresse aux DJs de scratch.
---
Les autres sont dans le [Laboratoire](https://www.oliviertousche.com/#laboratoire)… moi compris ! En ce moment, il teste aussi des proto-personae nourris de vraies données, qui simulent des visites avant les vrais tests utilisateurs.
[[Parlez-moi de Go MoonBound | Pourquoi cet agent ?]]`,

  'parlez-moi de go moonbound': `Vos sorties Strava deviennent un voyage vers la Lune. Chaque course ou sortie vélo vous fait avancer sur les 384 400 km qui nous en séparent, dans une scène 3D.
---
Olivier l'a construit avec des agents IA et mis en ligne en moins de 2 semaines. Strava a validé le projet et ouvert son API à 999 utilisateurs, et 13 versions ont suivi. Il raconte comment dans [l'étude de cas](https://www.oliviertousche.com/gomoonbound.html).
[[Ses projets de product builder ? | Comment utilise-t-il l’IA ?]]`,

  'ses passions ?': `Le vélo de route, avant tout. C'est même de là qu'est né Go MoonBound.
---
Et la musique, depuis plus de 10 ans. Il scratche, et compose sur une MPC2000XL où tout doit tenir sur une disquette de 1,44 Mo. Ses prods sortent sous le nom de Floppysional.
---
Et vous, plutôt vélo ou vinyles ?
[[Parlez-moi de Go MoonBound | Son approche du design ?]]`,

  'comment a-t-il géré le paiement ?': `Rien n'était simple au départ. Une carte phygitale, c'est un bien physique ou numérique ? Et on paie en direct, ou via une cagnotte ?
---
Olivier s'est entouré d'un cabinet d'avocats spécialisé et du prestataire de paiement. Le design a servi à ce que la direction tranche en connaissant les conséquences.
---
Au final, un portefeuille unique, toutes devises, lancé dans plusieurs pays d'un coup. C'est un des passages que je préfère dans [l'étude de cas](https://www.oliviertousche.com/equinox.html).
[[Son approche du design ? | Son expérience en recherche UX ?]]`,

  'pourquoi cet agent ?': `Je tourne sur Claude Haiku, mais le modèle n'est que le moteur. Olivier a conçu tout le reste from scratch, de mon ton jusqu'au rythme de mes réponses.
---
On parle de plus en plus à nos produits, et ce genre d'interaction, il voulait l'expérimenter pour de vrai. Le « i » en haut de la fenêtre vous en dit plus.
[[Comment utilise-t-il l’IA ? | Sa vision produit ?]]`,

  'his ux research experience?': `That's really where he starts. Before drawing anything, Olivier wants to see how people use the product, and what bugs them.
---
On [Altered](https://www.oliviertousche.com/equinox.html), he met players, ran workshops with leadership and tested his designs with them. Nothing new for him, he was already running focus groups at Oodrive.
[[Tell me about Altered | His design approach?]]`,

  'how does he use ai?': `Since 2025, he doesn't stop at the mockup anymore. He builds his products himself with Claude Code and Cursor, and they reach production much faster.
---
He says his job is shifting from prescribing to something closer to sculpting. I like that image, you shape the real product by hand.
---
How about you, are these tools already part of your day-to-day?
[[Tell me about Go MoonBound | His product vision?]]`,

  'tell me about altered': `A trading card game with a twist, where every physical card has a digital twin. At Equinox, from 2022 to 2025, Olivier designed all the digital services around it.
---
And players followed, with 7.8 million cards scanned in 15+ countries. The toughest part was payments, he tells that story in [the case study](https://www.oliviertousche.com/equinox.html).
[[His UX research experience? | His design approach?]]`,

  'is he available?': `Yes, right away! We're open to a permanent role as well as freelance work, from the Paris region, remote or hybrid.
---
The easiest way is to drop Olivier a line at otousche@gmail.com or on [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[His product builder projects? | His product vision?]]`,

  'his product vision?': `To him, design is first a way to see clearly, and to get everyone to agree on what's really stuck.
---
What drives him is finding solutions that don't look like everything else. With AI, he can finally try them on a real product, where a mockup stops.
[[His product builder projects? | How does he use AI?]]`,

  'his design approach?': `He always starts from how people use the product, and comes back to it at the end with user tests. In between, he prototypes a lot, with product and tech alongside him rather than at the end of the line.
[[His UX research experience? | How does he use AI?]]`,

  'his product builder projects?': `He builds his own products with AI agents. [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html) sends your Strava activities on the road to the Moon, and [Sklip](https://www.oliviertousche.com/sklip.html) is made for scratch DJs.
---
The others are in the [Lab](https://www.oliviertousche.com/#laboratoire)… me included! Right now, he's also testing proto-personas fed with real data, which simulate visits before real user tests.
[[Tell me about Go MoonBound | Why this agent?]]`,

  'tell me about go moonbound': `Your Strava activities become a trip to the Moon. Every run or ride moves you along the 384,400 km between us and it, in a 3D scene.
---
Olivier built it with AI agents and shipped it in under 2 weeks. Strava approved it and opened its API to 999 users, and 13 versions have followed. He tells how in [the case study](https://www.oliviertousche.com/gomoonbound.html).
[[His product builder projects? | How does he use AI?]]`,

  'his passions?': `Road cycling, above all. That's actually where Go MoonBound comes from.
---
And music, for over 10 years. He scratches, and makes beats on an MPC2000XL where everything has to fit on a 1.44 MB floppy disk. His tracks come out as Floppysional.
---
How about you, more bikes or vinyl?
[[Tell me about Go MoonBound | His design approach?]]`,

  'how did he handle payments?': `Nothing was simple at first. Is a phygital card a physical or a digital good? And do you pay directly, or through a wallet?
---
Olivier brought in a specialised law firm and the payment provider. Design helped leadership decide while knowing the consequences.
---
In the end, a single wallet, all currencies, launched in several countries at once. It's one of my favourite parts of [the case study](https://www.oliviertousche.com/equinox.html).
[[His design approach? | His UX research experience?]]`,

  'why this agent?': `I run on Claude Haiku, but the model is only the engine. Olivier designed everything else from scratch, from my tone to the pace of my answers.
---
We talk to our products more and more, and he wanted to experience that kind of interaction for real. The “i” at the top of this window tells you more.
[[How does he use AI? | His product vision?]]`,
};

// Même question, à la typographie près : apostrophes, espaces avant le « ? », majuscules
const normalize = (q: string) => q.trim().toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, ' ').replace(/\s*\?$/, ' ?');
const TABLE = new Map(Object.entries(CANNED).map(([q, a]) => [normalize(q), a]));

// Les suggestions que la page peut afficher : toutes ont une réponse toute prête, donc un clic ne coûte jamais rien.
// Le prompt demande à l'agent de choisir ses suggestions dans ces listes ; la page écarte toute autre suggestion.
// Les mêmes listes figurent dans site/agent.html (T.fr.more, T.en.more) : un test vérifie qu'elles concordent.
export const SUGGESTIONS = {
  fr: ['Comment utilise-t-il l’IA ?', 'Sa vision produit ?', 'Son approche du design ?', 'Est-il disponible ?', 'Ses projets de product builder ?', 'Parlez-moi de Go MoonBound', 'Son expérience en recherche UX ?', 'Parlez-moi d’Altered', 'Pourquoi cet agent ?'],
  en: ['How does he use AI?', 'His product vision?', 'His design approach?', 'Is he available?', 'His product builder projects?', 'Tell me about Go MoonBound', 'His UX research experience?', 'Tell me about Altered', 'Why this agent?'],
};

// Les questions qui ont une réponse toute prête (pour les tests de cohérence des suggestions)
export const cannedQuestions = () => [...TABLE.keys()];

export function cannedAnswer(question: string): string | undefined {
  return TABLE.get(normalize(question));
}
