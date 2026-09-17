export interface NavLink {
  label: string;
  href: string;
}

// Hrefs são raiz-relativos (`/#id`) em vez de âncoras puras (`#id`) porque o
// site agora tem páginas além da home (`/servicos/[slug]`) — uma âncora pura
// clicada a partir dessas páginas não navegaria de volta para a home.
export const navLinks: NavLink[] = [
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Experiência', href: '/#experiencia' },
  { label: 'Empresa', href: '/#empresa' },
  { label: 'Contato', href: '/#contato' },
];

export const headerCta: NavLink = {
  label: 'Solicitar orçamento',
  href: '/#contato',
};
