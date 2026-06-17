import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { hero } from '../../content/hero';
import { site } from '../../content/site';
import { useLocalizedContent } from '../hooks/useLocalizedContent';

const reveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function HeroSection() {
  const { language, t } = useLocalizedContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps -- t only depends on language
  const titles = useMemo(() => hero.titresAnimes.map(t), [language]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const currentTitle = titles[currentIndex];

    if (!isDeleting && displayText === currentTitle) {
      const timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, titles]);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handlePortraitMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  const handlePortraitLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="max-w-7xl w-full flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-20 w-full">
          <div
            className="flex-shrink-0 [perspective:1000px]"
            onMouseMove={handlePortraitMove}
            onMouseLeave={handlePortraitLeave}
          >
            <motion.img
              src={site.imageProfilUrl}
              alt={t(site.imageProfilAlt)}
              className="w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="flex-1">
            <p className="font-code text-xs md:text-sm text-gray-400 mb-4 flex items-center gap-2 flex-wrap">
              <span className="text-accent">~/olivier-tousche</span>
              <span>%</span>
              <span className="text-ink">whoami</span>
            </p>
            <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-bold uppercase tracking-tight text-ink leading-[1.05] mb-6 md:mb-8">
              <motion.span
                className="block"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={reveal}
              >
                <span className="text-accent">{displayText}</span>
                <span
                  className="animate-blink inline-block w-[0.55ch] h-[0.85em] bg-accent align-baseline translate-y-[0.1em] mx-1"
                  aria-hidden="true"
                ></span>
              </motion.span>
              <motion.span
                className="block"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={reveal}
              >
                {t(hero.titreFixe)}
              </motion.span>
            </h1>
            <motion.p
              className="accent-strong text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={reveal}
              dangerouslySetInnerHTML={{ __html: t(hero.description) }}
            />
            <motion.div
              className="flex flex-wrap gap-2 mt-6 max-w-xl"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={reveal}
            >
              {hero.skillTags.map((tag, index) => (
                <span
                  key={index}
                  className="font-code text-[11px] uppercase tracking-wider text-gray-600 border border-gray-200 px-2.5 py-1 hover:border-accent hover:text-ink transition-colors"
                >
                  {t(tag)}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNextSection}
        className="mt-8 md:mt-12 p-3 border border-gray-200 hover:border-ink hover:bg-accent-light/20 transition-colors cursor-pointer group"
        aria-label={t(site.uiTexts.nextSectionLabel)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ChevronDown
          size={28}
          className="text-gray-400 group-hover:text-ink transition-colors"
          strokeWidth={1.5}
        />
      </motion.button>
    </section>
  );
}
