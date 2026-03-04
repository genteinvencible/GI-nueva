import { useEffect, useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

interface AuthCallbackPageProps {
  onSuccess: () => void;
  onError: () => void;
}

type CallbackState = 'loading' | 'success' | 'error';

export default function AuthCallbackPage({ onSuccess, onError }: AuthCallbackPageProps) {
  const [state, setState] = useState<CallbackState>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (!token) {
        setState('error');
        setErrorMessage('Token no encontrado en la URL');
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ghost-verify-session`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ token }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Error al verificar sesion');
        }

        localStorage.setItem('gi_session_token', data.sessionToken);
        localStorage.setItem('gi_member', JSON.stringify(data.member));

        setState('success');

        setTimeout(() => {
          onSuccess();
        }, 1500);
      } catch (err) {
        setState('error');
        setErrorMessage(err instanceof Error ? err.message : 'Error desconocido');
      }
    };

    verifyToken();
  }, [onSuccess]);

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {state === 'loading' && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#141210]/5 dark:bg-[#f7f3ed]/5 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-[#141210] dark:text-[#f7f3ed] animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-3">
              Verificando acceso...
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60">
              Un momento mientras confirmamos tu identidad
            </p>
          </>
        )}

        {state === 'success' && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-3">
              Bienvenido de vuelta
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60">
              Redirigiendo al contenido exclusivo...
            </p>
          </>
        )}

        {state === 'error' && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-3">
              Algo salio mal
            </h1>
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 mb-6">
              {errorMessage}
            </p>
            <button
              onClick={onError}
              className="px-6 py-3 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Volver al inicio
            </button>
          </>
        )}
      </div>
    </div>
  );
}
