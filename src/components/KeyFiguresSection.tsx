import { useEffect, useState } from 'react';
import { Users, Globe, TrendingUp, Award, Target, Zap, Scan, ArrowLeftRight } from 'lucide-react';
import { supabase, KeyFigure } from '../lib/supabase';

interface KeyFiguresSectionProps {
  experienceId: string;
}

const iconMap: { [key: string]: any } = {
  Users,
  Globe,
  TrendingUp,
  Award,
  Target,
  Zap,
  Scan,
  ArrowLeftRight,
};

export default function KeyFiguresSection({ experienceId }: KeyFiguresSectionProps) {
  const [keyFigures, setKeyFigures] = useState<KeyFigure[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKeyFigures();
  }, [experienceId]);

  const fetchKeyFigures = async () => {
    const { data, error } = await supabase
      .from('key_figures')
      .select('*')
      .eq('experience_id', experienceId)
      .eq('visible', true)
      .order('ordre', { ascending: true });

    if (error) {
      console.error('Error fetching key figures:', error);
    } else if (data && data.length > 0) {
      setKeyFigures(data);
    }
    setLoading(false);
  };

  if (loading || keyFigures.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-12 text-center">
          Chiffres clés
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {keyFigures.map((figure) => {
            const IconComponent = figure.icon ? iconMap[figure.icon] : null;

            return (
              <div
                key={figure.id}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {IconComponent && (
                  <IconComponent className="w-8 h-8 text-gray-600 mb-4" />
                )}
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  {figure.value}
                </div>
                <div className="text-sm text-gray-600 font-light">
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
