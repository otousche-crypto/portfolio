/*
  # Revenir aux types de blocs de contenu originaux

  1. Modifications
    - Supprime la contrainte actuelle sur le type de bloc
    - Ajoute une nouvelle contrainte avec uniquement les types originaux :
      * 'text', 'image', 'heading', 'quote', 'divider', 'image_grid'
      * 'section_vertical', 'section_horizontal'
    - Retire les types ajoutés récemment : 'image_text', 'roadmap_section'

  2. Notes
    - Cette migration revient à l'état d'origine des types de blocs
    - Les blocs de types retirés ont déjà été supprimés de la base de données
*/

-- Supprimer la contrainte actuelle
ALTER TABLE experience_content_blocks 
DROP CONSTRAINT IF EXISTS experience_content_blocks_type_check;

-- Ajouter la contrainte avec les types originaux uniquement
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
  'section_horizontal'
));
