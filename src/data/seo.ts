import { defaultWhatsAppContact } from './contacts';

export const siteName = 'VB Engenharia';

export const defaultSeo = {
  title: 'Engenharia Elétrica Industrial, Comercial e Predial',
  description:
    'VB Engenharia: projetos, instalações, manutenção elétrica, SPDA, laudos técnicos e automação industrial para os segmentos industrial, comercial e predial desde 2014.',
};

/**
 * Monta o JSON-LD Schema.org. Tipo `Electrician` (subtipo válido de
 * HomeAndConstructionBusiness) — não `ElectricalContractor`, que não existe
 * no vocabulário schema.org. Sem address/aggregateRating/numberOfEmployees:
 * nenhum desses dados está documentado na fonte oficial da empresa.
 */
export function buildJsonLd(site: URL | undefined) {
  const siteUrl = site?.toString().replace(/\/$/, '') ?? '';

  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: siteName,
    description: defaultSeo.description,
    url: siteUrl,
    logo: siteUrl ? `${siteUrl}/logo.png` : undefined,
    telephone: `+${defaultWhatsAppContact.phoneE164}`,
    email: defaultWhatsAppContact.email,
    foundingDate: '2014',
    founder: {
      '@type': 'Person',
      name: 'Valtencir Bueno',
    },
  };
}
