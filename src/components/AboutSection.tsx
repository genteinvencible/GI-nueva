import { useState, forwardRef } from 'react';
import EmailSubscriptionForm from './EmailSubscriptionForm';

interface AboutSectionProps {
  onRevealChapter2: () => void;
  onFormOpenChange?: (isOpen: boolean) => void;
  onInputFocusChange?: (isFocused: boolean) => void;
  onSubscribe?: () => void;
}

const AboutSection = forwardRef<HTMLButtonElement, AboutSectionProps>(
  ({ onRevealChapter2, onFormOpenChange, onInputFocusChange, onSubscribe }, ref) => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
      const newState = !showForm;
      setShowForm(newState);
      onFormOpenChange?.(newState);
    };

  return (
    <div className="bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-4 lg:pb-8 transition-colors">
          * * *
        </div>
        <div className="space-y-4 max-w-4xl mt-0 pt-0">
          <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors">
            <span className="lead-in-text">Mi nombre es Álvaro Sánchez</span> y desde hace cinco años tengo una suscripción de emails de pago.
          </p>

          <div className="space-y-4 pt-2">
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">—¿Cuántos años?</p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">—Cinco...</p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">—Pues por el cu...</p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Ese es el nivel.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              {'Yo escribo todos los d\u00EDas y otras personas (que no son yo) '}
              <strong>{'pagan para leer'}</strong>
              {'.'}

            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Así que puedes llamarme escritor, o vendedor. O puedes no llamarme nada.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              {'Si quieres saber qu\u00E9 lleva a un mont\u00F3n de personas (que no son t\u00FA) a pagar por recibir emails, '}
              <strong>{'puedes probar gratis'}</strong>
              {' durante 17 d\u00EDas.'}

            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Sí, 17.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              O 12 más cinco.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Solo tienes que entregarme uno de tus bienes más preciados, tu email.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors font-bold">
              OH ME HA PEDIDO MI EMAIL!!
            </p>

            <div className="pt-8 space-y-4">
              <button
                ref={ref}
                onClick={handleToggleForm}
                className="w-full px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 text-base font-normal hover:border-neutral-500 dark:hover:border-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                Ok, toma mi email
              </button>

              <EmailSubscriptionForm
                isOpen={showForm}
                onInputFocusChange={onInputFocusChange}
                onSubscribe={onSubscribe}
              />

              <button
                onClick={onRevealChapter2}
                className="relative w-full px-8 py-5 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span className="absolute -top-1 -right-1 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 text-[0.55rem] px-1.5 py-0.5 font-normal tracking-wider border border-neutral-300 dark:border-neutral-700 shadow-sm rotate-3 transition-colors">
                  MOST POPULAR
                </span>
                Demasiado pronto, todavía no nos hemos presentado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
