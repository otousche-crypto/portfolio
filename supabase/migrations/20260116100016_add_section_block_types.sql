/*
  # Add section block types to content blocks

  1. Changes
    - Drop existing type check constraint on experience_content_blocks table
    - Add new check constraint that includes 'section_vertical' and 'section_horizontal' types
  
  2. Security
    - No RLS changes (existing policies remain intact)
*/

-- Drop the existing constraint
ALTER TABLE experience_content_blocks 
DROP CONSTRAINT IF EXISTS experience_content_blocks_type_check;

-- Add new constraint with additional types
ALTER TABLE experience_content_blocks 
ADD CONSTRAINT experience_content_blocks_type_check 
CHECK (type = ANY (ARRAY[
  'text'::text, 
  'image'::text, 
  'heading'::text, 
  'quote'::text, 
  'divider'::text, 
  'image_grid'::text, 
  'card'::text, 
  'image_text'::text,
  'section_vertical'::text,
  'section_horizontal'::text
]));