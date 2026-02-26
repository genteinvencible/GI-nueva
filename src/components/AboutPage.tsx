import EmailSubscriptionForm from './EmailSubscriptionForm';
import aboutImage from '../../Assests/about_image.png';

interface AboutPageProps {
  onBack: () => void;
}

const checkItems1 = [
  {
    text: (
      <>
        He nacido y vivo en Asturias, pero no me sale estar orgulloso de las casualidades.
      </>
    ),
  },
  {
    text: (
      <>
        Tengo 42 a{'\u00F1'}os, pero a ratos hago el monguer igual que con 17. Y a ratos no.
      </>
    ),
  },
];

const middleLines = [
  { text: 'A ratos s\u00ED.', delay: '0.65s' },
  { text: 'A ratos no.', delay: '0.7s' },
  { text: 'Y eso era s\u00ED.', delay: '0.75s' },
];

const checkItems2 = [
  {
    text: (
      <>
        Soy padre de tres ni{'\u00F1'}os y eso ha afectado bastante a mi vida. Dir{'\u00ED'}a que para bien, pero me espero a la adolescencia.
      </>
    ),
    delay: '0.85s',
  },
  {
    text: (
      <>
        Antes meditaba mucho.
      </>
    ),
    delay: '0.9s',
  },
  {
    text: (
      <>
        Luego menos.
      </>
    ),
    delay: '0.95s',
  },
  {
    text: (
      <>
        Pensaba que la crisis de los 40 era un mito, hasta que vi a gente de esta edad teniendo esta edad.
      </>
    ),
    delay: '1.0s',
  },
];

const middleLines2 = [
  { text: 'Y volv\u00ED a meditar.', delay: '1.05s' },
];

const checkItems3 = [
  {
    text: (
      <>
        Soy eneatipo 3, creo.
      </>
    ),
    delay: '1.1s',
  },
  {
    text: (
      <>
        Uso el bid{'\u00E9'}.
      </>
    ),
    delay: '1.15s',
  },
  {
    text: (
      <>
        Durante siete a{'\u00F1'}os de mi vida no me com{'\u00ED'} animales. Luego volv{'\u00ED'} a hacerlo. Pero no podr{'\u00ED'}a defender ninguna de las dos.
      </>
    ),
    delay: '1.2s',
  },
  {
    text: (
      <>
        Estoy bastante convencido de que fl{'\u00E1'}cido es m{'\u00E1'}s jodido ser feliz.
      </>
    ),
    delay: '1.25s',
  },
  {
    text: (
      <>
        Soy cintur{'\u00F3'}n blanco de la vida, y de jiu-jitsu, pero con dos grados.
      </>
    ),
    delay: '1.3s',
  },
  {
    text: (
      <>
        La cantidad de temas sobre los que no s{'\u00E9'} nada ridiculiza a los pocos sobre los que s{'\u00ED'} s{'\u00E9'} algo.
      </>
    ),
    delay: '1.35s',
  },
];

export default function AboutPage({ onBack }: AboutPageProps) {
  void onBack;

  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="mb-20 lg:mb-28 about-stagger" style={{ animationDelay: '0.05s' }}>
          <p className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors max-w-4xl">
            Como esto es online y mientras t{'\u00FA'} est{'\u00E1'}s leyendo yo puedo estar en cualquier sitio, incluso muerto, nos vamos a ahorrar los dos besos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="space-y-6">
            <p
              className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors about-stagger"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="lead-in-text">Mi nombre es {'\u00C1'}lvaro.</span>
            </p>

            <p
              className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors about-stagger"
              style={{ animationDelay: '0.25s' }}
            >
              Ey {'\u{1F44B}'}
            </p>
          </div>

          <div className="about-stagger flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="w-[70%] sm:w-[55%] lg:w-[85%] max-w-md">
              <img
                src={aboutImage}
                alt={'\u00C1lvaro'}
                className="w-full h-auto object-cover shadow-lg dark:shadow-black/50"
                style={{ filter: 'brightness(0.92) contrast(1.08)' }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl">
          <ul className="space-y-4">
            {checkItems1.map((item, i) => (
              <li
                key={i}
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors pl-0 about-stagger flex items-baseline gap-3"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                <span className="text-neutral-400 dark:text-neutral-500 select-none shrink-0">*</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3 py-8 pl-2">
            {middleLines.map((line, i) => (
              <p
                key={i}
                className="text-[1.125rem] text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors about-stagger"
                style={{ animationDelay: line.delay }}
              >
                {line.text}
              </p>
            ))}
          </div>

          <ul className="space-y-4">
            {checkItems2.map((item, i) => (
              <li
                key={i}
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors pl-0 about-stagger flex items-baseline gap-3"
                style={{ animationDelay: item.delay }}
              >
                <span className="text-neutral-400 dark:text-neutral-500 select-none shrink-0">*</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3 py-8 pl-2">
            {middleLines2.map((line, i) => (
              <p
                key={i}
                className="text-[1.125rem] text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors about-stagger"
                style={{ animationDelay: line.delay }}
              >
                {line.text}
              </p>
            ))}
          </div>

          <ul className="space-y-4">
            {checkItems3.map((item, i) => (
              <li
                key={i}
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors pl-0 about-stagger flex items-baseline gap-3"
                style={{ animationDelay: item.delay }}
              >
                <span className="text-neutral-400 dark:text-neutral-500 select-none shrink-0">*</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-14">
            <p
              className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors about-stagger"
              style={{ animationDelay: '1.45s' }}
            >
              Otra cosa importante, valoro mi tiempo por encima de todo, y prometo no hacerte perder el tuyo.
            </p>

            <p
              className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors about-stagger"
              style={{ animationDelay: '1.55s' }}
            >
              Ojo, que <strong>igual ya te he ca{'\u00ED'}do bien y me quieres dejar tu email</strong>. D{'\u00E9'}jame pon{'\u00E9'}rtelo f{'\u00E1'}cil:
            </p>

            <div
              className="pt-4 about-stagger"
              style={{ animationDelay: '1.65s' }}
            >
              <EmailSubscriptionForm isOpen={true} />
            </div>

            <p
              className="text-[1.5rem] lg:text-[1.75rem] text-neutral-800 dark:text-white font-normal transition-colors pt-8 about-stagger"
              style={{ animationDelay: '1.75s' }}
            >
              Y lo m{'\u00E1'}s importante:
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .about-stagger {
          opacity: 0;
          animation: aboutFadeUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
