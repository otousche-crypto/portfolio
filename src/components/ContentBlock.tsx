import { useState } from 'react';
import { ExperienceContentBlock } from '../lib/supabase';
import ImageModal from './ImageModal';

interface ContentBlockProps {
  block: ExperienceContentBlock;
}

export default function ContentBlock({ block }: ContentBlockProps) {
  const { type, content } = block;
  const [modalImage, setModalImage] = useState<{ url: string; alt?: string; caption?: string } | null>(null);

  switch (type) {
    case 'heading':
      const HeadingTag = `h${content.level || 2}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className={`font-light text-black ${
          content.level === 1 ? 'text-3xl md:text-4xl mb-6' :
          content.level === 3 ? 'text-xl md:text-2xl mb-4' :
          'text-2xl md:text-3xl mb-5'
        }`}>
          {content.text}
        </HeadingTag>
      );

    case 'text':
      const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      };
      const alignmentClass = alignmentClasses[content.alignment || 'left'];

      // Convert URLs to clickable links
      let textWithLinks = (content.text || '');

      // Convert www. URLs (add https:// prefix)
      textWithLinks = textWithLinks.replace(
        /(^|[^/])(www\.[^\s]+)/g,
        '$1<a href="https://$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$2</a>'
      );

      // Convert http:// and https:// URLs
      textWithLinks = textWithLinks.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>'
      );

      return (
        <div className={`prose prose-lg max-w-none ${alignmentClass}`}>
          <p
            className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: textWithLinks }}
          />
        </div>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 my-8 italic">
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-2">
            "{content.text}"
          </p>
          {content.author && (
            <cite className="text-sm text-gray-500 not-italic">— {content.author}</cite>
          )}
        </blockquote>
      );

    case 'image':
      const widthClasses = {
        full: 'w-full',
        large: 'w-full md:w-5/6 mx-auto',
        medium: 'w-full',
        small: 'w-full md:w-1/2 mx-auto'
      };
      const widthClass = widthClasses[content.width || 'full'];
      const isFullBleed = content.width === 'full';

      return (
        <>
          <figure className={`my-8 ${isFullBleed ? 'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen' : widthClass}`}>
            <div className={`overflow-hidden ${!isFullBleed ? 'rounded-lg' : ''}`}>
              <img
                src={content.url}
                alt={content.alt || ''}
                className={`w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity`}
                onClick={() => setModalImage({ url: content.url, alt: content.alt, caption: content.caption })}
              />
            </div>
            {content.caption && (
              <figcaption className={`text-sm text-gray-500 text-center mt-3 font-light ${isFullBleed ? 'px-8 max-w-4xl mx-auto' : ''}`}>
                {content.caption}
              </figcaption>
            )}
          </figure>
          {modalImage && (
            <ImageModal
              imageUrl={modalImage.url}
              alt={modalImage.alt}
              caption={modalImage.caption}
              onClose={() => setModalImage(null)}
            />
          )}
        </>
      );

    case 'image_grid':
      const gridClasses = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3'
      };
      const gridClass = gridClasses[content.columns || 2];
      return (
        <>
          <div className={`my-8 grid ${gridClass} gap-6`}>
            {content.images?.map((img, index) => (
              <figure key={index} className="space-y-2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setModalImage({ url: img.url, alt: img.alt, caption: img.caption })}
                  />
                </div>
                {img.caption && (
                  <figcaption className="text-sm text-gray-500 text-center font-light">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          {modalImage && (
            <ImageModal
              imageUrl={modalImage.url}
              alt={modalImage.alt}
              caption={modalImage.caption}
              onClose={() => setModalImage(null)}
            />
          )}
        </>
      );

    case 'divider':
      if (content.style === 'dots') {
        return (
          <div className="my-12 flex justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
          </div>
        );
      }
      return <div className="my-12"></div>;

    case 'section_vertical':
      const VerticalHeadingTag = `h${content.heading_level || 2}` as keyof JSX.IntrinsicElements;

      // Si le texte contient [IMAGE], on sépare le texte et on insère l'image au bon endroit
      if (content.text_content && content.image_url && content.text_content.includes('[IMAGE]')) {
        const parts = content.text_content.split('[IMAGE]');
        return (
          <div className="my-12">
            {content.heading_text && (
              <VerticalHeadingTag className={`font-light text-black mb-6 ${
                content.heading_level === 1 ? 'text-3xl md:text-4xl' :
                content.heading_level === 3 ? 'text-xl md:text-2xl' :
                'text-2xl md:text-3xl'
              }`}>
                {content.heading_text}
              </VerticalHeadingTag>
            )}
            {content.subtitle && (
              <p className="text-sm text-gray-500 italic mb-4">{content.subtitle}</p>
            )}
            {parts[0] && (
              <div className={`prose prose-lg max-w-none text-${content.text_alignment || 'left'} mb-6`}>
                <p
                  className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: parts[0].trim() }}
                />
              </div>
            )}
            <figure className="my-6">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={content.image_url}
                  alt={content.image_alt || ''}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ url: content.image_url, alt: content.image_alt, caption: content.image_caption })}
                />
              </div>
              {content.image_caption && (
                <figcaption className="text-sm text-gray-500 text-center mt-3 font-light">
                  {content.image_caption}
                </figcaption>
              )}
            </figure>
            {parts[1] && (
              <div className={`prose prose-lg max-w-none text-${content.text_alignment || 'left'} mt-6`}>
                <p
                  className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: parts[1].trim() }}
                />
              </div>
            )}
          </div>
        );
      }

      // Comportement par défaut : image avant le texte
      return (
        <div className="my-12">
          {content.heading_text && (
            <VerticalHeadingTag className={`font-light text-black mb-6 ${
              content.heading_level === 1 ? 'text-3xl md:text-4xl' :
              content.heading_level === 3 ? 'text-xl md:text-2xl' :
              'text-2xl md:text-3xl'
            }`}>
              {content.heading_text}
            </VerticalHeadingTag>
          )}
          {content.subtitle && (
            <p className="text-sm text-gray-500 italic mb-4">{content.subtitle}</p>
          )}
          {content.image_url && (
            <figure className="mb-6">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={content.image_url}
                  alt={content.image_alt || ''}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ url: content.image_url, alt: content.image_alt, caption: content.image_caption })}
                />
              </div>
              {content.image_caption && (
                <figcaption className="text-sm text-gray-500 text-center mt-3 font-light">
                  {content.image_caption}
                </figcaption>
              )}
            </figure>
          )}
          {content.text_content && (
            <div className={`prose prose-lg max-w-none text-${content.text_alignment || 'left'}`}>
              <p
                className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content.text_content }}
              />
            </div>
          )}
        </div>
      );

    case 'section_horizontal':
      const HorizontalHeadingTag = `h${content.heading_level || 2}` as keyof JSX.IntrinsicElements;
      const imagePosition = content.imagePosition || content.image_position || 'left';
      const imageUrl = content.imageUrl || content.image_url;
      const imageAlt = content.imageAlt || content.image_alt;
      const imageCaption = content.imageCaption || content.image_caption;
      const textContent = content.text || content.text_content;
      const imageElement = imageUrl && (
        <figure className="w-full md:w-1/2 flex-shrink-0">
          <div className="overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={imageAlt || ''}
              className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setModalImage({ url: imageUrl, alt: imageAlt, caption: imageCaption })}
            />
          </div>
          {imageCaption && (
            <figcaption className="text-sm text-gray-500 text-center mt-3 font-light">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      );
      const textElement = textContent && (
        <div className={`prose prose-lg max-w-none w-full md:w-1/2 text-${content.text_alignment || 'left'}`}>
          <p
            className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: textContent }}
          />
        </div>
      );

      return (
        <div className="my-12">
          {content.heading_text && (
            <HorizontalHeadingTag className={`font-light text-black mb-6 ${
              content.heading_level === 1 ? 'text-3xl md:text-4xl' :
              content.heading_level === 3 ? 'text-xl md:text-2xl' :
              'text-2xl md:text-3xl'
            }`}>
              {content.heading_text}
            </HorizontalHeadingTag>
          )}
          {content.subtitle && (
            <p className="text-sm text-gray-500 italic mb-4">{content.subtitle}</p>
          )}
          {content.intro_text && (
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 font-light leading-relaxed">
                {content.intro_text}
              </p>
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {imagePosition === 'left' ? (
              <>
                {imageElement}
                {textElement}
              </>
            ) : (
              <>
                {textElement}
                {imageElement}
              </>
            )}
          </div>
        </div>
      );

    case 'bullet_list':
      return (
        <div className="my-8">
          {content.heading_text && (
            <p className="text-base font-light text-gray-700 mb-3">{content.heading_text}</p>
          )}
          <ul className="space-y-2 ml-6">
            {content.items?.map((item, index) => (
              <li key={index} className="text-base font-light text-gray-700 leading-relaxed list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'video':
      const videoWidthClasses = {
        full: 'w-full',
        large: 'w-full md:w-5/6 mx-auto',
        medium: 'w-full',
        small: 'w-full md:w-1/2 mx-auto'
      };
      const videoWidthClass = videoWidthClasses[content.width || 'full'];

      const embedUrl = content.url?.includes('youtube.com') || content.url?.includes('youtube-nocookie.com')
        ? content.url.replace('youtube-nocookie.com', 'youtube.com')
        : content.url;

      return (
        <div className={`my-8 ${videoWidthClass}`}>
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src={embedUrl}
              title="YouTube video player"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {content.caption && (
            <p className="text-sm text-gray-500 text-center mt-3 font-light">
              {content.caption}
            </p>
          )}
        </div>
      );

    default:
      return (
        <>
          {modalImage && (
            <ImageModal
              imageUrl={modalImage.url}
              alt={modalImage.alt}
              caption={modalImage.caption}
              onClose={() => setModalImage(null)}
            />
          )}
        </>
      );
  }
}
