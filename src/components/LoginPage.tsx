import { useState } from 'react';
import { ArrowLeft, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import backgroundImage from '/Assests/alvaro_meme_barra_fotoperiodico_optimizada.webp';

interface LoginPageProps {
  onBackClick: () => void;
}

type FormState = 'idle' | 'loading' | 'success' | 'error' | 'not_found';

export default function LoginPage({ onBackClick }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setFormState('error');
      setErrorMessage('Introduce un email valido');
      return;
    }

    setFormState('loading');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-magic-link`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setFormState('not_found');
        } else {
          setFormState('error');
          setErrorMessage(data.error || 'Error al enviar el email');
        }
        return;
      }

      setFormState('success');
    } catch (err) {
      console.error('Send magic link error:', err);
      setFormState('error');
      setErrorMessage('Error de conexion. Intentalo de nuevo.');
    }
  };

  const handleRetry = () => {
    setFormState('idle');
    setErrorMessage('');
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="relative z-10 p-6 md:p-8">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors drop-shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Volver</span>
        </button>
      </header>

      <main className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-8 md:pb-12">
        <div className="w-full max-w-sm mx-auto">
          {formState === 'success' ? (
            <div className="text-center animate-fade-in bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-3">
                Revisa tu bandeja de entrada
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-base leading-relaxed mb-1">
                Te hemos enviado un enlace magico a
              </p>
              <p className="text-[#141210] dark:text-[#f7f3ed] font-semibold text-base mb-6">
                {email}
              </p>
              <p className="text-[#141210]/50 dark:text-[#f7f3ed]/50 text-xs">
                El enlace expira en 15 minutos. Revisa tambien la carpeta de spam.
              </p>
            </div>
          ) : formState === 'not_found' ? (
            <div className="text-center animate-fade-in bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-amber-500" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-3">
                No te encontramos
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-base leading-relaxed mb-6">
                El email <span className="font-semibold">{email}</span> no esta registrado como miembro.
              </p>
              <button
                onClick={handleRetry}
                className="w-full py-3 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all text-sm"
              >
                Probar con otro email
              </button>
              <p className="mt-4 text-xs text-[#141210]/50 dark:text-[#f7f3ed]/50">
                Si crees que esto es un error, contacta con nosotros.
              </p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <p className="text-white text-2xl md:text-3xl leading-tight font-bold mb-6 drop-shadow-lg text-center">
                Para acceder, pon aqui tu email y te mando un glorioso enlace.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-[#141210]/40" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formState === 'error') setFormState('idle');
                    }}
                    placeholder="tu@email.com"
                    disabled={formState === 'loading'}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/95 backdrop-blur-sm border-0 rounded-xl text-[#141210] placeholder:text-[#141210]/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 shadow-lg"
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-red-300 text-sm text-center animate-fade-in drop-shadow">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading' || !email}
                  className="w-full py-3.5 bg-[#141210] text-[#f7f3ed] font-bold rounded-xl hover:bg-[#141210]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar enlace magico'
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-white/70 drop-shadow">
                Sin contrasenas ni gaitas. Simple y seguro.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
