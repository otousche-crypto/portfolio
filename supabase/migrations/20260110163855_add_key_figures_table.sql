/*
  # Ajout de la table chiffres clés

  1. Nouvelle table
    - `key_figures` (chiffres_clefs)
      - `id` (uuid, primary key)
      - `experience_id` (uuid, foreign key vers experiences)
      - `label` (text) - Le label du chiffre (ex: "Utilisateurs", "Pays")
      - `value` (text) - La valeur du chiffre (ex: "50 000+", "15")
      - `icon` (text, optional) - Nom d'icône Lucide React
      - `ordre` (integer) - Ordre d'affichage
      - `visible` (boolean) - Visibilité du chiffre
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Sécurité
    - Activer RLS sur `key_figures`
    - Ajouter une politique de lecture publique (données en lecture seule pour tous)
    - Ajouter des politiques d'édition pour utilisateurs authentifiés
*/

CREATE TABLE IF NOT EXISTS key_figures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id uuid NOT NULL REFERENCES experiences(id) ON DELETE CASCADE,
  label text NOT NULL,
  value text NOT NULL,
  icon text,
  ordre integer DEFAULT 0,
  visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE key_figures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Key figures are viewable by everyone"
  ON key_figures FOR SELECT
  TO anon, authenticated
  USING (visible = true);

CREATE POLICY "Authenticated users can insert key figures"
  ON key_figures FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update key figures"
  ON key_figures FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete key figures"
  ON key_figures FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_key_figures_experience_id ON key_figures(experience_id);
CREATE INDEX IF NOT EXISTS idx_key_figures_ordre ON key_figures(ordre);