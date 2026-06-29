import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { getExperienceById } from '../../content/experiences';
import { site } from '../../content/site';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import ContentBlock from '../components/ContentBlock';
import { useLocalizedContent } from '../hooks/useLocalizedContent';

export default function ExperienceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const experience = id ? getExperienceById(id) : undefined;
  const { t } = useLocalizedContent();

  const [unlocked, setUnlocked] = useState(() => {
    if (!experience?.access_code) return true;
    try { return sessionStorage.getItem(`access_${id}`) === experience.access_code; }
    catch { return false; }
  });
  const [codeInput, setCodeInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (codeInput.trim().toUpperCase() === experience?.access_code?.toUpperCase()) {
      sessionStorage.setItem(`access_${id}`, experience.access_code!);
      setUnlocked(true);
    } else {
      setError(true);
      setCodeInput('');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!experience) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center pt-32">
          <div className="text-gray-500 text-sm uppercase tracking-wider">
            {t(site.uiTexts.experienceNonTrouvee)}
          </div>
        </div>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh] px-6">
          <div className="w-full max-w-sm">
            <div className="border border-gray-200 p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
                {t({ fr: 'Accès restreint', en: 'Restricted access' })}
              </p>
              <h1 className="text-2xl font-bold uppercase tracking-tight text-ink mb-4">
                {t(experience.project_title ?? experience.titre)}
              </h1>
              <p className="text-sm text-gray-800 leading-relaxed mb-6">
                {t(experience.description)}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed mb-8">
                {t({
                  fr: 'Projet en beta fermée — entrez votre code pour accéder au case study.',
                  en: 'Project in closed beta — enter your code to access the case study.',
                })}
              </p>
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="text"
                  value={codeInput}
                  onChange={e => { setCodeInput(e.target.value); setError(false); }}
                  placeholder={t({ fr: 'CODE', en: 'CODE' })}
                  autoFocus
                  className="flex-1 border border-gray-300 border-r-0 px-4 py-3 text-sm font-mono uppercase tracking-widest outline-none focus:border-ink transition-colors bg-white text-ink placeholder:text-gray-300"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-accent text-ink text-base font-bold hover:bg-accent-light transition-colors"
                >
                  →
                </button>
              </form>
              {error && (
                <p className="text-xs uppercase tracking-wider text-red-500 mt-3">
                  {t({ fr: 'Code incorrect', en: 'Invalid code' })}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <button
        onClick={() => window.location.href = '/#parcours'}
        className="fixed left-4 md:left-8 top-20 md:top-28 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-ink hover:border-ink hover:bg-accent-light/20 transition-colors duration-300 group z-50"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-wider">{t(site.uiTexts.backButton)}</span>
      </button>

      {experience.hero_image_url ? (
        <>
          <div className="w-full h-[400px] md:h-[600px] relative">
            <img
              src={experience.hero_image_url}
              alt={experience.project_title ? t(experience.project_title) : t(experience.titre)}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative -mt-24 mb-16 px-4 md:px-8 z-20">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white border border-gray-200 p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {experience.project_title && (
                  <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-ink mb-6">
                    {t(experience.project_title)}
                  </h1>
                )}
                <div className="space-y-2">
                  {experience.titre && (
                    <p className="text-sm md:text-base">
                      <span className="text-xs uppercase tracking-wider text-gray-500 mr-2">{t(site.uiTexts.roleLabel)} :</span>
                      <span className="text-ink">{t(experience.titre)}</span>
                    </p>
                  )}
                  {experience.entreprise && (
                    <p className="text-sm md:text-base">
                      <span className="text-xs uppercase tracking-wider text-gray-500 mr-2">{t(site.uiTexts.produitLabel)} :</span>
                      <span className="text-ink">{experience.entreprise}</span>
                    </p>
                  )}
                  {experience.role_duration && (
                    <p className="text-sm md:text-base">
                      <span className="text-xs uppercase tracking-wider text-gray-500 mr-2">{t(site.uiTexts.dureeLabel)} :</span>
                      <span className="text-ink">{t(experience.role_duration)}</span>
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      ) : (
        <div className="pt-32"></div>
      )}

      {experience.contentBlocks.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-16">
          <div className="space-y-16">
            {experience.contentBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <ContentBlock block={block} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <ContactSection />
    </div>
  );
}
