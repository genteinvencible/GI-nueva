import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activePage?: 'home' | 'about' | 'faqs' | 'boda' | 'stories' | 'login';
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onFaqsClick?: () => void;
  onBodaClick?: () => void;
  onStoriesClick?: () => void;
  onLoginClick?: () => void;
}

export default function Navbar({ activePage = 'home', onHomeClick, onAboutClick, onFaqsClick, onBodaClick, onStoriesClick, onLoginClick }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY <= lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const activeClass = 'text-black dark:text-white font-bold';
  const inactiveClass = 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white font-medium';
  const baseClass = 'px-2 sm:px-3 md:px-5 py-1.5 md:py-2 text-[8px] sm:text-[9px] md:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-colors relative';

  return (
    <div
      className={`
        fixed left-1/2 -translate-x-1/2 top-0 z-50
        flex flex-col items-center
        transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
        pt-3 sm:pt-4 md:pt-6
      `}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50px] sm:h-[60px] md:h-[80px] bg-[var(--bg-color)] -z-30" />

      <div className="absolute top-[50px] sm:top-[60px] md:top-[80px] left-1/2 -translate-x-1/2 w-[100vw] h-[2px] -z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/40 dark:via-gray-300/45 to-transparent blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-200/55 to-transparent" style={{ width: '60%', left: '20%' }} />
      </div>

      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-b from-white/10 dark:from-black/10 via-white/5 dark:via-black/5 to-transparent pointer-events-none -z-10" />

      <div className="hidden md:block relative w-[450px] mb-3">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-gradient-to-b from-amber-300/28 dark:from-amber-200/30 via-amber-200/18 dark:via-amber-100/20 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-24 bg-gradient-to-b from-amber-200/24 dark:from-amber-100/24 to-transparent blur-xl pointer-events-none" />
      </div>

      <nav className="flex items-center gap-0.5 sm:gap-1 relative">
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[100vw] h-full -z-20" style={{ backgroundColor: 'var(--bg-color)' }} />

        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[100vw] h-full -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/18 dark:via-amber-200/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/12 dark:via-amber-100/4 to-transparent blur-sm" />
        </div>

        <button
          onClick={onHomeClick}
          className={`${baseClass} ${activePage === 'home' ? activeClass : inactiveClass}`}
        >
          HOME
        </button>
        <button
          onClick={onAboutClick}
          className={`${baseClass} ${activePage === 'about' ? activeClass : inactiveClass}`}
        >
          ABOUT
        </button>
        <button
          onClick={onFaqsClick}
          className={`${baseClass} ${activePage === 'faqs' ? activeClass : inactiveClass}`}
        >
          FAQS
        </button>
        <button
          onClick={onStoriesClick}
          className={`${baseClass} ${activePage === 'stories' ? activeClass : inactiveClass}`}
        >
          STORIES
        </button>
        <div className="w-px h-3 sm:h-4 bg-black/10 dark:bg-white/10 mx-0.5 sm:mx-1 md:mx-2 relative" />
        <button
          onClick={onLoginClick}
          className={`${baseClass} ${activePage === 'login' ? activeClass : inactiveClass}`}
        >
          ACCEDER
        </button>
        <div className="w-px h-3 sm:h-4 bg-black/10 dark:bg-white/10 mx-0.5 sm:mx-1 md:mx-2 relative" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
