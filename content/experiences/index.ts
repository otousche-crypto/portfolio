// ─── EXPÉRIENCES : ordre d'affichage de la timeline ───
// Modifier ici : le titre de la section "Work" et l'ordre des expériences.
// Pour ajouter une expérience : créer un fichier [slug].ts dans ce dossier
// (copier un fichier existant comme modèle), l'importer et l'ajouter au tableau.

import type { Experience } from '../../src/lib/content-types';
import { goMoonbound } from './go-moonbound';
import { equinoxAltered } from './equinox-altered';
import { oodrive } from './oodrive';
import { wedigitalgarden } from './wedigitalgarden';
import { logitech } from './logitech';

export const titreSection = 'Experience professionnelle';

// Du plus récent au plus ancien — l'ordre du tableau = l'ordre d'affichage.
export const experiences: Experience[] = [
  goMoonbound,
  equinoxAltered,
  oodrive,
  wedigitalgarden,
  logitech,
];

// Retrouve une expérience par son slug (utilisé par la page détail).
export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}
