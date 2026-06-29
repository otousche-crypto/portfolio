// ─── EXPÉRIENCE : Sklip (Product Designer & Builder, 2026) ───
// Projet personnel solo : conception produit, étude de marché et développement
// (assisté par IA) d'un outil web pour DJ scratchers.
// Les images sont dans public/experiences/sklip/.
// Chaque champ texte est bilingue : { fr: '...', en: '...' }.

import type { Experience } from '../../src/lib/content-types';

export const sklip: Experience = {
  id: 'sklip',
  titre: { fr: 'Product Designer & Builder', en: 'Product Designer & Builder' },
  annee: '2026',
  entreprise: 'Sklip Studio',
  description: {
    fr: 'Outil web de composition de skip-proofs pour DJ scratchers — du constat de marché au produit testable, conçu et développé en solo.',
    en: 'Web tool for scratch DJs to compose custom skip-proofs — from market insight to a testable product, designed and built solo.',
  },
  logourl: '/experiences/sklip/logo.png',
  hero_image_url: '/experiences/sklip/composer-shot.png',
  project_title: {
    fr: 'Sklip — Outil de composition de skip-proofs pour DJ scratchers',
    en: 'Sklip — Skip-proof composition tool for scratch DJs',
  },
  role_duration: { fr: 'Product Designer & Builder · 2026', en: 'Product Designer & Builder · 2026' },
  product_name: 'Sklip',
  is_clickable: true,
  access_code: 'SKLIP2026',

  keyFigures: [
    { label: 'Marché total (TAM)', value: '~90 000 scratch DJs', icon: 'Globe' },
    { label: 'Marché accessible (SAM)', value: '~54 000 DJs équipés DVS', icon: 'Users' },
    { label: 'Concurrent web direct identifié', value: 'Aucun', icon: 'Award' },
    { label: 'Durée d\'une rotation skip-proof', value: '1818 ms', icon: 'Disc' },
  ],

  contentBlocks: [
    {
      type: 'heading',
      content: { text: { fr: 'Contexte', en: 'Context' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Un skip-proof est une boucle audio gravée sur disque vinyle — l'outil de base de tout DJ scratcher pour s'entraîner et performer. <strong>Aucun outil web n'existait pour en créer un sur mesure : les DJs bricolaient dans des DAW généralistes ou achetaient des disques préenregistrés à usage unique.</strong>",
          en: "A skip-proof is an audio loop pressed onto vinyl — the core tool of every scratch DJ for practice and performance. <strong>No web tool existed to create a custom one: DJs were hacking around in generalist DAWs or buying single-use pre-recorded records.</strong>",
        },
        alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Constat', en: 'Insight' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "~90 000 scratch DJs actifs dans le monde, ~54 000 équipés DVS. <strong>Aucun concurrent web direct identifié.</strong> Un outil dédié, positionné sous le prix d'un seul disque physique (15–33 €), avait un sens économique immédiat.",
          en: "~90,000 active scratch DJs worldwide, ~54,000 equipped with DVS. <strong>No direct web competitor identified.</strong> A dedicated tool, priced below a single physical record (€15–33), made immediate economic sense.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: { text: { fr: 'Stratégie Produit', en: 'Product Strategy' }, level: 2, alignment: 'left' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "Plutôt que de viser un produit complet, j'ai découpé Sklip en paliers et choisi de co-construire avec la communauté scratch dès le MVP. <strong>Sur ce marché, les utilisateurs les plus exigeants sont aussi les plus identifiables — leur retour vaut plus que n'importe quelle hypothèse produit.</strong> La beta fermée n'est pas une phase de QA : c'est une phase de co-construction. Le produit évolue avec eux, pas devant eux.",
          en: "Rather than aiming for a complete product, I broke Sklip into tiers and chose to co-build with the scratch community from the MVP. <strong>In this market, the most demanding users are also the most identifiable — their feedback is worth more than any product hypothesis.</strong> The closed beta is not a QA phase: it's a co-building phase. The product evolves with them, not in front of them.",
        },
        alignment: 'left',
      },
    },
    {
      type: 'diagram',
      content: {
        svg: `<svg viewBox="0 0 800 215" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:'IBM Plex Mono',monospace">
  <defs>
    <marker id="sk-arr" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
      <polygon points="0 0, 8 3.5, 0 7" fill="#cccccc"/>
    </marker>
    <marker id="sk-arr-a" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
      <polygon points="0 0, 8 3.5, 0 7" fill="#4CB8FF"/>
    </marker>
  </defs>

  <!-- ── PHASE 1 : BETA FERMÉE (actif) ── -->
  <rect x="10" y="10" width="175" height="195" fill="#4CB8FF"/>
  <circle cx="22" cy="27" r="5" fill="#111111"/>
  <text x="97" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#111111" letter-spacing="1">PHASE 1 · EN COURS</text>
  <line x1="20" y1="42" x2="174" y2="42" stroke="#111111" stroke-width="0.5" opacity="0.3"/>
  <text x="97" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#111111" letter-spacing="0.5">BETA FERMÉE</text>
  <text x="97" y="84" text-anchor="middle" font-size="8" fill="#111111">Invitations nominatives</text>
  <text x="97" y="100" text-anchor="middle" font-size="8" fill="#111111">DJs de compétition</text>
  <text x="97" y="116" text-anchor="middle" font-size="8" fill="#111111">0 communication externe</text>
  <text x="97" y="132" text-anchor="middle" font-size="8" fill="#111111">Discord privé dédié</text>
  <line x1="20" y1="148" x2="174" y2="148" stroke="#111111" stroke-width="0.5" opacity="0.3"/>
  <text x="97" y="165" text-anchor="middle" font-size="8" fill="#111111">~15 beta-testeurs</text>
  <text x="97" y="181" text-anchor="middle" font-size="8" fill="#111111">Recrutement nominatif</text>

  <!-- Arrow 1 (accent) -->
  <line x1="186" y1="107" x2="210" y2="107" stroke="#4CB8FF" stroke-width="2" marker-end="url(#sk-arr-a)"/>

  <!-- ── PHASE 2 : BETA FERMÉE+ ── -->
  <rect x="213" y="10" width="175" height="195" fill="#ffffff" stroke="#cccccc" stroke-width="1.5"/>
  <text x="300" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#aaaaaa" letter-spacing="1">PHASE 2</text>
  <line x1="223" y1="42" x2="377" y2="42" stroke="#dddddd" stroke-width="0.5"/>
  <text x="300" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#111111" letter-spacing="0.5">BETA FERMÉE+</text>
  <text x="300" y="84" text-anchor="middle" font-size="8" fill="#666666">Communautés qualifiées</text>
  <text x="300" y="100" text-anchor="middle" font-size="8" fill="#666666">r/turntablism · Discord</text>
  <text x="300" y="116" text-anchor="middle" font-size="8" fill="#666666">Formulaire de qualification</text>
  <text x="300" y="132" text-anchor="middle" font-size="8" fill="#666666">Feedback itératif structuré</text>
  <line x1="223" y1="148" x2="377" y2="148" stroke="#dddddd" stroke-width="0.5"/>
  <text x="300" y="165" text-anchor="middle" font-size="8" fill="#aaaaaa">~100 utilisateurs</text>
  <text x="300" y="181" text-anchor="middle" font-size="8" fill="#aaaaaa">Accès sur demande</text>

  <!-- Arrow 2 -->
  <line x1="389" y1="107" x2="413" y2="107" stroke="#cccccc" stroke-width="2" marker-end="url(#sk-arr)"/>

  <!-- ── PHASE 3 : BETA OUVERTE ── -->
  <rect x="416" y="10" width="175" height="195" fill="#ffffff" stroke="#cccccc" stroke-width="1.5"/>
  <text x="503" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#aaaaaa" letter-spacing="1">PHASE 3</text>
  <line x1="426" y1="42" x2="580" y2="42" stroke="#dddddd" stroke-width="0.5"/>
  <text x="503" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#111111" letter-spacing="0.5">BETA OUVERTE</text>
  <text x="503" y="84" text-anchor="middle" font-size="8" fill="#666666">Inscription libre</text>
  <text x="503" y="100" text-anchor="middle" font-size="8" fill="#666666">Mesure conversion freemium</text>
  <text x="503" y="116" text-anchor="middle" font-size="8" fill="#666666">Analyse de rétention</text>
  <text x="503" y="132" text-anchor="middle" font-size="8" fill="#666666">Ajustements pricing</text>
  <line x1="426" y1="148" x2="580" y2="148" stroke="#dddddd" stroke-width="0.5"/>
  <text x="503" y="165" text-anchor="middle" font-size="8" fill="#aaaaaa">~500+ utilisateurs</text>
  <text x="503" y="181" text-anchor="middle" font-size="8" fill="#aaaaaa">Accès libre</text>

  <!-- Arrow 3 -->
  <line x1="592" y1="107" x2="616" y2="107" stroke="#cccccc" stroke-width="2" marker-end="url(#sk-arr)"/>

  <!-- ── PHASE 4 : LANCEMENT PUBLIC ── -->
  <rect x="619" y="10" width="175" height="195" fill="#111111"/>
  <text x="706" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#555555" letter-spacing="1">PHASE 4</text>
  <line x1="629" y1="42" x2="783" y2="42" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
  <text x="706" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#4CB8FF" letter-spacing="0.5">LANCEMENT PUBLIC</text>
  <text x="706" y="84" text-anchor="middle" font-size="8" fill="#dddddd">Preuve sociale accumulée</text>
  <text x="706" y="100" text-anchor="middle" font-size="8" fill="#dddddd">Growth organique</text>
  <text x="706" y="116" text-anchor="middle" font-size="8" fill="#dddddd">Communautés scratch</text>
  <text x="706" y="132" text-anchor="middle" font-size="8" fill="#dddddd">Presse spécialisée</text>
  <line x1="629" y1="148" x2="783" y2="148" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
  <text x="706" y="165" text-anchor="middle" font-size="8" fill="#4CB8FF">Ouvert à tous</text>
  <text x="706" y="181" text-anchor="middle" font-size="8" fill="#555555">Lancement officiel</text>
</svg>`,
        caption: {
          fr: 'Stratégie de lancement progressive — Phase 1 active, croissance volontairement non automatique',
          en: 'Phased launch strategy — Phase 1 active, deliberately controlled growth',
        },
      },
    },
    {
      type: 'divider',
      content: { style: 'dots' },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: "www.sklip.studio",
          en: "www.sklip.studio",
        },
        alignment: 'left',
      },
    },
  ],
};
