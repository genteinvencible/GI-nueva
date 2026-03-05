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
    <div className="min-h-screen flex flex-col relative">
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
        }}
      />
      <div
        className="absolute inset-0 md:hidden bg-[#e8e4dd] dark:bg-[#1a1816]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-black/50 hidden md:block" />

      <header className="relative z-10 p-6 md:p-8">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-[#141210]/70 md:text-white/80 hover:text-[#141210] md:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Volver</span>
        </button>
      </header>

      <main className="relative z-10 flex-1 flex items-start md:items-start justify-center md:justify-end px-6 md:pr-8 lg:pr-12 pt-12 md:pt-16">
        <div className="w-full max-w-md bg-[#f7f3ed] dark:bg-[#141210] md:bg-[#f7f3ed]/95 md:dark:bg-[#141210]/95 md:backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border border-[#141210]/5 dark:border-[#f7f3ed]/5 md:border-white/20 md:dark:border-white/5">
          {formState === 'success' ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/10 flex items-center justify-center ring-4 ring-emerald-500/20">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
                Revisa tu bandeja de entrada
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg leading-relaxed mb-2">
                Te hemos enviado un enlace magico a
              </p>
              <p className="text-[#141210] dark:text-[#f7f3ed] font-semibold text-lg mb-8 bg-[#141210]/5 dark:bg-[#f7f3ed]/5 px-4 py-2 rounded-lg inline-block">
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
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-amber-500/10 flex items-center justify-center ring-4 ring-amber-500/20">
                <AlertCircle className="w-10 h-10 text-amber-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
                No te encontramos
              </h1>
              <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg leading-relaxed mb-8">
                El email <span className="font-semibold bg-[#141210]/5 dark:bg-[#f7f3ed]/5 px-2 py-1 rounded">{email}</span> no esta registrado como miembro.
              </p>
              <button
                onClick={handleRetry}
                className="w-full py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200"
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
                <p className="text-[#141210] dark:text-[#f7f3ed] text-2xl md:text-3xl leading-relaxed font-bold mb-4">
                  Tambien puedes leer los emails (de pago) desde aqui.
                </p>
                <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg leading-relaxed">
                  Para hacerlo, pon aqui tu correo y te mando un enlace de acceso
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-[#141210]/40 dark:text-[#f7f3ed]/40 group-focus-within:text-[#141210]/70 dark:group-focus-within:text-[#f7f3ed]/70 transition-colors" />
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
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-[#1c1a17] border-2 border-[#141210]/10 dark:border-[#f7f3ed]/10 rounded-xl text-[#141210] dark:text-[#f7f3ed] placeholder:text-[#141210]/40 dark:placeholder:text-[#f7f3ed]/40 focus:outline-none focus:border-[#141210]/40 dark:focus:border-[#f7f3ed]/40 focus:ring-4 focus:ring-[#141210]/5 dark:focus:ring-[#f7f3ed]/5 transition-all disabled:opacity-50"
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-500 text-sm animate-fade-in bg-red-500/10 py-2 px-4 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading' || !email}
                  className="w-full py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3"
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

              <p className="mt-8 text-center text-[#141210]/60 dark:text-[#f7f3ed]/60">
                Y si no sabes de que hablo,{' '}
                <button
                  type="button"
                  onClick={onBackClick}
                  className="underline hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
                >
                  vuelve atras
                </button>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
