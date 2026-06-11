/*
  # Add company field to experiences table

  1. Changes
    - Add `entreprise` (text) column to experiences table
    - Update existing records with sample company names
  
  2. Notes
    - This field will store the company/organization name for each experience
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'entreprise'
  ) THEN
    ALTER TABLE experiences ADD COLUMN entreprise text DEFAULT '';
  END IF;
END $$;

-- Update existing sample data with company names
UPDATE experiences SET entreprise = 'TechCorp' WHERE titre = 'Senior UX Designer';
UPDATE experiences SET entreprise = 'FinanceApp' WHERE titre = 'Product Designer';
UPDATE experiences SET entreprise = 'ShopOnline' WHERE titre = 'UX/UI Designer';
UPDATE experiences SET entreprise = 'DesignStudio' WHERE titre = 'Junior Designer';