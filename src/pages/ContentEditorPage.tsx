import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, Experience, ExperienceContentBlock, ContentBlockType, ContentBlockContent } from '../lib/supabase';
import ContentBlockForm from '../components/ContentBlockForm';
import { Plus, CreditCard as Edit, Trash2, Eye, EyeOff, ExternalLink, ArrowLeft } from 'lucide-react';

export default function ContentEditorPage() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>('');
  const [contentBlocks, setContentBlocks] = useState<ExperienceContentBlock[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingBlock, setEditingBlock] = useState<ExperienceContentBlock | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  useEffect(() => {
    if (selectedExperience) {
      fetchContentBlocks(selectedExperience);
    }
  }, [selectedExperience]);

  const fetchExperiences = async () => {
    const { data } = await supabase
      .from('experiences')
      .select('*')
      .order('ordre', { ascending: true });

    if (data) {
      setExperiences(data);
      if (data.length > 0 && !selectedExperience) {
        setSelectedExperience(data[0].id);
      }
    }
  };

  const fetchContentBlocks = async (experienceId: string) => {
    setLoading(true);
    const { data } = await supabase
      .from('experience_content_blocks')
      .select('*')
      .eq('experience_id', experienceId)
      .order('ordre', { ascending: true });

    setContentBlocks(data || []);
    setLoading(false);
  };

  const getNextOrdre = () => {
    if (contentBlocks.length === 0) return 10;
    const maxOrdre = Math.max(...contentBlocks.map(b => b.ordre));
    return maxOrdre + 10;
  };

  const handleCreateBlock = async (type: ContentBlockType, content: ContentBlockContent, ordre: number) => {
    const { error } = await supabase
      .from('experience_content_blocks')
      .insert({
        experience_id: selectedExperience,
        type,
        content,
        ordre,
        visible: true
      });

    if (error) {
      showNotification('error', 'Erreur lors de la création du bloc');
      console.error(error);
    } else {
      showNotification('success', 'Bloc créé avec succès');
      fetchContentBlocks(selectedExperience);
      setShowForm(false);
    }
  };

  const handleUpdateBlock = async (type: ContentBlockType, content: ContentBlockContent, ordre: number) => {
    if (!editingBlock) return;

    const { error } = await supabase
      .from('experience_content_blocks')
      .update({
        type,
        content,
        ordre,
        updated_at: new Date().toISOString()
      })
      .eq('id', editingBlock.id);

    if (error) {
      showNotification('error', 'Erreur lors de la mise à jour du bloc');
      console.error(error);
    } else {
      showNotification('success', 'Bloc mis à jour avec succès');
      fetchContentBlocks(selectedExperience);
      setShowForm(false);
      setEditingBlock(null);
    }
  };

  const handleDeleteBlock = async (blockId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce bloc ?')) return;

    const { error } = await supabase
      .from('experience_content_blocks')
      .delete()
      .eq('id', blockId);

    if (error) {
      showNotification('error', 'Erreur lors de la suppression du bloc');
      console.error(error);
    } else {
      showNotification('success', 'Bloc supprimé avec succès');
      fetchContentBlocks(selectedExperience);
    }
  };

  const handleToggleVisibility = async (block: ExperienceContentBlock) => {
    const { error } = await supabase
      .from('experience_content_blocks')
      .update({ visible: !block.visible })
      .eq('id', block.id);

    if (error) {
      showNotification('error', 'Erreur lors du changement de visibilité');
      console.error(error);
    } else {
      fetchContentBlocks(selectedExperience);
    }
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const getBlockPreview = (block: ExperienceContentBlock): string => {
    switch (block.type) {
      case 'heading':
        return block.content.text || '';
      case 'text':
        return (block.content.text || '').substring(0, 100);
      case 'bullet_list':
        return block.content.heading_text || `Liste de ${(block.content.items || []).length} éléments`;
      case 'image':
        return block.content.alt || block.content.url || 'Image';
      case 'quote':
        return block.content.text || '';
      case 'section_horizontal':
      case 'section_vertical':
        return block.content.heading_text || (block.content.text_content || '').substring(0, 50);
      case 'divider':
        return 'Séparateur';
      default:
        return block.type;
    }
  };

  const getBlockTypeLabel = (type: ContentBlockType): string => {
    const labels: Record<ContentBlockType, string> = {
      heading: 'Titre',
      text: 'Texte',
      bullet_list: 'Liste',
      image: 'Image',
      image_grid: 'Grille',
      quote: 'Citation',
      section_horizontal: 'Section H',
      section_vertical: 'Section V',
      divider: 'Séparateur'
    };
    return labels[type] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour
              </button>
              <h1 className="text-2xl font-light text-black">Éditeur de contenu</h1>
            </div>
          </div>
        </div>
      </div>

      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {notification.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Sélectionner un projet</label>
          <div className="flex gap-3">
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {experiences.map((exp) => (
                <option key={exp.id} value={exp.id}>
                  {exp.project_title || exp.titre}
                </option>
              ))}
            </select>
            {selectedExperience && (
              <button
                onClick={() => window.open(`/experience/${selectedExperience}`, '_blank')}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Voir
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Blocs de contenu ({contentBlocks.length})
            </h2>
            <button
              onClick={() => {
                setEditingBlock(null);
                setShowForm(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              Ajouter un bloc
            </button>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-500">Chargement...</div>
          ) : contentBlocks.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Aucun bloc de contenu. Commencez par en ajouter un.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {contentBlocks.map((block) => (
                <div
                  key={block.id}
                  className={`p-4 hover:bg-gray-50 transition-colors ${
                    !block.visible ? 'opacity-50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {getBlockTypeLabel(block.type)}
                        </span>
                        <span className="text-sm text-gray-500">Ordre: {block.ordre}</span>
                        {!block.visible && (
                          <span className="text-xs text-gray-500 italic">Masqué</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 truncate">
                        {getBlockPreview(block)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleVisibility(block)}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title={block.visible ? 'Masquer' : 'Afficher'}
                      >
                        {block.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => {
                          setEditingBlock(block);
                          setShowForm(true);
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteBlock(block.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <ContentBlockForm
          onSubmit={editingBlock ? handleUpdateBlock : handleCreateBlock}
          onCancel={() => {
            setShowForm(false);
            setEditingBlock(null);
          }}
          initialType={editingBlock?.type}
          initialContent={editingBlock?.content}
          initialOrdre={editingBlock?.ordre}
          nextOrdre={getNextOrdre()}
        />
      )}
    </div>
  );
}
