import type { ImageMetadata } from 'astro';
import itucap from '../assets/images/clients/itucap.jpg';
import nagel from '../assets/images/clients/nagel.jpg';
import grupoRb from '../assets/images/clients/grupo-rb.png';
import shinagawa from '../assets/images/clients/shinagawa.png';
import mercadoLivre from '../assets/images/clients/mercado-livre.png';
import heineken from '../assets/images/clients/heineken.png';
import dia from '../assets/images/clients/dia.png';
import royalFic from '../assets/images/clients/royal-fic.png';
import aena from '../assets/images/clients/aena.png';

export interface Client {
  id: string;
  name: string;
  logo: ImageMetadata;
}

export const clients: Client[] = [
  { id: 'itucap', name: 'Itucap Renovadora de Pneus', logo: itucap },
  { id: 'nagel', name: 'Nagel', logo: nagel },
  { id: 'grupo-rb', name: 'Grupo RB', logo: grupoRb },
  { id: 'shinagawa', name: 'Shinagawa', logo: shinagawa },
  { id: 'mercado-livre', name: 'Mercado Livre', logo: mercadoLivre },
  { id: 'heineken', name: 'Heineken', logo: heineken },
  { id: 'dia', name: 'Dia', logo: dia },
  { id: 'royal-fic', name: 'Royal FIC', logo: royalFic },
  { id: 'aena', name: 'Aena', logo: aena },
];
