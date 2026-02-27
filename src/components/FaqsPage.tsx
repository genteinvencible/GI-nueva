import { useState } from 'react';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import RevealBlock from './RevealBlock';
import FaqsHero from './FaqsHero';

interface FaqsPageProps {
  onBack: () => void;
}

export default function FaqsPage({ onBack }: FaqsPageProps) {
  void onBack;
  const [showPrincipe, setShowPrincipe] = useState(false);
  const [showMequetrefeModal, setShowMequetrefeModal] = useState(false);
  const [showDirectSubscribe, setShowDirectSubscribe] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-300">
      <FaqsHero />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="max-w-3xl space-y-16">

          <RevealBlock className="space-y-5" delay={0.15}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              ¿Esto es un curso?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              ¿Me ves cara de querer enseñarte algo?
            </p>
            <div className="my-6">
              <img
                src="/Assests/alvaro_dimitri_baile_low.png"
                alt="Alvaro bailando con Dimitri"
                className="rounded-lg shadow-md max-w-full md:max-w-md"
              />
            </div>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors font-bold">
              Ahora en serio:
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              En algún momento estos emails sí tuvieron cierta intención formativa, pero hace bastante que no.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              ¿Por qué?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pues porque el Internet de 2015, cuando yo empecé en estos mundillos, era muy diferente.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              2016-2026 fue la época dorada de los cursos online, pero ahora la cosa ha cambiado.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              La explicación es interesante, pero no me cabe aquí. Si quieres leerla está en el tercer correo (de los diecisiete) que recibirás si... bueno, ya sabes, lo de tu email.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Se titula <strong className="font-bold text-neutral-800 dark:text-white">Hablemos del Internet de 2036</strong>.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Ahí verás la jugada explicada al completo. Y verás cómo la IA ha influido en todo esto (spoiler: mucho).
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              Ah que tus emails son de IA.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              ¡Estupenda idea! 🚀 Escribir de Inteligencia Artificial es una gran decisión, ¿quieres te explique las razones objetivas y estratégicas?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Perdón, que se me coló chatgpt.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Mis emails no son de IA, ni mucho menos, pero sí que leerás varios con mis extensas andanzas en el tema.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Otro spoiler: para que te den ganas, en otro de los emails verás las cifras de un negocio de IA en el que estoy metido.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              ¿De qué temas escribes?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              El futuro no lo sé, así que solo te puedo decir de qué he escrito los últimos 5 años.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Con diferente acierto, pero he escrito sobre Persuasión, Muerte, Dios, Creatividad, Negocios en Internet...
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              También (mucho) de Modelos Mentales, psicología evolutiva e incertidumbre.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Sí, incertidumbre.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Por eso, sobre qué voy a escribir mañana solo lo sabe Dios.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Bueno, no, Dios tampoco.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              O sí.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              Si te doy mi email, ¿me vas a estafar?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Solo hay dos formas de saberlo.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Una es dándole a este botón.
            </p>
            <button
              onClick={() => setShowPrincipe(!showPrincipe)}
              className="px-6 py-3 bg-[#2d6a4f] text-white text-base font-medium rounded hover:bg-[#245a42] dark:bg-[#52b788] dark:text-neutral-900 dark:hover:bg-[#6ec99b] transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              {showPrincipe ? 'Ocultar' : 'Pulsa aquí'}
            </button>
            {showPrincipe && (
              <div className="my-6 animate-fade-in">
                <img
                  src="/Assests/alvaro_principe_nigeriano_low.png"
                  alt="Alvaro principe nigeriano"
                  className="rounded-lg shadow-md max-w-full md:max-w-md"
                />
              </div>
            )}
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Y la otra ya sabes cuál.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              El nivel ya lo conocías.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              No me fío, quiero ver tu currículum.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              ¿Esto todavía existe?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pensé que mostrarla era la única forma de demostrar valía.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pero bueno, ya que preguntas:
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Estudié ADE, no me digas porqué.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Hice las prácticas en un banco y –tampoco me digas porqué– me quedé a trabajar allí.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Luego llegó lo que llamaron crisis de 2008 y me salvó.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Me puse a vender los pisos que nadie quería. Y vendí muchos.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Luego abrí un bar de copas. Y bebí muchas.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Buenos tiempos.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              La vida volvió con otro intento de sentarme en una oficina, pero duró poco.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Me fui a Madrid, me hice profesor de pádel, y de alemán, y de lo que fuera con tal de no volver a calentar mi comida en un microondas compartido.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              A la vez, empecé a montar webs de afiliación, genteinvecible (que era un blog) y otros negocios raros.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Me fue bien.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Dejé las oficinas, las clases de todo, Madrid, y desde 2018 trabajo en mi casa, o donde puedo.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Por el camino, he montado una marca de ropa, un saas de SEO local, un par de podcast a los que les fue moderadamente bien y me he medio especializado en monetización de audiencias.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              ¿En quéee?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pues en convertir audiencia en producto. O atención en dinero.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              He tenido muchos socios, solo me he peleado con uno, y ahora (2026) vivo bastante tranquilo a las afueras de Oviedo, escribo mucho, de la vida, y hay gente que paga por leer. Lo que me hace pensar que les gusta.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              ¿Me vas a cambiar la vida?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              No, la vida hay que traerla cambiada de casa.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              ¿Qué hay después de los 17 emails gratis?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Hay una pasarela de pago. De Stripe, en concreto.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Para leer los días 18 y 19 (y el 20 también) hay que sacar la tarjeta.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Me atrevo a decir que, si has llegado hasta aquí, casi seguro la vas a sacar feliz. Pero bueno, no nos chupemos las pollas todavía.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Quizá soy un mequetrefe y todavía no lo sabes.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Solo hay una forma de averiguarlo, dame una E, dame una M, dame una A, dame una I...
            </p>
            <div className="pt-4">
              <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
            </div>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              ¿Tienes testimonios?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Sí, y muchos, pero ¿sabes qué pasa? que con los testimonios ha pasado lo mismo que con los cursos. Tuvieron su prime a la vez que Messi y Cristiano, pero ya han quedado para ligas menores.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Que yo te ponga una foto y una frase de alguien que está feliz de pagarme por leer, tiene un problema: que esa persona no es tú.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic">
              ¿Me puedo suscribir a los emails de pago directamente?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              No.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Bueno, sí, porque los 17 emails "gratis" son como los de pago, pero sin meter la tarjeta.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Para hacerlo ahora:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowDirectSubscribe(!showDirectSubscribe)}
                className="px-6 py-3 bg-[#2d6a4f] text-white text-base font-medium rounded hover:bg-[#245a42] dark:bg-[#52b788] dark:text-neutral-900 dark:hover:bg-[#6ec99b] transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                Toma mi email
              </button>
              <button
                onClick={() => setShowMequetrefeModal(true)}
                className="px-6 py-3 bg-neutral-200 text-neutral-800 text-base font-medium rounded hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                Eres un mequetrefe
              </button>
            </div>
            {showDirectSubscribe && (
              <div className="pt-4 animate-fade-in">
                <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
              </div>
            )}
          </RevealBlock>

        </div>
      </div>

      {showMequetrefeModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowMequetrefeModal(false)}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-neutral-200 dark:border-neutral-700 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[1.2rem] lg:text-[1.3rem] text-neutral-800 dark:text-white mb-6 leading-[1.5]">
              Para ser un gilipollas, pero con tu email, aquí.
            </p>
            <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
            <button
              onClick={() => setShowMequetrefeModal(false)}
              className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
