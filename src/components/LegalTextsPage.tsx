import { ArrowLeft } from 'lucide-react';

interface LegalTextsPageProps {
  onNavigateToPolicy: () => void;
  onBack: () => void;
}

export default function LegalTextsPage({ onNavigateToPolicy, onBack }: LegalTextsPageProps) {
  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[1.125rem] text-neutral-600 dark:text-neutral-400 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors mb-8 lg:mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-6 lg:pb-10 transition-colors">
          * * *
        </div>

        <div className="max-w-4xl mt-0 pt-0">
          <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors">
            <span className="lead-in-text">¿Estás buscando los textos legales</span> de esta web?
          </p>
          <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mt-2">
            Enhorabuena, estás en el sitio adecuado.
          </p>

          <div className="space-y-5 lg:space-y-6 pt-10">
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors font-bold">
              Pero antes.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">
              Debes saber si esto es para ti.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">
              Esto es para ti si:
            </p>

            <ul className="space-y-3 text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors list-none ml-0">
              <li>Estás muy aburrido</li>
              <li>Me quieres denunciar</li>
              <li>Tienes mucho tiempo libre</li>
              <li>Me quieres fusilar los textos legales</li>
              <li>Quieres ver si te los he fusilado a ti</li>
              <li>Tienes comprensión lectora nivel <strong>DIOS</strong></li>
            </ul>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors font-bold pt-4">
              Ahí va.
            </p>
          </div>
        </div>

        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-8 lg:pt-12 pb-6 lg:pb-10 transition-colors">
          * * *
        </div>

        <div className="max-w-4xl">
          <div className="space-y-4">
            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-bold text-neutral-800 dark:text-white mb-1">Aviso Legal</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Quién soy, qué hago aquí y por qué no deberías copiarme
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-bold text-neutral-800 dark:text-white mb-1">Política de Privacidad</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Cómo trato tus datos (spoiler: bien)
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-bold text-neutral-800 dark:text-white mb-1">Política de Cookies</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Qué cookies uso y para qué
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-bold text-neutral-800 dark:text-white mb-1">Términos y Condiciones de Suscripción</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Lo que aceptas cuando me das tu dinero
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
