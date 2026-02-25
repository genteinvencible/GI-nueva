import { X } from 'lucide-react';

interface AntiSocialBannerProps {
  message: string;
  avatar?: string | null;
  isVisible: boolean;
  onClose: () => void;
}

export default function AntiSocialBanner({
  message,
  avatar,
  isVisible,
  onClose,
}: AntiSocialBannerProps) {
  if (!message || !avatar) return null;

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
      <div className="relative flex items-start gap-3 bg-[#faf8f5]/95 dark:bg-neutral-800/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-lg shadow-lg p-3.5 sm:p-4 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden" style={{ boxShadow: '-16px 0 32px rgba(0, 0, 0, 0.06), 16px 0 32px rgba(0, 0, 0, 0.06), 0 4px 8px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')", opacity: 0.07 }}></div>
        <div className="relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-100 leading-snug font-normal">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="relative flex-shrink-0 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors p-1 -mt-1 -mr-1"
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
