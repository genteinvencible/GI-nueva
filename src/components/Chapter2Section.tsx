import { forwardRef, useState } from 'react';
import EmailSubscriptionForm from './EmailSubscriptionForm';

interface Chapter2SectionProps {
  visible: boolean;
}

const Chapter2Section = forwardRef<HTMLDivElement, Chapter2SectionProps>(
  ({ visible }, ref) => {
    const [showForm, setShowForm] = useState(false);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className="bg-transparent relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-6 lg:pb-10 transition-colors">
            * * *
          </div>

          <div className="max-w-4xl mt-0 pt-0">
            <p
              className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors mb-8 lg:mb-12 ch2-stagger"
              style={{ animationDelay: '0s' }}
            >
              {'Cap\u00EDtulo 2 — tu dinero'}
            </p>

            <p
              className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mb-10 lg:mb-14 ch2-stagger"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="lead-in-text">Me parece justo,</span>{' '}
              {'yo tampoco dar\u00EDa mi email por trig\u00E9simo cuarta vez esta semana.'}
            </p>

            <p
              className="text-[1.25rem] lg:text-[1.4rem] text-neutral-800 dark:text-white leading-snug transition-colors mb-10 lg:mb-14 ch2-stagger"
              style={{ animationDelay: '0.2s' }}
            >
              {'Te cuento qu\u00E9 es esto.'}
            </p>

            <div className="space-y-5 lg:space-y-6">
              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.3s' }}
              >
                {'Una vez le\u00ED a Charlie Munger (que era un se\u00F1or muy listo) que '}
                <strong>{'ochenta modelos mentales son suficientes'}</strong>
                {' para que te vaya muy bien en la vida. Y me empe\u00F1\u00E9 en encontrarlos.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.4s' }}
              >
                {'\u00BFY qu\u00E9 es un modelo mental?'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.45s' }}
              >
                {'Pues una '}
                <strong>{'idea de c\u00F3mo funciona el mundo'}</strong>
                {', una abstracci\u00F3n de la realidad que te permite entenderla.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.55s' }}
              >
                {'Lo que pens\u00E9 fue que ser\u00EDa un gran '}
                <strong>{'regalo para mis hijos'}</strong>
                {' cuando cumplieran los 18.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.6s' }}
              >
                {'Ni coche, ni carnet, ni un Patek Philippe. Darles los 80 modelos, cero euros, y decirles:'}
              </p>

              <blockquote
                className="border-l-2 border-neutral-300 dark:border-neutral-600 pl-6 py-1 ch2-stagger"
                style={{ animationDelay: '0.65s' }}
              >
                <p className="text-[1.125rem] text-neutral-700 dark:text-neutral-300 leading-relaxed italic transition-colors">
                  {'Chavales, yo tampoco s\u00E9 vivir, estoy improvisando, pero hasta aqu\u00ED mis avances.'}
                </p>
                <p className="text-[1.125rem] text-neutral-700 dark:text-neutral-300 leading-relaxed italic transition-colors mt-3">
                  {'(Y h\u00E1ganse hombres).'}
                </p>
              </blockquote>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.75s' }}
              >
                {'Pens\u00E9 que '}
                <strong>{'a alguien m\u00E1s'}</strong>
                {' podr\u00EDa interesarle y termin\u00E9 montando un negocio alrededor.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.8s' }}
              >
                {'Ahora, en ese buscar que se convirti\u00F3 en '}
                <span className="italic">business</span>
                {', me dedico a leer, escuchar, sacar ideas, mezclarlas con las m\u00EDas, y contarlas en un email diario.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.85s' }}
              >
                {'S\u00ED, diario, '}<span className="font-bold">de lunes a domingo</span>{', de enero a diciembre. Agosto incluido.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '0.95s' }}
              >
                {'Pero eso es mucho, \u00BFno?'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '1s' }}
              >
                {'Es que yo acostumbro a vivir todos los d\u00EDas. Y me imagino que t\u00FA tambi\u00E9n.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '1.1s' }}
              >
                {'Si quieres saber si merece la pena (o si esto es una profunda gilipollez) '}
                <strong>{'puedes leer gratis un tiempo'}</strong>
                {'.'}
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors ch2-stagger"
                style={{ animationDelay: '1.15s' }}
              >
                No mucho, pero lo suficiente para saber si a mis hijos les espera un futuro muy oscuro, o todo lo contrario.
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors font-bold pt-6 ch2-stagger"
                style={{ animationDelay: '1.25s' }}
              >
                OHHH ME HA VUELTO A PEDIR EL EMAILLL
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 pt-8 ch2-stagger"
                style={{ animationDelay: '1.4s' }}
              >
                <button className="flex-1 px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 text-base font-normal hover:border-neutral-500 dark:hover:border-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]">
                  {'Todav\u00EDa es pronto, podr\u00EDas estar muy loco.'}
                </button>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="relative flex-1 px-8 py-5 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  {'Toma mi email, te hago hueco con los otros treinta y tres.'}
                </button>
              </div>

              <EmailSubscriptionForm isOpen={showForm} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes ch2FadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .ch2-stagger {
            opacity: 0;
            animation: ch2FadeUp 0.7s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }
);

Chapter2Section.displayName = 'Chapter2Section';

export default Chapter2Section;
