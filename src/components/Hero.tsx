import alvaroImage from '../../Assests/alvaro_meme_barra_fotoperiodico.png';

export default function Hero() {
  return (
    <div className="bg-[#fdfcfb] relative overflow-hidden pb-12 lg:pb-24 pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-15 mix-blend-multiply"
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
              <h1 className="text-6xl md:text-[7rem] font-bold leading-[0.95] tracking-[-0.02em] text-black">
                Escribo emails y <br />
                hay gente que <br />
                <span className="bg-black text-white px-3 py-1 italic inline-block mt-2">
                  paga por leerlos.
                </span>
              </h1>

              <p className="text-[1.0125544rem] sm:text-[1.157205rem] text-neutral-600 italic max-w-md font-normal">
                A ver, que la gente paga por cualquier cosa, tampoco te sorprendas.
              </p>
            </div>


          </div>

          <div className="animate-fade-in-delayed lg:pl-8 lg:pt-4 flex flex-col items-center">
            <img
              src={alvaroImage}
              alt="Álvaro Barra"
              className="w-[85%] h-auto object-cover shadow-md hover:shadow-xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.01]"
              style={{ filter: 'brightness(0.92) contrast(1.08)' }}
            />
            <p className="mt-4 mb-0 text-sm text-neutral-600 italic text-center lg:text-left max-w-md">
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
