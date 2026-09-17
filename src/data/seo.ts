import { defaultWhatsAppContact } from './contacts';
import { serviceCategories } from './services';

export const siteName = 'VB Engenharia';

export const defaultSeo = {
  title: 'Engenharia Elétrica Industrial, Comercial e Predial',
  description:
    'VB Engenharia: projetos, instalações, manutenção elétrica, SPDA, laudos técnicos e automação industrial para os segmentos industrial, comercial e predial desde 2014.',
};

/**
 * Monta o JSON-LD Schema.org como um único @graph (padrão recomendado para
 * várias entidades relacionadas numa página só, evitando duplicar NAP entre
 * nós). Tipo `Electrician` (subtipo válido de HomeAndConstructionBusiness) —
 * não `ElectricalContractor`, que não existe no vocabulário schema.org.
 * Sem address/aggregateRating/numberOfEmployees/SearchAction: nenhum desses
 * recursos existe de fato — declará-los seria inventar dado ou funcionalidade.
 * BreadcrumbList fica para quando existir mais de uma página navegável.
 */
export function buildJsonLd(site: URL | undefined) {
  const siteUrl = site?.toString().replace(/\/$/, '') ?? '';
  const organizationId = `${siteUrl}/#organization`;

  const organization = {
    '@type': ['Organization', 'Electrician'],
    '@id': organizationId,
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

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: 'pt-BR',
    publisher: { '@id': organizationId },
  };

  const services = serviceCategories.map((category) => ({
    '@type': 'Service',
    '@id': `${siteUrl}/#service-${category.id}`,
    name: category.title,
    serviceType: category.title,
    description: category.description,
    provider: { '@id': organizationId },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, ...services],
  };
}
