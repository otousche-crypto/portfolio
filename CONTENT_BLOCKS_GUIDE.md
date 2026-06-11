# Guide des Blocs de Contenu

Ce guide explique comment utiliser le système de blocs de contenu pour créer des pages d'expérience riches avec des schémas, images et pictogrammes.

## Types de Blocs Disponibles

### 1. **Heading** (Titre)
Crée un titre de section (H1, H2 ou H3).

```sql
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'experience-id',
  1,
  'heading',
  '{"text": "Mon Titre", "level": 2}'::jsonb,
  true
);
```

Options:
- `text`: Le texte du titre
- `level`: 1, 2 ou 3 (correspond à h1, h2, h3)

### 2. **Text** (Texte)
Affiche un paragraphe de texte.

```sql
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'experience-id',
  2,
  'text',
  '{"text": "Mon paragraphe de texte...", "alignment": "left"}'::jsonb,
  true
);
```

Options:
- `text`: Le contenu du texte (supporte `\n` pour les sauts de ligne)
- `alignment`: "left", "center" ou "right" (optionnel, défaut: "left")

### 3. **Image** (Image)
Affiche une image avec légende optionnelle.

```sql
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'experience-id',
  3,
  'image',
  '{
    "url": "https://example.com/image.jpg",
    "alt": "Description de l''image",
    "caption": "Légende de l''image",
    "width": "large"
  }'::jsonb,
  true
);
```

Options:
- `url`: URL de l'image (obligatoire)
- `alt`: Texte alternatif (obligatoire pour l'accessibilité)
- `caption`: Légende affichée sous l'image (optionnel)
- `width`: "full", "large", "medium" ou "small" (optionnel, défaut: "full")

### 4. **Image Grid** (Grille d'images)
Affiche plusieurs images en grille (2 ou 3 colonnes).

```sql
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'experience-id',
  4,
  'image_grid',
  '{
    "columns": 2,
    "images": [
      {
        "url": "https://example.com/img1.jpg",
        "alt": "Description 1",
        "caption": "Légende 1"
      },
      {
        "url": "https://example.com/img2.jpg",
        "alt": "Description 2",
        "caption": "Légende 2"
      }
    ]
  }'::jsonb,
  true
);
```

Options:
- `columns`: 2 ou 3 (nombre de colonnes)
- `images`: Tableau d'objets image (url, alt, caption optionnel)

### 5. **Quote** (Citation)
Affiche une citation avec auteur optionnel.

```sql
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'experience-id',
  5,
  'quote',
  '{
    "text": "Une citation inspirante...",
    "author": "Nom de l''auteur"
  }'::jsonb,
  true
);
```

Options:
- `text`: Le texte de la citation
- `author`: L'auteur de la citation (optionnel)

### 6. **Divider** (Séparateur)
Crée une séparation visuelle entre les sections.

```sql
INSERT INTO experience_content_blocks (experience_id, ordre, type, content, visible)
VALUES (
  'experience-id',
  6,
  'divider',
  '{"style": "line"}'::jsonb,
  true
);
```

Options:
- `style`: "line" (ligne), "dots" (points) ou "space" (espace vide)

## Ordre d'Affichage

Le champ `ordre` détermine l'ordre d'affichage des blocs. Utilisez des multiples de 10 (10, 20, 30...) pour faciliter l'insertion de nouveaux blocs entre les existants.

## Visibilité

Le champ `visible` permet de masquer temporairement un bloc sans le supprimer:
- `true`: Le bloc est affiché
- `false`: Le bloc est masqué

## Exemple Complet

Voir le fichier `example_equinox_content.sql` pour un exemple complet de structure de contenu pour une page d'expérience.

## Hébergement des Images

Pour héberger vos images, vous pouvez utiliser:
1. **Supabase Storage** - Stockage intégré à votre projet
2. **Services externes** - Imgur, Cloudinary, etc.
3. **CDN** - Pour de meilleures performances

## Conseils

1. **Organisez visuellement**: Alternez texte et images pour maintenir l'attention
2. **Utilisez les séparateurs**: Créez des sections claires
3. **Optimisez les images**: Compressez vos images avant upload
4. **Légendes descriptives**: Aidez les lecteurs à comprendre le contexte
5. **Accessibilité**: Remplissez toujours le champ `alt` pour les images
