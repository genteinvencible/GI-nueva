import { useState } from 'react';

interface EmailSubscriptionFormProps {
  isOpen: boolean;
}

export default function EmailSubscriptionForm({ isOpen }: EmailSubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || status === 'loading') return;

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
        maxHeight: isOpen ? '200px' : '0px',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="pt-6">
        {status === 'success' ? (
          <p className="text-[1.125rem] text-neutral-800 dark:text-white transition-colors">
            Hecho. El primero ya está en camino.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-5 py-4 bg-transparent border-2 border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-base outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors"
            />
            <button
              type="submit"
              disabled={!isValidEmail || status === 'loading'}
              className="px-8 py-4 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        )}
        {status === 'error' && errorMsg && (
          <p className="text-sm text-red-500 dark:text-red-400 mt-2">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
