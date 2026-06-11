/*
  # Add LinkedIn URL to Site Configuration

  1. Changes
    - Add `linkedin_url` column to `site_config` table
    - Column stores the LinkedIn profile URL for display in the header
    - Default value is an empty string
    - Column is nullable and updatable
  
  2. Purpose
    - Allow the LinkedIn profile link to be stored in the database
    - Makes it easy to update without code changes
    - Centralizes site configuration data
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'site_config' AND column_name = 'linkedin_url'
  ) THEN
    ALTER TABLE site_config ADD COLUMN linkedin_url text DEFAULT ''::text;
  END IF;
END $$;