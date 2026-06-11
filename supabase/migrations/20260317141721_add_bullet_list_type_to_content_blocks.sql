/*
  # Add bullet_list type to content blocks

  1. Changes
    - Update the check constraint on experience_content_blocks table to include 'bullet_list' type
    - This allows storing bullet list content blocks with items array
    
  2. Notes
    - The bullet_list type supports:
      - heading_text (optional): Title for the list
      - items (array): List of bullet point items
    - This migration is idempotent and safe to run multiple times
*/

DO $$ 
BEGIN
  -- Drop existing constraint if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'experience_content_blocks_type_check' 
    AND table_name = 'experience_content_blocks'
  ) THEN
    ALTER TABLE experience_content_blocks DROP CONSTRAINT experience_content_blocks_type_check;
  END IF;
  
  -- Add updated constraint with bullet_list type
  ALTER TABLE experience_content_blocks 
  ADD CONSTRAINT experience_content_blocks_type_check 
  CHECK (type = ANY (ARRAY[
    'text'::text, 
    'image'::text, 
    'heading'::text, 
    'quote'::text, 
    'divider'::text, 
    'image_grid'::text, 
    'section_vertical'::text, 
    'section_horizontal'::text,
    'bullet_list'::text
  ]));
END $$;
