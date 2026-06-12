import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { hero } from '../../content/hero';
import { site } from '../../content/site';

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
  const titles = hero.titresAnimes;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="max-w-7xl w-full flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-20 w-full">
          <motion.img
            src={site.imageProfilUrl}
            alt={site.imageProfilAlt}
            className="w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-ink leading-tight mb-6 md:mb-8">
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
                {hero.titreFixe}
              </motion.span>
            </h1>
            <motion.p
              className="accent-strong text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={reveal}
              dangerouslySetInnerHTML={{ __html: hero.description }}
            />
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNextSection}
        className="mt-8 md:mt-12 p-3 border border-gray-200 hover:border-ink hover:bg-accent-light/20 transition-colors cursor-pointer group"
        aria-label="Aller à la section suivante"
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
