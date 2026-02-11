export interface BannerMessage {
  id: string;
  text: string;
  type: 'static' | 'time' | 'city' | 'seconds';
  avatar?: string;
}

export const bannerMessages: BannerMessage[] = [
  {
    id: 'msg1',
    text: 'Alguien en Guadalajara NO se ha suscrito hace {MINUTES} minutos.',
    type: 'time',
  },
  {
    id: 'msg2',
    text: 'Este otro inútil se ha ido sin dejar su email hace {MINUTES} minutos.',
    type: 'time',
  },
  {
    id: 'msg3',
    text: 'Otro cobarde cerró esta página sin meter su email. Sigue así, llegarás cerca.',
    type: 'static',
  },
  {
    id: 'msg4',
    text: '12 personas están viendo esto ahora mismo, y 5 no se han suscrito, ¿cuántas? CINCO. Pues por el c...',
    type: 'static',
  },
  {
    id: 'msg5',
    text: '3847 personas han leído esto y se han ido, así les irá.',
    type: 'static',
  },
  {
    id: 'msg6',
    text: 'Un malnacido de Ronda (Málaga) ha vuelto a Instagram sin suscribirse. Un saludo.',
    type: 'static',
  },
  {
    id: 'msg7',
    text: 'Alguien cerca de ti ha huido hace {SECONDS} segundos, pero tú ni caso.',
    type: 'seconds',
  },
  {
    id: 'msg8',
    text: 'Si fuera joyero, te regalaría un joya. Pero como soy pollero...',
    type: 'static',
  },
  {
    id: 'msg9',
    text: 'Si no soy Manuel Bartual, ¿por qué tengo este hilazo?.',
    type: 'static',
  },
  {
    id: 'msg10',
    text: 'Alguien cerca de tu casa ha instalado paneles solares, y no se ha suscrito. Muy mal.',
    type: 'static',
  },
  {
    id: 'msg11',
    text: '1 de 4 personas entienden la foto de arriba.',
    type: 'static',
  },
  {
    id: 'msg12',
    text: '7 de cada 19 personas dejan su apreciado email. Y a 12 de ellas les deseo lo peor.',
    type: 'static',
  },
  {
    id: 'msg13',
    text: 'Un abrazafarolas, un peregrino, acaba de salir de esta página, sin dejar su email. Lo veo muy desmejorado.',
    type: 'static',
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
