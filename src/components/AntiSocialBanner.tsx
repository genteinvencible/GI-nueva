import { X } from 'lucide-react';

interface AntiSocialBannerProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const avatarColors = [
  'bg-amber-600',
  'bg-stone-600',
  'bg-slate-600',
  'bg-teal-700',
  'bg-emerald-700',
  'bg-cyan-700',
  'bg-neutral-700',
  'bg-zinc-600',
];

function getRandomInitial(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomColor(): string {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
}

export default function AntiSocialBanner({
  message,
  isVisible,
  onClose,
}: AntiSocialBannerProps) {
  if (!message) return null;

  const initial = getRandomInitial();
  const avatarColor = getRandomColor();

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-40 max-w-sm transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
      style={{
        animation: isVisible ? 'bannerSlideUp 0.5s ease-out' : undefined,
      }}
    >
      <div className="flex items-start gap-3 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg p-3.5 sm:p-4 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
        <div
          className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm`}
        >
          {initial}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-100 leading-snug">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex-shrink-0 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors p-1 -mt-1 -mr-1"
          aria-label="Cerrar notificación"
        >
          <X size={16} />
        </button>
      </div>

      <style>{`
        @keyframes bannerSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [role="status"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
