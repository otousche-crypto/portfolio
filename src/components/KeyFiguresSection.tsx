import { Users, Globe, TrendingUp, Award, Target, Zap, Scan, ArrowLeftRight, LucideIcon } from 'lucide-react';
import { KeyFigure } from '../lib/content-types';

interface KeyFiguresSectionProps {
  figures: KeyFigure[];
}

const iconMap: { [key: string]: LucideIcon } = {
  Users,
  Globe,
  TrendingUp,
  Award,
  Target,
  Zap,
  Scan,
  ArrowLeftRight,
};

export default function KeyFiguresSection({ figures }: KeyFiguresSectionProps) {
  if (figures.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 md:px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-ink mb-12 text-center">
          Chiffres clés
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {figures.map((figure) => {
            const IconComponent = figure.icon ? iconMap[figure.icon] : null;

            return (
              <div
                key={figure.label}
                className="flex flex-col items-center text-center p-6 bg-white hover:bg-accent-light/10 transition-colors"
              >
                {IconComponent && (
                  <div className="w-12 h-12 bg-accent-light/30 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-ink" strokeWidth={1.5} />
                  </div>
                )}
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-2">
                  {figure.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-600">
                  {figure.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
