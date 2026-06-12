// Interfaces TypeScript de tout le contenu du site.
// Ces types décrivent la forme des objets exportés par les fichiers de content/.
// Ne modifier qu'en cas d'évolution de structure — pour éditer le contenu,
// voir les fichiers dans content/.

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface SiteContent {
  prenom: string;
  nom: string;
  imageProfilUrl: string;
  imageProfilAlt: string;
  linkedinUrl: string;
  navigation: NavItem[];
  uiTexts: {
    backButton: string;
    experienceNonTrouvee: string;
  };
}

export interface HeroContent {
  titresAnimes: string[];
  titreFixe: string;
  description: string;
  skillTags: string[];
}

export interface MethodologieBloc {
  titre: string;
  description: string;
}

export interface MethodologieContent {
  titreSection: string;
  paragraphePrincipal: string;
  paragrapheSecondaire: string;
  blocs: MethodologieBloc[];
}

export interface ContactContent {
  titreSection: string;
  email: { label: string; value: string };
  linkedin: { label: string; texte: string; url: string };
  cv: { label: string; texte: string; url: string };
  telephone: { label: string; value: string };
}

export type ContentBlockType =
  | 'text'
  | 'image'
  | 'heading'
  | 'quote'
  | 'divider'
  | 'image_grid'
  | 'section_vertical'
  | 'section_horizontal'
  | 'bullet_list'
  | 'video';

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
  intro_text?: string;
  text_content?: string;
  text_alignment?: 'left' | 'center' | 'right';
  image_position?: 'left' | 'right';
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  imagePosition?: 'left' | 'right';
  items?: string[];
  subtitle?: string;
}

export interface ExperienceContentBlock {
  type: ContentBlockType;
  content: ContentBlockContent;
}

export interface KeyFigure {
  label: string;
  value: string;
  icon?: string;
}

export interface Experience {
  // id = slug utilisé dans l'URL /experience/[id]
  id: string;
  titre: string;
  annee: string;
  entreprise: string;
  description: string;
  logourl: string;
  hero_image_url?: string;
  project_title?: string;
  role_duration?: string;
  product_name?: string;
  is_clickable?: boolean;
  contentBlocks: ExperienceContentBlock[];
  keyFigures?: KeyFigure[];
}
