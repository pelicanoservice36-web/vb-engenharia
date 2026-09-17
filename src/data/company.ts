import type { IconName } from '../components/icons/paths';

export interface TrustItem {
  id: string;
  value: string;
  label: string;
}

export const trustItems: TrustItem[] = [
  { id: 'since', value: '2014', label: 'Fundação' },
  { id: 'experience', value: '+30 anos', label: 'Experiência do responsável técnico' },
  { id: 'field', value: 'Engenharia Elétrica', label: 'Soluções especializadas' },
  { id: 'segments', value: 'Industrial • Comercial • Predial', label: 'Segmentos atendidos' },
];

export const about = {
  title: 'Engenharia elétrica feita com responsabilidade',
  paragraphs: [
    'A VB Engenharia é fundada no ano de 2014 e atua no segmento de engenharia elétrica, oferecendo soluções completas para os setores industrial, comercial e predial.',
    'Sob a liderança do CEO e responsável técnico Valtencir Bueno, engenheiro formado desde 2010 e com mais de 30 anos de experiência no mercado, construímos uma trajetória pautada pela qualidade, segurança e excelência na execução de nossos serviços.',
    'Contamos com uma equipe altamente qualificada e constantemente atualizada para desenvolver projetos e executar serviços com eficiência, sempre em conformidade com as normas técnicas vigentes e priorizando a satisfação de nossos clientes.',
  ],
};

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export const differentials: Differential[] = [
  {
    id: 'responsabilidade-tecnica',
    title: 'Responsabilidade técnica',
    description: 'Projetos e serviços conduzidos com responsabilidade técnica.',
    icon: 'clipboard-check',
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    description: 'Segurança como prioridade em todas as etapas.',
    icon: 'shield',
  },
  {
    id: 'qualidade',
    title: 'Qualidade',
    description: 'Utilização de mão de obra especializada, equipamentos modernos e materiais de alta qualidade.',
    icon: 'badge-check',
  },
  {
    id: 'conformidade',
    title: 'Conformidade',
    description: 'Respeito às normas técnicas vigentes e adequações conforme ABNT e NR-10.',
    icon: 'document-check',
  },
  {
    id: 'atendimento-personalizado',
    title: 'Atendimento personalizado',
    description: 'Relacionamento próximo e atenção às necessidades dos clientes.',
    icon: 'headset',
  },
  {
    id: 'agilidade',
    title: 'Agilidade',
    description: 'Compromisso com eficiência e cumprimento das etapas do processo.',
    icon: 'bolt',
  },
];

export const technicalLead = {
  name: 'Valtencir Bueno',
  role: 'CEO e Responsável Técnico',
  credentials: ['Engenheiro formado desde 2010', 'Mais de 30 anos de experiência no mercado'],
};

export interface MissionVisionValue {
  id: 'mission' | 'vision' | 'values';
  title: string;
  icon: IconName;
  content: string | string[];
}

export const missionVisionValues: MissionVisionValue[] = [
  {
    id: 'mission',
    title: 'Missão',
    icon: 'target',
    content:
      'Oferecer soluções em engenharia elétrica com qualidade, segurança e eficiência, superando as expectativas de nossos clientes por meio de serviços executados com responsabilidade técnica, inovação e compromisso com a excelência.',
  },
  {
    id: 'vision',
    title: 'Visão',
    icon: 'eye',
    content:
      'Ser reconhecida como uma empresa referência em engenharia elétrica, destacando-se pela qualidade dos serviços, confiança, inovação e relacionamento sólido com clientes e parceiros.',
  },
  {
    id: 'values',
    title: 'Valores',
    icon: 'sparkles',
    content: [
      'Ética e transparência',
      'Segurança em primeiro lugar',
      'Compromisso com a qualidade',
      'Respeito às normas técnicas',
      'Valorização das pessoas',
      'Inovação e melhoria contínua',
      'Responsabilidade e pontualidade',
    ],
  },
];
