const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

type Servicio = {
  id: string
  num: string
  titulo: string
  subtitulo: string
  descripcion: string
  badge: string | null
  destacado: boolean
  color: string
  incluye: string[]
}

const servicios: Servicio[] = [
  {
    id: 'presencia',
    num: '01',
    titulo: 'Presencia Digital',
    subtitulo: 'Que te encuentren y confíen en ti',
    descripcion: 'Construyo tu presencia digital desde cero o la potencio. Web profesional, redes activas y publicidad que genera resultados desde el primer mes.',
    badge: null,
    destacado: false,
    color: 'blue',
    incluye: [
      'Web diseñada para convertir',
      'Gestión de redes sociales',
      'Publicidad en Google Ads',
      'Publicidad en Meta (Facebook e Instagram)',
      'SEO y posicionamiento orgánico',
      'Reportes mensuales de resultados',
    ],
  },
  {
    id: 'automatizacion',
    num: '02',
    titulo: 'Automatización con IA',
    subtitulo: 'Tu negocio trabajando 24/7',
    descripcion: 'Implemento flujos inteligentes que capturan, clasifican y nutren leads automáticamente. Menos trabajo manual, más clientes atendidos.',
    badge: 'Más solicitado',
    destacado: false,
    color: 'violet',
    incluye: [
      'Flujos de IA personalizados',
      'Captación automática de leads',
      'Respuestas inteligentes por WhatsApp y email',
      'Clasificación y scoring de contactos',
      'Integración con tu CRM',
      'Reportes y dashboards automáticos',
    ],
  },
  {
    id: 'sistema-completo',
    num: '03',
    titulo: 'Sistema Completo de Crecimiento',
    subtitulo: 'La solución más potente',
    descripcion: 'Presencia digital + automatización con IA integrados en un solo sistema. Para empresas que quieren crecer de forma escalable y predecible.',
    badge: 'Recomendado',
    destacado: true,
    color: 'blue',
    incluye: [
      'Todo lo de Presencia Digital',
      'Todo lo de Automatización con IA',
      'Estrategia de crecimiento unificada',
      'Panel de métricas integrado',
      'Webs y landing pages adicionales',
      'Soporte y optimización continua',
    ],
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-28 bg-gray-50 dark:bg-[#080808] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Servicios
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.08] tracking-tight mb-5">
            Lo que puedo<br />
            <span className="text-blue-600 dark:text-blue-500">hacer por ti</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">
            Tres sistemas pensados para que tu empresa capte más clientes, automatice procesos y crezca sin depender de ti al 100%.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {servicios.map(({ id, num, titulo, subtitulo, descripcion, badge, destacado, incluye }) => (
            <div
              key={id}
              className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                destacado
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/25 md:-mt-4 md:mb-4'
                  : 'bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 hover:shadow-xl hover:shadow-gray-900/5 dark:hover:border-white/15'
              }`}
            >
              {badge && (
                <div className={`absolute -top-4 left-0 right-0 flex justify-center`}>
                  <span className={`text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${
                    destacado ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                  }`}>
                    {badge}
                  </span>
                </div>
              )}

              <div className={`p-8 ${badge ? 'pt-10' : ''}`}>
                {/* Number */}
                <span className={`text-xs font-bold tracking-[0.2em] uppercase ${
                  destacado ? 'text-blue-200' : 'text-gray-400 dark:text-gray-600'
                }`}>
                  {num}
                </span>

                {/* Title */}
                <h3 className={`font-heading text-2xl font-extrabold mt-3 mb-1 leading-tight tracking-tight ${
                  destacado ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {titulo}
                </h3>
                <p className={`text-sm font-semibold mb-4 ${
                  destacado ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'
                }`}>
                  {subtitulo}
                </p>

                <p className={`text-sm leading-relaxed mb-7 font-light ${
                  destacado ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {descripcion}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${destacado ? 'bg-white/15' : 'bg-gray-100 dark:bg-white/6'}`} />

                {/* Includes */}
                <p className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-4 ${
                  destacado ? 'text-blue-200' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  Incluye
                </p>
                <ul className="space-y-3 mb-8">
                  {incluye.map((item) => (
                    <li key={item} className={`flex items-start gap-3 text-sm font-medium ${
                      destacado ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      <span className={`mt-0.5 ${destacado ? 'text-blue-200' : 'text-blue-500'}`}>
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price note */}
                <p className={`text-xs mb-6 ${destacado ? 'text-blue-200' : 'text-gray-400 dark:text-gray-500'}`}>
                  Inversión:{' '}
                  <span className={`font-semibold ${destacado ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>
                    Consulta personalizada
                  </span>
                </p>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`block text-center py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    destacado
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20'
                  }`}
                >
                  Solicitar información
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-2xl px-8 py-6">
          <div>
            <p className="font-heading font-bold text-gray-900 dark:text-white text-base">¿No sabes cuál es el más adecuado para ti?</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-1">Reserva una llamada gratuita de 30 min y lo analizamos juntos.</p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Llamada gratuita
          </a>
        </div>

      </div>
    </section>
  )
}
