import { X } from 'lucide-react';
import { useMemo } from 'react';

interface AntiSocialBannerProps {
  message: string;
  avatar?: string | null;
  isVisible: boolean;
  onClose: () => void;
}

const avatarStyles = [
  'adventurer',
  'adventurer-neutral',
  'avataaars',
  'big-ears',
  'big-ears-neutral',
  'big-smile',
  'bottts',
  'croodles',
  'croodles-neutral',
  'fun-emoji',
  'lorelei',
  'lorelei-neutral',
  'micah',
  'miniavs',
  'notionists',
  'notionists-neutral',
  'open-peeps',
  'personas',
  'pixel-art',
  'pixel-art-neutral',
];

function getRandomAvatar(): string {
  const style = avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
  const seed = Math.random().toString(36).substring(7);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
}

export default function AntiSocialBanner({
  message,
  avatar,
  isVisible,
  onClose,
}: AntiSocialBannerProps) {
  if (!message) return null;

  const avatarUrl = useMemo(() => avatar || getRandomAvatar(), [message, avatar]);

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
        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
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
