import { Search, PenTool, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { methodologie } from '../../content/methodologie';

const getIconForTitle = (title: string) => {
  const normalizedTitle = title.toLowerCase();
  if (normalizedTitle.includes('comprendre')) return Search;
  if (normalizedTitle.includes('concevoir')) return PenTool;
  if (normalizedTitle.includes('valider')) return CheckCircle;
  return null;
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {methodologie.titreSection}
        </motion.h2>

        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            className="accent-strong text-xl md:text-2xl text-ink leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: methodologie.paragraphePrincipal }}
          />

          {methodologie.paragrapheSecondaire && (
            <p
              className="accent-strong text-base md:text-lg text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: methodologie.paragrapheSecondaire }}
            />
          )}
        </motion.div>

        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {methodologie.blocs.map((bloc, index) => {
            const Icon = getIconForTitle(bloc.titre);

            return (
              <motion.div
                key={bloc.titre}
                className="flex flex-col items-start bg-white p-8 hover:bg-accent-light/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  {Icon && (
                    <div className="w-12 h-12 bg-accent-light/30 flex items-center justify-center">
                      <Icon size={22} className="text-ink" strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                    {bloc.titre}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {bloc.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
