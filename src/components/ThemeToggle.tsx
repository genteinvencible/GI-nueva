import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={16} className="text-neutral-600 dark:text-neutral-300" />
      ) : (
        <Moon size={16} className="text-neutral-600 dark:text-neutral-300" />
      )}
    </button>
  );
}
