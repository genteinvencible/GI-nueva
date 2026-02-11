import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        flex flex-col items-center
        transition-all duration-500 ease-in-out
        md:top-8 md:bottom-auto
        bottom-8 md:bottom-auto
        ${isVisible ? 'translate-y-0 opacity-100' : (lastScrollY > 10 ? 'translate-y-20 opacity-0 md:-translate-y-20' : '')}
      `}
    >
      {/* Lámpara con luz solo hacia abajo */}
      <div className="relative w-[350px] md:w-[450px] mb-16">
        {/* Línea de luz más gruesa */}
        <div className="relative h-[3px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 dark:via-amber-400/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/50 dark:via-amber-300/30 to-transparent blur-sm" />
        </div>

        {/* Luz proyectada en forma cónica desde el centro */}
        <div className="absolute top-[3px] left-0 right-0 h-72 overflow-hidden pointer-events-none">
          {/* Capa exterior - más ancha abajo */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-amber-300/15 dark:from-amber-400/18 via-amber-200/8 dark:via-amber-400/9 to-transparent blur-3xl"
            style={{
              width: '600px',
              height: '100%',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'
            }}
          />

          {/* Capa intermedia - cónica */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-amber-300/20 dark:from-amber-400/22 via-amber-200/10 dark:via-amber-400/11 to-transparent blur-2xl"
            style={{
              width: '500px',
              height: '90%',
              clipPath: 'polygon(32% 0%, 68% 0%, 95% 100%, 5% 100%)'
            }}
          />

          {/* Capa central - más concentrada */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-amber-200/25 dark:from-amber-400/28 via-amber-200/12 dark:via-amber-400/14 to-transparent blur-xl"
            style={{
              width: '350px',
              height: '80%',
              clipPath: 'polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)'
            }}
          />
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="flex items-center gap-1 relative">
        <button className="text-black dark:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">
          HOME
        </button>
        <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
          ABOUT
        </button>
        <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
          FAQS
        </button>
        <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
          CHAT
        </button>
        <div className="w-px h-3 bg-black/10 dark:bg-white/10 mx-1 md:mx-2" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
