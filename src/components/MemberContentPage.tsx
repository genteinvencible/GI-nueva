import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';

interface MemberContentPageProps {
  onBackClick: () => void;
  onLoginClick: () => void;
}

const GHOST_URL = 'https://leer.genteinvencible.com';

export default function MemberContentPage({ onBackClick }: MemberContentPageProps) {
  const handleGoToGhost = () => {
    window.location.href = GHOST_URL;
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex flex-col">
      <header className="p-6 md:p-8">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Volver</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#141210]/5 dark:bg-[#f7f3ed]/5 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-[#141210]/60 dark:text-[#f7f3ed]/60" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
            Contenido exclusivo
          </h1>

          <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg mb-10 leading-relaxed">
            Todo el contenido exclusivo para miembros esta disponible en nuestra plataforma de lectura.
            Accede con tu cuenta para disfrutar de articulos, historias y mas.
          </p>

          <button
            onClick={handleGoToGhost}
            className="px-8 py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all inline-flex items-center gap-3"
          >
            Ir a leer.genteinvencible.com
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
