// ─── RÉPONSES PRÉ-CALCULÉES : les questions suggérées au démarrage ───
// Les boutons de départ et de secours (site/agent.html, T.*.suggestions et T.*.more) reviennent
// dans la plupart des conversations : on y répond sans appeler le modèle, donc sans coût.
// Même format qu'une réponse de l'agent (bulles séparées par ---, suggestions [[…]] en dernière ligne).
// À relire si le profil change : ces textes ne se mettent pas à jour tout seuls.

const CANNED: Record<string, string> = {
  'son expérience en recherche ux ?': `La recherche, c'est vraiment son point de départ : avant de dessiner quoi que ce soit, Olivier veut comprendre comment les gens utilisent le produit, et ce qui les agace.
---
Sur Altered, il a rencontré les joueurs, animé des ateliers avec la direction, fait un benchmark, puis testé ses maquettes avec eux. Il en avait l'habitude : focus groups chez Oodrive, recherche prospective chez Logitech FuturLab.
---
Si vous voulez voir ça de près, tout est dans l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Parlez-moi d’Altered | Son approche du design ?]]`,

  "comment utilise-t-il l'ia ?": `Depuis 2025, Olivier ne s'arrête plus à la maquette : il construit lui-même ses produits, avec Claude Code et Cursor. Moins d'allers-retours entre design et code, et le produit arrive plus vite en production.
---
Le meilleur exemple, c'est [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html) : conçu avec des agents IA, en ligne en moins de 2 semaines, et il continue d'évoluer avec ses utilisateurs.
---
Lui le résume joliment : on passe de la prescription à quelque chose de proche de la sculpture. On ajuste le vrai produit, au geste.
[[Parlez-moi de Go MoonBound | Sa vision produit ?]]`,

  "parlez-moi d'altered": `Altered, c'est un jeu de cartes à collectionner un peu particulier : chaque carte physique a son double numérique. Chez Equinox, de 2022 à 2025, Olivier a piloté la conception de tous les services digitaux, B2B comme B2C.
---
Et ça a pris : 7,8 millions de cartes scannées, plus de 15 pays, et même un premier championnat du monde en juin 2025.
---
L'[étude de cas](https://www.oliviertousche.com/equinox.html) raconte tout, y compris comment il a conçu le paiement malgré un vrai flou juridique.
[[Son expérience en recherche UX ? | Son approche du design ?]]`,

  'est-il disponible ?': `Oui, et tout de suite ! Nous sommes ouverts à un CDI comme à des missions freelance.
---
Olivier est en région parisienne, partant pour du remote ou de l'hybride. Le plus simple, c'est de lui écrire : otousche@gmail.com, ou sur [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[Ses projets de product builder ? | Sa vision produit ?]]`,

  'sa vision produit ?': `Pour Olivier, le design sert d'abord à y voir clair : rendre les enjeux lisibles, mettre les équipes d'accord, et transformer ce qui coince en produits simples.
---
Et il aime vérifier sur le terrain. Avec l'IA, il construit le produit lui-même pour le tester pour de vrai, là où une maquette s'arrête.
---
Au fond, ce qui l'anime, c'est de trouver des solutions originales, qui ne ressemblent pas à tout le reste.
[[Ses projets de product builder ? | Comment utilise-t-il l’IA ?]]`,

  'son approche du design ?': `Olivier part toujours de la façon dont les gens utilisent vraiment le produit. Ensuite, ça se joue en trois temps.
---
D'abord comprendre : recherche, irritants, cadrage. Puis concevoir : parcours, prototypes, itérations, main dans la main avec le produit et la tech. Et enfin valider, avec des tests utilisateurs et des retours terrain.
---
Pour un exemple complet, je vous conseille l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Son expérience en recherche UX ? | Comment utilise-t-il l’IA ?]]`,

  'ses projets de product builder ?': `Olivier construit aussi ses propres produits, avec des agents IA. Il y a [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), qui envoie vos sorties Strava sur la route de la Lune, et [Sklip](https://www.oliviertousche.com/sklip.html), pour les DJs de scratch.
---
Dans le [Laboratoire](https://www.oliviertousche.com/#laboratoire), vous trouverez Stampit, Décadi… et moi ! Il y a aussi NoveliA, en bêta fermée : un système d'orchestration agentique pour construire un produit à plusieurs.
---
Et en ce moment, il teste des proto-personae nourris de vraies données (Reddit, Facebook, stores) qui simulent des visites, pour repérer des problèmes avant les vrais tests utilisateurs.
[[Parlez-moi de Go MoonBound | Pourquoi cet agent ?]]`,

  'his ux research experience?': `Research is really where he starts: before drawing anything, Olivier wants to understand how people actually use the product, and what bugs them.
---
On Altered, he met players, ran workshops with leadership, did a benchmark, then tested his designs with players. He was used to it: focus groups at Oodrive, foresight research at Logitech FuturLab.
---
If you'd like a closer look, it's all in the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[Tell me about Altered | His design approach?]]`,

  'how does he use ai?': `Since 2025, Olivier doesn't stop at the mockup anymore: he builds his own products, with Claude Code and Cursor. Fewer back-and-forths between design and code, and products ship faster.
---
The best example is [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html): built with AI agents, live in under 2 weeks, and still evolving with its users.
---
He puts it nicely: the job shifts from prescribing to something closer to sculpting. You shape the real product by hand.
[[Tell me about Go MoonBound | His product vision?]]`,

  'his product vision?': `To Olivier, design is first a way to see clearly: make the stakes readable, get teams on the same page, and turn what's stuck into simple products.
---
And he likes to check things for real. With AI, he builds the product himself to test it properly, where a mockup stops.
---
Deep down, what drives him is finding original solutions that don't look like everything else.
[[His product builder projects? | How does he use AI?]]`,

  'his design approach?': `Olivier always starts from how people really use the product. Then it plays out in three steps.
---
First understand: research, pain points, framing. Then design: flows, prototypes, iterations, hand in hand with product and tech. And finally validate, with user tests and field feedback.
---
For a full example, I'd recommend the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[His UX research experience? | How does he use AI?]]`,

  'his product builder projects?': `Olivier also builds his own products, with AI agents. There's [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), which sends your Strava activities on the road to the Moon, and [Sklip](https://www.oliviertousche.com/sklip.html), for scratch DJs.
---
In the [Lab](https://www.oliviertousche.com/#laboratoire), you'll find Stampit, Décadi… and me! There's also NoveliA, in closed beta: an agentic orchestration system to build a product as a team.
---
And right now he's testing proto-personas fed with real data (Reddit, Facebook, app stores) that simulate visits, to catch issues before real user tests.
[[Tell me about Go MoonBound | Why this agent?]]`,

  'tell me about altered': `Altered is a trading card game with a twist: every physical card has a digital twin. At Equinox, from 2022 to 2025, Olivier led the design of all the digital services, B2B and B2C.
---
And it took off: 7.8 million cards scanned, 15+ countries, and even a first world championship in June 2025.
---
The [case study](https://www.oliviertousche.com/equinox.html) tells the whole story, including how he designed payments despite real legal uncertainty.
[[His UX research experience? | His design approach?]]`,

  'is he available?': `Yes, right away! We're open to a permanent role as well as freelance work.
---
Olivier is in the Paris region, happy to work remote or hybrid. The easiest way is to drop him a line: otousche@gmail.com, or on [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[His product builder projects? | His product vision?]]`,

  'parlez-moi de go moonbound': `L'idée de Go MoonBound : transformer vos sorties Strava en voyage vers la Lune. Chaque course, sortie vélo, nage ou marche vous fait avancer sur les 384 400 km qui nous en séparent, dans une scène 3D.
---
Olivier l'a construit avec des agents IA et mis en ligne en moins de 2 semaines. Strava a validé le projet et ouvert son API à 999 utilisateurs ; 13 versions ont suivi depuis.
---
Toute l'histoire est dans l'[étude de cas](https://www.oliviertousche.com/gomoonbound.html).
[[Ses projets de product builder ? | Comment utilise-t-il l’IA ?]]`,

  'ses passions ?': `Le vélo de route, avant tout. C'est d'ailleurs de là qu'est né Go MoonBound, connecté à Strava.
---
Et la musique, depuis plus de 10 ans : scratch, vinyles et beatmaking sur samplers, surtout la MPC2000XL. Il sort ses prods sous le nom de Floppysional.
---
Ce qu'il aime avec la MPC : tout tient sur une disquette de 1,44 Mo, donc il faut faire des choix. Une contrainte qui ressemble beaucoup à sa façon de concevoir des produits.
[[Parlez-moi de Go MoonBound | Son approche du design ?]]`,

  'comment a-t-il géré le paiement ?': `Au départ, rien n'était simple : une carte phygitale, c'est un bien physique ou numérique ? Paiement direct ou cagnotte ? Olivier a abordé le sujet en Double Diamond.
---
Il a trouvé un cabinet d'avocats spécialisé, travaillé avec le prestataire de paiement, et utilisé le design pour que la direction tranche en connaissant les conséquences.
---
Au final : un portefeuille unique, toutes devises, lancé dans plusieurs pays en même temps. Tout est dans l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Son approche du design ? | Son expérience en recherche UX ?]]`,

  'pourquoi cet agent ?': `Je tourne sur Claude Haiku, mais le modèle n'est que le moteur. Olivier a conçu toute l'expérience autour, from scratch : le rythme de mes réponses, mon ton, les questions que je vous suggère, ou le fait que vous puissiez me parler depuis n'importe quelle page.
---
Pourquoi ? Parce qu'avec l'IA, la conversation prend de plus en plus de place dans nos usages. Et pour Olivier, ce genre d'interaction, il faut l'expérimenter soi-même, sur un vrai produit.
---
Envie d'en savoir plus ? Cliquez sur le « i » en haut de cette fenêtre.
[[Comment utilise-t-il l’IA ? | Sa vision produit ?]]`,

  'tell me about go moonbound': `The idea behind Go MoonBound: turn your Strava activities into a trip to the Moon. Every run, ride, swim or walk moves you along the 384,400 km between Earth and the Moon, in a 3D scene.
---
Olivier built it with AI agents and shipped it in under 2 weeks. Strava approved it and opened its API to 999 users; 13 versions have followed since.
---
The whole story is in the [case study](https://www.oliviertousche.com/gomoonbound.html).
[[His product builder projects? | How does he use AI?]]`,

  'his passions?': `Road cycling, above all. That's actually where Go MoonBound comes from, connected to Strava.
---
And music, for over 10 years: scratching, vinyl and beatmaking on samplers, especially the MPC2000XL. He releases his beats as Floppysional.
---
What he loves about the MPC: everything fits on a 1.44 MB floppy disk, so you have to make choices. A constraint that looks a lot like how he designs products.
[[Tell me about Go MoonBound | His design approach?]]`,

  'how did he handle payments?': `Nothing was simple at first: is a phygital card a physical or a digital good? Direct payment or a wallet? Olivier tackled it with the Double Diamond.
---
He found a specialised law firm, worked with the payment provider, and used design so leadership could decide knowing the consequences.
---
In the end: a single wallet, all currencies, launched in several countries at once. It's all in the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[His design approach? | His UX research experience?]]`,

  'why this agent?': `I run on Claude Haiku, but the model is only the engine. Olivier designed the whole experience around it, from scratch: the pace of my answers, my tone, the questions I suggest, and being able to talk to me from any page.
---
Why? Because with AI, conversation is taking up more and more room in how we use products. And for Olivier, that kind of interaction is something you have to experience first-hand, on a real product.
---
Curious to know more? Click the “i” at the top of this window.
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
