/*
  # Ajouter les nouveaux types de blocs de contenu

  1. Modifications
    - Supprime l'ancienne contrainte sur le type de bloc
    - Ajoute une nouvelle contrainte incluant tous les types de blocs :
      * Types existants : 'text', 'image', 'heading', 'quote', 'divider', 'image_grid'
      * Nouveaux types : 'section_vertical', 'section_horizontal', 'image_text', 'roadmap_section'

  2. Notes
    - Cette migration étend les types de blocs disponibles sans supprimer les anciens
    - Les blocs existants ne sont pas affectés
    - Les nouveaux types permettent des layouts plus riches et une meilleure présentation du contenu
*/

-- Supprimer l'ancienne contrainte
ALTER TABLE experience_content_blocks 
DROP CONSTRAINT IF EXISTS experience_content_blocks_type_check;

-- Ajouter la nouvelle contrainte avec tous les types
ALTER TABLE experience_content_blocks 
ADD CONSTRAINT experience_content_blocks_type_check 
CHECK (type IN (
  'text', 
  'image', 
  'heading', 
  'quote', 
  'divider', 
  'image_grid', 
  'section_vertical', 
  'section_horizontal', 
  'image_text', 
  'roadmap_section'
));
