import { useEffect, useState } from 'react';
import { supabase, SectionTitre, ContactInfo } from '../lib/supabase';

export default function ContactSection() {
  const [sectionTitre, setSectionTitre] = useState<string>('Contact');
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    const { data: titreData } = await supabase
      .from('section_titres')
      .select('*')
      .eq('section_id', 'contact')
      .maybeSingle();

    const { data: infoData } = await supabase
      .from('contact_info')
      .select('*')
      .maybeSingle();

    if (titreData) setSectionTitre(titreData.titre);
    if (infoData) setContactInfo(infoData);
    setLoading(false);
  };

  if (loading) {
    return (
      <section id="contact" className="py-32 px-8 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[100px] animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-300/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-300/15 rounded-full filter blur-[100px] animate-blob animation-delay-6000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-gray-500">Chargement...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-8 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-300/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-300/15 rounded-full filter blur-[100px] animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-16">{sectionTitre}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
          <div>
            <h3 className="text-sm font-medium text-black mb-3 uppercase tracking-wider">
              {contactInfo?.email_label || 'Email'}
            </h3>
            <a
              href={`mailto:${contactInfo?.email_value || 'otousche@gmail.com'}`}
              className="text-lg text-gray-600 hover:text-black transition-colors font-light"
            >
              {contactInfo?.email_value || 'otousche@gmail.com'}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-medium text-black mb-3 uppercase tracking-wider">
              {contactInfo?.linkedin_label || 'LinkedIn'}
            </h3>
            <a
              href={contactInfo?.linkedin_url || 'https://www.linkedin.com/in/olivier-tousche-a6160b122/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 hover:text-black transition-colors font-light"
            >
              {contactInfo?.linkedin_texte || 'Olivier Tousche'}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-medium text-black mb-3 uppercase tracking-wider">
              {contactInfo?.cv_label || 'CV'}
            </h3>
            <a
              href={contactInfo?.cv_url || '/Olivier_Tousche_CV_compressed.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 hover:text-black transition-colors font-light"
            >
              {contactInfo?.cv_texte || 'Télécharger mon CV'}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-medium text-black mb-3 uppercase tracking-wider">
              {contactInfo?.telephone_label || 'Téléphone'}
            </h3>
            <a
              href={`tel:${contactInfo?.telephone_value?.replace(/\s/g, '') || '+33678198888'}`}
              className="text-lg text-gray-600 hover:text-black transition-colors font-light"
            >
              {contactInfo?.telephone_value || '+33 6 78 19 88 88'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
