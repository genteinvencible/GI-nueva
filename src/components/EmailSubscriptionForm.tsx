import { useEffect, useRef, useState } from 'react';

interface EmailSubscriptionFormProps {
  isOpen: boolean;
  onInputFocusChange?: (isFocused: boolean) => void;
  onSubscribe?: () => void;
  hideIntroText?: boolean;
}

export default function EmailSubscriptionForm({
  isOpen,
  onInputFocusChange,
  onSubscribe,
  hideIntroText = false
}: EmailSubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showLegalTerms, setShowLegalTerms] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

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
      onSubscribe?.();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Algo ha ido mal.');
    }
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden transition-all duration-500 ease-out"
      style={{
        maxHeight: isOpen ? '1000px' : '0px',
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
            {!hideIntroText && (
              <p className="text-[1.125rem] text-neutral-800 dark:text-white mb-4">
                En los próximos 17 días, vas a saber lo que es bueno.
                <br />
                O muy malo.
              </p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => onInputFocusChange?.(true)}
                  onBlur={() => onInputFocusChange?.(false)}
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
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 -mt-1">
                No prometo no mandarte spam.
              </p>
            </form>
            <label className="flex items-start gap-2.5 mt-3 cursor-pointer select-none group">
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

                <p>
                  ✔️ El responsable de todo lo que pasa aquí soy yo, Álvaro Sánchez, como no puede ser de otra forma.
                </p>

                <p>
                  Por tanto, si te estafo la culpa es mía.
                </p>

                <p>
                  Bueno, todo no, si los emails te cambian la vida tendrás que agradecérselo a tu madre, que te la dio.
                </p>

                <p>
                  ✔️ Cuando metas tu email, el mejor, el peor o el que más te apetezca, recibirás un email para confirmar que eres humano.
                </p>

                <p>
                  Te adelanto que no es un email de confirmación más. Mucha gente no pasa de ahí.
                </p>

                <p>
                  ✔️ Solo hay hueco para el email porque no quiero ningún otro dato tuyo.
                </p>

                <p>
                  No te pido el nombre porque no tengo pensado hacer como que somos amigos. Podríamos llegar a serlo, pero me estaría arriesgando a que pusieras una mongolada (que es lo que yo haría).
                </p>

                <p>
                  Los emails están bien, pero si empiezas con un "Hola, Pep Guardiola", podrían estar peor.
                </p>

                <p>
                  ✔️ En todos los emails hay un botón enorme para borrarse. Para darle no hace falta ser inteligente. Si lo que lees no te dan ganas de sacar la tarjeta mi consejo es que le des. Yo ni me entero, de verdad.
                </p>

                <p>
                  ✔️ Creo que hay que añadir algo más de que puedes acceder a tus datos, rectificarlos y olvidarlos. Sin problema, llamo a Will Smith y que me enchufe con su aparato.
                </p>
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
