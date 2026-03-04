import { useEffect, useState } from 'react';
import { Loader2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface AuthCallbackPageProps {
  token: string;
  onSuccess: (session: { token: string; email: string; ghostMemberId: string; expiresAt: string }) => void;
  onError: (error: string) => void;
}

type Status = 'verifying' | 'success' | 'error' | 'expired';

export default function AuthCallbackPage({ token, onSuccess, onError }: AuthCallbackPageProps) {
  const [status, setStatus] = useState<Status>('verifying');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-magic-link`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 410) {
            setStatus('expired');
            setErrorMessage(data.error || 'El enlace ha expirado');
          } else {
            setStatus('error');
            setErrorMessage(data.error || 'Error al verificar el enlace');
          }
          onError(data.error || 'Error de verificacion');
          return;
        }

        setStatus('success');

        localStorage.setItem('gi_session', JSON.stringify(data.session));

        setTimeout(() => {
          onSuccess(data.session);
        }, 1500);
      } catch (err) {
        console.error('Verification error:', err);
        setStatus('error');
        setErrorMessage('Error de conexion');
        onError('Error de conexion');
      }
    };

    verifyToken();
  }, [token, onSuccess, onError]);

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {status === 'verifying' && (
          <div className="animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#141210]/5 dark:bg-[#f7f3ed]/5 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-[#141210] dark:text-[#f7f3ed] animate-spin" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
              Verificando tu enlace...
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60">
              Un momento, por favor
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
              Bienvenido de vuelta
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60">
              Redirigiendo a tu biblioteca...
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-500/10 flex items-center justify-center">
              <XCircle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
              Algo ha fallado
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 mb-8">
              {errorMessage}
            </p>
            <button
              onClick={() => window.location.href = '/login'}
              className="px-8 py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Volver a intentarlo
            </button>
          </div>
        )}

        {status === 'expired' && (
          <div className="animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-amber-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
              Enlace expirado
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 mb-8">
              Los enlaces magicos solo son validos durante 15 minutos.
              Solicita uno nuevo para acceder.
            </p>
            <button
              onClick={() => window.location.href = '/login'}
              className="px-8 py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Solicitar nuevo enlace
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
