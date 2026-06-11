/*
  # Add image_text block type to experience content blocks

  1. Changes
    - Adds 'image_text' to the allowed block types in experience_content_blocks table
    - This type creates a side-by-side layout with image on left and text on right
    - On mobile, the image appears above the text
    
  2. Content Structure
    - image: { url, alt }
    - title: string (optional)
    - text: string or array of strings (for multiple paragraphs)
    - imagePosition: "left" or "right" (default: "left")
    
  3. Notes
    - Desktop: image and text side by side
    - Mobile: image stacks above text
    - Responsive and flexible layout
*/

DO $$
BEGIN
  ALTER TABLE experience_content_blocks 
  DROP CONSTRAINT IF EXISTS experience_content_blocks_type_check;
  
  ALTER TABLE experience_content_blocks 
  ADD CONSTRAINT experience_content_blocks_type_check 
  CHECK (type IN ('text', 'image', 'heading', 'quote', 'divider', 'image_grid', 'card', 'image_text'));
END $$;