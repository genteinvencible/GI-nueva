export interface StoryData {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export const storiesData: StoryData[] = [
  {
    id: 'story-1',
    title: 'Nos vamos',
    videoUrl: '/Assets/nos_vamos_dr_vertical.mp4',
    thumbnailUrl: '/Assets/carmen&alvaro_(222).jpg',
  },
  {
    id: 'story-2',
    title: 'Al loro',
    videoUrl: '/Assets/al_loro_laporta.mp4',
    thumbnailUrl: '/Assets/carmen&alvaro_(232).jpg',
  },
];
