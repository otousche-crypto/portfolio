import type { Language } from '../contexts/LanguageContext';
import type { LocalizedString } from './content-types';

export function pick(value: LocalizedString, language: Language): string {
  return value[language] ?? value.fr;
}
