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
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              {'\u00BF'}Esto es un curso?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              {'\u00BF'}Me ves cara de querer ense{'\u00F1'}arte algo?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors font-bold">
              Ahora en serio:
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Desde 2016, de alguna forma, ya ha cambiado bastante {'\u00AB'}lo de los cursos{'\u00BB'} en internet.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              El p{'\u00FA'}blico empieza a darse cuenta de que a partir de cierto punto, lo importante no est{'\u00E1'} en una lecci{'\u00F3'}n m{'\u00E1'}s, en un nuevo marco te{'\u00F3'}rico que antes no conoc{'\u00ED'}a.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              En 2026, y adem{'\u00E1'}s contando con chat-GPT, creo firmemente que nos sobra informaci{'\u00F3'}n y nos falta perspectiva.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Y si eso es cierto, hay que hacer otra cosa.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              La perspectiva que podr{'\u00ED'}amos tener en internet en 2036 es de lo que va mi email (gratuito) <strong className="font-bold text-neutral-800 dark:text-white">{'\u00AB'}Hablemos del Internet de 2036{'\u00BB'}</strong>.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              Ah que tus emails son de IA
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              {'\u00A1'}S{'\u00ED'}, son incre{'\u00ED'}bles! ChatGPT me ha permitido optimizar mis comunicaciones al m{'\u00E1'}ximo {'\u{1F680}'} Si quieres saber m{'\u00E1'}s sobre c{'\u00F3'}mo la IA puede revolucionar tu d{'\u00ED'}a a d{'\u00ED'}a, {'\u00A1'}no dudes en preguntar!
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Perd{'\u00F3'}n, que se me col{'\u00F3'} chatgpt.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Mis emails no son de IA, pero s{'\u00ED'} que escribo sobre ello (y uso IA para mis proyectos). Es l{'\u00F3'}gico, si contar{'\u00E1'}n que en 2025 eso ya ha movido (solo en Estados Unidos) 60.000 millones de d{'\u00F3'}lares, y si eso ya es incre{'\u00ED'}ble, espera porque ser{'\u00E1'} mucho m{'\u00E1'}s.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              {'\u00BF'}De qu{'\u00E9'} temas escribes?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Persuasi{'\u00F3'}n, Muerte, Dios, Creatividad, Negocios en Internet.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Modelos Mentales, psicolog{'\u00ED'}a evolutiva e incertidumbre.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Sobre Dios a{'\u00FA'}n no he escrito tanto, pero Dios es buen tema.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              Si te doy mi email, {'\u00BF'}me vas a estafar?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Solo hay dos formas de saberlo.
            </p>
            <button
              onClick={() => setShowPrincipe(!showPrincipe)}
              className="px-6 py-3 bg-[#2d6a4f] text-white text-base font-medium rounded hover:bg-[#245a42] dark:bg-[#52b788] dark:text-neutral-900 dark:hover:bg-[#6ec99b] transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              {showPrincipe ? 'Ocultar' : 'Pulsa aqu\u00ED para ver una'}
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
              Y la otra ya sabes cu{'\u00E1'}l. El nivel ya lo conoc{'\u00ED'}as.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              No me f{'\u00ED'}o, quiero ver tu curr{'\u00ED'}culum
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Yo tampoco me f{'\u00ED'}o de la gente que se f{'\u00ED'}a de los curr{'\u00ED'}culums, pero ah{'\u00ED'} va:
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Estudi{'\u00E9'} ADE porque me dije {'\u00AB'}administrar empresas, {'\u00BF'}a qui{'\u00E9'}n no le interesa?{'\u00BB'}. Me sali{'\u00F3'} mal la jugada, tras las pr{'\u00E1'}cticas en un banco me vi vendiendo pisos, en 2008.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Luego regentamos un bar de copas, nos fuimos a Madrid, y empec{'\u00E9'} a dar clases de p{'\u00E1'}del y de alem{'\u00E1'}n (lo s{'\u00E9'}).
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pero en paralelo ya estaba con webs de afiliaci{'\u00F3'}n. De hecho viv{'\u00ED'} el despegue de estas cosas que ahora os suenan m{'\u00E1'}s (genteinvecible.com, cosas as{'\u00ED'}). Desde 2018 trabajo en remoto.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Tambi{'\u00E9'}n he montado, junto a mi socio, una marca de ropa (tiene su historia), una saas de SEO local, y hemos invertido en podcasts.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Desde que volv{'\u00ED'} a Oviedo me he especializado en monetizaci{'\u00F3'}n de audiencias.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              A d{'\u00ED'}a de hoy sigo ah{'\u00ED'}, lo que me diferencia es que adem{'\u00E1'}s de eso, escribo y tengo un grupo de gente que paga por leerme.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              {'\u00BF'}Me vas a cambiar la vida?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              No, la vida hay que traerla cambiada de casa.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              {'\u00BF'}Qu{'\u00E9'} hay despu{'\u00E9'}s de los 17 emails gratis?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Un formulario con la pasarela de pago de Stripe.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Vamos, que el d{'\u00ED'}a 18, 19 y 20 (y todos los que vienen) se piden con la tarjeta en la mano.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pero no nos chupemos las pollas todav{'\u00ED'}a.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Dame una E, dame una M, dame una A, dame una I, dame una L:
            </p>
            <div className="pt-4">
              <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
            </div>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              {'\u00BF'}Tienes testimonios?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              El testimonio ha muerto, como los cursos.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Yo puedo preguntarle a mis suscriptores (algunos me leen desde 2019, ya te puedes imaginar por qu{'\u00E9'}) y ellos me dir{'\u00E1'}n que s{'\u00ED'}, que claro, que por supuesto.
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pero esa persona no eres t{'\u00FA'}.
            </p>
          </RevealBlock>

          <RevealBlock className="space-y-5" delay={0.1}>
            <p className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors">
              {'\u00BF'}Me puedo suscribir a los emails de pago directamente?
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              No. Bueno, s{'\u00ED'}...
            </p>
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
              Pero los 17 gratis son como los de pago. Si no te gustan los primeros no te van a gustar los segundos, as{'\u00ED'} que...
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
              Para ser un gilipollas, pero con tu email, aqu{'\u00ED'}.
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
