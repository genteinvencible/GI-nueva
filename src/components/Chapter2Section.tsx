import { forwardRef, useState } from 'react';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import RevealBlock from './RevealBlock';

interface Chapter2SectionProps {
  visible: boolean;
  onExploreClick: () => void;
}

const Chapter2Section = forwardRef<HTMLDivElement, Chapter2SectionProps>(
  ({ visible, onExploreClick }, ref) => {
    const [showForm, setShowForm] = useState(false);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className="bg-transparent relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <RevealBlock className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-6 lg:pb-10 transition-colors">
            * * *
          </RevealBlock>

          <div className="max-w-4xl mt-0 pt-0">
            <RevealBlock
              as="p"
              className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors mb-8 lg:mb-12"
              delay={0.1}
            >
              {'Cap\u00EDtulo 2 — tu dinero'}
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mb-10 lg:mb-14"
              delay={0.2}
            >
              <span className="lead-in-text">Me parece justo,</span>{' '}
              {'yo tampoco entregar\u00EDa mi email otra vez esta semana.'}
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.25rem] lg:text-[1.4rem] text-neutral-800 dark:text-white leading-snug transition-colors mb-10 lg:mb-14"
              delay={0.3}
            >
              {'Te cuento qu\u00E9 es esto.'}
            </RevealBlock>

            <div className="space-y-5 lg:space-y-6">
              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.1}
              >
                {'Una vez le\u00ED a Charlie Munger (que era un se\u00F1or muy listo) que '}
                <strong>{'ochenta modelos mentales'}</strong>
                {' son suficientes para que te vaya muy bien en la vida.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.15}
              >
                {'\u00BFY qu\u00E9 es un modelo mental?'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.2}
              >
                {'Pues una idea de '}
                <strong>{'c\u00F3mo funciona el mundo'}</strong>
                {', una abstracci\u00F3n de la realidad que te permite entenderla.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.25}
              >
                {'Lo que pens\u00E9 fue que ser\u00EDa '}
                <strong>{'un gran regalo para mis hijos'}</strong>
                {' cuando cumplieran los 18.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.3}
              >
                {'Ni coche, ni carnet, ni un Patek Philipe. Imprimirles los 80 modelos, darles cero euros, y decirles:'}
              </RevealBlock>

              <RevealBlock
                as="blockquote"
                className="border-l-2 border-neutral-300 dark:border-neutral-600 pl-6 py-1"
                delay={0.35}
              >
                <p className="text-[1.125rem] text-neutral-700 dark:text-neutral-300 leading-relaxed italic transition-colors">
                  {'Chavales, yo tampoco s\u00E9 vivir, estoy improvisando, pero hasta aqu\u00ED mis avances.'}
                </p>
                <p className="text-[1.125rem] text-neutral-700 dark:text-neutral-300 leading-relaxed italic transition-colors mt-3">
                  {'(Y h\u00E1ganse hombres).'}
                </p>
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.1}
              >
                {'Pens\u00E9 que '}
                <strong>{'a alguien m\u00E1s podr\u00EDa interesarle'}</strong>
                {' y termin\u00E9 montando un negocio alrededor.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.15}
              >
                {'Ahora, en ese buscar que se convirti\u00F3 en '}
                <span className="italic">business</span>
                {', me dedico a leer, escuchar, sacar ideas, mezclarlas con las m\u00EDas, y contarlas en un '}
                <strong>{'email diario'}</strong>
                {'.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.2}
              >
                {'S\u00ED, diario, '}<strong>de lunes a domingo</strong>{', de enero a diciembre. Agosto incluido.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.25}
              >
                {'Pero eso es mucho, \u00BFno?'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.3}
              >
                {'Es que yo acostumbro a vivir todos los d\u00EDas. Y me imagino que t\u00FA tambi\u00E9n.'}
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.35}
              >
                {'Si quieres saber si merece la pena (o si esto es una profunda gilipollez) '}
                <strong>{'puedes leer gratis un tiempo.'}</strong>
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.4}
              >
                No mucho, pero lo suficiente para saber si a mis hijos les espera un futuro muy oscuro, o todo lo contrario.
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors font-bold pt-6"
                delay={0.45}
              >
                OHHH ME HA VUELTO A PEDIR EL EMAILLL
              </RevealBlock>

              <RevealBlock className="pt-8 space-y-4" delay={0.55}>
                <button
                  onClick={onExploreClick}
                  className="w-full px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 text-base font-normal hover:border-neutral-500 dark:hover:border-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  {'Sigue siendo pronto, podr\u00EDas estar muy loco.'}
                </button>

                <button
                  onClick={() => setShowForm(!showForm)}
                  className="relative w-full px-8 py-5 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  {'Toma mi email, te hago otro hueco'}
                </button>

                <EmailSubscriptionForm isOpen={showForm} />
              </RevealBlock>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Chapter2Section.displayName = 'Chapter2Section';

export default Chapter2Section;
