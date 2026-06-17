import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

// Gouttière fixe façon éditeur de code, visible uniquement sur très grands
// écrans (2xl+) où elle ne mord jamais sur le contenu (marge naturelle hors
// du conteneur max-w-7xl). Trois fonctions : repère de fichier, mini-nav par
// section (minimap), et compteur de "ligne" dérivé du scroll — signature
// visuelle de la page, en écho direct au thème "vibe coding" du contenu.
const SECTION_IDS = ['home', 'about', 'parcours', 'contact'] as const;
const TOTAL_LINES = 248;

export default function EditorGutter() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 });
  const lineCount = useTransform(smoothProgress, [0, 1], [1, TOTAL_LINES]);
  const fillHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const [lineDisplay, setLineDisplay] = useState('001');
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const unsubscribe = lineCount.on('change', (value) => {
      setLineDisplay(String(Math.max(1, Math.round(value))).padStart(3, '0'));
    });
    return unsubscribe;
  }, [lineCount]);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hidden 2xl:flex fixed left-0 top-0 h-screen w-16 flex-col items-center justify-between border-r border-gray-200 bg-mist py-10 z-40">
      <span
        aria-hidden="true"
        className="font-code text-[10px] tracking-widest text-gray-400 [writing-mode:vertical-rl] rotate-180 select-none whitespace-nowrap"
      >
        olivier-tousche/portfolio.tsx
      </span>

      <nav className="flex flex-col items-center gap-5">
        {SECTION_IDS.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            aria-label={`Aller à la section ${id}`}
            className="group flex items-center justify-center p-1"
          >
            <span
              className={`block rounded-full transition-all ${
                activeId === id
                  ? 'w-2 h-2 bg-accent'
                  : 'w-1.5 h-1.5 bg-gray-300 group-hover:bg-gray-400'
              }`}
            />
          </button>
        ))}
      </nav>

      <div aria-hidden="true" className="flex flex-col items-center gap-3">
        <div className="relative h-20 w-px bg-gray-200 overflow-hidden">
          <motion.div className="absolute top-0 left-0 w-px bg-accent" style={{ height: fillHeight }} />
        </div>
        <span className="font-code text-[10px] text-gray-400 tabular-nums">{lineDisplay}</span>
      </div>
    </div>
  );
}
