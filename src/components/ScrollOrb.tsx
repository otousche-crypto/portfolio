import { useEffect, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

// Système d'orbes de fond façon atome — seule exception autorisée à la règle
// "pas de blur" de la DA. Un noyau + 2 satellites en orbite lente, qui descendent
// le long du viewport au rythme du scroll, flottent en continu même à l'arrêt,
// respirent (scale + morphing de border-radius) et dérivent en teinte dans la
// plage cyan → bleu → violet → rose (190°-290°, jamais de jaune/vert).
// Toutes les valeurs par frame passent par des motionValues : aucun setState par frame.

// Morphing organique : premier == dernier pour une boucle sans couture.
const MORPH = [
  '60% 40% 55% 45% / 45% 55% 40% 60%',
  '45% 55% 40% 60% / 60% 40% 55% 45%',
  '55% 45% 60% 40% / 40% 60% 45% 55%',
  '60% 40% 55% 45% / 45% 55% 40% 60%',
];

export default function ScrollOrb() {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const k = isMobile ? 0.6 : 1;
  const coreSize = 380 * k;
  const sat1Size = 140 * k;
  const sat2Size = 90;

  // Teinte pivot ~210 (le bleu #4CB8FF), dérive ±20° ; avec les offsets satellites
  // (+30°, +60°) l'ensemble reste contenu dans 190°-290°.
  const hue = useMotionValue(210);

  const coreX = useMotionValue(-9999);
  const coreY = useMotionValue(0);
  const coreScale = useMotionValue(1);
  const sat1X = useMotionValue(-9999);
  const sat1Y = useMotionValue(0);
  const sat1Scale = useMotionValue(1);
  const sat2X = useMotionValue(-9999);
  const sat2Y = useMotionValue(0);
  const sat2Scale = useMotionValue(1);

  useAnimationFrame((t) => {
    hue.set(210 + 20 * Math.sin(t / 30000));

    if (reduced) {
      // Reduced motion : pas de scroll-follow ni d'orbites, seulement une
      // respiration très lente du noyau (±3%) et la dérive de teinte.
      coreScale.set(1 + 0.03 * Math.sin((2 * Math.PI * t) / 14000));
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const p = smooth.get();

    // Couche 1 — position de base pilotée par le scroll : descente de 15% à 85%
    // du viewport + balancement horizontal sinusoïdal.
    const baseX = vw * (0.62 + (isMobile ? 0.1 : 0.18) * Math.sin(p * Math.PI * 2));
    const baseY = vh * (0.15 + 0.7 * p);

    // Couche 2 — flottement idle permanent : sinusoïdes de périodes non
    // commensurables, drift organique sans répétition perceptible.
    const amp = isMobile ? 0.5 : 1;
    const idleX = amp * (22 * Math.sin(t / 7000) + 14 * Math.sin(t / 13000));
    const idleY = amp * (18 * Math.cos(t / 9000) + 12 * Math.sin(t / 17000));

    const cx = baseX + idleX;
    const cy = baseY + idleY;
    coreX.set(cx - coreSize / 2);
    coreY.set(cy - coreSize / 2);
    coreScale.set(1 + 0.08 * Math.sin((2 * Math.PI * t) / 9000));

    // Satellite 1 : ellipse inclinée à 25°, période 14 s.
    const a1 = (2 * Math.PI * t) / 14000;
    const e1x = 230 * k * Math.cos(a1);
    const e1y = 150 * k * Math.sin(a1);
    const i1 = (25 * Math.PI) / 180;
    sat1X.set(cx + e1x * Math.cos(i1) - e1y * Math.sin(i1) - sat1Size / 2);
    sat1Y.set(cy + e1x * Math.sin(i1) + e1y * Math.cos(i1) - sat1Size / 2);
    sat1Scale.set(1 + 0.08 * Math.sin((2 * Math.PI * t) / 6500));

    // Satellite 2 : sens inverse, ellipse inclinée à -40°, période 23 s
    // (14 et 23 non multiples : le motif ne se répète jamais à l'identique).
    // Desktop uniquement.
    if (!isMobile) {
      const a2 = (-2 * Math.PI * t) / 23000;
      const e2x = 150 * Math.cos(a2);
      const e2y = 210 * Math.sin(a2);
      const i2 = (-40 * Math.PI) / 180;
      sat2X.set(cx + e2x * Math.cos(i2) - e2y * Math.sin(i2) - sat2Size / 2);
      sat2Y.set(cy + e2x * Math.sin(i2) + e2y * Math.cos(i2) - sat2Size / 2);
      sat2Scale.set(1 + 0.08 * Math.sin((2 * Math.PI * t) / 7700));
    }
  });

  // Sur fond blanc, mix-blend-screen est invisible et multiply assombrit trop :
  // l'alpha-compositing normal à 0.3 donne le pastel le plus subtil.
  const coreBg = useTransform(hue, (h) => `radial-gradient(circle, hsl(${h} 90% 70% / 0.3) 0%, transparent 70%)`);
  const sat1Bg = useTransform(hue, (h) => `radial-gradient(circle, hsl(${h + 30} 90% 70% / 0.3) 0%, transparent 70%)`);
  const sat2Bg = useTransform(hue, (h) => `radial-gradient(circle, hsl(${h + 60} 90% 70% / 0.3) 0%, transparent 70%)`);

  if (reduced) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          style={{
            position: 'absolute',
            left: '60%',
            top: '30%',
            width: coreSize,
            height: coreSize,
            background: coreBg,
            scale: coreScale,
            filter: 'blur(28px)',
            borderRadius: '50%',
            willChange: 'transform',
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: coreSize,
          height: coreSize,
          background: coreBg,
          x: coreX,
          y: coreY,
          scale: coreScale,
          filter: 'blur(28px)',
          willChange: 'transform',
        }}
        animate={{ borderRadius: MORPH }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: sat1Size,
          height: sat1Size,
          background: sat1Bg,
          x: sat1X,
          y: sat1Y,
          scale: sat1Scale,
          filter: 'blur(18px)',
          willChange: 'transform',
        }}
        animate={{ borderRadius: MORPH }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {!isMobile && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: sat2Size,
            height: sat2Size,
            background: sat2Bg,
            x: sat2X,
            y: sat2Y,
            scale: sat2Scale,
            filter: 'blur(14px)',
            willChange: 'transform',
          }}
          animate={{ borderRadius: MORPH }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}
