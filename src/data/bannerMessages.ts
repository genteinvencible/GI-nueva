export interface BannerMessage {
  id: string;
  text: string;
  type: 'static' | 'time' | 'city' | 'seconds';
}

export const bannerMessages: BannerMessage[] = [
  {
    id: 'msg1',
    text: 'Hace {MINUTES} minutos, alguien que no eres tú acaba de suscribirse.',
    type: 'time',
  },
  {
    id: 'msg2',
    text: 'Hace {MINUTES} minutos alguien de {CITY} ha dado su email.',
    type: 'time',
  },
  {
    id: 'msg3',
    text: '{CITY} tiene 1 nuevo suscriptor.',
    type: 'city',
  },
  {
    id: 'msg4',
    text: 'Nuevo suscriptor en {CITY} hace {MINUTES} minutos.',
    type: 'time',
  },
  {
    id: 'msg5',
    text: '{SECONDS} segundos hasta que otro se suscriba antes que tú.',
    type: 'seconds',
  },
  {
    id: 'msg6',
    text: '17 días gratis, cero euros. {SECONDS} segundos para decidir.',
    type: 'seconds',
  },
  {
    id: 'msg7',
    text: 'Otra persona de {CITY} acaba de empezar a probar gratis.',
    type: 'city',
  },
  {
    id: 'msg8',
    text: 'Nuevos suscriptores en {CITY}.',
    type: 'city',
  },
  {
    id: 'msg9',
    text: 'Tu email a cambio de 17 días para decidir si esto es una gilipollez.',
    type: 'static',
  },
  {
    id: 'msg10',
    text: 'Alguien en {CITY} ha dado el paso hace {MINUTES} minutos.',
    type: 'time',
  },
  {
    id: 'msg11',
    text: 'Nuevo suscriptor hace {MINUTES} minutos. No te quedes atrás.',
    type: 'time',
  },
  {
    id: 'msg12',
    text: '17 días. Cero euros. Decide en {SECONDS} segundos.',
    type: 'seconds',
  },
  {
    id: 'msg13',
    text: 'Alguien de {CITY} ya está leyendo el primer email.',
    type: 'city',
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
