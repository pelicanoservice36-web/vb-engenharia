export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
];

export const headerCta: NavLink = {
  label: 'Solicitar orçamento',
  href: '#contato',
};
