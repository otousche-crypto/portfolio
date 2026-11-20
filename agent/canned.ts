// ─── RÉPONSES PRÉ-CALCULÉES : les questions suggérées au démarrage ───
// Les quatre boutons de départ (site/agent.html, T.fr.suggestions / T.en.suggestions) reviennent
// dans la plupart des conversations : on y répond sans appeler le modèle, donc sans coût.
// Même format qu'une réponse de l'agent (bulles séparées par ---, suggestions [[…]] en dernière ligne).
// À relire si le profil change : ces textes ne se mettent pas à jour tout seuls.

const CANNED: Record<string, string> = {
  'son expérience en recherche ux ?': `La recherche est au cœur de sa méthode : Olivier commence chaque projet par comprendre les usages réels et les irritants.
---
Sur Altered, il a mené des entretiens joueurs, des ateliers avec la direction et un benchmark, puis testé ses maquettes auprès des joueurs. Avant ça : focus groups et entretiens chez Oodrive, et recherche prospective sur les hearables chez Logitech FuturLab.
---
Le détail est dans l'[étude de cas Altered](https://www.oliviertousche.com/equinox.html).
[[Ses résultats sur Altered ? | Sa façon de travailler ?]]`,

  "comment utilise-t-il l'ia ?": `Depuis 2025, Olivier construit lui-même ses produits avec Claude Code et Cursor : moins de transferts entre design et code, et des produits en production plus vite.
---
Exemple : [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), conçu seul en 2 semaines en orchestrant des agents IA. Lui garde l'intention, les arbitrages, les tests et les mises en production.
---
Pour lui, le métier passe de la prescription à quelque chose de proche de la sculpture : on ajuste le produit réel, au geste.
[[Parlez-moi de Go MoonBound | Ses autres projets perso ?]]`,

  "parlez-moi d'altered": `Altered est un jeu de cartes à collectionner phygital : chaque carte physique a son double numérique. De 2022 à 2025, chez Equinox, Olivier a piloté la conception de tous les services digitaux B2B et B2C.
---
Résultats : 7,8 M de cartes scannées, plus de 15 pays et un premier championnat du monde en juin 2025.
---
Tout est dans l'[étude de cas](https://www.oliviertousche.com/equinox.html), dont le paiement conçu malgré un flou juridique.
[[Comment a-t-il géré le paiement ? | Son rôle au quotidien ?]]`,

  'est-il disponible ?': `Oui, nous sommes disponibles tout de suite, en CDI comme en freelance.
---
Olivier est basé en région parisienne, ouvert au remote et à l'hybride. Le plus simple : lui écrire à otousche@gmail.com ou sur [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[Ses projets récents ? | Son expérience en recherche UX ?]]`,

  'his ux research experience?': `Research is at the heart of his method: Olivier starts every project by understanding real usage and pain points.
---
On Altered, he ran player interviews, workshops with leadership and a benchmark, then tested his designs with players. Before that: focus groups and interviews at Oodrive, and foresight research on hearables at Logitech FuturLab.
---
The details are in the [Altered case study](https://www.oliviertousche.com/equinox.html).
[[His results on Altered? | How does he work?]]`,

  'how does he use ai?': `Since 2025, Olivier builds his own products with Claude Code and Cursor: fewer handoffs between design and code, and products shipped faster.
---
Example: [Go MoonBound](https://www.oliviertousche.com/gomoonbound.html), built solo in 2 weeks by orchestrating AI agents. He keeps the intent, the trade-offs, the testing and the releases.
---
To him, the job is shifting from prescribing to something closer to sculpting: you shape the real product by hand.
[[Tell me about Go MoonBound | His other side projects?]]`,

  'tell me about altered': `Altered is a phygital trading card game: every physical card has a digital twin. From 2022 to 2025, at Equinox, Olivier led the design of all the B2B and B2C digital services.
---
Results: 7.8M cards scanned, 15+ countries and a first world championship in June 2025.
---
It's all in the [case study](https://www.oliviertousche.com/equinox.html), including a payment flow designed despite legal uncertainty.
[[How did he handle payments? | His day-to-day role?]]`,

  'is he available?': `Yes, we're available right away, for a permanent role or freelance.
---
Olivier is based in the Paris region, open to remote and hybrid. The easiest way: email otousche@gmail.com or reach out on [LinkedIn](https://www.linkedin.com/in/olivier-tousche-a6160b122/).
[[His recent projects? | His UX research experience?]]`,
};

// Même question, à la typographie près : apostrophes, espaces avant le « ? », majuscules
const normalize = (q: string) => q.trim().toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, ' ').replace(/\s*\?$/, ' ?');
const TABLE = new Map(Object.entries(CANNED).map(([q, a]) => [normalize(q), a]));

export function cannedAnswer(question: string): string | undefined {
  return TABLE.get(normalize(question));
}
