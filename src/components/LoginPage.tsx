import { useState } from 'react';
import { ArrowLeft, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import backgroundImage from '/Assests/here_in_my_garage_alvaro_b:n.png';

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
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <header className="relative z-10 p-6 md:p-8">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Volver</span>
        </button>
      </header>

      <main className="relative z-10 flex-1 flex items-start md:items-start justify-center md:justify-end px-6 md:pr-8 lg:pr-12 pt-24 md:pt-16">
        <div className="w-full max-w-md bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
          {formState === 'success' ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
                Revisa tu bandeja de entrada
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg leading-relaxed mb-2">
                Te hemos enviado un enlace magico a
              </p>
              <p className="text-[#141210] dark:text-[#f7f3ed] font-semibold text-lg mb-8">
                {email}
              </p>
              <p className="text-[#141210]/50 dark:text-[#f7f3ed]/50 text-sm">
                El enlace expira en 15 minutos.
                <br />
                Revisa tambien la carpeta de spam.
              </p>
            </div>
          ) : formState === 'not_found' ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-amber-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
                No te encontramos
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg leading-relaxed mb-8">
                El email <span className="font-semibold">{email}</span> no esta registrado como miembro.
              </p>
              <button
                onClick={handleRetry}
                className="w-full py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Probar con otro email
              </button>
              <p className="mt-6 text-sm text-[#141210]/50 dark:text-[#f7f3ed]/50">
                Si crees que esto es un error, contacta con nosotros.
              </p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-10">
                <p className="text-[#141210] dark:text-[#f7f3ed] text-2xl md:text-3xl leading-relaxed font-bold">
                  Para acceder, pon aqui tu email y te mando un glorioso enlace.
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formState === 'error') setFormState('idle');
                    }}
                    placeholder="tu@email.com"
                    disabled={formState === 'loading'}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-[#1c1a17] border-2 border-[#141210]/10 dark:border-[#f7f3ed]/10 rounded-xl text-[#141210] dark:text-[#f7f3ed] placeholder:text-[#141210]/40 dark:placeholder:text-[#f7f3ed]/40 focus:outline-none focus:border-[#141210]/30 dark:focus:border-[#f7f3ed]/30 transition-colors disabled:opacity-50"
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-red-500 text-sm text-center animate-fade-in">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading' || !email}
                  className="w-full py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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

              <p className="mt-8 text-center text-sm text-[#141210]/60 dark:text-[#f7f3ed]/60">
                Sin contrasenas ni gaitas. Simple y seguro.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
