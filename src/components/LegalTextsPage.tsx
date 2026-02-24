interface LegalTextsPageProps {
  onNavigateToPolicy: () => void;
  onBack: () => void;
}

export default function LegalTextsPage({ onNavigateToPolicy, onBack }: LegalTextsPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <button
          onClick={onBack}
          className="mb-8 text-neutral-600 dark:text-neutral-400 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors"
        >
          ← Volver al inicio
        </button>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              ¿Estás buscando los textos legales de esta web?
            </h1>
            <p className="text-xl">
              Enhorabuena, estás en el sitio adecuado.
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-6">
              Pero antes.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
              Debes saber si esto es para ti.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              Esto es para ti si:
            </p>
          </div>

          <ul className="space-y-3 text-lg text-neutral-700 dark:text-neutral-300 ml-6">
            <li>Estás muy aburrido</li>
            <li>Me quieres denunciar</li>
            <li>Tienes mucho tiempo libre</li>
            <li>Me quieres fusilar los textos legales</li>
            <li>Quieres ver si te los he fusilado a ti</li>
            <li>Tienes comprensión lectora nivel DIOS</li>
          </ul>

          <div>
            <p className="text-xl font-medium mb-8">
              Ahí va.
            </p>
          </div>

          <div className="grid gap-4">
            <button
              onClick={onNavigateToPolicy}
              className="text-left p-6 border-2 border-neutral-200 dark:border-neutral-800 hover:border-[#2d6a4f] dark:hover:border-[#52b788] rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Política de Privacidad</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Cómo tratamos tus datos personales
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="text-left p-6 border-2 border-neutral-200 dark:border-neutral-800 hover:border-[#2d6a4f] dark:hover:border-[#52b788] rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Aviso Legal</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Información legal de la web
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="text-left p-6 border-2 border-neutral-200 dark:border-neutral-800 hover:border-[#2d6a4f] dark:hover:border-[#52b788] rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Política de Cookies</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Qué cookies usamos y para qué
              </p>
            </button>

            <button
              onClick={onNavigateToPolicy}
              className="text-left p-6 border-2 border-neutral-200 dark:border-neutral-800 hover:border-[#2d6a4f] dark:hover:border-[#52b788] rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Términos y Condiciones</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Condiciones de uso de la plataforma
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
