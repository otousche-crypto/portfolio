/*
  # Add update policies for experiences table

  1. Security Changes
    - Add policy for updating experiences
    - Allow anyone to update experiences (for portfolio management)
    - Add policy for inserting new experiences
    - Add policy for deleting experiences
  
  2. Notes
    - This allows unrestricted editing for portfolio management
    - In production, you may want to restrict this to authenticated admins only
*/

-- Allow anyone to update experiences
CREATE POLICY "Anyone can update experiences"
  ON experiences
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Allow anyone to insert experiences
CREATE POLICY "Anyone can insert experiences"
  ON experiences
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to delete experiences
CREATE POLICY "Anyone can delete experiences"
  ON experiences
  FOR DELETE
  TO anon, authenticated
  USING (true);
