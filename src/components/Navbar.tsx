import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // En móvil, siempre visible o con comportamiento de scroll
      if (isMobile) {
        if (currentScrollY < 50) {
          setIsVisible(true);
          setIsSticky(false);
        } else {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
            setIsSticky(false);
          } else {
            setIsVisible(true);
            setIsSticky(true);
          }
        }
      } else {
        // En desktop, comportamiento normal
        if (currentScrollY < 10) {
          setIsVisible(true);
          setIsSticky(false);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
          setIsSticky(false);
        } else {
          setIsVisible(true);
          setIsSticky(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed left-1/2 -translate-x-1/2 bottom-0 md:top-0 md:bottom-auto z-50
        flex flex-col items-center
        transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 md:-translate-y-20 opacity-0'}
        pb-4 md:pb-0 md:pt-8
      `}
    >
      {/* Fondo sólido - en móvil desde abajo, en desktop desde arriba */}
      <div className="absolute bottom-0 md:bottom-auto md:top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[80px] md:h-[110px] bg-[var(--bg-color)] -z-30" />

      {/* Línea horizontal en móvil, degradado en desktop */}
      <div className="md:hidden absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[100vw] h-[2px] -z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/40 dark:via-amber-300/45 to-transparent blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/50 dark:via-amber-200/55 to-transparent" style={{ width: '60%', left: '20%' }} />
      </div>
      <div className="hidden md:block absolute top-[110px] left-1/2 -translate-x-1/2 w-[100vw] h-[30px] bg-gradient-to-b from-[var(--bg-color)] to-transparent -z-30" />

      {/* Gradiente sutil que extiende la luz de la lámpara - solo desktop */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-b from-white/10 dark:from-black/10 via-white/5 dark:via-black/5 to-transparent pointer-events-none -z-10" />

      {/* Lámpara con luz intensa - solo desktop */}
      <div className="hidden md:block relative w-[450px] mb-5">
        {/* Línea de luz estilizada y tenue */}
        <div className="relative h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/40 dark:via-amber-300/45 to-transparent blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/50 dark:via-amber-200/55 to-transparent" style={{ width: '60%', left: '20%' }} />
        </div>

        {/* Luz proyectada SOLO hacia abajo */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-gradient-to-b from-amber-300/28 dark:from-amber-200/30 via-amber-200/18 dark:via-amber-100/20 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-24 bg-gradient-to-b from-amber-200/24 dark:from-amber-100/24 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* Menú de navegación con ribbon horizontal */}
      <nav className="flex items-center gap-1 relative">
        {/* Fondo sólido del color de la página */}
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[100vw] h-full -z-20" style={{ backgroundColor: 'var(--bg-color)' }} />

        {/* Ribbon de fondo horizontal con degradado desde el centro */}
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[100vw] h-full -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/18 dark:via-amber-200/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/12 dark:via-amber-100/4 to-transparent blur-sm" />
        </div>

        <button className="text-black dark:text-white px-4 md:px-5 py-2.5 text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors relative">
          HOME
        </button>
        <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-4 md:px-5 py-2.5 text-[9px] md:text-[11px] font-medium tracking-[0.2em] uppercase transition-colors relative">
          ABOUT
        </button>
        <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-4 md:px-5 py-2.5 text-[9px] md:text-[11px] font-medium tracking-[0.2em] uppercase transition-colors relative">
          FAQS
        </button>
        <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-4 md:px-5 py-2.5 text-[9px] md:text-[11px] font-medium tracking-[0.2em] uppercase transition-colors relative">
          CHAT
        </button>
        <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1 md:mx-2 relative" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
