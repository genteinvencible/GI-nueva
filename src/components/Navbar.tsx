import React, { useState, useEffect } from 'react';

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
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1 p-1
        bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl
        border border-black/5 dark:border-white/10 rounded-full shadow-lg
        transition-all duration-500 ease-in-out
        md:top-8 md:bottom-auto
        bottom-8 md:bottom-auto
        ${isVisible ? 'translate-y-0 opacity-100' : (lastScrollY > 10 ? 'translate-y-20 opacity-0 md:-translate-y-20' : '')}
      `}
    >
      <button className="bg-black dark:bg-white text-white dark:text-neutral-900 px-5 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">
        HOME
      </button>
      <button className="text-black/60 dark:text-neutral-400 hover:text-black dark:hover:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
        DRUGS
      </button>
      <button className="text-black/60 dark:text-neutral-400 hover:text-black dark:hover:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
        ABOUT
      </button>
      <div className="w-px h-3 bg-black/10 dark:bg-white/10 mx-1 md:mx-2" />
      <button className="text-black/60 dark:text-neutral-400 hover:text-black dark:hover:text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
        ENTRAR
      </button>
    </nav>
  );
}
