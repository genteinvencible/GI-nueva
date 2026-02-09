import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-black/60 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
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
