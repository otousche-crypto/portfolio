/*
  # Add video type to content blocks

  1. Changes
    - Add 'video' to the allowed block types in experience_content_blocks
    - This allows embedding videos from various sources (Google Drive, YouTube, etc.)
  
  2. Security
    - No changes to RLS policies needed
*/

-- Add 'video' to the type constraint
ALTER TABLE experience_content_blocks 
DROP CONSTRAINT IF EXISTS experience_content_blocks_type_check;

ALTER TABLE experience_content_blocks 
ADD CONSTRAINT experience_content_blocks_type_check 
CHECK (type IN (
  'heading',
  'text',
  'quote',
  'image',
  'image_grid',
  'divider',
  'section_vertical',
  'section_horizontal',
  'bullet_list',
  'video'
));