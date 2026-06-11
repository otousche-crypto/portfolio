import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Experience {
  id: string;
  titre: string;
  annee: string;
  entreprise: string;
  description: string;
  imageUrl: string;
  logourl: string;
  ordre: number;
  created_at: string;
  hero_image_url?: string;
  project_title?: string;
  role_duration?: string;
  product_name?: string;
  is_clickable?: boolean;
}

export interface SiteConfig {
  id: string;
  nom_complet: string;
  image_profil_url: string;
  image_profil_alt: string;
  linkedin_url?: string;
  created_at: string;
  updated_at: string;
}

export interface HeroSection {
  id: string;
  titres_animes: string[];
  titre_fixe: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Navigation {
  id: string;
  label: string;
  section_id: string;
  ordre: number;
  created_at: string;
}

export interface Methodologie {
  id: string;
  titre_section: string;
  paragraphe_principal: string;
  paragraphe_secondaire: string;
  created_at: string;
  updated_at: string;
}

export interface MethodologieBloc {
  id: string;
  titre: string;
  description: string;
  ordre: number;
  created_at: string;
}

export interface SectionTitre {
  id: string;
  section_id: string;
  titre: string;
  created_at: string;
  updated_at: string;
}

export interface ContactInfo {
  id: string;
  email_label: string;
  email_value: string;
  linkedin_label: string;
  linkedin_texte: string;
  linkedin_url: string;
  cv_label: string;
  cv_texte: string;
  cv_url: string;
  telephone_label: string;
  telephone_value: string;
  created_at: string;
  updated_at: string;
}

export interface UIText {
  id: string;
  cle: string;
  texte: string;
  created_at: string;
  updated_at: string;
}

export interface SkillTag {
  id: string;
  nom: string;
  ordre: number;
  visible: boolean;
  created_at: string;
}

export type ContentBlockType = 'text' | 'image' | 'heading' | 'quote' | 'divider' | 'image_grid' | 'section_vertical' | 'section_horizontal' | 'bullet_list';

export interface ContentBlockContent {
  text?: string;
  alignment?: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3;
  url?: string;
  alt?: string;
  caption?: string;
  width?: 'full' | 'large' | 'medium' | 'small';
  author?: string;
  style?: 'line' | 'dots' | 'space';
  images?: Array<{ url: string; alt: string; caption?: string }>;
  columns?: 2 | 3;
  heading_text?: string;
  heading_level?: 1 | 2 | 3;
  image_url?: string;
  image_alt?: string;
  image_caption?: string;
  text_content?: string;
  text_alignment?: 'left' | 'center' | 'right';
  image_position?: 'left' | 'right';
  items?: string[];
  subtitle?: string;
}

export interface ExperienceContentBlock {
  id: string;
  experience_id: string;
  ordre: number;
  type: ContentBlockType;
  content: ContentBlockContent;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface KeyFigure {
  id: string;
  experience_id: string;
  label: string;
  value: string;
  icon?: string;
  ordre: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}
