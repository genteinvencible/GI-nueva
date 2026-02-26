import { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';
import aboutImage from '../../Assests/about_image.png';
import faqsImage from '../../Assests/imagen_faqs.png';
import bodaImage from '../../Assests/imagen_lo_de_la_boda.png';

interface ExploreOptionsSectionProps {
  visible: boolean;
}

const cards = [
  {
    href: '#about',
    image: aboutImage,
    subtitle: 'Capítulo personal',
    title: 'About (o sea, sobre mí)',
    text: 'Verás cuántos años tengo, cuántos hijos (creo que) tengo, y a qué no dedico el tiempo libre.',
    ctaPositive: 'Ir ahora',
    ctaNegative: 'Me da igual',
  },
  {
    href: '#faq',
    image: faqsImage,
    subtitle: 'Respuestas dudosas',
    title: 'Preguntas frecuentes (o no tanto)',
    text: '¿Me vas a cambiar la vida? ¿Cuánto cuesta lo que vendes? ¿Fran Perea el que lo lea? Entre otras menos importantes.',
    ctaPositive: 'Leo las FAQs',
    ctaNegative: 'No las leo',
  },
  {
    href: '#boda',
    image: bodaImage,
    subtitle: 'Historia real',
    title: 'Lo de la boda sin sobres.',
    text: 'Esto puede ofender a algunas personas. Dale si no eres de esas personas.',
    ctaPositive: 'Me interesa',
    ctaNegative: 'Tu boda me la suda',
  },
];

const ExploreOptionsSection = forwardRef<HTMLDivElement, ExploreOptionsSectionProps>(
  ({ visible }, ref) => {
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
              className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors mb-8 lg:mb-12 explore-stagger"
              style={{ animationDelay: '0s' }}
            >
              CAPÍTULO 3 — BIEN POR TI
            </p>
            <p
              className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors mb-10 lg:mb-14 explore-stagger"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="lead-in-text">Me gusta tu actitud.</span>
            </p>

            <div className="space-y-5 lg:space-y-6 mb-14 lg:mb-20">
              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.2s' }}
              >
                Para descubrir si este es un lugar terrible para tu email, o muy bueno, ahora puedes:
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.3s' }}
              >
                Leer el <strong>ABOUT</strong> (que es yo intentando convencerte de que me des tu email, mientras te cuento algunas chorradas de mí).
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.4s' }}
              >
                También puedes leer las <strong>FAQs</strong>, que es lo mismo, pero con algunas preguntas que podrías estar no haciéndote.
              </p>

              <p
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors explore-stagger"
                style={{ animationDelay: '0.5s' }}
              >
                O, ya menos personal, puedes leer cómo fue mi <strong>boda "libre de sobres"</strong> y por qué, 6 años después, sigo ganando dinero con ella. (Sí, fue una boda rara, como los emails).
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 explore-stagger max-w-6xl"
            style={{ animationDelay: '0.6s' }}
          >
            {cards.map((card) => (
              <a
                key={card.href}
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
                  <span className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-400 dark:text-neutral-500 font-bold mb-2">
                    {card.subtitle}
                  </span>

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
                  <span className="text-[0.7rem] lg:text-[0.75rem] text-neutral-400 dark:text-neutral-500 italic">
                    {card.ctaNegative}
                  </span>
                </div>
              </a>
            ))}
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
