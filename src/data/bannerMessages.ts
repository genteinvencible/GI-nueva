export interface BannerMessage {
  id: string;
  text: string;
  type: 'static' | 'time' | 'city' | 'seconds';
}

export const bannerMessages: BannerMessage[] = [
  {
    id: 'msg1',
    text: 'Hace {MINUTES} minutos, alguien que no eres tú acaba de dar su email.',
    type: 'time',
  },
  {
    id: 'msg2',
    text: 'Alguien más en {CITY} acaba de suscribirse. Y tú aquí todavía.',
    type: 'city',
  },
  {
    id: 'msg3',
    text: '{SECONDS} segundos para decidir si te la juegas o no.',
    type: 'seconds',
  },
  {
    id: 'msg4',
    text: 'Tu email a cambio de 17 días para decidir si esto es una gilipollez. Suena justo.',
    type: 'static',
  },
  {
    id: 'msg5',
    text: 'Hace {MINUTES} minutos, un lector nuevo. Tú sigues en la duda.',
    type: 'time',
  },
  {
    id: 'msg6',
    text: 'Nuevo suscriptor desde {CITY}. Tiene 17 días para decidir.',
    type: 'city',
  },
  {
    id: 'msg7',
    text: 'Si te esperas otros {SECONDS} segundos, esto va a seguir aquí igual.',
    type: 'seconds',
  },
  {
    id: 'msg8',
    text: 'Otro de {CITY} acaba de apuntarse. Tú todavía pensando.',
    type: 'city',
  },
  {
    id: 'msg9',
    text: 'Hace {MINUTES} minutos alguien se apuntó sin leer tanto como tú.',
    type: 'time',
  },
  {
    id: 'msg10',
    text: '{SECONDS} segundos de reflexión profunda. O te apuntas, o sigues scrolleando.',
    type: 'seconds',
  },
  {
    id: 'msg11',
    text: 'Ya van {MINUTES} minutos desde el último suscriptor. Pero sin prisa.',
    type: 'time',
  },
  {
    id: 'msg12',
    text: 'Alguien en {CITY} ya tiene el primer email. Tú aún no.',
    type: 'city',
  },
  {
    id: 'msg13',
    text: '17 días de prueba. Cero euros. Cero compromiso. {SECONDS} segundos para decidir.',
    type: 'seconds',
  },
];

export const spanishCities = [
  'Guadalajara',
  'Ronda',
  'Málaga',
  'Barcelona',
  'Valencia',
  'Madrid',
  'Sevilla',
  'Bilbao',
  'Zaragoza',
  'Murcia',
  'Palma',
  'Las Palmas',
  'Alicante',
  'Córdoba',
  'Valladolid',
  'Vigo',
  'Gijón',
  'Granada',
  'Santander',
  'Pamplona',
  'Toledo',
  'Salamanca',
];

export function getRandomCity(): string {
  return spanishCities[Math.floor(Math.random() * spanishCities.length)];
}

export function getRandomMinutes(): number {
  return Math.floor(Math.random() * 120) + 1;
}

export function getRandomSeconds(): number {
  return Math.floor(Math.random() * 81) + 10;
}

export function processMessage(message: BannerMessage): string {
  let processedText = message.text;

  if (message.type === 'time' || message.type === 'seconds' || message.type === 'city') {
    if (processedText.includes('{MINUTES}')) {
      processedText = processedText.replace('{MINUTES}', String(getRandomMinutes()));
    }
    if (processedText.includes('{CITY}')) {
      processedText = processedText.replace('{CITY}', getRandomCity());
    }
    if (processedText.includes('{SECONDS}')) {
      processedText = processedText.replace('{SECONDS}', String(getRandomSeconds()));
    }
  }

  return processedText;
}
