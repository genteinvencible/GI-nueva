import { forwardRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import aboutImage from '../../Assests/about_image.png';
import faqsImage from '../../Assests/imagen_faqs.png';
import bodaImage from '../../Assests/imagen_lo_de_la_boda.png';
import CardEmailForm from './CardEmailForm';
import RevealBlock from './RevealBlock';

interface ExploreOptionsSectionProps {
  visible: boolean;
}

const cards = [
  {
    id: 'about',
    href: '#about',
    image: aboutImage,
    title: 'About (o sea, sobre mi)',
    text: 'Veras cuantos anos tengo, cuantos hijos (creo que) tengo, y a que no dedico el tiempo libre.',
    ctaPositive: 'Ir ahora',
    ctaNegative: 'Me da igual',
    hasNegativeAction: true,
  },
  {
    id: 'faq',
    href: '#faq',
    image: faqsImage,
    title: 'Preguntas Frecuentes (o no)',
    text: 'Me vas a cambiar la vida? Cuanto cuesta lo que vendes? Fran Perea el que lo lea?',
    ctaPositive: 'Leo las FAQs',
    ctaNegative: 'No las leo',
    hasNegativeAction: true,
    negativeMessage: 'Entonces, si no hay preguntas, ya puedes meter aqui tu email. Si tienes huevos, claro.',
  },
  {
    id: 'boda',
    href: '#boda',
    image: bodaImage,
    title: 'Lo de la boda sin sobres.',
    text: 'Esto puede ofender a algunas personas. Tu podrias ser de esas. No le des en ese caso.',
    ctaPositive: 'Me interesa',
    ctaNegative: 'Me la suda',
    hasNegativeAction: true,
    negativeMessage: 'Y a mi la tuya, ya sabes por que lo hago. Por tu E-M-A-I-L.',
  },
];

const ExploreOptionsSection = forwardRef<HTMLDivElement, ExploreOptionsSectionProps>(
  ({ visible }, ref) => {
    const [emailModalSource, setEmailModalSource] = useState<string | null>(null);

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
              CAPITULO 3 — BIEN POR TI
            </RevealBlock>
            <RevealBlock
              as="p"
              className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mb-10 lg:mb-14"
              delay={0.2}
            >
              <span className="lead-in-text">Me gusta tu actitud.</span>
            </RevealBlock>

            <div className="space-y-5 lg:space-y-6 mb-14 lg:mb-20">
              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.3}
              >
                Para descubrir si este es un lugar terrible para tu email, o muy bueno, ahora puedes:
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.4}
              >
                Leer el <strong>ABOUT</strong> (que es yo intentando convencerte de que me des tu email, mientras te cuento algunas chorradas de mi).
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.5}
              >
                Tambien puedes leer las <strong>FAQs</strong>, que es lo mismo, pero con algunas preguntas que podrias estar no haciendote.
              </RevealBlock>

              <RevealBlock
                as="p"
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors"
                delay={0.6}
              >
                O, ya menos personal, puedes leer como fue mi <strong>boda "libre de sobres"</strong> y por que, 6 anos despues, sigo ganando dinero con ella. (Si, fue una boda rara, como los emails).
              </RevealBlock>
            </div>
          </div>

          <RevealBlock
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl"
            delay={0.7}
          >
            {cards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className="editorial-card group flex flex-col border border-neutral-300 dark:border-neutral-600 bg-[#faf8f4] dark:bg-[#1a1816] hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-[60%] transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col flex-1 px-5 pt-4 pb-0 lg:px-6 lg:pt-5">
                  <h3 className="text-[1.25rem] lg:text-[1.4rem] font-bold text-neutral-900 dark:text-white leading-[1.15] mb-3 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[0.85rem] lg:text-[0.9rem] text-neutral-600 dark:text-neutral-400 leading-[1.6] flex-1 mb-5 transition-colors" style={{ textAlign: 'justify', textAlignLast: 'left' }}>
                    {card.text}
                  </p>
                </div>

                <div className="border-t border-neutral-300 dark:border-neutral-600 px-5 py-3 lg:px-6 lg:py-3.5 flex items-center justify-between mt-auto">
                  <span className="text-[0.8rem] lg:text-[0.85rem] font-bold italic text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                    {card.ctaPositive}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-800 dark:text-neutral-200 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  {card.hasNegativeAction ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setEmailModalSource(card.id);
                      }}
                      className="text-[0.7rem] lg:text-[0.75rem] text-neutral-400 dark:text-neutral-500 italic hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                    >
                      {card.ctaNegative}
                    </button>
                  ) : (
                    <span className="text-[0.7rem] lg:text-[0.75rem] text-neutral-400 dark:text-neutral-500 italic">
                      {card.ctaNegative}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </RevealBlock>

          <CardEmailForm
            isOpen={emailModalSource !== null}
            onClose={() => setEmailModalSource(null)}
            message={cards.find((c) => c.id === emailModalSource)?.negativeMessage}
          />
        </div>
      </div>
    );
  }
);

ExploreOptionsSection.displayName = 'ExploreOptionsSection';

export default ExploreOptionsSection;
