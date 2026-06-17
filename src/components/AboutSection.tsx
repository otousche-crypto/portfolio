import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { methodologie } from '../../content/methodologie';
import { useCenterHighlight } from '../hooks/useCenterHighlight';
import { useLocalizedContent } from '../hooks/useLocalizedContent';

const iconMap = { comprendre: Search, concevoir: PenTool, valider: CheckCircle } as const;

export default function AboutSection() {
  const titleRef = useCenterHighlight<HTMLHeadingElement>();
  const { t } = useLocalizedContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = slideRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root, threshold: [0.6] }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={titleRef}
          className="center-highlight text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {t(methodologie.titreSection)}
        </motion.h2>

        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            className="accent-strong text-xl md:text-2xl text-ink leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: t(methodologie.paragraphePrincipal) }}
          />

          {methodologie.paragrapheSecondaire && t(methodologie.paragrapheSecondaire) && (
            <p
              className="accent-strong text-base md:text-lg text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t(methodologie.paragrapheSecondaire) }}
            />
          )}
        </motion.div>

        {/* Carrousel (mobile uniquement) : swipe + scroll-snap natif, pas de JS de glissement */}
        <div className="md:hidden mt-20">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-2"
          >
            {methodologie.blocs.map((bloc, index) => {
              const Icon = bloc.iconKey ? iconMap[bloc.iconKey] : null;

              return (
                <div
                  key={bloc.iconKey ?? index}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  className="snap-center shrink-0 w-[80%] border border-gray-200 bg-white p-8"
                >
                  <div className="flex items-center gap-4 mb-5">
                    {Icon && (
                      <div className="w-12 h-12 bg-accent-light/30 flex items-center justify-center">
                        <Icon size={22} className="text-ink" strokeWidth={1.5} />
                      </div>
                    )}
                    <div>
                      <span className="font-code text-[11px] text-accent tabular-nums block mb-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                        {t(bloc.titre)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(bloc.description)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {methodologie.blocs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'étape ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index ? 'w-6 bg-accent' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grille (md+) */}
        <div className="hidden md:grid mt-20 md:mt-24 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {methodologie.blocs.map((bloc, index) => {
            const Icon = bloc.iconKey ? iconMap[bloc.iconKey] : null;

            return (
              <motion.div
                key={bloc.iconKey ?? index}
                className="flex flex-col items-start bg-white p-8 hover:bg-accent-light/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  {Icon && (
                    <div className="w-12 h-12 bg-accent-light/30 flex items-center justify-center">
                      <Icon size={22} className="text-ink" strokeWidth={1.5} />
                    </div>
                  )}
                  <div>
                    <span className="font-code text-[11px] text-accent tabular-nums block mb-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                      {t(bloc.titre)}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(bloc.description)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
