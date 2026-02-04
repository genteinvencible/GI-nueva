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
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1 bg-white/60 backdrop-blur-xl border-t border-t-white/40 border-l border-l-white/20 border-r border-r-black/5 border-b border-b-black/10 rounded-full shadow-sm transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
      <button className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-transform active:scale-95 hover:bg-zinc-800">
        HOME
      </button>
      <button className="text-black/60 hover:text-black px-5 py-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
        DRUGS
      </button>
      <button className="text-black/60 hover:text-black px-5 py-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
        ABOUT
      </button>
      <div className="w-px h-3 bg-black/10 mx-2" />
      <button className="text-black/60 hover:text-black px-5 py-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
        ENTRAR
      </button>
    </nav>
  );
}
