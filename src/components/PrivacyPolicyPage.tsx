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

        <LegalChapter number={1} subtitle="Aviso Legal">
          <AvisoLegalContent />
        </LegalChapter>

        <LegalChapter number={2} subtitle="Política de Privacidad">
          <PrivacidadContent />
        </LegalChapter>

        <LegalChapter number={3} subtitle="Política de Cookies">
          <CookiesContent />
        </LegalChapter>

        <LegalChapter number={4} subtitle="Términos y Condiciones">
          <TerminosContent />
        </LegalChapter>
      </div>
    </div>
  );
}
