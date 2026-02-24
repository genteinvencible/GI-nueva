import { forwardRef } from 'react';

interface ExploreOptionsSectionProps {
  visible: boolean;
}

const ExploreOptionsSection = forwardRef<HTMLDivElement, ExploreOptionsSectionProps>(
  ({ visible }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        className="bg-transparent relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <p
              className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mb-10 lg:mb-14 explore-stagger"
              style={{ animationDelay: '0s' }}
            >
              Me gusta tu actitud.
            </p>

            <div className="space-y-5 lg:space-y-6 mb-14 lg:mb-20">
              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.1s' }}
              >
                Para descubrir si este es un lugar terrible para tu email, o muy bueno, ahora puedes:
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.2s' }}
              >
                Leer el <strong>ABOUT</strong> (que es yo intentando convencerte de que me des tu email, mientras te cuento algunas chorradas de mí).
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.3s' }}
              >
                También puedes leer las <strong>FAQs</strong>, que es lo mismo, pero con algunas preguntas que podrías estar no haciéndote.
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.4s' }}
              >
                O, ya menos personal, puedes leer cómo fue mi <strong>boda "libre de sobres"</strong> y por qué, 6 años después, sigo ganando dinero con ella. (Sí, fue una boda rara, como los emails).
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 explore-stagger"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#about"
                className="group flex flex-col items-start p-8 lg:p-10 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-800 dark:text-white mb-3 transition-colors">
                  About
                </h3>
                <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                  Algunas chorradas sobre mí mientras intento convencerte
                </p>
              </a>

              <a
                href="#faq"
                className="group flex flex-col items-start p-8 lg:p-10 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-800 dark:text-white mb-3 transition-colors">
                  Preguntas frecuentes y no tan frecuentes
                </h3>
                <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                  Preguntas que podrías estar no haciéndote
                </p>
              </a>

              <a
                href="#boda"
                className="group flex flex-col items-start p-8 lg:p-10 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-800 dark:text-white mb-3 transition-colors">
                  Lo de la boda
                </h3>
                <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                  Una boda libre de sobres que sigue generando ingresos
                </p>
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes exploreFadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .explore-stagger {
            opacity: 0;
            animation: exploreFadeUp 0.7s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }
);

ExploreOptionsSection.displayName = 'ExploreOptionsSection';

export default ExploreOptionsSection;
