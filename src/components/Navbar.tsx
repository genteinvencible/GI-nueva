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
      <div className="relative w-[350px] md:w-[450px] mb-8">
        {/* Línea de luz nítida y uniforme */}
        <div className="relative h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 dark:via-amber-400/50 to-transparent" />
        </div>

        {/* Luz proyectada SOLO hacia abajo - resplandor amplio y tenue */}
        <div className="absolute top-[2px] left-0 right-0 h-48 overflow-hidden pointer-events-none">
          {/* Capa exterior más amplia */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-gradient-to-b from-amber-300/40 dark:from-amber-400/20 via-amber-200/20 dark:via-amber-400/10 to-transparent blur-3xl" />

          {/* Capa intermedia */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-36 bg-gradient-to-b from-amber-300/50 dark:from-amber-400/25 via-amber-200/25 dark:via-amber-400/12 to-transparent blur-2xl" />

          {/* Capa central más intensa */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-24 bg-gradient-to-b from-amber-200/50 dark:from-amber-400/30 to-transparent blur-xl" />
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
