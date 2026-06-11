/*
  # Add company logo field to experiences table

  1. Changes
    - Add `logoUrl` (text) column to experiences table for company logos
    - Update existing records with placeholder company logos
  
  2. Notes
    - This field will store square company logo images
    - Logos will be displayed on the left side of each experience entry
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'logoUrl'
  ) THEN
    ALTER TABLE experiences ADD COLUMN logoUrl text DEFAULT '';
  END IF;
END $$;

-- Update existing sample data with company logos (using square placeholder images)
UPDATE experiences SET logoUrl = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=200&h=200' WHERE titre = 'Senior UX Designer';
UPDATE experiences SET logoUrl = 'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=200&h=200' WHERE titre = 'Product Designer';
UPDATE experiences SET logoUrl = 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200&h=200' WHERE titre = 'UX/UI Designer';
UPDATE experiences SET logoUrl = 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200&h=200' WHERE titre = 'Junior Designer';