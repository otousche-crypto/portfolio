/*
  # Create Content Management Tables

  This migration creates a comprehensive content management system for the portfolio website,
  allowing all text content to be managed directly from Supabase without code changes.

  ## New Tables

  ### 1. site_config
  Stores global site configuration and profile information.
  - `id` (uuid, primary key)
  - `nom_complet` (text) - Full name displayed in header
  - `image_profil_url` (text) - Profile image URL
  - `image_profil_alt` (text) - Profile image alt text
  - `created_at`, `updated_at` (timestamps)

  ### 2. hero_section
  Stores content for the hero/landing section.
  - `id` (uuid, primary key)
  - `titres_animes` (text array) - Animated titles ["UX", "Product", "Service"]
  - `titre_fixe` (text) - Fixed title text "Designer."
  - `description` (text) - Main description paragraph
  - `created_at`, `updated_at` (timestamps)

  ### 3. navigation
  Stores navigation menu items.
  - `id` (uuid, primary key)
  - `label` (text) - Display text for menu item
  - `section_id` (text) - Target section ID
  - `ordre` (integer) - Display order
  - `created_at` (timestamp)

  ### 4. methodologie
  Stores main content for the methodology section.
  - `id` (uuid, primary key)
  - `titre_section` (text) - Section title
  - `paragraphe_principal` (text) - Main paragraph
  - `paragraphe_secondaire` (text) - Secondary paragraph
  - `created_at`, `updated_at` (timestamps)

  ### 5. methodologie_blocs
  Stores the four methodology blocks (Explorer, Définir, Développer, Délivrer).
  - `id` (uuid, primary key)
  - `titre` (text) - Block title
  - `description` (text) - Block description
  - `ordre` (integer) - Display order
  - `created_at` (timestamp)

  ### 6. section_titres
  Stores titles for different page sections.
  - `id` (uuid, primary key)
  - `section_id` (text) - Section identifier
  - `titre` (text) - Section title
  - `created_at`, `updated_at` (timestamps)

  ### 7. contact_info
  Stores all contact information displayed in the contact section.
  - `id` (uuid, primary key)
  - `email_label` (text) - "Email" label
  - `email_value` (text) - Email address
  - `linkedin_label` (text) - "LinkedIn" label
  - `linkedin_texte` (text) - LinkedIn display text
  - `linkedin_url` (text) - LinkedIn profile URL
  - `cv_label` (text) - CV section label
  - `cv_texte` (text) - CV download text
  - `cv_url` (text) - CV file URL
  - `telephone_label` (text) - Phone label
  - `telephone_value` (text) - Phone number
  - `created_at`, `updated_at` (timestamps)

  ### 8. ui_texts
  Stores all UI text strings (loading messages, button labels, etc.).
  - `id` (uuid, primary key)
  - `cle` (text, unique) - Text key identifier
  - `texte` (text) - Actual text content
  - `created_at`, `updated_at` (timestamps)

  ## Security
  - Enable RLS on all tables
  - Add policies for public SELECT access (read-only for visitors)
  - Prepare structure for future admin UPDATE policies

  ## Initial Data
  All current website content is inserted as initial data.
*/

-- Create site_config table
CREATE TABLE IF NOT EXISTS site_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom_complet text NOT NULL DEFAULT '',
  image_profil_url text NOT NULL DEFAULT '',
  image_profil_alt text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create hero_section table
CREATE TABLE IF NOT EXISTS hero_section (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titres_animes text[] NOT NULL DEFAULT '{}',
  titre_fixe text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create navigation table
CREATE TABLE IF NOT EXISTS navigation (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL DEFAULT '',
  section_id text NOT NULL DEFAULT '',
  ordre integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create methodologie table
CREATE TABLE IF NOT EXISTS methodologie (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titre_section text NOT NULL DEFAULT '',
  paragraphe_principal text NOT NULL DEFAULT '',
  paragraphe_secondaire text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create methodologie_blocs table
CREATE TABLE IF NOT EXISTS methodologie_blocs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titre text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  ordre integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create section_titres table
CREATE TABLE IF NOT EXISTS section_titres (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id text NOT NULL UNIQUE,
  titre text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_info table
CREATE TABLE IF NOT EXISTS contact_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email_label text NOT NULL DEFAULT '',
  email_value text NOT NULL DEFAULT '',
  linkedin_label text NOT NULL DEFAULT '',
  linkedin_texte text NOT NULL DEFAULT '',
  linkedin_url text NOT NULL DEFAULT '',
  cv_label text NOT NULL DEFAULT '',
  cv_texte text NOT NULL DEFAULT '',
  cv_url text NOT NULL DEFAULT '',
  telephone_label text NOT NULL DEFAULT '',
  telephone_value text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create ui_texts table
CREATE TABLE IF NOT EXISTS ui_texts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cle text NOT NULL UNIQUE,
  texte text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_section ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodologie ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodologie_blocs ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_titres ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE ui_texts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read site config"
  ON site_config FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read hero section"
  ON hero_section FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read navigation"
  ON navigation FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read methodologie"
  ON methodologie FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read methodologie blocs"
  ON methodologie_blocs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read section titres"
  ON section_titres FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read contact info"
  ON contact_info FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read ui texts"
  ON ui_texts FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert initial data

-- Site config
INSERT INTO site_config (nom_complet, image_profil_url, image_profil_alt)
VALUES ('Olivier Tousche', '/Group 3.png', 'Olivier Touche')
ON CONFLICT DO NOTHING;

-- Hero section
INSERT INTO hero_section (titres_animes, titre_fixe, description)
VALUES (
  '{"UX", "Product", "Service"}',
  'Designer.',
  'Je conçois des expériences produits et des service centrés utilisateurs, en m''appuyant sur la stratégie, la recherche et le design.'
)
ON CONFLICT DO NOTHING;

-- Navigation items
INSERT INTO navigation (label, section_id, ordre) VALUES
  ('About', 'about', 1),
  ('Work', 'parcours', 2),
  ('Contact', 'contact', 3)
ON CONFLICT DO NOTHING;

-- Methodologie
INSERT INTO methodologie (titre_section, paragraphe_principal, paragraphe_secondaire)
VALUES (
  'Methodologie',
  'Je crois que le design réfléchi peut simplifier la complexité, inspirer la confiance et créer un monde meilleur, plus centré sur l''humain.',
  'Ces passions nourrissent à la fois mon énergie, ma créativité et ma façon d''aborder les projets. Guidé par la conviction que la simplicité révèle le sens et amplifie ce qui compte le plus, j''aborde mon travail comme un artisanat continu de raffinement.'
)
ON CONFLICT DO NOTHING;

-- Methodologie blocs
INSERT INTO methodologie_blocs (titre, description, ordre) VALUES
  ('Explorer', 'Conduite d''ateliers en contexte agile avec clients et parties prenantes', 1),
  ('Définir', 'Identification des besoins et irritants via tests utilisateurs et entretiens', 2),
  ('Développer', 'Élaboration de parcours utilisateurs et conception de wireframes', 3),
  ('Délivrer', 'Contribution à l''expérience utilisateur globale et aide à la prise de décision', 4)
ON CONFLICT DO NOTHING;

-- Section titles
INSERT INTO section_titres (section_id, titre) VALUES
  ('parcours', 'Experience professionnelle'),
  ('contact', 'Contact')
ON CONFLICT (section_id) DO NOTHING;

-- Contact info
INSERT INTO contact_info (
  email_label, email_value,
  linkedin_label, linkedin_texte, linkedin_url,
  cv_label, cv_texte, cv_url,
  telephone_label, telephone_value
)
VALUES (
  'Email', 'otousche@gmail.com',
  'LinkedIn', 'Olivier Tousche', 'https://www.linkedin.com/in/olivier-tousche-a6160b122/',
  'CV', 'Télécharger mon CV', 'https://drive.google.com/file/d/188dvQuwtzE1J6gBA7-ioTp9uFvTCqxXZ/view?usp=sharing',
  'Téléphone', '+33 6 78 19 88 88'
)
ON CONFLICT DO NOTHING;

-- UI texts
INSERT INTO ui_texts (cle, texte) VALUES
  ('chargement', 'Chargement...'),
  ('back_button', 'BACK'),
  ('experience_non_trouvee', 'Expérience non trouvée')
ON CONFLICT (cle) DO NOTHING;