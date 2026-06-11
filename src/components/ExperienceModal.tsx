import { X } from 'lucide-react';
import { Experience } from '../lib/supabase';
import { useEffect } from 'react';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  useEffect(() => {
    if (experience) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [experience]);

  if (!experience) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-white/95 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-3xl w-full border-2 border-black animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          {experience.imageUrl && (
            <div className="relative h-96 overflow-hidden">
              <img
                src={experience.imageUrl}
                alt={experience.titre}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          )}

          <div className="p-12">
            <p className="text-xs text-gray-500 mb-2">{experience.annee}</p>
            <h2 className="text-2xl font-medium text-black mb-1">{experience.titre}</h2>
            <div className="flex items-center gap-3 mb-8">
              {experience.logourl && (
                <img
                  src={experience.logourl}
                  alt={`${experience.entreprise} logo`}
                  className="h-8 w-8 object-contain rounded"
                />
              )}
              <p className="text-sm text-gray-600">{experience.entreprise}</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
