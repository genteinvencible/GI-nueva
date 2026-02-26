import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface CardEmailFormProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function CardEmailForm({ isOpen, onClose, message }: CardEmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showLegalTerms, setShowLegalTerms] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || !accepted || status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/subscribe-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Algo ha ido mal. Inténtalo de nuevo.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Algo ha ido mal.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

      <div
        className="relative w-full max-w-lg bg-[#faf8f4] dark:bg-[#1a1816] border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 sm:p-8 shadow-2xl dark:shadow-black/60 animate-[modalSlideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition-all"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="flex items-center gap-3 py-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2d6a4f]/10 dark:bg-[#52b788]/15 text-[#2d6a4f] dark:text-[#52b788] text-lg">
              {'✓'}
            </span>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white transition-colors">
              Hecho. El primero ya está en camino.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white mb-5 leading-relaxed pr-8">
              {message || 'Ok, igual entonces es que ya me quieres dar tu email.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email aquí"
                className="w-full px-5 py-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-base outline-none focus:border-[#2d6a4f] dark:focus:border-[#52b788] focus:ring-1 focus:ring-[#2d6a4f]/20 dark:focus:ring-[#52b788]/20 transition-all"
                autoFocus
              />
              <button
                type="submit"
                disabled={!isValidEmail || !accepted || status === 'loading'}
                className="w-full px-8 py-4 bg-[#2d6a4f] text-white text-base font-medium rounded hover:bg-[#245a42] dark:bg-[#52b788] dark:text-neutral-900 dark:hover:bg-[#6ec99b] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
              </button>
            </form>

            <label className="flex items-start gap-2.5 mt-4 cursor-pointer select-none group">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 dark:border-neutral-600 accent-[#2d6a4f] dark:accent-[#52b788] cursor-pointer"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                He leído (y estoy muy de acuerdo) con los{' '}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowLegalTerms(!showLegalTerms);
                  }}
                  className="underline hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                >
                  términos legales
                </button>{' '}
                de este tío.
              </span>
            </label>

            {showLegalTerms && (
              <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 space-y-3 max-h-48 overflow-y-auto">
                <p className="font-bold">Información diferente, para gente inteligente, sobre protección de datos</p>
                <p>El responsable de todo lo que pasa aquí soy yo, Álvaro Sánchez.</p>
                <p>Cuando metas tu email recibirás un email para confirmar que eres humano.</p>
                <p>Solo hay hueco para el email porque no quiero ningún otro dato tuyo.</p>
                <p>En todos los emails hay un botón enorme para borrarse.</p>
                <p>Puedes acceder a tus datos, rectificarlos y olvidarlos.</p>
              </div>
            )}
          </>
        )}

        {status === 'error' && errorMsg && (
          <p className="text-sm text-red-500 dark:text-red-400 mt-3">{errorMsg}</p>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
