import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface CardEmailFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CardEmailForm({ isOpen, onClose }: CardEmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showLegalTerms, setShowLegalTerms] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const timeout = setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

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

  return (
    <div
      ref={containerRef}
      className="overflow-hidden transition-all duration-500 ease-out max-w-6xl"
      style={{
        maxHeight: isOpen ? '1000px' : '0px',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="mt-8 lg:mt-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-white/[0.04] p-6 lg:p-8 shadow-sm relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2d6a4f]/10 dark:bg-[#52b788]/15 text-[#2d6a4f] dark:text-[#52b788] text-lg">
              {'✓'}
            </span>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white transition-colors">
              Hecho. El primero ya está en camino.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white mb-5 leading-relaxed">
              Ok, igual entonces es que ya me quieres dar tu email.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email aquí"
                  className="flex-1 px-5 py-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-base outline-none focus:border-[#2d6a4f] dark:focus:border-[#52b788] focus:ring-1 focus:ring-[#2d6a4f]/20 dark:focus:ring-[#52b788]/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={!isValidEmail || !accepted || status === 'loading'}
                  className="px-8 py-4 bg-[#2d6a4f] text-white text-base font-medium rounded hover:bg-[#245a42] dark:bg-[#52b788] dark:text-neutral-900 dark:hover:bg-[#6ec99b] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
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
              <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 space-y-3">
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
    </div>
  );
}
