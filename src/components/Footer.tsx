interface FooterProps {
  onLegalClick: () => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              ¿Estás buscando los textos legales de esta web?
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Enhorabuena, estás en el sitio adecuado.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
              Pero antes.
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 mb-4">
              Debes saber si esto es para ti.
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 mb-4">
              Esto es para ti si:
            </p>
          </div>

          <ul className="space-y-2 mb-8 text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Estás muy aburrido</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Me quieres denunciar</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tienes mucho tiempo libre</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Me quieres fusilar los textos legales</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Quieres ver si te los he fusilado a ti</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tienes comprensión lectora nivel DIOS</span>
            </li>
          </ul>

          <div className="text-center mb-8">
            <p className="text-lg font-medium text-neutral-900 dark:text-white">
              Ahí va.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={onLegalClick}
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors font-medium"
            >
              Política de Privacidad
            </button>
            <button
              onClick={onLegalClick}
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors font-medium"
            >
              Aviso Legal
            </button>
            <button
              onClick={onLegalClick}
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors font-medium"
            >
              Política de Cookies
            </button>
            <button
              onClick={onLegalClick}
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors font-medium"
            >
              Términos y Condiciones
            </button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © 2026 Gente Invencible SL · CIF B44865517
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Calle Manuela del Río 3, 33820 Grado, Asturias
          </p>
        </div>
      </div>
    </footer>
  );
}
