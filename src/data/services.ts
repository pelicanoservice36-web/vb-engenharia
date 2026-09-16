import type { IconName } from '../components/icons/paths';

export interface ServiceCategory {
  id: string;
  title: string;
  icon: IconName;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'projetos',
    title: 'Projetos',
    icon: 'drafting-compass',
    items: [
      'Projetos elétricos industriais',
      'Projetos elétricos comerciais',
      'Projetos elétricos prediais',
      'Projetos luminotécnicos',
    ],
  },
  {
    id: 'instalacoes',
    title: 'Instalações',
    icon: 'plug',
    items: [
      'Instalações elétricas de baixa tensão',
      'Instalações elétricas de média tensão',
      'Instalações elétricas de alta tensão',
      'Instalações elétricas industriais e prediais',
      'Sistemas de iluminação',
    ],
  },
  {
    id: 'manutencao',
    title: 'Manutenção',
    icon: 'wrench',
    items: [
      'Manutenção preventiva',
      'Manutenção preditiva',
      'Manutenção corretiva',
      'Cabines de média e baixa tensão (MT/BT)',
      'Subestações de alta tensão (AT)',
      'Painéis elétricos',
      'Painéis de comando',
    ],
  },
  {
    id: 'seguranca-conformidade',
    title: 'Segurança e Conformidade',
    icon: 'shield-check',
    items: [
      'Laudos técnicos',
      'Inspeções',
      'ART (Anotação de Responsabilidade Técnica)',
      'SPDA (Sistema de Proteção contra Descargas Atmosféricas)',
      'Adequações conforme normas da ABNT',
      'Adequações conforme NR-10',
    ],
  },
  {
    id: 'automacao-energia',
    title: 'Automação e Energia',
    icon: 'cpu',
    items: [
      'Técnicos especializados em automação industrial',
      'Locação de grupos geradores',
      'Instalação de grupos geradores',
      'Operação de grupos geradores',
      'Manutenção de grupos geradores',
    ],
  },
];

// Lista achatada usada no <select> "Serviço de interesse" do formulário de contato.
export const serviceOptions: string[] = serviceCategories.flatMap((category) => category.items);
