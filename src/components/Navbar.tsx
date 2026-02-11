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
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1 px-6 py-3
        transition-all duration-500 ease-in-out
        md:top-8 md:bottom-auto
        bottom-8 md:bottom-auto
        ${isVisible ? 'translate-y-0 opacity-100' : (lastScrollY > 10 ? 'translate-y-20 opacity-0 md:-translate-y-20' : '')}
        relative
        before:content-[''] before:absolute before:inset-0
        before:bg-[radial-gradient(ellipse_400px_100px_at_center,rgba(255,165,0,0.15),transparent)]
        dark:before:bg-[radial-gradient(ellipse_400px_100px_at_center,rgba(255,200,100,0.25),transparent)]
        before:-z-10 before:pointer-events-none
      `}
    >
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
  );
}
