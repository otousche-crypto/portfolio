/*
  # Add card block type to experience content blocks

  1. Changes
    - Adds 'card' to the allowed block types in experience_content_blocks table
    - Card type content structure: { "icon": "lucide-icon-name", "title": "Card title", "text": "Card description" }
    
  2. Notes
    - This allows creating card-based layouts with icons, titles, and descriptions
    - Icon names should match lucide-react icon names (e.g., "Search", "Rocket", "CheckCircle")
    - Mobile displays cards in a horizontal carousel, desktop in a grid
*/

-- Add 'card' to the allowed block types
DO $$
BEGIN
  -- Drop the existing check constraint
  ALTER TABLE experience_content_blocks 
  DROP CONSTRAINT IF EXISTS experience_content_blocks_type_check;
  
  -- Add the new check constraint with 'card' included
  ALTER TABLE experience_content_blocks 
  ADD CONSTRAINT experience_content_blocks_type_check 
  CHECK (type IN ('text', 'image', 'heading', 'quote', 'divider', 'image_grid', 'card'));
END $$;