import { Plane, Megaphone, LucideIcon } from 'lucide-react';

export interface StoryData {
  id: string;
  title: string;
  videoUrl: string;
  icon: LucideIcon;
}

export const storiesData: StoryData[] = [
  {
    id: 'story-1',
    title: 'Nos vamos',
    videoUrl: '/Assests/nos_vamos_dr_vertical.mp4',
    icon: Plane,
  },
  {
    id: 'story-2',
    title: 'Al loro',
    videoUrl: '/Assests/al_loro_laporta.mp4',
    icon: Megaphone,
  },
];
