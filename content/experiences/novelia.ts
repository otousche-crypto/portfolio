// ─── EXPÉRIENCE : NoveliA (Product Designer & Builder, 2026) ───
// Série littéraire participative : un épisode quotidien généré par IA,
// la suite définie par le vote de la communauté.
// Les images sont dans public/experiences/novelia/.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { Experience } from '../../src/lib/content-types';

const orchestrationSVG = `<svg viewBox="0 0 800 390" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:'IBM Plex Mono',monospace">
  <defs>
    <marker id="nv-arr" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
      <polygon points="0 0, 8 3.5, 0 7" fill="#111111"/>
    </marker>
    <marker id="nv-arr-blue" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
      <polygon points="0 0, 8 3.5, 0 7" fill="#4CB8FF"/>
    </marker>
  </defs>

  <!-- AGENT PO (dispatch central) -->
  <rect x="275" y="15" width="250" height="55" fill="#4CB8FF"/>
  <text x="400" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#111111" letter-spacing="1.5">AGENT PO</text>
  <text x="400" y="57" text-anchor="middle" font-size="9" fill="#111111">Dispatch tâches + context aux partenaires</text>

  <!-- Fan-out PO → 3 partenaires (pointillés bleus) -->
  <line x1="400" y1="70" x2="400" y2="86" stroke="#4CB8FF" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="132" y1="86" x2="668" y2="86" stroke="#4CB8FF" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="132" y1="86" x2="132" y2="108" stroke="#4CB8FF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#nv-arr-blue)"/>
  <line x1="400" y1="86" x2="400" y2="108" stroke="#4CB8FF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#nv-arr-blue)"/>
  <line x1="668" y1="86" x2="668" y2="108" stroke="#4CB8FF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#nv-arr-blue)"/>

  <!-- ── PARTENAIRE 1 ── -->
  <rect x="15" y="112" width="234" height="178" fill="#ffffff" stroke="#111111" stroke-width="1.5"/>
  <text x="132" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1.5">PARTENAIRE 1</text>
  <!-- Agent UX -->
  <rect x="30" y="142" width="204" height="52" fill="#ffffff" stroke="#4CB8FF" stroke-width="1"/>
  <text x="132" y="163" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1">AGENT UX</text>
  <text x="132" y="180" text-anchor="middle" font-size="8" fill="#666666">Parcours · Tests utilisateurs</text>
  <!-- Agent Recherche -->
  <rect x="30" y="207" width="204" height="52" fill="#ffffff" stroke="#4CB8FF" stroke-width="1"/>
  <text x="132" y="228" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1">AGENT RECHERCHE</text>
  <text x="132" y="245" text-anchor="middle" font-size="8" fill="#666666">Benchmark · Analyse marché</text>

  <!-- ── PARTENAIRE 2 ── -->
  <rect x="283" y="112" width="234" height="178" fill="#ffffff" stroke="#111111" stroke-width="1.5"/>
  <text x="400" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1.5">PARTENAIRE 2</text>
  <!-- Agent UI -->
  <rect x="298" y="142" width="204" height="52" fill="#ffffff" stroke="#4CB8FF" stroke-width="1"/>
  <text x="400" y="163" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1">AGENT UI</text>
  <text x="400" y="180" text-anchor="middle" font-size="8" fill="#666666">Composants · Design system</text>
  <!-- Agent DA -->
  <rect x="298" y="207" width="204" height="52" fill="#ffffff" stroke="#4CB8FF" stroke-width="1"/>
  <text x="400" y="228" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1">AGENT DA</text>
  <text x="400" y="245" text-anchor="middle" font-size="8" fill="#666666">Direction artistique · Motion</text>

  <!-- ── PARTENAIRE 3 ── -->
  <rect x="551" y="112" width="234" height="178" fill="#ffffff" stroke="#111111" stroke-width="1.5"/>
  <text x="668" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1.5">PARTENAIRE 3</text>
  <!-- Agent Dev -->
  <rect x="566" y="142" width="204" height="52" fill="#ffffff" stroke="#4CB8FF" stroke-width="1"/>
  <text x="668" y="163" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1">AGENT DEV</text>
  <text x="668" y="180" text-anchor="middle" font-size="8" fill="#666666">Développement · Intégration</text>
  <!-- Agent Architecture -->
  <rect x="566" y="207" width="204" height="52" fill="#ffffff" stroke="#4CB8FF" stroke-width="1"/>
  <text x="668" y="228" text-anchor="middle" font-size="9" font-weight="700" fill="#111111" letter-spacing="1">AGENT ARCHITECTURE</text>
  <text x="668" y="245" text-anchor="middle" font-size="8" fill="#666666">Infra · Déploiement</text>

  <!-- Fan-in → NoveliA -->
  <line x1="132" y1="290" x2="132" y2="312" stroke="#111111" stroke-width="1.5"/>
  <line x1="400" y1="290" x2="400" y2="312" stroke="#111111" stroke-width="1.5"/>
  <line x1="668" y1="290" x2="668" y2="312" stroke="#111111" stroke-width="1.5"/>
  <line x1="132" y1="312" x2="668" y2="312" stroke="#111111" stroke-width="1.5"/>
  <line x1="400" y1="312" x2="400" y2="330" stroke="#111111" stroke-width="1.5" marker-end="url(#nv-arr)"/>

  <!-- OUTPUT NOVELIA -->
  <rect x="275" y="333" width="250" height="52" fill="#111111"/>
  <text x="400" y="356" text-anchor="middle" font-size="11" font-weight="700" fill="#4CB8FF" letter-spacing="1.5">NOVELIA</text>
  <text x="400" y="374" text-anchor="middle" font-size="9" fill="#ffffff">Produit livré · itération continue</text>
</svg>`;

export const novelia: Experience = {
  id: 'novelia',
  titre: { fr: 'Product Designer & Builder', en: 'Product Designer & Builder' },
  annee: '2026',
  entreprise: 'Collaboration & Agentic Orchestration',
  description: {
    fr: 'NoveliA est le prétexte. Le vrai projet : mettre en place un système d\'orchestration agentique et un espace de travail collaboratif partagé — une nouvelle façon de co-construire un produit à plusieurs, avec des agents IA spécialisés. La série littéraire est le terrain d\'expérimentation.',
    en: 'NoveliA is the pretext. The real project: building an agentic orchestration system and a shared collaborative workspace — a new way to co-build a product as a team, with specialised AI agents. The literary series is the testing ground.',
  },
  logourl: '/experiences/novelia/logo.png',
  hero_image_url: '/experiences/novelia/hero.png',
  project_title: {
    fr: 'NoveliA — Une série littéraire participative pilotée par la communauté',
    en: 'NoveliA — A participative literary series driven by the community',
  },
  role_duration: { fr: 'Product Designer & Builder · 2026', en: 'Product Designer & Builder · 2026' },
  product_name: 'NoveliA',
  is_clickable: true,
  access_code: 'NOVELIA',

  contentBlocks: [
    {
      type: 'heading',
      content: { text: { fr: 'Le Concept', en: 'The Concept' }, level: 2, alignment: 'left' },
    },
    {
      type: 'section_vertical',
      content: {
        image_url: '/experiences/novelia/hero.png',
        image_alt: { fr: 'Interface de NoveliA', en: 'NoveliA interface' },
        text_content: {
          fr: "<strong>NoveliA est le prétexte. Le vrai projet, c'est la mise en place d'un système d'orchestration agentique et d'un espace de travail collaboratif partagé — une infrastructure pour co-construire un produit à plusieurs, avec des agents IA spécialisés à chaque périmètre.</strong>\n\n[IMAGE]\n\nLa série littéraire n'est pas un à-côté : c'est le terrain d'expérimentation. Concevoir et lancer NoveliA — un épisode quotidien généré par IA, la suite définie chaque soir par le vote de la communauté — impose de résoudre en conditions réelles tous les problèmes que l'environnement de travail doit adresser : coordination entre partenaires, dispatch de contexte, agents spécialisés, itération continue sans friction.\n\nNoveliA est donc à la fois le produit livré et la preuve que l'environnement fonctionne.",
          en: "<strong>NoveliA is the pretext. The real project is building an agentic orchestration system and a shared collaborative workspace — an infrastructure for co-building a product as a team, with specialised AI agents at every scope.</strong>\n\n[IMAGE]\n\nThe literary series is not a side project: it's the testing ground. Designing and launching NoveliA — a daily AI-generated episode, the next chapter decided each evening by community vote — forces us to solve in real conditions every problem the work environment is meant to address: partner coordination, context dispatch, specialised agents, continuous iteration without friction.\n\nNoveliA is therefore both the delivered product and the proof that the environment works.",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Orchestration Agentique', en: 'Agentic Orchestration' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "L'orchestration agentique, c'est l'idée de confier un projet complexe non pas à une seule personne ou à un seul outil, mais à <strong>un ensemble d'agents spécialisés, coordonnés par un Agent PO central qui dispatch les tâches et le contexte à chaque partenaire</strong> — lequel dispose lui-même de ses propres agents pour exécuter son périmètre.\n\nSur NoveliA, nous travaillons à trois partenaires. L'Agent PO maintient la vision produit globale, traduit chaque décision en tâches précises, et s'assure que chaque partenaire opère avec le bon contexte au bon moment — sans réunion de synchronisation, sans friction de transmission.",
          en: "Agentic orchestration means delegating a complex project not to a single person or tool, but to <strong>a set of specialised agents, coordinated by a central PO Agent that dispatches tasks and context to each partner</strong> — who in turn has their own agents to execute their scope.\n\nOn NoveliA, we work as three partners. The PO Agent maintains the overall product vision, translates each decision into precise tasks, and ensures every partner operates with the right context at the right time — no sync meetings, no handoff friction.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'diagram',
      content: {
        svg: orchestrationSVG,
        caption: {
          fr: 'Orchestration agentique NoveliA — Agent PO central, 3 partenaires, agents spécialisés par périmètre',
          en: 'NoveliA agentic orchestration — Central PO Agent, 3 partners, specialised agents per scope',
        },
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Chaque partenaire dispose de ses propres agents spécialisés :\n\n• <strong>Partenaire 1 — Agent UX + Agent Recherche</strong> : parcours utilisateurs, tests, benchmark et analyse de marché. Il travaille sur la compréhension des besoins et la validation des hypothèses produit.\n• <strong>Partenaire 2 — Agent UI + Agent DA</strong> : composants, design system, direction artistique et motion. Il assure la cohérence visuelle et l'expérience d'interface de bout en bout.\n• <strong>Partenaire 3 — Agent Dev + Agent Architecture</strong> : développement, intégration, infrastructure et déploiement. Il traduit les specs en code de production.\n\n<strong>L'Agent PO coordonne les trois partenaires en temps réel : il dispatch le contexte, priorise les tâches, et s'assure que chaque partenaire travaille toujours sur ce qui a le plus de valeur pour le produit — sans perte d'information entre les mains.</strong>",
          en: "Each partner has their own specialised agents:\n\n• <strong>Partner 1 — UX Agent + Research Agent</strong>: user journeys, testing, benchmarking and market analysis. They work on understanding needs and validating product hypotheses.\n• <strong>Partner 2 — UI Agent + Art Direction Agent</strong>: components, design system, art direction and motion. They ensure visual consistency and end-to-end interface experience.\n• <strong>Partner 3 — Dev Agent + Architecture Agent</strong>: development, integration, infrastructure and deployment. They translate specs into production code.\n\n<strong>The PO Agent coordinates all three partners in real time: it dispatches context, prioritises tasks, and ensures every partner is always working on what delivers the most value — with no information lost in handoffs.</strong>",
        },
        alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Démarche Design', en: 'Design Approach' }, level: 2, alignment: 'left' },
    },
    {
      type: 'section_vertical',
      content: {
        heading_text: { fr: 'Une expérience de lecture avant tout', en: 'A reading experience first' },
        heading_level: 3,
        subtitle: {
          fr: 'Concevoir pour le rituel quotidien : lisibilité, vote, engagement',
          en: 'Designing for the daily ritual: readability, vote, engagement',
        },
        text_content: {
          fr: "Le défi central n'était pas technique — c'était de conception : comment créer une interface qui rende la lecture agréable et le vote naturel, sans que l'un empiète sur l'autre ?\n\nJ'ai posé trois contraintes dès le départ. D'abord, <strong>la lecture prime</strong> : l'interface doit disparaître au profit du texte. Ensuite, <strong>le vote est un moment</strong> : il n'apparaît qu'en fin d'épisode, comme une révélation, pas comme une distraction. Enfin, <strong>le lien communautaire est visible</strong> : les pourcentages de vote en temps réel rappellent au lecteur qu'il fait partie d'une communauté qui lit en même temps que lui.\n\nLa direction artistique — fond sombre, typographie généreuse, accents chauds — a été choisie pour évoquer l'intimité d'une lecture nocturne plutôt que l'interface froide d'un service numérique.",
          en: "The central challenge wasn't technical — it was design: how do you build an interface that makes reading enjoyable and voting feel natural, without one interfering with the other?\n\nI set three constraints from the start. First, <strong>reading comes first</strong>: the interface must disappear in favour of the text. Second, <strong>the vote is a moment</strong>: it only appears at the end of the episode, as a revelation, not a distraction. Third, <strong>the community bond is visible</strong>: real-time vote percentages remind the reader they're part of a community reading alongside them.\n\nThe art direction — dark background, generous typography, warm accents — was chosen to evoke the intimacy of late-night reading rather than the cold interface of a digital service.",
        },
        text_alignment: 'left',
      },
    },
    {
      type: 'divider',
      content: { style: 'dots' },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Conclusion', en: 'Conclusion' }, level: 2, alignment: 'left' },
    },
    {
      type: 'heading',
      content: {
        text: {
          fr: 'De l\'idée à la bêta : un produit solo, du concept au pipeline IA',
          en: 'From idea to beta: a solo product, from concept to AI pipeline',
        },
        level: 3,
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "NoveliA explore une nouvelle forme narrative : ni roman classique, ni jeu narratif, mais une série vivante, co-dirigée par ses lecteurs. Le projet démontre qu'un designer peut, avec les outils actuels, piloter l'intégralité d'une chaîne produit — de la vision jusqu'à l'architecture technique.",
          en: "NoveliA explores a new narrative form: not a classic novel, not a narrative game, but a living series co-directed by its readers. The project demonstrates that a designer can, with today's tools, drive an entire product chain — from vision through to technical architecture.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "• Série littéraire participative : un épisode quotidien, un vote communautaire\n• Pipeline d'orchestration agentique : 3 agents en parallèle + orchestrateur central\n• Publication automatique à 19h00, chaque soir\n• Conçu et développé en solo — design, architecture produit et développement assisté par IA",
          en: "• Participative literary series: one daily episode, one community vote\n• Agentic orchestration pipeline: 3 parallel agents + central orchestrator\n• Automatic publication at 7pm, every evening\n• Designed and built solo — design, product architecture and AI-assisted development",
        },
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "<strong>NoveliA est en bêta fermée : les premiers lecteurs sont invités à découvrir la série et à façonner son récit, épisode après épisode.</strong>",
          en: "<strong>NoveliA is in closed beta: the first readers are invited to discover the series and shape its story, episode by episode.</strong>",
        },
        alignment: 'left',
      },
    },
  ],
};
