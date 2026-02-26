import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import aboutImage from '../../Assests/about_image.png';

interface AboutPageProps {
  onBack: () => void;
}

const checkItems = [
  {
    text: (
      <>
        Madrile{'\u00F1'}o. Y no, no es una casualidad, es una <strong>serie de casualidades</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Padre de tres</strong> ni{'\u00F1'}os peque{'\u00F1'}os que no lo van a tener f{'\u00E1'}cil con un padre como yo.
      </>
    ),
  },
  {
    text: (
      <>
        En plena <strong>crisis de los 40</strong>.
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
        Me gustan los <strong>animales</strong>. Tengo un perro y un gato. Pero me gustan m{'\u00E1'}s los perros. Y tambi{'\u00E9'}n me gustan m{'\u00E1'}s las personas que prefieren los perros.
      </>
    ),
    delay: '0.85s',
  },
  {
    text: (
      <>
        <strong>Fl{'\u00E1'}cido</strong>. Estoy fl{'\u00E1'}cido. Pero eso es culpa de mis hijos. Bueno, y de un metabolismo que ha cambiado de opini{'\u00F3'}n.
      </>
    ),
    delay: '0.95s',
  },
  {
    text: (
      <>
        Creo firmemente que <strong>es m{'\u00E1'}s jodido ser feliz</strong> de lo que nos han contado.
      </>
    ),
    delay: '1.05s',
  },
];

export default function AboutPage({ onBack }: AboutPageProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[1.125rem] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 lg:mb-12 about-stagger"
          style={{ animationDelay: '0s' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="space-y-6">
            <p
              className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors about-stagger"
              style={{ animationDelay: '0.05s' }}
            >
              Como esto es online y mientras t{'\u00FA'} est{'\u00E1'}s leyendo yo puedo estar en cualquier sitio, incluso muerto, <strong>nos vamos a ahorrar los dos besos.</strong>
            </p>

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
            {checkItems.map((item, i) => (
              <li
                key={i}
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors pl-6 border-l-2 border-neutral-300 dark:border-neutral-700 about-stagger"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                {item.text}
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
                className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors pl-6 border-l-2 border-neutral-300 dark:border-neutral-700 about-stagger"
                style={{ animationDelay: item.delay }}
              >
                {item.text}
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-14">
            <p
              className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors about-stagger"
              style={{ animationDelay: '1.15s' }}
            >
              Otra cosa importante, valoro mi tiempo por encima de todo, y prometo no hacerte perder el tuyo.
            </p>

            <p
              className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors about-stagger"
              style={{ animationDelay: '1.25s' }}
            >
              Ojo, que <strong>igual ya te he ca{'\u00ED'}do bien y me quieres dejar tu email</strong>. D{'\u00E9'}jame pon{'\u00E9'}rtelo f{'\u00E1'}cil:
            </p>

            <div
              className="pt-4 space-y-4 about-stagger"
              style={{ animationDelay: '1.35s' }}
            >
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full px-8 py-5 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Toma mi email, te hago otro hueco
              </button>

              <EmailSubscriptionForm isOpen={showForm} />
            </div>

            <p
              className="text-[1.5rem] lg:text-[1.75rem] text-neutral-800 dark:text-white font-normal transition-colors pt-8 about-stagger"
              style={{ animationDelay: '1.45s' }}
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
