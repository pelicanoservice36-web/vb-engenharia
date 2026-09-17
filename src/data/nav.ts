export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Contato', href: '#contato' },
];

export const headerCta: NavLink = {
  label: 'Solicitar orçamento',
  href: '#contato',
};
