export interface BannerMessage {
  id: string;
  text: string;
  type: 'static' | 'time' | 'city' | 'seconds';
  avatar: string;
}

const avatarStyles = [
  'adventurer',
  'adventurer-neutral',
  'avataaars',
  'big-ears',
  'big-ears-neutral',
  'big-smile',
  'bottts',
  'croodles',
  'croodles-neutral',
  'fun-emoji',
  'lorelei',
  'lorelei-neutral',
  'micah',
  'miniavs',
  'notionists',
  'notionists-neutral',
  'open-peeps',
  'personas',
  'pixel-art',
  'pixel-art-neutral',
];

function getAvatarForMessage(messageId: string): string {
  const styleIndex = messageId.charCodeAt(messageId.length - 1) % avatarStyles.length;
  const style = avatarStyles[styleIndex];
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${messageId}`;
}

export const bannerMessages: BannerMessage[] = [
  {
    id: 'msg1',
    text: 'Alguien en Guadalajara NO se ha suscrito hace {MINUTES} minutos.',
    type: 'time',
    avatar: getAvatarForMessage('msg1'),
  },
  {
    id: 'msg2',
    text: 'Este otro inútil se ha ido sin dejar su email hace {MINUTES} minutos.',
    type: 'time',
    avatar: getAvatarForMessage('msg2'),
  },
  {
    id: 'msg3',
    text: 'Otro cobarde cerró esta página sin meter su email. Sigue así, llegarás cerca.',
    type: 'static',
    avatar: getAvatarForMessage('msg3'),
  },
  {
    id: 'msg4',
    text: '12 personas están viendo esto ahora mismo, y 5 no se han suscrito, ¿cuántas? CINCO. Pues por el c...',
    type: 'static',
    avatar: getAvatarForMessage('msg4'),
  },
  {
    id: 'msg5',
    text: '3847 personas han leído esto y se han ido, así les irá.',
    type: 'static',
    avatar: getAvatarForMessage('msg5'),
  },
  {
    id: 'msg6',
    text: 'Un malnacido de Ronda (Málaga) ha vuelto a Instagram sin suscribirse. Un saludo.',
    type: 'static',
    avatar: getAvatarForMessage('msg6'),
  },
  {
    id: 'msg7',
    text: 'Alguien cerca de ti ha huido hace {SECONDS} segundos, pero tú ni caso.',
    type: 'seconds',
    avatar: getAvatarForMessage('msg7'),
  },
  {
    id: 'msg8',
    text: 'Si fuera joyero, te regalaría un joya. Pero como soy pollero...',
    type: 'static',
    avatar: getAvatarForMessage('msg8'),
  },
  {
    id: 'msg9',
    text: 'Si no soy Manuel Bartual, ¿por qué tengo este hilazo?.',
    type: 'static',
    avatar: getAvatarForMessage('msg9'),
  },
  {
    id: 'msg10',
    text: 'Alguien cerca de tu casa ha instalado paneles solares, y no se ha suscrito. Muy mal.',
    type: 'static',
    avatar: getAvatarForMessage('msg10'),
  },
  {
    id: 'msg11',
    text: '1 de 4 personas entienden la foto de arriba.',
    type: 'static',
    avatar: getAvatarForMessage('msg11'),
  },
  {
    id: 'msg12',
    text: '7 de cada 19 personas dejan su apreciado email. Y a 12 de ellas les deseo lo peor.',
    type: 'static',
    avatar: getAvatarForMessage('msg12'),
  },
  {
    id: 'msg13',
    text: 'Un abrazafarolas, un peregrino, acaba de salir de esta página, sin dejar su email. Lo veo muy desmejorado.',
    type: 'static',
    avatar: getAvatarForMessage('msg13'),
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
