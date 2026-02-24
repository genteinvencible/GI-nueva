interface LegalTextsPageProps {
  onNavigateToPolicy: () => void;
  onBack: () => void;
}

export default function LegalTextsPage({ onNavigateToPolicy, onBack }: LegalTextsPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <button
          onClick={onBack}
          className="mb-8 lg:mb-12 text-[1.125rem] text-neutral-600 dark:text-neutral-400 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors"
        >
          ← Volver al inicio
        </button>

        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] py-8 transition-colors">
          * * *
        </div>

        <div className="space-y-4 max-w-4xl">
          <div>
            <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors">
              ¿Estás buscando los textos legales de esta web?
            </p>
            <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors">
              Enhorabuena, estás en el sitio adecuado.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors font-bold">
              Pero antes.
            </p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Debes saber si esto es para ti.
            </p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Esto es para ti si:
            </p>
          </div>

          <ul className="space-y-3 text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
            <li>Estás muy aburrido</li>
            <li>Me quieres denunciar</li>
            <li>Tienes mucho tiempo libre</li>
            <li>Me quieres fusilar los textos legales</li>
            <li>Quieres ver si te los he fusilado a ti</li>
            <li>Tienes comprensión lectora nivel DIOS</li>
          </ul>

          <div className="pt-4">
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors font-bold">
              Ahí va.
            </p>
          </div>
        </div>

        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] py-8 transition-colors">
          * * *
        </div>

        <div className="space-y-4 pt-8">
            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-medium text-neutral-800 dark:text-white mb-2">Política de Privacidad</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Cómo tratamos tus datos personales
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-medium text-neutral-800 dark:text-white mb-2">Aviso Legal</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Información legal de la web
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-medium text-neutral-800 dark:text-white mb-2">Política de Cookies</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Qué cookies usamos y para qué
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="w-full text-left px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <h3 className="text-[1.125rem] font-medium text-neutral-800 dark:text-white mb-2">Términos y Condiciones</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Condiciones de uso de la plataforma
              </p>
            </button>
        </div>
      </div>
    </div>
  );
}
