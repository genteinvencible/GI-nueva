import React from 'react';
import ThemeToggle from './ThemeToggle';
import { NavbarReadingLight } from './NavbarReadingLight';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav
        className="
          relative
          pointer-events-auto
          w-auto min-w-[320px] md:min-w-[600px]
          h-20 md:h-24
          rounded-b-[2.5rem]
          bg-[#f7f3ed] dark:bg-[#141210]
          overflow-hidden
          shadow-lg dark:shadow-none
          border-b border-white/20 dark:border-white/5
          flex flex-col items-center justify-start pt-2
        "
      >
        <NavbarReadingLight />

        <div className="relative z-10 flex items-center gap-6 md:gap-10 mt-3 md:mt-5 px-8">

          <button className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            Home
          </button>

          <button className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            About
          </button>

          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-amber-500/50" />

          <button className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            FAQs
          </button>

          <button className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            Chat
          </button>

          <div className="flex items-center gap-4 border-l border-neutral-200 dark:border-white/10 pl-4 ml-2">
            <ThemeToggle />
          </div>

        </div>
      </nav>
    </div>
  );
}
