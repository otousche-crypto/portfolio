import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase, Experience, UIText, ExperienceContentBlock } from '../lib/supabase';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import ContentBlock from '../components/ContentBlock';

export default function ExperienceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [contentBlocks, setContentBlocks] = useState<ExperienceContentBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [uiTexts, setUiTexts] = useState({
    chargement: 'Chargement...',
    back_button: 'BACK',
    experience_non_trouvee: 'Expérience non trouvée'
  });

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const fetchData = async (experienceId: string) => {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('id', experienceId)
      .maybeSingle();

    const { data: textsData } = await supabase
      .from('ui_texts')
      .select('*')
      .in('cle', ['chargement', 'back_button', 'experience_non_trouvee']);

    if (error) {
      console.error('Error fetching experience:', error);
    } else {
      setExperience(data);
      if (data) {
        fetchContentBlocks(data.id);
      }
    }

    if (textsData && textsData.length > 0) {
      const textsObj: any = {};
      textsData.forEach((text: UIText) => {
        textsObj[text.cle] = text.texte;
      });
      setUiTexts({ ...uiTexts, ...textsObj });
    }

    setLoading(false);
  };

  const fetchContentBlocks = async (experienceId: string) => {
    setLoadingContent(true);
    const { data, error } = await supabase
      .from('experience_content_blocks')
      .select('*')
      .eq('experience_id', experienceId)
      .eq('visible', true)
      .order('ordre', { ascending: true });

    if (error) {
      console.error('Error fetching content blocks:', error);
    } else {
      setContentBlocks(data || []);
    }

    setLoadingContent(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center pt-32">
          <div className="text-gray-500">{uiTexts.chargement}</div>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center pt-32">
          <div className="text-gray-500">{uiTexts.experience_non_trouvee}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <button
        onClick={() => window.location.href = '/#parcours'}
        className={`fixed left-8 top-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 transition-all duration-300 group z-50 shadow-sm hover:shadow-md ${
          isHeaderVisible ? '-translate-y-20' : 'translate-y-0'
        }`}
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-light">{uiTexts.back_button}</span>
      </button>

      {experience.hero_image_url ? (
        <>
          <div className="w-full h-[500px] md:h-[600px] relative">
            <img
              src={experience.hero_image_url}
              alt={experience.project_title || experience.titre}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {(experience.project_title || experience.role_duration || experience.product_name || experience.description) && (
            <div className="relative -mt-24 mb-16 px-8 z-20">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-8">
                  {experience.project_title && (
                    <h1 className="text-3xl md:text-4xl font-light text-black mb-6">
                      {experience.project_title}
                    </h1>
                  )}
                  <div className="space-y-3 text-gray-700">
                    {experience.titre && (
                      <p className="text-base font-light">
                        <span className="text-gray-500">Role : </span>
                        <span className="text-gray-900">{experience.titre}</span>
                      </p>
                    )}
                    {experience.entreprise && (
                      <p className="text-base font-light">
                        <span className="text-gray-500">Produit : </span>
                        <span className="text-gray-900">{experience.entreprise}</span>
                      </p>
                    )}
                    {experience.role_duration && (
                      <p className="text-base font-light">
                        <span className="text-gray-500">Durée : </span>
                        <span className="text-gray-900">{experience.role_duration}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="pt-32"></div>
      )}

      {contentBlocks.length > 0 && (
        <div className="max-w-4xl mx-auto px-8 py-16">
          {loadingContent ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-gray-500">{uiTexts.chargement}</div>
            </div>
          ) : (
            <div className="space-y-16">
              {contentBlocks.map((block) => (
                <ContentBlock key={block.id} block={block} />
              ))}
            </div>
          )}
        </div>
      )}

      <ContactSection />
    </div>
  );
}
