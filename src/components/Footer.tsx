interface FooterProps {
  onLegalClick: () => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center">
          <button
            onClick={onLegalClick}
            className="text-neutral-700 dark:text-neutral-300 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors font-medium"
          >
            Textos legales, presuntamente
          </button>
        </div>

        <div className="text-center pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
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
