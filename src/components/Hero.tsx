import alvaroImage from '../../Assests/alvaro_meme_barra_fotoperiodico.png';

export default function Hero() {
  return (
    <div className="bg-[#fdfcfb] dark:bg-[#1a1816] relative overflow-hidden pb-12 lg:pb-24 pt-16 lg:pt-20 transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-15 mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.08]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-[2.98851rem] sm:text-[3.811875rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] font-bold text-neutral-900 dark:text-white leading-[0.85] tracking-[-0.03em] transition-colors">
                Escribo emails y hay gente que{' '}
                <span className="relative">
                  <span className="relative z-10">paga</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-neutral-900/10 dark:bg-white/15 -rotate-1 transition-colors"></span>
                </span>{' '}
                por leerlos.
              </h1>

              <p className="text-[1.0125544rem] sm:text-[1.157205rem] text-neutral-600 dark:text-white/70 italic max-w-md font-normal transition-colors">
                A ver, que la gente paga por cualquier cosa, tampoco te sorprendas.
              </p>
            </div>


          </div>

          <div className="animate-fade-in-delayed lg:pl-8 lg:pt-4 flex flex-col items-center">
            <img
              src={alvaroImage}
              alt="Álvaro Barra"
              className="w-[85%] h-auto object-cover shadow-md hover:shadow-xl dark:shadow-black/40 dark:hover:shadow-black/60 grayscale hover:grayscale-0 dark:grayscale-0 dark:hover:grayscale transition-all duration-500 hover:scale-[1.01]"
              style={{ filter: 'brightness(0.92) contrast(1.08)' }}
            />
            <p className="mt-4 mb-0 text-sm text-neutral-600 dark:text-white/60 italic text-center lg:text-left max-w-md transition-colors">
              Esto podría llamarse "Desde la barra del bar", pero entonces no me pagaría nadie. Digo yo.
            </p>
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
