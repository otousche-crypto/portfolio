import { useEffect, useState } from 'react';
import { Search, PenTool, CheckCircle } from 'lucide-react';
import { supabase, Methodologie, MethodologieBloc } from '../lib/supabase';

const getIconForTitle = (title: string) => {
  const normalizedTitle = title.toLowerCase();
  if (normalizedTitle.includes('comprendre')) return Search;
  if (normalizedTitle.includes('concevoir')) return PenTool;
  if (normalizedTitle.includes('valider')) return CheckCircle;
  return null;
};

const getColorForIndex = (index: number) => {
  const colors = [
    'from-blue-400 to-blue-500',
    'from-teal-400 to-teal-500',
    'from-green-400 to-green-500',
  ];
  return colors[index % colors.length];
};

export default function AboutSection() {
  const [methodologie, setMethodologie] = useState<Methodologie | null>(null);
  const [blocs, setBlocs] = useState<MethodologieBloc[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);

  useEffect(() => {
    fetchMethodologieData();
  }, []);

  const fetchMethodologieData = async () => {
    const { data: methodo } = await supabase
      .from('methodologie')
      .select('*')
      .maybeSingle();

    const { data: blocsData } = await supabase
      .from('methodologie_blocs')
      .select('*')
      .order('ordre', { ascending: true });

    if (methodo) setMethodologie(methodo);
    if (blocsData) {
      setBlocs(blocsData);
      blocsData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleIcons((prev) => [...prev, index]);
        }, index * 400);
      });
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section id="about" className="py-32 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-500">Chargement...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-32 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-16">
          {methodologie?.titre_section || 'Methodologie'}
        </h2>

        <div className="max-w-4xl">
          <p
            className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 font-light"
            dangerouslySetInnerHTML={{ __html: methodologie?.paragraphe_principal || '' }}
          />

          {methodologie?.paragraphe_secondaire && (
            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: methodologie.paragraphe_secondaire }}
            />
          )}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blocs.map((bloc, index) => {
            const Icon = getIconForTitle(bloc.titre);
            const isVisible = visibleIcons.includes(index);
            const colorClass = getColorForIndex(index);

            return (
              <div key={bloc.id} className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-3">
                  {Icon && (
                    <div
                      className={`relative transition-all duration-700 ${
                        isVisible
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 -translate-y-4 scale-90'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110`}
                      >
                        <Icon size={22} className="text-white" strokeWidth={1.5} />
                      </div>
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorClass} opacity-20 blur-lg animate-pulse`}
                      />
                    </div>
                  )}
                  <h3 className="text-sm font-medium text-black uppercase tracking-wider">
                    {bloc.titre}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {bloc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
