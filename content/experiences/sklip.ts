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
          fr: `Aujourd'hui, 90 000 DJs pratiquent le scratch dans le monde. 54 000 d'entre eux sont équipés d'une solution digitale appelée DVS — un système qui leur permet de contrôler des logiciels audio via de vrais platines vinyle. <strong>Pourtant, aucune solution digitale ne leur est proposée pour leur pratique du scratch.</strong>

Ils utilisent encore des vinyles physiques, avec tous leurs pain points : fragiles, difficiles à trouver, onéreux, non customisables — et composés de samples non libres de droits, qui leur interdisent d'utiliser ces compositions dans des œuvres originales.`,
          en: `Today, 90,000 DJs practice scratch worldwide. 54,000 of them are equipped with a digital solution called DVS — a system that lets them control audio software via real vinyl turntables. <strong>Yet no digital solution exists for their scratch practice.</strong>

They still rely on physical vinyl records, with all the pain points that come with them: fragile, hard to find, expensive, non-customisable — and made of copyrighted samples that prevent them from using these compositions in original work.`,
        },
        alignment: 'left',
      },
    },
    {
      type: 'heading',
      content: {
        text: { fr: "L'idée", en: 'The Idea' },
        level: 2,
        alignment: 'left',
      },
    },
    {
      type: 'text',
      content: {
        text: {
          fr: `Sklip s'adresse aux DJs équipés DVS pour corriger ces pain points un par un. <strong>Une librairie de samples libres de droits, conçue spécifiquement pour la pratique du scratch — et un outil pour composer soi-même ses propres enchaînements.</strong>

Plus de galère pour trouver le bon disque. Plus de samples inutilisables dans une œuvre originale. Une composition sur mesure, exportée en numérique, prête à l'emploi.`,
          en: `Sklip targets DVS-equipped DJs to fix these pain points one by one. <strong>A library of copyright-free samples, designed specifically for scratch practice — and a tool to compose your own custom sequences.</strong>

No more hunting for the right record. No more samples you can't use in original work. A custom composition, exported digitally, ready to use.`,
        },
        alignment: 'left',
      },
    },
    {
      type: 'diagram',
      content: {
        svg: `<svg viewBox="0 0 700 255" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:'IBM Plex Mono',monospace">

  <!-- LEFT PANEL : LIBRAIRIE IA -->
  <rect x="10" y="10" width="295" height="235" fill="#fff" stroke="#4CB8FF" stroke-width="1.5"/>
  <rect x="10" y="10" width="295" height="42" fill="#4CB8FF"/>
  <text x="25" y="32" font-size="10" font-weight="700" fill="#111" letter-spacing="1">LIBRAIRIE IA</text>
  <text x="25" y="46" font-size="7" fill="#111" opacity="0.7">Samples libres de droits · Générés par IA</text>

  <rect x="25" y="67" width="4" height="4" fill="#111"/>
  <text x="38" y="75" font-size="9" fill="#333">Libre de droits</text>

  <rect x="25" y="97" width="4" height="4" fill="#111"/>
  <text x="38" y="105" font-size="9" fill="#333">Gratuite</text>

  <rect x="25" y="127" width="4" height="4" fill="#111"/>
  <text x="38" y="135" font-size="9" fill="#333">High quality</text>

  <rect x="25" y="157" width="4" height="4" fill="#111"/>
  <text x="38" y="165" font-size="9" fill="#333">Par catégories</text>

  <rect x="25" y="187" width="4" height="4" fill="#111"/>
  <text x="38" y="195" font-size="9" fill="#333">Mise à jour régulièrement</text>

  <rect x="25" y="217" width="4" height="4" fill="#111"/>
  <text x="38" y="225" font-size="9" fill="#333">Générée par IA</text>

  <!-- RIGHT PANEL : OUTIL DE COMPOSITION -->
  <rect x="395" y="10" width="295" height="235" fill="#fff" stroke="#111" stroke-width="1.5"/>
  <rect x="395" y="10" width="295" height="42" fill="#111"/>
  <text x="410" y="32" font-size="10" font-weight="700" fill="#4CB8FF" letter-spacing="1">COMPOSITEUR</text>
  <text x="410" y="46" font-size="7" fill="#666">Outil de composition scratch</text>

  <rect x="410" y="67" width="4" height="4" fill="#4CB8FF"/>
  <text x="423" y="75" font-size="9" fill="#333">Visuel</text>

  <rect x="410" y="102" width="4" height="4" fill="#4CB8FF"/>
  <text x="423" y="110" font-size="9" fill="#333">Accessible</text>

  <rect x="410" y="137" width="4" height="4" fill="#4CB8FF"/>
  <text x="423" y="145" font-size="9" fill="#333">Ergonomique</text>

  <rect x="410" y="172" width="4" height="4" fill="#4CB8FF"/>
  <text x="423" y="180" font-size="9" fill="#333">Facile à prendre en main</text>

  <rect x="410" y="207" width="4" height="4" fill="#4CB8FF"/>
  <text x="423" y="215" font-size="9" fill="#333">Répondant aux attentes</text>
  <text x="423" y="229" font-size="9" fill="#333">spécifiques du scratch</text>
</svg>`,
        caption: {
          fr: 'Librairie IA (gauche) → Compositeur vinyle (droite)',
          en: 'AI Library (left) → Vinyl Composer (right)',
        },
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
