export interface BannerMessage {
  id: string;
  text: string;
  type: 'static' | 'time' | 'city' | 'seconds';
  avatar: string;
}

const localAvatars = [
  '/Assests/cara_aleatoria_1.png',
  '/Assests/cara_aleatoria_2.png',
  '/Assests/cara_aleatoria_3.png',
  '/Assests/cara_aleatoria_4.png',
  '/Assests/cara_aleatoria_5.png',
  '/Assests/cara_aleatoria_6.png',
  '/Assests/cara_aleatoria_7.png',
  '/Assests/cara_aleatoria_8.png',
  '/Assests/cara_aleatoria_9.png',
  '/Assests/cara_aleatoria_10.jpg',
  '/Assests/cara_aleatoria_11.png',
  '/Assests/cara_aleatoria_12.png',
  '/Assests/cara_aleatoria_13.png',
];

function getAvatarForMessage(messageIndex: number): string {
  return localAvatars[messageIndex % localAvatars.length];
}

export const bannerMessages: BannerMessage[] = [
  {
    id: 'msg1',
    text: 'Alguien en Guadalajara NO se ha suscrito hace {MINUTES} minutos.',
    type: 'time',
    avatar: getAvatarForMessage(0),
  },
  {
    id: 'msg2',
    text: 'Este otro inútil se ha ido sin dejar su email hace {MINUTES} minutos.',
    type: 'time',
    avatar: getAvatarForMessage(1),
  },
  {
    id: 'msg3',
    text: 'Otro cobarde cerró esta página sin meter su email. Sigue así, llegarás cerca.',
    type: 'static',
    avatar: getAvatarForMessage(2),
  },
  {
    id: 'msg4',
    text: '12 personas están viendo esto ahora mismo, y 5 no se han suscrito, ¿cuántas? CINCO. Pues por el c...',
    type: 'static',
    avatar: getAvatarForMessage(3),
  },
  {
    id: 'msg5',
    text: '3847 personas han leído esto y se han ido, así les irá.',
    type: 'static',
    avatar: getAvatarForMessage(4),
  },
  {
    id: 'msg6',
    text: 'Un malnacido de Ronda (Málaga) ha vuelto a Instagram sin suscribirse. Un saludo.',
    type: 'static',
    avatar: getAvatarForMessage(5),
  },
  {
    id: 'msg7',
    text: 'Alguien cerca de ti ha huido hace {SECONDS} segundos, pero tú ni caso.',
    type: 'seconds',
    avatar: getAvatarForMessage(6),
  },
  {
    id: 'msg8',
    text: 'Si fuera joyero, te regalaría un joya. Pero como soy pollero...',
    type: 'static',
    avatar: getAvatarForMessage(7),
  },
  {
    id: 'msg9',
    text: 'Si no soy Manuel Bartual, ¿por qué tengo este hilazo?.',
    type: 'static',
    avatar: getAvatarForMessage(8),
  },
  {
    id: 'msg10',
    text: 'Alguien cerca de tu casa ha instalado paneles solares, y no se ha suscrito. Muy mal.',
    type: 'static',
    avatar: getAvatarForMessage(9),
  },
  {
    id: 'msg11',
    text: '1 de 4 personas entienden la foto de arriba.',
    type: 'static',
    avatar: getAvatarForMessage(10),
  },
  {
    id: 'msg12',
    text: '7 de cada 19 personas dejan su apreciado email. Y a 12 de ellas les deseo lo peor.',
    type: 'static',
    avatar: getAvatarForMessage(11),
  },
  {
    id: 'msg13',
    text: 'Un abrazafarolas, un peregrino, acaba de salir de esta página, sin dejar su email. Lo veo muy desmejorado.',
    type: 'static',
    avatar: getAvatarForMessage(12),
  },
];

export const spanishCities = [
  'Guadalajara',
  'Ronda',
  'Mieres',
  'Barbate',
  'Ciudad del Cabo',
  'Sao Paulo',
  'Barselona',
  'Bilbao',
  'Zaragoza',
  'Murcia',
  'Matalascañas',
  'Parla',
  'Marte',
  'Guarromán',
  'Taiwan',
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
