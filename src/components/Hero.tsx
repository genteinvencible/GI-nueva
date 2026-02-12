import { useState } from 'react';
import alvaroImageNormal from '../../Assests/alvaro_meme_barra_fotoperiodico_optimizada.webp';
import alvaroImageLooking from '../../Assests/alvaro_meme_barra_fotoperiodico_optimizada_mirando_a_camara.webp';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-transparent relative overflow-hidden pb-4 lg:pb-8 pt-8 lg:pt-32 transition-colors duration-300">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-20 items-start">

          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-[2.3rem] sm:text-[3.2rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] font-bold text-neutral-900 dark:text-white leading-[1.1] sm:leading-[0.95] lg:leading-[0.95] tracking-[-0.03em] transition-colors">
                Escribo emails y hay gente que paga por leerlos.
              </h1>

              <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] text-neutral-600 dark:text-white/70 lg:max-w-md font-normal transition-colors">
                A ver, que la gente paga por cualquier cosa, tampoco te sorprendas.
              </p>
            </div>


          </div>

          <div className="animate-fade-in-delayed lg:pl-8 lg:pt-4 flex flex-col items-center w-full">
            <div className="w-[75%] lg:w-[95%]">
              <div className="relative">
                <img
                  src={alvaroImageNormal}
                  alt="Álvaro Barra"
                  className="w-full h-auto object-cover shadow-md dark:shadow-black/40 transition-opacity duration-[1400ms]"
                  style={{
                    filter: 'brightness(0.92) contrast(1.08)',
                    opacity: isHovering ? 0 : 1
                  }}
                />
                <img
                  src={alvaroImageLooking}
                  alt="Álvaro Barra"
                  className="absolute top-0 left-0 w-full h-auto object-cover shadow-md dark:shadow-black/40 transition-opacity duration-[1400ms]"
                  style={{
                    filter: 'brightness(0.92) contrast(1.08)',
                    opacity: isHovering ? 1 : 0
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
              <p className="mt-2 mb-0 text-sm text-neutral-600 dark:text-white/60 italic text-center lg:text-left transition-colors -mx-4 lg:mx-0">
                Esto podría llamarse "Desde la barra del bar", pero entonces no me pagaría nadie. Digo yo.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delayed {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
}
