import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { methodologie } from '../../content/methodologie';
import { useCenterHighlight } from '../hooks/useCenterHighlight';
import { useLocalizedContent } from '../hooks/useLocalizedContent';

const iconMap = { comprendre: Search, concevoir: PenTool, valider: CheckCircle } as const;

const CARD_BG = '#FFF0F2';
const CARD_BG_HOVER = '#FADADD';
const ICON_BG = '#F5C6CD';
const ACCENT_ROSE = '#C96478';
const SEPARATOR = '#E8A0AC';

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
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 border-y border-pink-200" style={{ backgroundColor: '#FADADD' }}>
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
              className="accent-strong text-base md:text-lg text-ink/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t(methodologie.paragrapheSecondaire) }}
            />
          )}
        </motion.div>

        {/* Carrousel (mobile uniquement) */}
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
                  ref={(el) => { slideRefs.current[index] = el; }}
                  className="snap-center shrink-0 w-[80%] p-8"
                  style={{ backgroundColor: CARD_BG, border: `1px solid ${SEPARATOR}` }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    {Icon && (
                      <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: ICON_BG }}>
                        <Icon size={22} className="text-ink" strokeWidth={1.5} />
                      </div>
                    )}
                    <div>
                      <span className="font-code text-[11px] tabular-nums block mb-0.5" style={{ color: ACCENT_ROSE }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                        {t(bloc.titre)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/70">
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
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: activeIndex === index ? '1.5rem' : '0.375rem',
                  backgroundColor: activeIndex === index ? ACCENT_ROSE : '#E8A0AC',
                }}
              />
            ))}
          </div>
        </div>

        {/* Grille (md+) */}
        <div
          className="hidden md:grid mt-20 md:mt-24 md:grid-cols-2 lg:grid-cols-3 gap-px border"
          style={{ backgroundColor: SEPARATOR, borderColor: SEPARATOR }}
        >
          {methodologie.blocs.map((bloc, index) => {
            const Icon = bloc.iconKey ? iconMap[bloc.iconKey] : null;

            return (
              <motion.div
                key={bloc.iconKey ?? index}
                className="flex flex-col items-start p-8 transition-colors"
                style={{ backgroundColor: CARD_BG }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = CARD_BG_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = CARD_BG)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  {Icon && (
                    <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: ICON_BG }}>
                      <Icon size={22} className="text-ink" strokeWidth={1.5} />
                    </div>
                  )}
                  <div>
                    <span className="font-code text-[11px] tabular-nums block mb-0.5" style={{ color: ACCENT_ROSE }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                      {t(bloc.titre)}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink/70">
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
