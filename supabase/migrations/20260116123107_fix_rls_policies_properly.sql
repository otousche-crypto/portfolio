/*
  # Fix RLS Policies Properly

  ## Overview
  Remove all write policies to make the portfolio completely read-only for public access.

  ## Security Issues Fixed
  
  ### experiences table
  - Remove "Authenticated users can insert experiences" (WITH CHECK true)
  - Remove "Authenticated users can update experiences" (USING true, WITH CHECK true)
  - Remove "Authenticated users can delete experiences" (USING true)

  ### experience_content_blocks table
  - Remove "Authenticated users can insert content blocks"
  - Remove "Authenticated users can modify content blocks"
  - Remove "Authenticated users can remove content blocks"

  ### key_figures table
  - Remove "Authenticated users can add key figures"
  - Remove "Authenticated users can modify key figures"
  - Remove "Authenticated users can remove key figures"

  ### skills_tags table
  - Remove "Authenticated users can add tags"
  - Remove "Authenticated users can modify tags"
  - Remove "Authenticated users can remove tags"

  ## Result
  After this migration, all tables are read-only for public access.
  Content management requires direct database access via Supabase Dashboard.
*/

-- Remove write policies on experiences table
DROP POLICY IF EXISTS "Authenticated users can insert experiences" ON experiences;
DROP POLICY IF EXISTS "Authenticated users can update experiences" ON experiences;
DROP POLICY IF EXISTS "Authenticated users can delete experiences" ON experiences;

-- Remove write policies on experience_content_blocks table
DROP POLICY IF EXISTS "Authenticated users can insert content blocks" ON experience_content_blocks;
DROP POLICY IF EXISTS "Authenticated users can modify content blocks" ON experience_content_blocks;
DROP POLICY IF EXISTS "Authenticated users can remove content blocks" ON experience_content_blocks;

-- Remove write policies on key_figures table
DROP POLICY IF EXISTS "Authenticated users can add key figures" ON key_figures;
DROP POLICY IF EXISTS "Authenticated users can modify key figures" ON key_figures;
DROP POLICY IF EXISTS "Authenticated users can remove key figures" ON key_figures;

-- Remove write policies on skills_tags table
DROP POLICY IF EXISTS "Authenticated users can add tags" ON skills_tags;
DROP POLICY IF EXISTS "Authenticated users can modify tags" ON skills_tags;
DROP POLICY IF EXISTS "Authenticated users can remove tags" ON skills_tags;

-- Verify read-only policies remain
-- These SELECT policies allow public viewing:
-- - "Public can view experiences" on experiences
-- - "Public can view content blocks" on experience_content_blocks
-- - "Anyone can view visible content blocks" on experience_content_blocks
-- - "Public can view key figures" on key_figures
-- - "Key figures are viewable by everyone" on key_figures
-- - "Public can view skills tags" on skills_tags
-- - "Anyone can view visible tags" on skills_tags
