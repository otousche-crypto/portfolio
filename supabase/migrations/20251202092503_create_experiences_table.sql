/*
  # Create experiences table for portfolio

  1. New Tables
    - `experiences`
      - `id` (uuid, primary key)
      - `titre` (text) - Experience title
      - `annee` (text) - Year or date range
      - `description` (text) - Detailed description
      - `imageUrl` (text) - URL to experience image
      - `ordre` (integer) - Order for horizontal scroll display
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `experiences` table
    - Add policy for public read access (portfolio is public)
*/

CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titre text NOT NULL,
  annee text NOT NULL,
  description text NOT NULL,
  imageUrl text DEFAULT '',
  ordre integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view experiences"
  ON experiences
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert some sample experiences
INSERT INTO experiences (titre, annee, description, imageUrl, ordre) VALUES
  ('Senior UX Designer', '2022-2024', 'Led UX design for multiple enterprise applications, focusing on user research, prototyping, and design systems.', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', 1),
  ('Product Designer', '2020-2022', 'Designed mobile and web experiences for fintech products, conducted user testing and iterative improvements.', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', 2),
  ('UX/UI Designer', '2018-2020', 'Created user-centered designs for e-commerce platforms, developed wireframes and high-fidelity mockups.', 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800', 3),
  ('Junior Designer', '2016-2018', 'Supported design team with research, prototyping, and visual design for various client projects.', 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800', 4);