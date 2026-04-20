import AnimateIn from '@/components/AnimateIn'

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
  </svg>
)

const BotIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.122V19.5a.75.75 0 01-1.5 0v-1.5a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25v1.5a.75.75 0 01-1.5 0V14.5a2.25 2.25 0 001.5-2.122V3.104" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

type Servicio = {
  id: string
  num: string
  icon: () => JSX.Element
  titulo: string
  subtitulo: string
  descripcion: string
  badge: string | null
  destacado: boolean
  planLabel: string
  incluye: string[]
}

const servicios: Servicio[] = [
  {
    id: 'presencia',
    num: '01',
    icon: GlobeIcon,
    titulo: 'Presencia Digital',
    subtitulo: 'Que te encuentren y confíen en ti',
    descripcion: 'Construyo tu presencia digital desde cero o la potencio. Web profesional, redes activas y publicidad que genera resultados desde el primer mes.',
    badge: null,
    destacado: false,
    planLabel: 'Tu plan digital',
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
    icon: BotIcon,
    titulo: 'Automatización con IA',
    subtitulo: 'Tu negocio trabajando 24/7',
    descripcion: 'Implemento flujos inteligentes que capturan, clasifican y nutren leads automáticamente. Menos trabajo manual, más clientes atendidos.',
    badge: 'Más solicitado',
    destacado: false,
    planLabel: 'Tu sistema IA',
    incluye: [
      'Chatbot WhatsApp con IA',
      'Flujos de IA personalizados',
      'Captación automática de leads',
      'Respuestas inteligentes por email',
      'Clasificación y scoring de contactos',
      'Integración con tu CRM',
      'Reportes y dashboards automáticos',
    ],
  },
  {
    id: 'sistema-completo',
    num: '03',
    icon: RocketIcon,
    titulo: 'Sistema Completo de Crecimiento',
    subtitulo: 'La solución más potente',
    descripcion: 'Presencia digital + automatización con IA integrados en un solo sistema. Para empresas que quieren crecer de forma escalable y predecible.',
    badge: 'Recomendado',
    destacado: true,
    planLabel: 'Todo incluido',
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
          <AnimateIn animation="fade-up">
            <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Servicios
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.08] tracking-tight mb-5">
              Lo que puedo<br />
              <span className="text-brand-600 dark:text-brand-500">hacer por ti</span>
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={160}>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">
              Tres sistemas pensados para que tu empresa capte más clientes, automatice procesos y crezca sin depender de ti al 100%.
            </p>
          </AnimateIn>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {servicios.map(({ id, num, icon: Icon, titulo, subtitulo, descripcion, badge, destacado, planLabel, incluye }, i) => (
            <AnimateIn key={id} animation="fade-up" delay={i * 100}>
              <div
                className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
                  destacado
                    ? 'bg-brand-600 text-white shadow-2xl shadow-brand-600/30 md:-mt-4 md:mb-4 hover:shadow-brand-600/45 hover:-translate-y-1'
                    : 'bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10 dark:hover:shadow-brand-500/12 hover:border-brand-200 dark:hover:border-brand-500/30'
                }`}
              >
                {/* Top accent bar */}
                {!destacado && (
                  <div className="h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                {badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      destacado ? 'bg-white/20 text-white' : 'bg-brand-50 dark:bg-brand-600/15 text-brand-600 dark:text-brand-400'
                    }`}>
                      {badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      destacado
                        ? 'bg-white/15'
                        : 'bg-brand-50 dark:bg-brand-600/10'
                    }`}>
                      <span className={destacado ? 'text-white' : 'text-brand-600 dark:text-brand-400'}>
                        <Icon />
                      </span>
                    </div>
                    <span className={`font-heading text-4xl font-black tracking-tighter opacity-20 ${
                      destacado ? 'text-white' : 'text-brand-600'
                    }`}>
                      {num}
                    </span>
                  </div>

                  {/* Title block */}
                  <h3 className={`font-heading text-xl font-extrabold mb-1 leading-tight tracking-tight ${
                    destacado ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {titulo}
                  </h3>
                  <p className={`text-sm font-semibold mb-5 ${
                    destacado ? 'text-brand-200' : 'text-brand-600 dark:text-brand-400'
                  }`}>
                    {subtitulo}
                  </p>

                  <p className={`text-sm leading-relaxed mb-8 font-light ${
                    destacado ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {descripcion}
                  </p>

                  {/* Plan label */}
                  <div className={`flex items-center gap-2 mb-4`}>
                    <div className={`h-px flex-1 ${destacado ? 'bg-white/15' : 'bg-gray-100 dark:bg-white/6'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-[0.18em] px-2 ${
                      destacado ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {planLabel}
                    </span>
                    <div className={`h-px flex-1 ${destacado ? 'bg-white/15' : 'bg-gray-100 dark:bg-white/6'}`} />
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-2.5 mb-8">
                    {incluye.map((item) => (
                      <li key={item} className={`flex items-start gap-2.5 text-sm ${
                        destacado ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          destacado ? 'bg-white/20 text-white' : 'bg-brand-50 dark:bg-brand-600/15 text-brand-600 dark:text-brand-400'
                        }`}>
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                      destacado
                        ? 'bg-white text-brand-600 hover:bg-brand-50 shadow-lg shadow-black/10'
                        : 'bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30'
                    }`}
                  >
                    Solicitar información
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom note */}
        <AnimateIn animation="fade-up" delay={100}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-2xl px-8 py-6 hover:border-brand-200 dark:hover:border-brand-500/20 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
            <div>
              <p className="font-heading font-bold text-gray-900 dark:text-white text-base">¿No sabes cuál es el más adecuado para ti?</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-1">Reserva una llamada gratuita de 30 min y lo analizamos juntos.</p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.98] text-white dark:text-gray-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Llamada gratuita
            </a>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
