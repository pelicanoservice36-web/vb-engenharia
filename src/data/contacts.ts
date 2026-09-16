export interface Contact {
  id: string;
  name: string;
  role: string;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  isWhatsAppDefault?: boolean;
}

export const contacts: Contact[] = [
  {
    id: 'valtencir-bueno',
    name: 'Valtencir Bueno',
    role: 'CEO e Responsável Técnico',
    phoneDisplay: '(11) 97270-4662',
    phoneE164: '5511972704662',
    email: 'vbengenharia.bueno@gmail.com',
    isWhatsAppDefault: true,
  },
  {
    id: 'leonardo-bueno',
    name: 'Leonardo Bueno',
    role: 'Engenheiro de Execução',
    phoneDisplay: '(11) 99860-3408',
    phoneE164: '5511998603408',
    email: 'vbengenharia.leonardo@gmail.com',
  },
  {
    id: 'fabio-parana',
    name: 'Fabio Paraná',
    role: 'Engenheiro de Execução',
    phoneDisplay: '(11) 96480-1732',
    phoneE164: '5511964801732',
    email: 'vbengenharia.eng@gmail.com',
  },
];

export const defaultWhatsAppContact =
  contacts.find((contact) => contact.isWhatsAppDefault) ?? contacts[0];

export const whatsAppDefaultMessage =
  'Olá, gostaria de solicitar informações sobre os serviços de engenharia elétrica da VB Engenharia.';

export function buildWhatsAppUrl(phoneE164: string, message: string = whatsAppDefaultMessage): string {
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}
