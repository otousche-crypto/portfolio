/*
  # Add Skills Tags Table

  1. New Tables
    - `skills_tags`
      - `id` (uuid, primary key)
      - `nom` (text) - Tag name (e.g., "User research")
      - `ordre` (integer) - Display order
      - `visible` (boolean) - Whether the tag is visible
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `skills_tags` table
    - Add policy for public read access

  3. Initial Data
    - Insert default tags: User research, Prototyping, Wireframe, User tests
*/

-- Create skills_tags table
CREATE TABLE IF NOT EXISTS skills_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  ordre integer DEFAULT 0,
  visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE skills_tags ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view visible tags"
  ON skills_tags
  FOR SELECT
  USING (visible = true);

-- Create policy for authenticated users to manage tags
CREATE POLICY "Authenticated users can insert tags"
  ON skills_tags
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tags"
  ON skills_tags
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tags"
  ON skills_tags
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert initial tags
INSERT INTO skills_tags (nom, ordre, visible) 
VALUES 
  ('User research', 1, true),
  ('Prototyping', 2, true),
  ('Wireframe', 3, true),
  ('User tests', 4, true)
ON CONFLICT DO NOTHING;