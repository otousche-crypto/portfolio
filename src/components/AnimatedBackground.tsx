import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-blue-200 to-cyan-200"
        style={{
          top: `${20 + scrollY * 0.15}%`,
          left: `${10 - scrollY * 0.05}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-emerald-200 to-teal-200"
        style={{
          top: `${60 - scrollY * 0.1}%`,
          right: `${15 + scrollY * 0.08}%`,
          transform: 'translate(50%, -50%)',
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-orange-200 to-amber-200"
        style={{
          bottom: `${10 + scrollY * 0.12}%`,
          left: `${30 + scrollY * 0.06}%`,
          transform: 'translate(-50%, 50%)',
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-rose-200 to-pink-200"
        style={{
          top: `${40 + scrollY * 0.08}%`,
          right: `${25 - scrollY * 0.07}%`,
          transform: 'translate(50%, -50%)',
        }}
      />
    </div>
  );
}
