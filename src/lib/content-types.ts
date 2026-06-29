// Interfaces TypeScript de tout le contenu du site.
// Ces types décrivent la forme des objets exportés par les fichiers de content/.
// Ne modifier qu'en cas d'évolution de structure — pour éditer le contenu,
// voir les fichiers dans content/.

export interface LocalizedString {
  fr: string;
  en: string;
}

export interface NavItem {
  label: LocalizedString;
  sectionId: string;
}

export interface SiteContent {
  prenom: string;
  nom: string;
  imageProfilUrl: string;
  imageProfilAlt: LocalizedString;
  navigation: NavItem[];
  uiTexts: {
    backButton: LocalizedString;
    experienceNonTrouvee: LocalizedString;
    roleLabel: LocalizedString;
    produitLabel: LocalizedString;
    dureeLabel: LocalizedString;
    workInProgress: LocalizedString;
    closeLabel: LocalizedString;
    zoomInLabel: LocalizedString;
    zoomOutLabel: LocalizedString;
    resetZoomLabel: LocalizedString;
    nextSectionLabel: LocalizedString;
  };
}

export interface HeroContent {
  titresAnimes: LocalizedString[];
  titreFixe: LocalizedString;
  description: LocalizedString;
  skillTags: LocalizedString[];
}

export interface MethodologieBloc {
  iconKey?: 'comprendre' | 'concevoir' | 'valider';
  titre: LocalizedString;
  description: LocalizedString;
}

export interface MethodologieContent {
  titreSection: LocalizedString;
  paragraphePrincipal: LocalizedString;
  paragrapheSecondaire: LocalizedString;
  blocs: MethodologieBloc[];
}

export interface ContactContent {
  titreSection: LocalizedString;
  email: { label: LocalizedString; value: string };
  linkedin: { label: LocalizedString; texte: LocalizedString; url: string };
  cv: { label: LocalizedString; texte: LocalizedString; url: string };
  telephone: { label: LocalizedString; value: string };
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
  | 'video'
  | 'diagram';

export interface ContentBlockContent {
  text?: LocalizedString;
  alignment?: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3;
  url?: string;
  alt?: LocalizedString;
  caption?: LocalizedString;
  width?: 'full' | 'large' | 'medium' | 'small';
  author?: LocalizedString;
  style?: 'line' | 'dots' | 'space';
  images?: Array<{ url: string; alt: LocalizedString; caption?: LocalizedString }>;
  columns?: 2 | 3;
  heading_text?: LocalizedString;
  heading_level?: 1 | 2 | 3;
  image_url?: string;
  image_alt?: LocalizedString;
  image_caption?: LocalizedString;
  intro_text?: LocalizedString;
  text_content?: LocalizedString;
  text_alignment?: 'left' | 'center' | 'right';
  image_position?: 'left' | 'right';
  imageUrl?: string;
  imageAlt?: LocalizedString;
  imageCaption?: LocalizedString;
  imagePosition?: 'left' | 'right';
  items?: LocalizedString[];
  subtitle?: LocalizedString;
  svg?: string;
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
  titre: LocalizedString;
  annee: string;
  entreprise: string;
  description: LocalizedString;
  logourl: string;
  hero_image_url?: string;
  project_title?: LocalizedString;
  role_duration?: LocalizedString;
  product_name?: string;
  is_clickable?: boolean;
  access_code?: string;
  contentBlocks: ExperienceContentBlock[];
  keyFigures?: KeyFigure[];
}
