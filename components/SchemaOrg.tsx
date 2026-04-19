export default function SchemaOrg() {
  const siteUrl = 'https://alejandomorales.es'

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Alejandro Morales',
        jobTitle: 'Especialista en Crecimiento Digital con IA',
        description:
          'Especialista en crecimiento digital para empresas. Diseño e implemento sistemas de captación y automatización con IA para startups, autónomos y pymes en España.',
        url: siteUrl,
        email: 'alejandroaml0528@gmail.com',
        telephone: '+34676017218',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ES',
          addressRegion: 'España',
        },
        knowsAbout: [
          'Inteligencia Artificial',
          'Marketing Digital',
          'Automatización empresarial',
          'Captación de clientes',
          'Email Marketing',
          'SEO',
          'Desarrollo web',
        ],
        sameAs: [],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#business`,
        name: 'Alejandro Morales — Sistemas Digitales con IA',
        description:
          'Agencia de sistemas digitales con IA para crecimiento empresarial. Servicios de captación de clientes, automatización con inteligencia artificial y marketing digital para startups, autónomos y pymes en España.',
        url: siteUrl,
        telephone: '+34676017218',
        email: 'alejandroaml0528@gmail.com',
        founder: { '@id': `${siteUrl}/#person` },
        areaServed: {
          '@type': 'Country',
          name: 'España',
        },
        serviceType: 'Marketing Digital y Automatización con IA',
        priceRange: '€€',
        openingHours: 'Mo-Fr 09:00-18:00',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Sistemas Digitales con IA',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sistema de Captación de Clientes',
                description:
                  'Infraestructura completa para atraer y convertir clientes potenciales de forma constante y predecible. Incluye landing page de captación, email marketing automatizado, estrategia de contenido y seguimiento de leads.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sistema de Automatización con IA',
                description:
                  'Automatización de procesos empresariales con inteligencia artificial. Flujos de respuesta automática, clasificación de leads, reportes automáticos e integración con CRM.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sistema Completo de Crecimiento',
                description:
                  'Combinación del Sistema de Captación y el Sistema de Automatización con IA. Solución integral para transformar digitalmente el negocio y escalar de forma sostenible.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué es un sistema de captación de clientes con IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Es una infraestructura digital completa que combina landing pages optimizadas, email marketing automatizado y seguimiento de leads para atraer y convertir clientes potenciales de forma predecible y constante, usando inteligencia artificial para optimizar cada paso del proceso.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Para qué tipo de empresas son estos servicios?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los sistemas están diseñados para startups en crecimiento, autónomos y freelancers, y pequeñas empresas en España que quieren modernizar su captación de clientes y automatizar procesos con inteligencia artificial sin necesidad de contratar un gran equipo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto tiempo tarda la implementación?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El tiempo varía según el sistema. Comenzamos siempre con un diagnóstico del negocio, luego diseñamos el sistema a medida y lo implementamos de forma ágil. La mayoría de los proyectos tienen resultados visibles en las primeras semanas.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Operáis solo en España?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El mercado principal es España, pero trabajamos con clientes de cualquier país hispanohablante y tenemos capacidad de operar globalmente de forma remota.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
