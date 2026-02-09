import alvaroImage from '../../Assests/alvaro_meme_barra_fotoperiodico.png';

export default function Hero() {
  return (
    <div className="bg-[#fdfcfb] dark:bg-[#1a1816] relative overflow-hidden pb-4 lg:pb-8 pt-6 lg:pt-20 transition-colors duration-300">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-4 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start">

          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-[2.5rem] sm:text-[3.2rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] font-bold text-neutral-900 dark:text-white leading-[1.1] sm:leading-[0.95] lg:leading-[0.9] tracking-[-0.03em] transition-colors">
                Escribo emails y hay gente que paga por leerlos.
              </h1>

              <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] text-neutral-600 dark:text-white/70 font-normal transition-colors">
                A ver, que la gente paga por cualquier cosa, tampoco te sorprendas.
              </p>
            </div>


          </div>

          <div className="animate-fade-in-delayed lg:pl-4 lg:pt-4 flex flex-col items-center w-full">
            <div className="w-[75%] lg:w-[95%]">
              <img
                src={alvaroImage}
                alt="Álvaro Barra"
                className="w-full h-auto object-cover shadow-md hover:shadow-xl dark:shadow-black/40 dark:hover:shadow-black/60 grayscale hover:grayscale-0 dark:grayscale-0 dark:hover:grayscale transition-all duration-500 hover:scale-[1.01]"
                style={{ filter: 'brightness(0.92) contrast(1.08)' }}
              />
              <p className="mt-2 mb-0 text-sm text-neutral-600 dark:text-white/60 italic text-center lg:text-left transition-colors">
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
