import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { supabase, SiteConfig, Navigation } from '../lib/supabase';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [navItems, setNavItems] = useState<Navigation[]>([]);
  const [keepVisible, setKeepVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchHeaderData();
  }, []);

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

  const fetchHeaderData = async () => {
    const { data: configData } = await supabase
      .from('site_config')
      .select('*')
      .maybeSingle();

    const { data: navData } = await supabase
      .from('navigation')
      .select('*')
      .order('ordre', { ascending: true });

    if (configData) setSiteConfig(configData);
    if (navData) setNavItems(navData);
  };

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
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
          className="flex flex-col items-end text-base font-normal text-black hover:opacity-60 transition-opacity leading-tight border-r-2 border-black pr-3"
        >
          <span>Olivier</span>
          <span>Tousche</span>
        </button>

        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.section_id)}
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              {item.label}
            </button>
          ))}
          {siteConfig?.linkedin_url && (
            <a
              href={siteConfig.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
