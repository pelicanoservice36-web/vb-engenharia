import type { IconName } from '../components/icons/paths';

export interface Segment {
  id: 'industrial' | 'comercial' | 'predial';
  title: string;
  description: string;
  icon: IconName;
}

export const segments: Segment[] = [
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Soluções de engenharia elétrica para ambientes industriais.',
    icon: 'factory',
  },
  {
    id: 'comercial',
    title: 'Comercial',
    description: 'Projetos e instalações para empreendimentos comerciais.',
    icon: 'building',
  },
  {
    id: 'predial',
    title: 'Predial',
    description: 'Soluções elétricas para instalações prediais.',
    icon: 'home',
  },
];
