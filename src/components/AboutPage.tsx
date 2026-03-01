import { Check } from 'lucide-react';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import RevealBlock from './RevealBlock';

interface AboutPageProps {
  onBack: () => void;
}

const checkItems1 = [
  {
    text: (
      <>
        He nacido y vivo en Asturias, pero no me sale estar orgulloso de las <strong className="font-bold text-neutral-800 dark:text-white">casualidades</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        Tengo 42 a{'\u00F1'}os, pero <strong className="font-bold text-neutral-800 dark:text-white">a ratos hago el monguer</strong> igual que con 17. Y a ratos no.
      </>
    ),
  },
];

const middleLines = [
  { text: 'A ratos s\u00ED.' },
  { text: 'A ratos no.' },
  { text: 'Y eso era s\u00ED.' },
];

const checkItems2 = [
  {
    text: (
      <>
        <strong className="font-bold text-neutral-800 dark:text-white">Soy padre de tres</strong> ni{'\u00F1'}os y eso ha afectado bastante a mi vida. Dir{'\u00ED'}a que para bien, pero me espero a la adolescencia.
      </>
    ),
  },
  {
    text: (
      <>
        Antes meditaba mucho.
      </>
    ),
  },
  {
    text: (
      <>
        Luego menos.
      </>
    ),
  },
  {
    text: (
      <>
        Pensaba que la <strong className="font-bold text-neutral-800 dark:text-white">crisis de los 40</strong> era un mito, hasta que vi a gente de esta edad teniendo esta edad.
      </>
    ),
  },
];

const middleLines2 = [
  { text: 'Y volv\u00ED a meditar.' },
];

const checkItems3 = [
  {
    text: (
      <>
        Soy eneatipo 3, creo.
      </>
    ),
  },
  {
    text: (
      <>
        Uso el bid{'\u00E9'}.
      </>
    ),
  },
  {
    text: (
      <>
        Durante siete a{'\u00F1'}os de mi vida <strong className="font-bold text-neutral-800 dark:text-white">no me com{'\u00ED'} animales</strong>. Luego volv{'\u00ED'} a hacerlo. Pero no podr{'\u00ED'}a defender ninguna de las dos.
      </>
    ),
  },
  {
    text: (
      <>
        Estoy bastante convencido de que <strong className="font-bold text-neutral-800 dark:text-white">fl{'\u00E1'}cido es m{'\u00E1'}s jodido ser feliz.</strong>
      </>
    ),
  },
  {
    text: (
      <>
        Soy cintur{'\u00F3'}n blanco de la vida, y de jiu-jitsu, pero con dos grados.
      </>
    ),
  },
  {
    text: (
      <>
        La cantidad de temas sobre los que no s{'\u00E9'} nada ridiculiza a los pocos sobre los que s{'\u00ED'} s{'\u00E9'} algo.
      </>
    ),
  },
];

function CheckItem({ text, delay = 0 }: { text: React.ReactNode; delay?: number }) {
  return (
    <RevealBlock as="li" className="group flex items-start gap-4" delay={delay}>
      <span className="relative mt-[3px] shrink-0">
        <span className="absolute inset-0 w-6 h-6 rounded-full bg-neutral-800/5 dark:bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
        <Check
          size={20}
          strokeWidth={2.5}
          className="relative text-neutral-800 dark:text-white/90"
        />
      </span>
      <span className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors">
        {text}
      </span>
    </RevealBlock>
  );
}

export default function AboutPage({ onBack }: AboutPageProps) {
  void onBack;

  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-36 pb-20 lg:pb-32">

        <div className="flex justify-center mb-8 lg:hidden">
          <span className="flex items-center gap-3 text-neutral-300 dark:text-neutral-600">
            <span className="w-1 h-1 rounded-full bg-current" />
            <span className="w-1 h-1 rounded-full bg-current" />
            <span className="w-1 h-1 rounded-full bg-current" />
          </span>
        </div>

        <div className="max-w-4xl mb-8 lg:mb-12">
          <RevealBlock
            as="p"
            className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors"
          >
            {'About (o sea, sobre m\u00ED, y un poco sobre ti).'}
          </RevealBlock>
        </div>

        <div className="mb-7 lg:mb-10 space-y-5 max-w-3xl">
          <RevealBlock
            as="p"
            className="text-[1.15rem] lg:text-[1.25rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
          >
            Como esto es online y mientras t{'\u00FA'} est{'\u00E1'}s leyendo yo puedo estar en cualquier sitio, incluso muerto, nos vamos a ahorrar los dos besos.
          </RevealBlock>

          <RevealBlock
            as="p"
            className="text-[1.6rem] lg:text-[1.85rem] text-neutral-800 dark:text-white leading-[1.2] font-normal transition-colors"
            delay={0.1}
          >
            <span className="lead-in-text">Mi nombre es {'\u00C1'}lvaro.</span>
          </RevealBlock>

          <RevealBlock
            as="p"
            className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
            delay={0.15}
          >
            Ey {'\u{1F44B}'}
          </RevealBlock>
        </div>

        <div className="max-w-3xl">
          <div className="relative pl-1">
            <ul className="space-y-5">
              {checkItems1.map((item, i) => (
                <CheckItem
                  key={i}
                  text={item.text}
                  delay={i * 0.08}
                />
              ))}
            </ul>

            {middleLines.map((line, i) => (
              <RevealBlock
                key={i}
                as="li"
                className={`list-none text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors pl-9 mt-5 ${i === middleLines.length - 1 ? 'mb-5' : ''}`}
                delay={i * 0.08}
              >
                {line.text}
              </RevealBlock>
            ))}

            <ul className="space-y-5">
              {checkItems2.map((item, i) => (
                <CheckItem
                  key={i}
                  text={item.text}
                  delay={i * 0.08}
                />
              ))}
            </ul>

            {middleLines2.map((line, i) => (
              <RevealBlock
                key={i}
                as="li"
                className="list-none text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors pl-9 mt-5 mb-5"
                delay={i * 0.08}
              >
                {line.text}
              </RevealBlock>
            ))}

            <ul className="space-y-5">
              {checkItems3.map((item, i) => (
                <CheckItem
                  key={i}
                  text={item.text}
                  delay={i * 0.08}
                />
              ))}
            </ul>
          </div>

          <div className="mt-5 space-y-5">
            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.1}
            >
              Otra cosa importante, valoro mi <strong className="font-bold text-neutral-800 dark:text-white">tiempo por encima de todo</strong>, y prometo no hacerte perder el tuyo.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.15}
            >
              Ojo, que <strong className="font-bold text-neutral-800 dark:text-white">igual ya te he ca{'\u00ED'}do bien y me quieres dejar tu email</strong>. D{'\u00E9'}jame pon{'\u00E9'}rtelo f{'\u00E1'}cil:
            </RevealBlock>

            <RevealBlock className="pt-4" delay={0.2}>
              <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors pt-10"
              delay={0.1}
            >
              Y lo m{'\u00E1'}s importante:
            </RevealBlock>
          </div>

          <div className="mt-8 lg:mt-12 space-y-6">
            <RevealBlock
              as="p"
              className="text-[1.6rem] lg:text-[1.85rem] text-neutral-800 dark:text-white font-normal transition-colors"
              delay={0.1}
            >
              Me gusta escribir para gente inteligente.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.15}
            >
              Por eso <strong className="font-bold text-neutral-800 dark:text-white">no te voy a regalar ning{'\u00FA'}n ebook</strong>, ni a decirte que "detesto el spam tanto como t{'\u00FA'}", porque te podr{'\u00ED'}a estar mintiendo.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.2}
            >
              Tambi{'\u00E9'}n te voy a ahorrar alguna chorrada como la de "pon aqu{'\u00ED'} tu mejor email".
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.25}
            >
              Pon el que quieras, si es que quieres poner uno.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.3}
            >
              Solo te digo que <strong className="font-bold text-neutral-800 dark:text-white">mando muchos emails</strong> contando mis andanzas e, incomprensiblemente, hay gente que paga por leerlos.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.35}
            >
              A algunos hasta les gusta.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.4}
            >
              No te voy a pedir que saques la tarjeta, todav{'\u00ED'}a, pero <strong className="font-bold text-neutral-800 dark:text-white">si quieres saber si de verdad son buenos</strong> puedes leer gratis un tiempo.
            </RevealBlock>

            <RevealBlock
              as="p"
              className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.6] transition-colors"
              delay={0.45}
            >
              Lo que no hay es garant{'\u00ED'}a de que te vaya a cambiar la vida, aqu{'\u00ED'} <strong className="font-bold text-neutral-800 dark:text-white">la vida hay que traerla cambiada de casa.</strong>
            </RevealBlock>

            <RevealBlock className="pt-6" delay={0.5}>
              <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
            </RevealBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
