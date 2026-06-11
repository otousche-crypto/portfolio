/*
  # Add clickable control to experiences

  1. Changes
    - Add `is_clickable` boolean column to `experiences` table
    - Default value is `true` (all existing experiences remain clickable)
    - This allows selective disabling of click functionality on homepage while keeping detail pages accessible
  
  2. Notes
    - Non-breaking change: existing experiences maintain current behavior
    - Detail pages remain accessible via direct URL regardless of clickable state
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experiences' AND column_name = 'is_clickable'
  ) THEN
    ALTER TABLE experiences ADD COLUMN is_clickable boolean DEFAULT true;
  END IF;
END $$;