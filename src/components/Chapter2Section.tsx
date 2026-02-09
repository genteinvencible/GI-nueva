import { forwardRef } from 'react';

interface Chapter2SectionProps {
  visible: boolean;
}

const Chapter2Section = forwardRef<HTMLDivElement, Chapter2SectionProps>(
  ({ visible }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        className="bg-transparent relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
          <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-4 lg:pb-8 transition-colors">
            * * *
          </div>

          <div className="space-y-4 max-w-4xl mt-0 pt-0 animate-chapter2-in">
            <p className="text-[0.85rem] tracking-[0.25em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors">
              Cap&iacute;tulo 2
            </p>

            <div className="space-y-6 pt-2">
              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Me parece justo, yo tampoco dar&iacute;a mi email por trig&eacute;simo cuarta vez esta semana.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Te cuento qu&eacute; es esto.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Una vez le&iacute; a Charlie Munger (que era un se&ntilde;or muy listo) que ochenta modelos mentales son suficientes para que te vaya muy bien en la vida. Y me empe&ntilde;&eacute; en encontrarlos.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                &iquest;Y qu&eacute; es un modelo mental?
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Pues una idea de c&oacute;mo funciona el mundo, una abstracci&oacute;n de la realidad que te permite entenderla.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Lo que pens&eacute; fue que ser&iacute;a un gran regalo para mis hijos cuando cumplieran los 18.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Ni coche, ni carnet, ni un Patek Philippe. Imprimirles los 80 modelos, darles cero euros, y decirles:
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors italic">
                Chavales, yo tampoco s&eacute; vivir, estoy improvisando, pero hasta aqu&iacute; mis avances.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors italic">
                (Y h&aacute;ganse hombres).
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Pens&eacute; que a alguien m&aacute;s podr&iacute;a interesarle la b&uacute;squeda y termin&eacute; montando un negocio alrededor.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Ahora, en ese buscar que se convirti&oacute; en <span className="italic">business</span>, me dedico a leer, escuchar, sacar ideas, mezclarlas con las m&iacute;as, y contarlas en un email diario.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                S&iacute;, diario, de lunes a domingo, de enero a diciembre. Agosto incluido.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Pero eso es mucho, &iquest;no?
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Es que yo acostumbro a vivir todos los d&iacute;as. Y me imagino que t&uacute; tambi&eacute;n.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                Si quieres saber si merece la pena (o si esto es una profunda gilipollez) puedes leer gratis un tiempo.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
                No mucho, pero lo suficiente para saber si a mis hijos les espera un futuro muy oscuro, o todo lo contrario.
              </p>

              <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors font-bold">
                OHHH ME HA VUELTO A PEDIR EL EMAILLL
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes chapter2-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-chapter2-in {
            animation: chapter2-in 0.9s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }
);

Chapter2Section.displayName = 'Chapter2Section';

export default Chapter2Section;
