import { useState } from 'react';
import { ContentBlockType, ContentBlockContent } from '../lib/supabase';
import { X, Plus, Trash2 } from 'lucide-react';

interface ContentBlockFormProps {
  onSubmit: (type: ContentBlockType, content: ContentBlockContent, ordre: number) => void;
  onCancel: () => void;
  initialType?: ContentBlockType;
  initialContent?: ContentBlockContent;
  initialOrdre?: number;
  nextOrdre: number;
}

export default function ContentBlockForm({
  onSubmit,
  onCancel,
  initialType = 'text',
  initialContent = {},
  initialOrdre,
  nextOrdre
}: ContentBlockFormProps) {
  const [type, setType] = useState<ContentBlockType>(initialType);
  const [ordre, setOrdre] = useState(initialOrdre || nextOrdre);
  const [content, setContent] = useState<ContentBlockContent>(initialContent);

  const updateContent = (key: string, value: any) => {
    setContent({ ...content, [key]: value });
  };

  const convertYouTubeUrl = (url: string): string => {
    if (!url) return url;

    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }

    return url;
  };

  const addListItem = () => {
    const items = content.items || [];
    updateContent('items', [...items, '']);
  };

  const updateListItem = (index: number, value: string) => {
    const items = [...(content.items || [])];
    items[index] = value;
    updateContent('items', items);
  };

  const removeListItem = (index: number) => {
    const items = [...(content.items || [])];
    items.splice(index, 1);
    updateContent('items', items);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(type, content, ordre);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full my-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-light">
            {initialOrdre ? 'Modifier le bloc' : 'Ajouter un bloc'}
          </h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type de bloc</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ContentBlockType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="heading">Titre</option>
              <option value="text">Texte</option>
              <option value="bullet_list">Liste à puces</option>
              <option value="image">Image</option>
              <option value="video">Vidéo (YouTube)</option>
              <option value="image_grid">Grille d'images</option>
              <option value="quote">Citation</option>
              <option value="section_horizontal">Section horizontale (image + texte)</option>
              <option value="section_vertical">Section verticale (image + texte)</option>
              <option value="divider">Séparateur</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ordre</label>
            <input
              type="number"
              value={ordre}
              onChange={(e) => setOrdre(parseInt(e.target.value))}
              step="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Utilisez des multiples de 10 (10, 20, 30...)</p>
          </div>

          {type === 'heading' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texte</label>
                <input
                  type="text"
                  value={content.text || ''}
                  onChange={(e) => updateContent('text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
                <select
                  value={content.level || 2}
                  onChange={(e) => updateContent('level', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>H1 (très grand)</option>
                  <option value={2}>H2 (grand)</option>
                  <option value={3}>H3 (moyen)</option>
                </select>
              </div>
            </>
          )}

          {type === 'text' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texte</label>
                <textarea
                  value={content.text || ''}
                  onChange={(e) => updateContent('text', e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alignement</label>
                <select
                  value={content.alignment || 'left'}
                  onChange={(e) => updateContent('alignment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="left">Gauche</option>
                  <option value="center">Centre</option>
                  <option value="right">Droite</option>
                </select>
              </div>
            </>
          )}

          {type === 'bullet_list' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre (optionnel)</label>
                <input
                  type="text"
                  value={content.heading_text || ''}
                  onChange={(e) => updateContent('heading_text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ex: Fonctionnalités clés :"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Éléments de la liste</label>
                <div className="space-y-2">
                  {(content.items || ['']).map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateListItem(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`Élément ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => removeListItem(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addListItem}
                  className="mt-2 flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter un élément
                </button>
              </div>
            </>
          )}

          {type === 'image' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL de l'image</label>
                <input
                  type="text"
                  value={content.url || ''}
                  onChange={(e) => updateContent('url', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="/image.jpg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texte alternatif</label>
                <input
                  type="text"
                  value={content.alt || ''}
                  onChange={(e) => updateContent('alt', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Légende (optionnel)</label>
                <input
                  type="text"
                  value={content.caption || ''}
                  onChange={(e) => updateContent('caption', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Largeur</label>
                <select
                  value={content.width || 'full'}
                  onChange={(e) => updateContent('width', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="full">Pleine largeur</option>
                  <option value="large">Large</option>
                  <option value="medium">Moyenne</option>
                  <option value="small">Petite</option>
                </select>
              </div>
            </>
          )}

          {type === 'video' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL YouTube</label>
                <input
                  type="text"
                  value={content.url || ''}
                  onChange={(e) => updateContent('url', convertYouTubeUrl(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Collez n'importe quel format d'URL YouTube (watch, youtu.be, embed)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Légende (optionnel)</label>
                <input
                  type="text"
                  value={content.caption || ''}
                  onChange={(e) => updateContent('caption', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Largeur</label>
                <select
                  value={content.width || 'full'}
                  onChange={(e) => updateContent('width', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="full">Pleine largeur</option>
                  <option value="large">Large</option>
                  <option value="medium">Moyenne</option>
                  <option value="small">Petite</option>
                </select>
              </div>
            </>
          )}

          {type === 'quote' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Citation</label>
                <textarea
                  value={content.text || ''}
                  onChange={(e) => updateContent('text', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Auteur (optionnel)</label>
                <input
                  type="text"
                  value={content.author || ''}
                  onChange={(e) => updateContent('author', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </>
          )}

          {(type === 'section_horizontal' || type === 'section_vertical') && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre de section (optionnel)</label>
                <input
                  type="text"
                  value={content.heading_text || ''}
                  onChange={(e) => updateContent('heading_text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Niveau du titre</label>
                <select
                  value={content.heading_level || 2}
                  onChange={(e) => updateContent('heading_level', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>H1</option>
                  <option value={2}>H2</option>
                  <option value={3}>H3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre (optionnel, en italique)</label>
                <input
                  type="text"
                  value={content.subtitle || ''}
                  onChange={(e) => updateContent('subtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL de l'image</label>
                <input
                  type="text"
                  value={content.image_url || ''}
                  onChange={(e) => updateContent('image_url', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texte alternatif</label>
                <input
                  type="text"
                  value={content.image_alt || ''}
                  onChange={(e) => updateContent('image_alt', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Légende de l'image (optionnel)</label>
                <input
                  type="text"
                  value={content.image_caption || ''}
                  onChange={(e) => updateContent('image_caption', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {type === 'section_horizontal' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position de l'image</label>
                  <select
                    value={content.image_position || 'left'}
                    onChange={(e) => updateContent('image_position', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="left">Gauche</option>
                    <option value="right">Droite</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contenu texte</label>
                <textarea
                  value={content.text_content || ''}
                  onChange={(e) => updateContent('text_content', e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alignement du texte</label>
                <select
                  value={content.text_alignment || 'left'}
                  onChange={(e) => updateContent('text_alignment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="left">Gauche</option>
                  <option value="center">Centre</option>
                  <option value="right">Droite</option>
                </select>
              </div>
            </>
          )}

          {type === 'divider' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
              <select
                value={content.style || 'space'}
                onChange={(e) => updateContent('style', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="space">Espace simple</option>
                <option value="dots">Points</option>
              </select>
            </div>
          )}
        </form>

        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
          >
            {initialOrdre ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
}
