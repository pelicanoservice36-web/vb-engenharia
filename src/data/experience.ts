import type { ImageMetadata } from 'astro';
import inspecaoPainel from '../assets/images/experience/vb-engenharia-inspecao-painel-industrial.jpg';
import verificacaoQuadro from '../assets/images/experience/vb-engenharia-verificacao-eletrica-quadro-comando.jpg';
import equipeSubestacao from '../assets/images/experience/vb-engenharia-equipe-subestacao-energia.jpg';
import infraestruturaEletrocalhas from '../assets/images/experience/vb-engenharia-infraestrutura-eletrocalhas-iluminacao.jpg';

export interface ExperiencePhoto {
  id: string;
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export const experiencePhotos: ExperiencePhoto[] = [
  {
    id: 'inspecao-painel-industrial',
    image: inspecaoPainel,
    alt: 'Profissional com capacete e tablet inspecionando painéis elétricos em ambiente industrial',
    caption: 'Inspeção de painéis em ambiente industrial',
  },
  {
    id: 'verificacao-quadro-comando',
    image: verificacaoQuadro,
    alt: 'Verificação elétrica com multímetro em quadro de comando',
    caption: 'Verificação elétrica em quadro de comando',
  },
  {
    id: 'equipe-subestacao',
    image: equipeSubestacao,
    alt: 'Equipe com capacete e EPIs em subestação de energia',
    caption: 'Equipe em subestação de energia',
  },
  {
    id: 'infraestrutura-eletrocalhas',
    image: infraestruturaEletrocalhas,
    alt: 'Infraestrutura de eletrocalhas e iluminação em ambiente industrial',
    caption: 'Infraestrutura de eletrocalhas e iluminação',
  },
];
