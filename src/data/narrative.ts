import type { IconName } from '../components/icons/paths';

export interface NarrativeStep {
  id: string;
  label: string;
  description: string;
  icon: IconName;
}

// Cadeia qualitativa (desafio -> resultado), sem números ou métricas —
// só os conceitos já documentados no material institucional.
export const problemSolution: NarrativeStep[] = [
  {
    id: 'desafio',
    label: 'Desafio',
    description: 'Instalações elétricas exigem planejamento, segurança e conformidade.',
    icon: 'shield-check',
  },
  {
    id: 'engenharia',
    label: 'Engenharia',
    description: 'Projeto e planejamento adequados.',
    icon: 'drafting-compass',
  },
  {
    id: 'execucao',
    label: 'Execução',
    description: 'Equipe especializada.',
    icon: 'wrench',
  },
  {
    id: 'controle',
    label: 'Controle',
    description: 'Inspeção, manutenção e adequação.',
    icon: 'clipboard-check',
  },
  {
    id: 'resultado',
    label: 'Resultado',
    description: 'Mais segurança, confiabilidade e eficiência.',
    icon: 'badge-check',
  },
];

// "Nossa abordagem": linguagem deliberadamente genérica/de apresentação,
// não um procedimento operacional certificado — a VB não documenta um
// processo formal em etapas, então isto descreve como qualquer serviço
// de engenharia elétrica se organiza, usando só vocabulário já presente
// no material (planejamento, responsabilidade técnica, atenção aos detalhes).
export const approachSteps: NarrativeStep[] = [
  {
    id: 'entendimento',
    label: 'Entendimento',
    description: 'Levantamento da necessidade elétrica do cliente.',
    icon: 'eye',
  },
  {
    id: 'planejamento',
    label: 'Planejamento',
    description: 'Projeto conduzido com responsabilidade técnica e atenção aos detalhes.',
    icon: 'target',
  },
  {
    id: 'execucao-abordagem',
    label: 'Execução',
    description: 'Mão de obra especializada, equipamentos modernos e materiais de qualidade.',
    icon: 'wrench',
  },
  {
    id: 'acompanhamento',
    label: 'Acompanhamento',
    description: 'Atendimento próximo do início ao fim do serviço.',
    icon: 'headset',
  },
];
