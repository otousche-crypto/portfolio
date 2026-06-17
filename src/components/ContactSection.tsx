import { motion } from 'framer-motion';
import { contact } from '../../content/contact';
import { useCenterHighlight } from '../hooks/useCenterHighlight';
import { useLocalizedContent } from '../hooks/useLocalizedContent';

export default function ContactSection() {
  const titleRef = useCenterHighlight<HTMLHeadingElement>();
  const { t } = useLocalizedContent();
  const items = [
    {
      key: 'email',
      flag: '--email',
      label: t(contact.email.label),
      texte: contact.email.value,
      href: `mailto:${contact.email.value}`,
      external: false,
    },
    {
      key: 'linkedin',
      flag: '--linkedin',
      label: t(contact.linkedin.label),
      texte: t(contact.linkedin.texte),
      href: contact.linkedin.url,
      external: true,
    },
    {
      key: 'cv',
      flag: '--cv',
      label: t(contact.cv.label),
      texte: t(contact.cv.texte),
      href: contact.cv.url,
      external: true,
    },
    {
      key: 'telephone',
      flag: '--telephone',
      label: t(contact.telephone.label),
      texte: contact.telephone.value,
      href: `tel:${contact.telephone.value.replace(/\s/g, '')}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={titleRef}
          className="center-highlight text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {t(contact.titreSection)}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 max-w-3xl">
          {items.map((item, index) => (
            <motion.a
              key={item.key}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block bg-white p-8 hover:bg-accent-light/20 transition-colors group"
              aria-label={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="font-code text-xs font-bold text-gray-400 group-hover:text-accent mb-3 tracking-wider transition-colors">
                {item.flag}
              </h3>
              <span className="text-base md:text-lg text-ink break-words">{item.texte}</span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2 font-code text-sm text-gray-400 mt-10">
          <span aria-hidden="true">$</span>
          <span className="animate-blink inline-block w-2 h-4 bg-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
