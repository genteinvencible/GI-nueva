import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end px-6 lg:px-8 pt-8">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun size={18} className="text-neutral-800 dark:text-neutral-100" />
        ) : (
          <Moon size={18} className="text-neutral-800 dark:text-neutral-100" />
        )}
      </button>
    </div>
  );
}
