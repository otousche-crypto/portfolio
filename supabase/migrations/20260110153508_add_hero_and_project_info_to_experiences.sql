/*
  # Add hero image and project info fields to experiences table

  1. Changes
    - Add `hero_image_url` column for hero banner image
    - Add `project_title` column for full project title (e.g., "Altered — Écosystème phygital pour un jeu de cartes à collectionner")
    - Add `role_duration` column for role and duration display (e.g., "Product Designer Senior — 3 ans")
    - Add `product_name` column for the product name (e.g., "Altered")
  
  2. Notes
    - All fields are nullable to maintain compatibility with existing records
    - These fields enhance the detail page presentation with hero section and info card
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'hero_image_url'
  ) THEN
    ALTER TABLE experiences ADD COLUMN hero_image_url text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'project_title'
  ) THEN
    ALTER TABLE experiences ADD COLUMN project_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'role_duration'
  ) THEN
    ALTER TABLE experiences ADD COLUMN role_duration text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'product_name'
  ) THEN
    ALTER TABLE experiences ADD COLUMN product_name text;
  END IF;
END $$;
