import { useState } from 'react';
import { ArrowLeft, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import backgroundImage from '/Assests/here_in_my_garage_perspectiva.png';

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
    <div className="min-h-[100dvh] md:min-h-screen flex flex-col relative">
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          filter: 'brightness(0.6)',
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          filter: 'brightness(0.5)',
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[4px]" />

      <header className="relative z-10 p-5 md:p-8">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Volver</span>
        </button>
      </header>

      <main className="relative z-10 flex-1 flex items-end md:items-center justify-center md:justify-end px-5 md:px-0 md:pr-8 lg:pr-16 pb-5 md:pb-0">
        <div
          className="w-full max-w-md rounded-2xl rounded-b-none md:rounded-3xl p-6 pb-8 md:p-12 bg-black/75 backdrop-blur-[16px] border border-white/10 border-b-0 md:border-b shadow-[0_-8px_30px_-4px_rgba(0,0,0,0.5)] md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          {formState === 'success' ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/10 flex items-center justify-center ring-4 ring-emerald-500/20">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-2">
                Te he enviado el enlace a:
              </p>
              <p className="text-white font-semibold text-lg mb-8 bg-white/10 px-4 py-2 rounded-lg inline-block">
                {email}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                El enlace expira en 20 menos 5 minutos. Si no lo ves, podria estar en spam, sin serlo.
              </p>
            </div>
          ) : formState === 'not_found' ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-amber-500/10 flex items-center justify-center ring-4 ring-amber-500/20">
                <AlertCircle className="w-10 h-10 text-amber-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                No te encontramos
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                El email <span className="font-semibold bg-white/10 px-2 py-1 rounded">{email}</span> no esta registrado como miembro.
              </p>
              <button
                onClick={handleRetry}
                className="w-full h-14 md:h-auto md:py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200"
              >
                Probar con otro email
              </button>
              <p className="mt-6 text-sm text-white/60">
                Si crees que esto es un error, contacta con nosotros.
              </p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-10">
                <p className="text-white text-2xl md:text-3xl leading-[1.3] font-bold mb-5">
                  También puedes leer los emails (de pago) desde aquí.
                </p>
                <p className="text-white/80 text-lg leading-[1.6]">
                  Para hacerlo, pon aquí el correo con el que te suscribiste y te mando un enlace de acceso.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
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
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white focus:ring-0 transition-all disabled:opacity-50 text-base"
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-400 text-sm animate-fade-in bg-red-500/10 py-2 px-4 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading' || !email}
                  className="w-full h-14 md:h-auto md:py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Recibir enlace de acceso'
                  )}
                </button>
              </form>

              <p className="mt-10 text-center text-white/60 text-sm leading-relaxed">
                Y si no sabes de qué hablo, sigue tu vida.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
