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
[[Comment utilise-t-il l’IA ? | Sa vision produit ?]]`,

  "comment utilise-t-il l'ia ?": `Depuis 2025, Olivier construit lui-même ses produits avec Claude Code et Cursor : moins de transferts entre design et code, et des produits en production plus vite.
---
Exemple : [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), conçu seul en orchestrant des agents IA et en ligne en moins de 2 semaines. Depuis, il ne cesse d'évoluer au fil des attentes des utilisateurs.
---
Pour lui, le métier passe de la prescription à quelque chose de proche de la sculpture : on ajuste le produit réel, au geste.
[[Ses projets de product builder ? | Sa vision produit ?]]`,

  "parlez-moi d'altered": `Altered est un jeu de cartes à collectionner phygital : chaque carte physique a son double numérique. De 2022 à 2025, chez Equinox, Olivier a piloté la conception de tous les services digitaux B2B et B2C.
---
Résultats : 7,8 M de cartes scannées, plus de 15 pays et un premier championnat du monde en juin 2025.
---
Tout est dans l'[étude de cas](https://www.oliviertousche.com/equinox.html), dont le paiement conçu malgré un flou juridique.
[[Comment a-t-il géré le paiement ? | Comment utilise-t-il l’IA ?]]`,

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

  'ses projets de product builder ?': `Olivier conçoit et construit seul ses produits, avec des agents IA : [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), qui place vos sorties Strava sur la route de la Lune, et [Sklip](https://www.oliviertousche.com/sklip.html), pour les DJs de scratch.
---
Dans le [Laboratoire](https://www.oliviertousche.com/#laboratoire) : Stampit, Décadi et cet agent. Et NoveliA, en bêta fermée : un système d'orchestration agentique pour co-construire un produit à plusieurs.
[[Parlez-moi de Go MoonBound | Pourquoi cet agent IA ?]]`,

  'his ux research experience?': `Research is at the heart of his method: Olivier starts every project by understanding real usage and pain points.
---
On Altered, he ran player interviews, workshops with leadership and a benchmark, then tested his designs with players. Before that: focus groups and interviews at Oodrive, and foresight research on hearables at Logitech FuturLab.
---
The details are in the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[How does he use AI? | His product vision?]]`,

  'how does he use ai?': `Since 2025, Olivier builds his own products with Claude Code and Cursor: fewer handoffs between design and code, and products shipped faster.
---
Example: [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), built solo by orchestrating AI agents and live in under 2 weeks. Since then, it has kept evolving with what users expect.
---
To him, the job is shifting from prescribing to something closer to sculpting: you shape the real product by hand.
[[His product builder projects? | His product vision?]]`,

  'his product vision?': `To Olivier, design is a way to bring clarity and support decisions: make the stakes readable, align teams, turn pain points into clear products.
---
His reflex: test assumptions against reality. With AI, he builds the product himself to try it for real, where a mockup stops.
---
What drives him: bringing original, distinctive solutions.
[[His product builder projects? | How does he use AI?]]`,

  'his product builder projects?': `Olivier designs and builds his own products solo, with AI agents: [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), which puts your Strava activities on the road to the Moon, and [Sklip](https://www.oliviertousche.com/sklip.html), for scratch DJs.
---
In the [Lab](https://www.oliviertousche.com/#laboratoire): Stampit, Décadi and this agent. And NoveliA, in closed beta: an agentic orchestration system to co-build a product as a team.
[[Tell me about Go MoonBound | Why this AI agent?]]`,

  'tell me about altered': `Altered is a phygital trading card game: every physical card has a digital twin. From 2022 to 2025, at Equinox, Olivier led the design of all the B2B and B2C digital services.
---
Results: 7.8M cards scanned, 15+ countries and a first world championship in June 2025.
---
It's all in the [case study](https://www.oliviertousche.com/equinox.html), including a payment flow designed despite legal uncertainty.
[[How did he handle payments? | How does he use AI?]]`,

  'is he available?': `Yes, we're available right away, for a permanent role or freelance.
---
Olivier is based in the Paris region, open to remote and hybrid. The easiest way: email otousche@gmail.com or reach out on [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[His product builder projects? | His product vision?]]`,
};

// Même question, à la typographie près : apostrophes, espaces avant le « ? », majuscules
const normalize = (q: string) => q.trim().toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, ' ').replace(/\s*\?$/, ' ?');
const TABLE = new Map(Object.entries(CANNED).map(([q, a]) => [normalize(q), a]));

export function cannedAnswer(question: string): string | undefined {
  return TABLE.get(normalize(question));
}
