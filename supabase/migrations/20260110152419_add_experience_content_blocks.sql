/*
  # Create experience content blocks table

  This migration creates a flexible content management system for experience detail pages,
  allowing rich content composition with text, images, diagrams, and visual elements.

  ## New Tables

  ### `experience_content_blocks`
  - `id` (uuid, primary key) - Unique identifier for each content block
  - `experience_id` (uuid, foreign key) - References the parent experience
  - `ordre` (integer) - Display order of the block (lower numbers appear first)
  - `type` (text) - Block type: 'text', 'image', 'heading', 'quote', 'divider', 'image_grid'
  - `content` (jsonb) - Flexible content structure based on block type:
    * text: { "text": "content", "alignment": "left|center|right" }
    * heading: { "text": "title", "level": 1-3 }
    * image: { "url": "image_url", "alt": "description", "caption": "optional caption", "width": "full|large|medium|small" }
    * quote: { "text": "quote text", "author": "optional author" }
    * divider: { "style": "line|dots|space" }
    * image_grid: { "images": [{"url": "...", "alt": "...", "caption": "..."}], "columns": 2-3 }
  - `visible` (boolean, default true) - Whether the block is displayed
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on `experience_content_blocks` table
  - Add policy for public read access (anyone can view published content)
  - Add policy for authenticated insert/update (for content management)
  - Add policy for authenticated delete (for content management)

  ## Important Notes
  1. The JSONB content field allows flexibility for different block types
  2. The ordre field enables drag-and-drop reordering of content
  3. Public read access enables the portfolio to be viewed by anyone
  4. Authenticated write access enables content management
*/

-- Create experience_content_blocks table
CREATE TABLE IF NOT EXISTS experience_content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id uuid NOT NULL REFERENCES experiences(id) ON DELETE CASCADE,
  ordre integer NOT NULL DEFAULT 0,
  type text NOT NULL CHECK (type IN ('text', 'image', 'heading', 'quote', 'divider', 'image_grid')),
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  visible boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_content_blocks_experience_ordre 
  ON experience_content_blocks(experience_id, ordre);

-- Enable RLS
ALTER TABLE experience_content_blocks ENABLE ROW LEVEL SECURITY;

-- Public can read visible content blocks
CREATE POLICY "Anyone can view visible content blocks"
  ON experience_content_blocks
  FOR SELECT
  USING (visible = true);

-- Authenticated users can insert content blocks
CREATE POLICY "Authenticated users can create content blocks"
  ON experience_content_blocks
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update content blocks
CREATE POLICY "Authenticated users can update content blocks"
  ON experience_content_blocks
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete content blocks
CREATE POLICY "Authenticated users can delete content blocks"
  ON experience_content_blocks
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_experience_content_blocks_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS trigger_update_experience_content_blocks_updated_at ON experience_content_blocks;
CREATE TRIGGER trigger_update_experience_content_blocks_updated_at
  BEFORE UPDATE ON experience_content_blocks
  FOR EACH ROW
  EXECUTE FUNCTION update_experience_content_blocks_updated_at();