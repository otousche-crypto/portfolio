import { useState } from 'react';
import { ExperienceContentBlock } from '../lib/content-types';
import ImageModal from './ImageModal';
import { useCenterHighlight } from '../hooks/useCenterHighlight';

interface ContentBlockProps {
  block: ExperienceContentBlock;
}

const headingClasses = (level?: number) =>
  `font-bold uppercase tracking-tight text-ink ${
    level === 1 ? 'text-3xl md:text-4xl' : level === 3 ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
  }`;

const linkClass =
  'class="text-ink font-medium underline decoration-accent decoration-2 underline-offset-2 hover:bg-accent-light/30 transition-colors break-all"';

export default function ContentBlock({ block }: ContentBlockProps) {
  const { type, content } = block;
  const [modalImage, setModalImage] = useState<{ url: string; alt?: string; caption?: string } | null>(null);
  const headingRef = useCenterHighlight<HTMLHeadingElement>();

  switch (type) {
    case 'heading': {
      // Les h2 (titres de section) reçoivent le highlight au passage du centre.
      if ((content.level || 2) === 2) {
        return (
          <h2 ref={headingRef} className={`center-highlight ${headingClasses(2)} mb-5`}>
            {content.text}
          </h2>
        );
      }
      const HeadingTag = `h${content.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className={`${headingClasses(content.level)} ${
          content.level === 1 ? 'mb-6' : 'mb-4'
        }`}>
          {content.text}
        </HeadingTag>
      );

    }
    case 'text': {
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
        `$1<a href="https://$2" target="_blank" rel="noopener noreferrer" ${linkClass}>$2</a>`
      );

      // Convert http:// and https:// URLs
      textWithLinks = textWithLinks.replace(
        /(https?:\/\/[^\s]+)/g,
        `<a href="$1" target="_blank" rel="noopener noreferrer" ${linkClass}>$1</a>`
      );

      return (
        <div className={`max-w-none ${alignmentClass}`}>
          <p
            className="accent-strong text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: textWithLinks }}
          />
        </div>
      );

    }
    case 'quote':
      return (
        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8">
          <p className="text-xl text-gray-800 leading-relaxed mb-2 italic">
            "{content.text}"
          </p>
          {content.author && (
            <cite className="text-xs uppercase tracking-wider text-gray-500 not-italic">
              — {content.author}
            </cite>
          )}
        </blockquote>
      );

    case 'image': {
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
            <div className="overflow-hidden">
              <img
                src={content.url}
                alt={content.alt || ''}
                className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({ url: content.url!, alt: content.alt, caption: content.caption })}
              />
            </div>
            {content.caption && (
              <figcaption className={`text-xs uppercase tracking-wider text-gray-500 text-center mt-3 ${isFullBleed ? 'px-8 max-w-4xl mx-auto' : ''}`}>
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

    }
    case 'image_grid': {
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
                <div className="overflow-hidden border border-gray-200">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setModalImage({ url: img.url, alt: img.alt, caption: img.caption })}
                  />
                </div>
                {img.caption && (
                  <figcaption className="text-xs uppercase tracking-wider text-gray-500 text-center">
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

    }
    case 'divider':
      if (content.style === 'dots') {
        return (
          <div className="my-12 flex justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent"></span>
            <span className="w-1.5 h-1.5 bg-accent"></span>
            <span className="w-1.5 h-1.5 bg-accent"></span>
          </div>
        );
      }
      if (content.style === 'space') {
        return <div className="my-12"></div>;
      }
      return <hr className="my-12 border-t border-gray-200" />;

    case 'section_vertical': {
      const VerticalHeadingTag = `h${content.heading_level || 2}` as keyof JSX.IntrinsicElements;

      // Si le texte contient [IMAGE], on sépare le texte et on insère l'image au bon endroit
      if (content.text_content && content.image_url && content.text_content.includes('[IMAGE]')) {
        const splitImageUrl = content.image_url;
        const parts = content.text_content.split('[IMAGE]');
        return (
          <div className="my-12">
            {content.heading_text && (
              <VerticalHeadingTag className={`${headingClasses(content.heading_level)} mb-3`}>
                {content.heading_text}
              </VerticalHeadingTag>
            )}
            {content.subtitle && (
              <p className="text-sm uppercase tracking-wider text-accent font-medium mb-6">{content.subtitle}</p>
            )}
            {parts[0] && (
              <div className={`max-w-none text-${content.text_alignment || 'left'} mb-6`}>
                <p
                  className="accent-strong text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: parts[0].trim() }}
                />
              </div>
            )}
            <figure className="my-6">
              <div className="overflow-hidden border border-gray-200">
                <img
                  src={content.image_url}
                  alt={content.image_alt || ''}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ url: splitImageUrl, alt: content.image_alt, caption: content.image_caption })}
                />
              </div>
              {content.image_caption && (
                <figcaption className="text-xs uppercase tracking-wider text-gray-500 text-center mt-3">
                  {content.image_caption}
                </figcaption>
              )}
            </figure>
            {parts[1] && (
              <div className={`max-w-none text-${content.text_alignment || 'left'} mt-6`}>
                <p
                  className="accent-strong text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap"
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
            <VerticalHeadingTag className={`${headingClasses(content.heading_level)} mb-3`}>
              {content.heading_text}
            </VerticalHeadingTag>
          )}
          {content.subtitle && (
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-6">{content.subtitle}</p>
          )}
          {content.image_url && (
            <figure className="mb-6">
              <div className="overflow-hidden border border-gray-200">
                <img
                  src={content.image_url}
                  alt={content.image_alt || ''}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ url: content.image_url!, alt: content.image_alt, caption: content.image_caption })}
                />
              </div>
              {content.image_caption && (
                <figcaption className="text-xs uppercase tracking-wider text-gray-500 text-center mt-3">
                  {content.image_caption}
                </figcaption>
              )}
            </figure>
          )}
          {content.text_content && (
            <div className={`max-w-none text-${content.text_alignment || 'left'}`}>
              <p
                className="accent-strong text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: content.text_content }}
              />
            </div>
          )}
        </div>
      );

    }
    case 'section_horizontal': {
      const HorizontalHeadingTag = `h${content.heading_level || 2}` as keyof JSX.IntrinsicElements;
      const imagePosition = content.imagePosition || content.image_position || 'left';
      const imageUrl = content.imageUrl || content.image_url;
      const imageAlt = content.imageAlt || content.image_alt;
      const imageCaption = content.imageCaption || content.image_caption;
      const textContent = content.text || content.text_content;
      const imageElement = imageUrl && (
        <figure className="w-full md:w-1/2 flex-shrink-0">
          <div className="overflow-hidden border border-gray-200">
            <img
              src={imageUrl}
              alt={imageAlt || ''}
              className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setModalImage({ url: imageUrl, alt: imageAlt, caption: imageCaption })}
            />
          </div>
          {imageCaption && (
            <figcaption className="text-xs uppercase tracking-wider text-gray-500 text-center mt-3">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      );
      const textElement = textContent && (
        <div className={`max-w-none w-full md:w-1/2 text-${content.text_alignment || 'left'}`}>
          <p
            className="accent-strong text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: textContent }}
          />
        </div>
      );

      return (
        <div className="my-12">
          {content.heading_text && (
            <HorizontalHeadingTag className={`${headingClasses(content.heading_level)} mb-3`}>
              {content.heading_text}
            </HorizontalHeadingTag>
          )}
          {content.subtitle && (
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-6">{content.subtitle}</p>
          )}
          {content.intro_text && (
            <div className="max-w-none mb-6">
              <p className="accent-strong text-base md:text-lg text-gray-800 leading-relaxed">
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

    }
    case 'bullet_list':
      return (
        <div className="my-8">
          {content.heading_text && (
            <p className="text-base text-gray-800 mb-3">{content.heading_text}</p>
          )}
          <ul className="space-y-2">
            {content.items?.map((item, index) => (
              <li key={index} className="flex gap-3 text-base text-gray-800 leading-relaxed">
                <span className="mt-[0.6em] w-2 h-2 flex-shrink-0 bg-accent" aria-hidden="true"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'video': {
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
          <div className="relative border border-gray-200" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src={embedUrl}
              title="YouTube video player"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {content.caption && (
            <p className="text-xs uppercase tracking-wider text-gray-500 text-center mt-3">
              {content.caption}
            </p>
          )}
        </div>
      );

    }
    default:
      return null;
  }
}
