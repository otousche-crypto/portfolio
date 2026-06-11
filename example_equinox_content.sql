-- Exemple de contenu structuré pour l'expérience EQUINOX
-- Ce fichier montre comment ajouter des blocs de contenu riches avec des schémas, images et pictogrammes
--
-- Pour utiliser ce fichier:
-- 1. Remplacez 'YOUR_EXPERIENCE_ID' par l'ID réel de l'expérience EQUINOX
-- 2. Remplacez les URLs d'images par vos propres URLs d'images hébergées
-- 3. Exécutez ce SQL dans votre base de données Supabase

-- D'abord, trouvez l'ID de l'expérience EQUINOX:
-- SELECT id FROM experiences WHERE entreprise = 'Equinox';

-- Variables (remplacez par les vraies valeurs):
-- @experience_id = ID de l'expérience EQUINOX

-- Bloc 1: Titre de section "Contexte & responsabilité"
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  1,
  'heading',
  '{"text": "Contexte & responsabilité", "level": 2}'::jsonb,
  true
);

-- Bloc 2: Paragraphe de contexte
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  2,
  'text',
  '{"text": "Equinox est un studio indépendant développant Altered, un jeu de cartes à collectionner nouvelle génération, pensé dès l''origine comme un écosystème phygital associant cartes physiques et services digitaux avancés.\n\nLe projet a connu un succès majeur lors de sa campagne Kickstarter, validant fortement la proposition de valeur et donnant naissance à une communauté internationale de joueurs très engagée. Ce succès a rapidement placé l''équipe dans un contexte de forte exposition publique, avec des deadlines serrées, des enjeux de passage à l''échelle et un haut niveau d''exigence sur la qualité du produit.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 3: Image du produit Altered (remplacez l'URL par votre image)
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  3,
  'image',
  '{"url": "https://example.com/altered-cards.jpg", "alt": "Cartes Altered", "caption": "Écosystème phygital Altered - Cartes physiques et services digitaux", "width": "large"}'::jsonb,
  true
);

-- Bloc 4: Séparateur
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  4,
  'divider',
  '{"style": "line"}'::jsonb,
  true
);

-- Bloc 5: Titre "Produit & impact"
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  5,
  'heading',
  '{"text": "Produit & impact", "level": 2}'::jsonb,
  true
);

-- Bloc 6: Description du produit
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  6,
  'text',
  '{"text": "J''ai conçu les services digitaux cœur de l''écosystème Altered, en prenant en charge leur logique fonctionnelle, leurs parcours utilisateurs et leur cohérence globale.\n\nCela incluait notamment la gestion de collection digitale, avec un système de revendication des cartes physiques via QR codes, permettant d''établir un lien fiable entre possession physique et identité numérique. J''ai également travaillé sur la cagnotte intégrée et les flux financiers associés, dans un contexte de transactions internationales impliquant des contraintes fiscales et réglementaires fortes.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 7: Grille d'images - Captures d'écran de l'application (remplacez les URLs)
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  7,
  'image_grid',
  '{"columns": 2, "images": [
    {"url": "https://example.com/screenshot1.jpg", "alt": "Gestion de collection", "caption": "Interface de collection digitale"},
    {"url": "https://example.com/screenshot2.jpg", "alt": "Système de QR codes", "caption": "Revendication via QR codes"}
  ]}'::jsonb,
  true
);

-- Bloc 8: Séparateur avec points
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  8,
  'divider',
  '{"style": "dots"}'::jsonb,
  true
);

-- Bloc 9: Titre "Méthodologie — 4 piliers"
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  9,
  'heading',
  '{"text": "Méthodologie — 4 piliers", "level": 2}'::jsonb,
  true
);

-- Bloc 10: Introduction méthodologie
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  10,
  'text',
  '{"text": "Mon approche s''articulait autour de quatre piliers, pensés pour des produits complexes, communautaires et fortement exposés :", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 11: Schéma des 4 piliers (remplacez l'URL par votre schéma)
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  11,
  'image',
  '{"url": "https://example.com/4-piliers-schema.jpg", "alt": "Schéma des 4 piliers méthodologiques", "caption": "Cadrer → Ancrer → Structurer → Déployer", "width": "medium"}'::jsonb,
  true
);

-- Bloc 12: Pilier 1 - Cadrer
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  12,
  'heading',
  '{"text": "Cadrer", "level": 3}'::jsonb,
  true
);

INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  13,
  'text',
  '{"text": "Définir clairement les problématiques en alignant enjeux produit, contraintes techniques et réglementaires, afin de prioriser et décider rapidement.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 14: Pilier 2 - Ancrer
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  14,
  'heading',
  '{"text": "Ancrer", "level": 3}'::jsonb,
  true
);

INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  15,
  'text',
  '{"text": "Fonder les décisions design sur la recherche utilisateur qualitative et quantitative, menée auprès d''une communauté internationale de joueurs et enrichie par des échanges terrain avec des gérants de magasins spécialisés.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 16: Pilier 3 - Structurer
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  16,
  'heading',
  '{"text": "Structurer", "level": 3}'::jsonb,
  true
);

INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  17,
  'text',
  '{"text": "Concevoir des parcours utilisateurs clairs, robustes et évolutifs, pensés pour être implémentés efficacement et maintenir leur cohérence dans le temps.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 18: Pilier 4 - Déployer
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  18,
  'heading',
  '{"text": "Déployer", "level": 3}'::jsonb,
  true
);

INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  19,
  'text',
  '{"text": "Tester, livrer sous deadlines serrées et améliorer en continu l''expérience à partir des retours utilisateurs, des données d''usage et des feedbacks communautaires.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 20: Séparateur
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  20,
  'divider',
  '{"style": "line"}'::jsonb,
  true
);

-- Bloc 21: Titre "Posture & apprentissages"
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  21,
  'heading',
  '{"text": "Posture & apprentissages", "level": 2}'::jsonb,
  true
);

-- Bloc 22: Conclusion
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  22,
  'text',
  '{"text": "Ce projet m''a permis d''affirmer une posture de Product Designer Senior dans un environnement international, entrepreneurial et sous contrainte, avec une responsabilité end-to-end sur le périmètre digital.\n\nJ''y ai développé une capacité à cadrer des problématiques complexes, à arbitrer rapidement dans des contextes à forte visibilité, à travailler au contact direct d''une communauté engagée et à accompagner un produit sur le long terme, de sa vision à sa mise à l''échelle.", "alignment": "left"}'::jsonb,
  true
);

-- Bloc 23: Citation (optionnelle)
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'YOUR_EXPERIENCE_ID',
  23,
  'quote',
  '{"text": "Un écosystème phygital réussi nécessite une vision produit claire et une exécution rigoureuse, en plaçant toujours l''utilisateur au centre des décisions.", "author": "Olivier Tousche"}'::jsonb,
  true
);

-- =============================================================================
-- NOUVEAUX TYPES DE BLOCS DISPONIBLES
-- =============================================================================

-- BLOC VERTICAL (section_vertical)
-- Affiche un titre, puis une image, puis un paragraphe de texte - empilés verticalement
--
-- Exemple:
-- INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
-- VALUES (
--   'YOUR_EXPERIENCE_ID',
--   24,
--   'section_vertical',
--   '{
--     "heading_text": "Innovation produit",
--     "heading_level": 2,
--     "image_url": "https://example.com/innovation.jpg",
--     "image_alt": "Processus d''innovation",
--     "image_caption": "Notre approche centrée utilisateur",
--     "text_content": "Nous avons développé une méthodologie unique permettant de...",
--     "text_alignment": "left"
--   }'::jsonb,
--   true
-- );

-- BLOC HORIZONTAL (section_horizontal)
-- Affiche un titre en haut, puis l''image à gauche et le texte à droite (50/50)
-- Sur mobile, l''image et le texte s''empilent verticalement
--
-- Exemple:
-- INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
-- VALUES (
--   'YOUR_EXPERIENCE_ID',
--   25,
--   'section_horizontal',
--   '{
--     "heading_text": "Résultats et impact",
--     "heading_level": 2,
--     "image_url": "https://example.com/results.jpg",
--     "image_alt": "Graphiques de résultats",
--     "image_caption": "Croissance de 300% en 6 mois",
--     "text_content": "Le lancement du produit a dépassé toutes les attentes avec...",
--     "text_alignment": "left"
--   }'::jsonb,
--   true
-- );

-- Note: Pour les deux types de blocs:
-- - heading_level peut être 1, 2 ou 3 (par défaut: 2)
-- - text_alignment peut être "left", "center" ou "right" (par défaut: "left")
-- - Tous les champs sont optionnels sauf le type
-- - Le texte supporte les retours à la ligne avec \n
