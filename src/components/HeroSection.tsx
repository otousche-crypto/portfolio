import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { supabase, HeroSection as HeroData, SiteConfig, SkillTag } from '../lib/supabase';

export default function HeroSection() {
  const [titles, setTitles] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [skillTags, setSkillTags] = useState<SkillTag[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    const { data: hero } = await supabase
      .from('hero_section')
      .select('*')
      .maybeSingle();

    const { data: config } = await supabase
      .from('site_config')
      .select('*')
      .maybeSingle();

    const { data: tags } = await supabase
      .from('skills_tags')
      .select('*')
      .eq('visible', true)
      .order('ordre', { ascending: true });

    if (hero) {
      setHeroData(hero);
      const loadedTitles = hero.titres_animes || ['UX', 'Product', 'Service'];
      setTitles(loadedTitles);
    } else {
      setTitles(['UX', 'Product', 'Service']);
    }
    if (config) setSiteConfig(config);
    if (tags) setSkillTags(tags);
    setIsDataLoaded(true);
  };

  useEffect(() => {
    if (!isDataLoaded || titles.length === 0) return;

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
  }, [displayText, isDeleting, currentIndex, titles, isDataLoaded]);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-24 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-300/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-300/15 rounded-full filter blur-[100px] animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-20 w-full">
          <img
            src="/Hero.png"
            alt={siteConfig?.image_profil_alt || 'Olivier Touche'}
            className="w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain flex-shrink-0"
          />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight tracking-tight mb-4 md:mb-6">
              <span>{displayText}</span>
              <span className="animate-blink">|</span> {heroData?.titre_fixe || 'Designer.'}
            </h1>
            <p
              className="text-lg md:text-xl text-gray-500 max-w-xl font-light"
              dangerouslySetInnerHTML={{
                __html: heroData?.description || 'De l\'identification des irritants aux tests utilisateurs, je conçois des <strong class="font-semibold text-gray-700">expériences produit</strong> et de service centrées utilisateurs, en articulant <strong class="font-semibold text-gray-700">stratégie, recherche et design</strong>.'
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="relative z-20 mt-8 md:mt-12 animate-bounce hover:scale-110 transition-transform cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <ChevronDown
          size={40}
          className="text-gray-400 group-hover:text-gray-600 transition-colors"
          strokeWidth={1.5}
        />
      </button>
    </section>
  );
}
