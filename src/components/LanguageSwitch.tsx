import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-[11px] md:text-xs uppercase tracking-wider font-medium flex-shrink-0">
      <button
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        className={`px-1 transition-colors ${
          language === 'fr' ? 'text-ink font-bold border-b-2 border-accent' : 'text-gray-400 hover:text-ink'
        }`}
      >
        FR
      </button>
      <span className="text-gray-300" aria-hidden="true">/</span>
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-1 transition-colors ${
          language === 'en' ? 'text-ink font-bold border-b-2 border-accent' : 'text-gray-400 hover:text-ink'
        }`}
      >
        EN
      </button>
    </div>
  );
}
