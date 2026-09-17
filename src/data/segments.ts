import type { IconName } from '../components/icons/paths';

export interface Segment {
  id: 'industrial' | 'comercial' | 'predial';
  title: string;
  description: string;
  icon: IconName;
  /** IDs de src/data/services.ts em destaque para o segmento — reorganização
   *  editorial do catálogo já documentado, nunca exclusividade de serviço. */
  relatedServiceIds: string[];
}

export const segments: Segment[] = [
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Soluções de engenharia elétrica para ambientes industriais.',
    icon: 'factory',
    relatedServiceIds: ['manutencao', 'automacao-energia'],
  },
  {
    id: 'comercial',
    title: 'Comercial',
    description: 'Projetos e instalações para empreendimentos comerciais.',
    icon: 'building',
    relatedServiceIds: ['projetos', 'instalacoes'],
  },
  {
    id: 'predial',
    title: 'Predial',
    description: 'Soluções elétricas para instalações prediais.',
    icon: 'home',
    relatedServiceIds: ['instalacoes', 'seguranca-conformidade'],
  },
];
