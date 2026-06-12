import { useEffect, useRef } from 'react';

// Ajoute la classe `is-highlighted` à l'élément quand il traverse la bande
// centrale du viewport (20% au centre). Une fois surligné, le titre le reste
// (effet "lu") : l'observation s'arrête après le premier déclenchement.
// L'effet visuel est défini par la classe CSS `.center-highlight` (index.css).
export function useCenterHighlight<T extends HTMLElement = HTMLHeadingElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;

    const highlight = () => {
      if (done) return;
      done = true;
      el.classList.add('is-highlighted');
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Surligné en traversant la bande, ou si déjà passé au-dessus du centre.
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.5) {
            highlight();
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    // Filet de sécurité : un scroll très rapide peut faire traverser la bande
    // sans changement d'état d'intersection (l'IO n'émet alors aucun événement).
    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.6) highlight();
    };

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return ref;
}
