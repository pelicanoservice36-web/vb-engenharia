import type { ImageMetadata } from 'astro';
import motorBomba from '../assets/images/experience/manutencao-motor-bomba-industrial.jpg';
import testeCabine from '../assets/images/experience/teste-isolamento-cabine-media-tensao.jpg';

export interface ExperiencePhoto {
  id: string;
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export const experiencePhotos: ExperiencePhoto[] = [
  {
    id: 'manutencao-motor-bomba',
    image: motorBomba,
    alt: 'Manutenção de motor elétrico industrial acoplado a bomba centrífuga',
    caption: 'Manutenção em motor e bomba industrial',
  },
  {
    id: 'teste-isolamento-cabine-mt',
    image: testeCabine,
    alt: 'Teste de isolamento em cabine de média tensão com equipamento digital',
    caption: 'Teste de isolamento em cabine de média tensão',
  },
];
