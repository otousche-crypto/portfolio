import { motion } from 'framer-motion';
import { contact } from '../../content/contact';

export default function ContactSection() {
  const items = [
    {
      label: contact.email.label,
      texte: contact.email.value,
      href: `mailto:${contact.email.value}`,
      external: false,
    },
    {
      label: contact.linkedin.label,
      texte: contact.linkedin.texte,
      href: contact.linkedin.url,
      external: true,
    },
    {
      label: contact.cv.label,
      texte: contact.cv.texte,
      href: contact.cv.url,
      external: true,
    },
    {
      label: contact.telephone.label,
      texte: contact.telephone.value,
      href: `tel:${contact.telephone.value.replace(/\s/g, '')}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {contact.titreSection}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 max-w-3xl">
          {items.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block bg-white p-8 hover:bg-accent-light/20 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="text-xs font-bold text-gray-500 group-hover:text-ink mb-3 uppercase tracking-wider transition-colors">
                {item.label}
              </h3>
              <span className="text-base md:text-lg text-ink break-words">{item.texte}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
