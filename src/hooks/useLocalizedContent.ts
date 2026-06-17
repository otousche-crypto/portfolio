import { useLanguage } from '../contexts/LanguageContext';
import { pick } from '../lib/i18n';
import type { LocalizedString } from '../lib/content-types';

export function useLocalizedContent() {
  const { language } = useLanguage();
  const t = (value: LocalizedString): string => pick(value, language);
  return { language, t };
}
