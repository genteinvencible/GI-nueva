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
        top-8
        ${isVisible ? 'translate-y-0 opacity-100' : (lastScrollY > 10 ? '-translate-y-20 opacity-0' : '')}
      `}
    >
      {/* Lámpara con luz intensa */}
      <div className="relative w-[350px] md:w-[450px] mb-8">
        {/* Línea de luz estilizada y tenue */}
        <div className="relative h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/25 dark:via-amber-300/30 to-transparent blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/35 dark:via-amber-200/40 to-transparent" style={{ width: '60%', left: '20%' }} />
        </div>

        {/* Luz proyectada SOLO hacia abajo */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-gradient-to-b from-amber-300/18 dark:from-amber-200/20 via-amber-200/10 dark:via-amber-100/12 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-24 bg-gradient-to-b from-amber-200/15 dark:from-amber-100/15 to-transparent blur-xl pointer-events-none" />
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
