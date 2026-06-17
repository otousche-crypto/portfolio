import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TimelineSection from '../components/TimelineSection';
import ContactSection from '../components/ContactSection';
import EditorGutter from '../components/EditorGutter';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      const timeoutId = setTimeout(scrollToElement, 300);
      return () => clearTimeout(timeoutId);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      <EditorGutter />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ContactSection />
      </main>
    </div>
  );
}
