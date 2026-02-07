import { useState, useRef } from 'react';
import alvaroImage from '../../Assests/alvaro_meme_barra_fotoperiodico.png';

interface HeroProps {
  onUnlock: () => void;
}

export default function Hero({ onUnlock }: HeroProps) {
  const [sectionUnlocked, setSectionUnlocked] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const handleLearnMore = () => {
    setSectionUnlocked(true);
    onUnlock();
    setTimeout(() => {
      secondSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSignup = () => {
    onUnlock();
    // TODO: Implementar lógica de suscripción
    alert('Formulario de suscripción próximamente');
  };

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
              <h1 className="text-[2.98851rem] sm:text-[3.811875rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] font-bold text-neutral-900 dark:text-white leading-[1.1] sm:leading-[0.95] lg:leading-[0.9] tracking-[-0.03em] transition-colors">
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

            <div className="space-y-4 max-w-xl text-neutral-700 dark:text-white/80 text-base sm:text-[1.05rem] leading-relaxed transition-colors">
              <p>
                Mi nombre es Álvaro Sánchez y desde hace cinco años tengo una suscripción de emails de pago.
              </p>

              <div className="pl-4 border-l-2 border-neutral-300 dark:border-white/20 space-y-1">
                <p>—¿Cuántos años?</p>
                <p>—Cinco...</p>
                <p>—Pues por el cu...</p>
              </div>

              <p className="font-medium">
                Ese es el nivel.
              </p>

              <p>
                Yo escribo todos los días y otras personas, que no son yo, pagan para leer.
              </p>

              <p>
                Así que puedes llamarme escritor, o vendedor. O puedes no llamarme nada.
              </p>

              <p>
                Si tienes curiosidad por saber qué lleva a un montón de personas, que no son tú, a pagar por recibir emails, puedes probar gratis durante 17 días.
              </p>

              <p>
                Sí, 17.
              </p>

              <p>
                O 12 más cinco.
              </p>

              <p>
                Solo tienes que entregarme uno de tus bienes más preciados, tu email.
              </p>

              <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-white/50">
                OH ME HA PEDIDO MI EMAIL!!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleSignup}
                className="px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-base rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                Vale, dame tu email
              </button>
              <button
                onClick={handleLearnMore}
                className="px-8 py-3.5 bg-transparent border-2 border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-white/80 font-medium text-base rounded-sm hover:border-neutral-400 dark:hover:border-white/40 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Es pronto
              </button>
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

        {sectionUnlocked && (
          <div
            ref={secondSectionRef}
            className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32 pb-12 lg:pb-24 animate-fade-in"
          >
            <div className="space-y-6 text-neutral-700 dark:text-white/80 text-base sm:text-[1.05rem] leading-relaxed">
              <p>
                Me parece justo, yo tampoco daría mi email por trigésimo cuarta vez esta semana.
              </p>

              <p className="font-medium text-lg">
                Te cuento qué es esto.
              </p>

              <p>
                Una vez leí a Charlie Munger (que era un señor muy listo) que ochenta modelos mentales son suficientes para que te vaya muy bien en la vida. Y me empeñé en encontrarlos.
              </p>

              <p className="italic">
                ¿Y qué es un modelo mental?
              </p>

              <p>
                Pues una idea de cómo funciona el mundo, una abstracción de la realidad que te permite entenderla.
              </p>

              <p>
                Lo que pensé fue que sería un gran regalo para mis hijos cuando cumplieran los 18.
              </p>

              <p>
                Ni coche, ni carnet, ni un Patek Philipe. Imprimirles los 80 modelos, darles cero euros, y decirles:
              </p>

              <div className="pl-6 border-l-2 border-neutral-300 dark:border-white/20 italic">
                <p>Chavales, yo tampoco sé vivir, estoy improvisando, pero hasta aquí mis avances.</p>
                <p className="mt-2">(Y háganse hombres).</p>
              </div>

              <p>
                Pensé que a alguien más podría interesarle la búsqueda y terminé montando un negocio alrededor.
              </p>

              <p>
                Ahora, en ese buscar que se convirtió en business, me dedico a leer, escuchar, sacar ideas, mezclarlas con las mías, y contarlas en un email diario.
              </p>

              <p className="font-medium">
                Sí, diario, de lunes a domingo, de enero a diciembre. Agosto incluido.
              </p>

              <p className="italic">
                Pero eso es mucho, ¿no?
              </p>

              <p>
                Es que yo acostumbro a vivir todos los días. Y me imagino que tú también.
              </p>

              <p>
                Si quieres saber si merece la pena (o si esto es una profunda gilipollez) puedes leer gratis un tiempo.
              </p>

              <p>
                No mucho, pero lo suficiente para saber si a mis hijos les espera un futuro muy oscuro, o todo lo contrario.
              </p>

              <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-white/50 pt-4">
                OHHH ME HA VUELTO A PEDIR EL EMAILLL
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={handleSignup}
                  className="px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-lg rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                >
                  Vale, pruebo gratis 17 días
                </button>
              </div>
            </div>
          </div>
        )}
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
