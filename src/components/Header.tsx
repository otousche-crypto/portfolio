import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../../content/site';
import { useLocalizedContent } from '../hooks/useLocalizedContent';
import LanguageSwitch from './LanguageSwitch';

const COMPACT_THRESHOLD = 40;

export default function Header() {
  const { t } = useLocalizedContent();
  const [isCompact, setIsCompact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > COMPACT_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-3 transition-all duration-300 ${
          isCompact ? 'py-2 md:py-3' : 'py-5 md:py-8'
        }`}
      >
        <button
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
          }}
          className={`flex flex-col items-end font-bold uppercase tracking-tight text-ink hover:text-accent transition-all duration-300 leading-tight border-r-2 border-ink pr-2 md:pr-3 flex-shrink-0 ${
            isCompact ? 'text-[10px] md:text-xs' : 'text-sm md:text-base'
          }`}
        >
          <span>{site.prenom}</span>
          <span>{site.nom}</span>
        </button>

        <nav className="flex gap-3 md:gap-8 items-center">
          {site.navigation.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavigation(item.sectionId)}
              className="text-[11px] md:text-xs uppercase tracking-wide md:tracking-wider font-medium text-gray-500 hover:text-ink border-b-2 border-transparent hover:border-accent pb-1 transition-colors"
            >
              {t(item.label)}
            </button>
          ))}
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}
