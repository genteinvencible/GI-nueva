import { useState } from 'react';
import { ArrowLeft, Mail, Loader2, CheckCircle } from 'lucide-react';

interface LoginPageProps {
  onBackClick: () => void;
}

type LoginState = 'idle' | 'loading' | 'success' | 'error';

export default function LoginPage({ onBackClick }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<LoginState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setState('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ghost-magic-link`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ email: email.trim().toLowerCase() }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el enlace');
      }

      setState('success');
    } catch (err) {
      setState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex flex-col">
      <header className="p-6 md:p-8">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Volver</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          {state === 'success' ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
                Revisa tu correo
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg leading-relaxed mb-8">
                Te hemos enviado un enlace magico a <strong className="text-[#141210] dark:text-[#f7f3ed]">{email}</strong>.
                Haz clic en el para acceder.
              </p>
              <button
                onClick={() => {
                  setState('idle');
                  setEmail('');
                }}
                className="text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors text-sm"
              >
                Usar otro email
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
                  Accede a tu cuenta
                </h1>
                <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg">
                  Te enviaremos un enlace magico para entrar
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-[#141210]/40 dark:text-[#f7f3ed]/40" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    disabled={state === 'loading'}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-[#1c1a17] border border-[#141210]/10 dark:border-[#f7f3ed]/10 rounded-xl text-[#141210] dark:text-[#f7f3ed] placeholder-[#141210]/40 dark:placeholder-[#f7f3ed]/40 focus:outline-none focus:ring-2 focus:ring-[#141210]/20 dark:focus:ring-[#f7f3ed]/20 focus:border-transparent transition-all disabled:opacity-50"
                    autoComplete="email"
                    autoFocus
                  />
                </div>

                {state === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isValidEmail || state === 'loading'}
                  className="w-full py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar enlace'
                  )}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-[#141210]/50 dark:text-[#f7f3ed]/50">
                Solo para miembros de Gente Invencible
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
