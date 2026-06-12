import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences, titreSection } from '../../content/experiences';

interface TimelineSectionProps {
  excludeExperienceId?: string;
  customTitle?: string;
}

export default function TimelineSection({ excludeExperienceId, customTitle }: TimelineSectionProps) {
  const navigate = useNavigate();

  const visibleExperiences = excludeExperienceId
    ? experiences.filter((exp) => exp.id !== excludeExperienceId)
    : experiences;

  return (
    <section id="parcours" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {customTitle || titreSection}
        </motion.h2>

        <div className="border-t border-gray-200">
          {visibleExperiences.map((experience, index) => {
            const isClickable = experience.is_clickable !== false;

            return (
              <motion.div
                key={experience.id}
                className={`py-8 px-4 md:px-6 border-b border-gray-200 ${
                  isClickable
                    ? 'cursor-pointer group hover:bg-accent-light/10 transition-colors'
                    : ''
                }`}
                onClick={isClickable ? () => navigate(`/experience/${experience.id}`) : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-5 md:gap-6">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 group-hover:border-ink transition-colors">
                    {experience.logourl ? (
                      <img
                        src={experience.logourl}
                        alt={`${experience.entreprise} logo`}
                        className="max-w-full max-h-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-gray-400 text-xl font-bold">
                        {experience.entreprise.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                      {experience.annee}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-ink mb-1">
                      {experience.titre}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{experience.entreprise}</p>
                  </div>
                  {isClickable ? (
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-ink group-hover:translate-x-1 transition-all flex-shrink-0" />
                  ) : (
                    <span className="text-xs uppercase tracking-wider text-gray-400 flex-shrink-0">
                      Work in progress
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
