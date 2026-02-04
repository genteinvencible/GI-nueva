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
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
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
        bg-white/60 backdrop-blur-xl
        border border-black/5 rounded-full shadow-lg
        transition-all duration-500 ease-in-out
        md:top-8 md:bottom-auto
        bottom-8 md:bottom-auto
        ${isVisible ? 'translate-y-0 opacity-100' : (lastScrollY > 10 ? 'translate-y-20 opacity-0 md:-translate-y-20' : '')}
      `}
    >
      <button className="bg-black text-white px-5 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
        HOME
      </button>
      <button className="text-black/60 hover:text-black px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase">
        DRUGS
      </button>
      <button className="text-black/60 hover:text-black px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase">
        ABOUT
      </button>
      <div className="w-px h-3 bg-black/10 mx-1 md:mx-2" />
      <button className="text-black/60 hover:text-black px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase">
        ENTRAR
      </button>
    </nav>
  );
}
