import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase, Experience, SectionTitre, UIText } from '../lib/supabase';

interface TimelineSectionProps {
  excludeExperienceId?: string;
  customTitle?: string;
}

export default function TimelineSection({ excludeExperienceId, customTitle }: TimelineSectionProps) {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [sectionTitre, setSectionTitre] = useState<string>('Experience professionnelle');
  const [loadingText, setLoadingText] = useState<string>('Chargement...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: expData, error } = await supabase
      .from('experiences')
      .select('*')
      .order('ordre', { ascending: true });

    const { data: titreData } = await supabase
      .from('section_titres')
      .select('*')
      .eq('section_id', 'parcours')
      .maybeSingle();

    const { data: textData } = await supabase
      .from('ui_texts')
      .select('*')
      .eq('cle', 'chargement')
      .maybeSingle();

    if (error) {
      console.error('Error fetching experiences:', error);
    } else {
      const filteredExperiences = excludeExperienceId
        ? (expData || []).filter(exp => exp.id !== excludeExperienceId)
        : (expData || []);
      setExperiences(filteredExperiences);
    }

    if (titreData) setSectionTitre(titreData.titre);
    if (textData) setLoadingText(textData.texte);
    setLoading(false);
  };

  if (loading) {
    return (
      <section id="parcours" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16">{sectionTitre}</h2>
          <div className="flex items-center justify-center">
            <div className="text-gray-500 text-sm">{loadingText}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="parcours" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-16">{customTitle || sectionTitre}</h2>

        <div className="space-y-1 divide-y divide-gray-100">
          {experiences.map((experience) => {
            const isClickable = experience.is_clickable !== false;

            return (
              <div
                key={experience.id}
                className={`py-8 px-6 -mx-6 ${isClickable ? 'cursor-pointer group hover:bg-gray-50 transition-colors' : ''}`}
                onClick={isClickable ? () => navigate(`/experience/${experience.id}`) : undefined}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm">
                    {experience.logourl ? (
                      <img
                        src={experience.logourl}
                        alt={`${experience.entreprise} logo`}
                        className="max-w-full max-h-full object-contain transition-all rounded-lg p-2"
                      />
                    ) : (
                      <span className="text-gray-400 text-xl font-light">
                        {experience.entreprise.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2 font-light">{experience.annee}</p>
                    <h3 className="text-xl font-normal text-black mb-1">{experience.titre}</h3>
                    <p className="text-base text-gray-600 font-light">{experience.entreprise}</p>
                  </div>
                  {isClickable ? (
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all flex-shrink-0" />
                  ) : (
                    <span className="text-sm text-gray-400 font-light flex-shrink-0">Work in progress</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
