import { ArrowLeft } from 'lucide-react';
import LegalChapter from './LegalChapter';
import AvisoLegalContent from './legal/AvisoLegalContent';
import PrivacidadContent from './legal/PrivacidadContent';
import CookiesContent from './legal/CookiesContent';
import TerminosContent from './legal/TerminosContent';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[1.125rem] text-neutral-600 dark:text-neutral-400 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors mb-8 lg:mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        <div className="max-w-4xl mb-16 lg:mb-24">
          <h1 className="text-[2rem] lg:text-[2.75rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mb-6">
            ¿Estás buscando los textos legales de esta web?
          </h1>
          <p className="text-[1.125rem] lg:text-[1.25rem] text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors mb-8">
            Enhorabuena, estás en el sitio adecuado.
          </p>

          <p className="text-[1.125rem] lg:text-[1.25rem] text-neutral-800 dark:text-white leading-relaxed transition-colors mb-2 font-bold">
            Pero antes.
          </p>
          <p className="text-[1.125rem] lg:text-[1.25rem] text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors mb-8">
            Debes saber si esto es para ti.
          </p>

          <p className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors mb-5">
            Esto es para ti si:
          </p>
          <ul className="space-y-2 mb-10">
            {[
              'Estás muy aburrido',
              'Me quieres denunciar',
              'Tienes mucho tiempo libre',
              'Me quieres fusilar los textos legales',
              'Quieres ver si te los he fusilado a ti',
              'Tienes comprensión lectora nivel DIOS',
            ].map((item) => (
              <li key={item} className="text-[1.05rem] lg:text-[1.125rem] text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors pl-4 border-l-2 border-neutral-300 dark:border-neutral-700">
                {item}
              </li>
            ))}
          </ul>

          <p className="text-[1.5rem] lg:text-[1.75rem] text-neutral-800 dark:text-white font-normal transition-colors">
            Ahí va.
          </p>
        </div>

        <nav className="max-w-4xl mb-16 lg:mb-20">
          <p className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors mb-6">
            Syllabus
          </p>
          <ol className="space-y-3">
            {[
              { id: 'aviso-legal', label: 'Aviso Legal' },
              { id: 'politica-privacidad', label: 'Política de Privacidad' },
              { id: 'politica-cookies', label: 'Política de Cookies' },
              { id: 'terminos-condiciones', label: 'Términos y Condiciones' },
            ].map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-3 text-[1.05rem] lg:text-[1.125rem] text-neutral-600 dark:text-neutral-400 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors"
                >
                  <span className="text-[0.8rem] font-bold text-neutral-400 dark:text-neutral-600 group-hover:text-[#2d6a4f] dark:group-hover:text-[#52b788] transition-colors tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <LegalChapter id="aviso-legal" number={1} subtitle="Aviso Legal" showDinkus={false}>
          <AvisoLegalContent />
        </LegalChapter>

        <LegalChapter id="politica-privacidad" number={2} subtitle="Política de Privacidad">
          <PrivacidadContent />
        </LegalChapter>

        <LegalChapter id="politica-cookies" number={3} subtitle="Política de Cookies">
          <CookiesContent />
        </LegalChapter>

        <LegalChapter id="terminos-condiciones" number={4} subtitle="Términos y Condiciones">
          <TerminosContent />
        </LegalChapter>
      </div>
    </div>
  );
}
