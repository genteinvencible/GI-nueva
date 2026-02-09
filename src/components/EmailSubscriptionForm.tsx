import { useState } from 'react';

interface EmailSubscriptionFormProps {
  isOpen: boolean;
}

export default function EmailSubscriptionForm({ isOpen }: EmailSubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [accepted, setAccepted] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
      className="overflow-hidden transition-all duration-500 ease-out"
      style={{
        maxHeight: isOpen ? '400px' : '0px',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="mt-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-white/[0.04] p-6 shadow-sm">
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
            <p className="text-[1.125rem] text-neutral-800 dark:text-white mb-1 font-bold">
              Me alegro. Te estaba esperando.
            </p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white mb-4">
              En los próximos 17 días, vas a saber lo que es bueno.
              <br />
              O muy malo.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Mete aquí el email que quieras"
                className="flex-1 px-5 py-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-base outline-none focus:border-[#2d6a4f] dark:focus:border-[#52b788] focus:ring-1 focus:ring-[#2d6a4f]/20 dark:focus:ring-[#52b788]/20 transition-all"
              />
              <button
                type="submit"
                disabled={!isValidEmail || !accepted || status === 'loading'}
                className="px-8 py-4 bg-[#2d6a4f] text-white text-base font-medium rounded hover:bg-[#245a42] dark:bg-[#52b788] dark:text-neutral-900 dark:hover:bg-[#6ec99b] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
            <label className="flex items-start gap-2.5 mt-3 cursor-pointer select-none group">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 dark:border-neutral-600 accent-[#2d6a4f] dark:accent-[#52b788] cursor-pointer"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                He leído (y estoy muy de acuerdo) con los términos legales de este tío.
              </span>
            </label>
          </>
        )}
        {status === 'error' && errorMsg && (
          <p className="text-sm text-red-500 dark:text-red-400 mt-3">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
