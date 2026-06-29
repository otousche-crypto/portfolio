import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { site } from '../../content/site';
import { useLocalizedContent } from '../hooks/useLocalizedContent';
import { useLanguage } from '../contexts/LanguageContext';

const getCompactThreshold = () => window.innerHeight - 80;

export default function Header() {
  const { t } = useLocalizedContent();
  const { language, setLanguage } = useLanguage();
  const [isCompact, setIsCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > getCompactThreshold());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavigation = (sectionId: string) => {
    setMenuOpen(false);
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

        <button
          className="flex items-center justify-center text-ink p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs z-40 flex flex-col pt-24 px-8 pb-10 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#4CB8FF', height: '100dvh' }}
      >
        <nav className="flex flex-col gap-1 flex-1">
          {site.navigation.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavigation(item.sectionId)}
              className="text-left text-2xl font-bold uppercase tracking-tight text-white py-3 border-b border-white/20 hover:opacity-70 transition-opacity"
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 text-sm uppercase tracking-wider font-medium mt-6">
          <button
            onClick={() => setLanguage('fr')}
            aria-pressed={language === 'fr'}
            className={`px-2 py-1 transition-opacity text-white ${
              language === 'fr' ? 'font-bold border-b-2 border-white' : 'opacity-50 hover:opacity-100'
            }`}
          >
            FR
          </button>
          <span className="text-white/30">/</span>
          <button
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            className={`px-2 py-1 transition-opacity text-white ${
              language === 'en' ? 'font-bold border-b-2 border-white' : 'opacity-50 hover:opacity-100'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
