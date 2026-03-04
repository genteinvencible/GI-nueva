import { ArrowLeft, ExternalLink } from 'lucide-react';

interface LoginPageProps {
  onBackClick: () => void;
}

const GHOST_URL = 'https://leer.genteinvencible.com';

export default function LoginPage({ onBackClick }: LoginPageProps) {
  const handleGoToGhost = () => {
    window.location.href = `${GHOST_URL}/#/portal/signin`;
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
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
            Accede a tu cuenta
          </h1>
          <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg mb-10 leading-relaxed">
            El contenido exclusivo para miembros esta en nuestra plataforma de lectura.
          </p>

          <button
            onClick={handleGoToGhost}
            className="w-full py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3"
          >
            Ir a Gente Invencible
            <ExternalLink className="w-5 h-5" />
          </button>

          <p className="mt-8 text-sm text-[#141210]/50 dark:text-[#f7f3ed]/50">
            Seras redirigido a leer.genteinvencible.com
          </p>
        </div>
      </main>
    </div>
  );
}
