import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { site } from '../../content/site';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [keepVisible, setKeepVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (keepVisible) {
        setIsVisible(true);
      } else if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, keepVisible]);

  const handleNavigation = (sectionId: string) => {
    setKeepVisible(true);
    setTimeout(() => setKeepVisible(false), 3000);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-8 flex items-center justify-between gap-3">
        <button
          onClick={() => {
            setKeepVisible(true);
            setTimeout(() => setKeepVisible(false), 3000);

            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
          }}
          className="flex flex-col items-end text-sm md:text-base font-bold uppercase tracking-tight text-ink hover:text-accent transition-colors leading-tight border-r-2 border-ink pr-2 md:pr-3 flex-shrink-0"
        >
          <span>{site.prenom}</span>
          <span>{site.nom}</span>
        </button>

        <nav className="flex gap-3 md:gap-8 items-center">
          {site.navigation.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavigation(item.sectionId)}
              className="text-[11px] md:text-xs uppercase tracking-wide md:tracking-wider font-medium text-gray-500 hover:text-ink transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-ink transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
