import AnimateIn from '@/components/AnimateIn'
import StatsCounter from '@/components/StatsCounter'

const perfiles = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    titulo: 'Ya tienes resultados y quieres más',
    descripcion: 'Tu negocio funciona pero sabes que hay un techo. No buscas probar cosas al azar — quieres un sistema que escale lo que ya funciona y lleve tu captación al siguiente nivel.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    titulo: 'Estás harto de improvisar',
    descripcion: 'Llevas tiempo probando cosas sueltas sin una estrategia real detrás. Quieres parar de improvisar y tener un sistema claro, predecible y que no dependa de ti para funcionar.',
    accent: 'from-violet-500 to-brand-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    titulo: 'Tienes un negocio y quieres crecer',
    descripcion: 'Ya tienes algo funcionando y sabes que puede ir mucho más lejos. Quieres un sistema sólido detrás que impulse ese crecimiento de forma constante y predecible.',
    accent: 'from-brand-600 to-purple-700',
  },
]

const noItems = [
  'Buscas resultados de un día para otro',
  'No estás dispuesto a invertir en tu negocio',
  'Solo quieres probar cosas sin comprometerte',
  'Prefieres las excusas a las soluciones',
]

const siItems = [
  'Tienes un negocio real y quieres hacerlo crecer',
  'Estás dispuesto a implementar con decisión',
  'Valoras el trabajo bien hecho sobre el precio mínimo',
  'Buscas un socio a largo plazo, no un proveedor',
]

export default function ParaQuien() {
  return (
    <section id="para-quien" className="py-24 relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-200">

      {/* Dot overlay background */}
      <div className="absolute inset-0 dot-overlay opacity-0 dark:opacity-100 pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-600/5 dark:bg-brand-600/8 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <AnimateIn animation="fade-up">
            <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Para quién</p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Trabajo con gente que{' '}
              <span className="text-shimmer">de verdad quiere crecer</span>
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={160}>
            <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              No busco volumen de clientes. Busco los correctos — personas comprometidas con su negocio que entienden que el crecimiento real requiere estrategia, acción y un buen sistema detrás.
            </p>
          </AnimateIn>
        </div>

        {/* ── Stats ── */}
        <AnimateIn animation="fade-up" delay={80}>
          <div className="mb-16">
            <StatsCounter />
          </div>
        </AnimateIn>

        {/* ── 3 profile cards — futuristic glass ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {perfiles.map(({ icon, titulo, descripcion, accent }, i) => (
            <AnimateIn key={titulo} animation="fade-up" delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-white/8 bg-white dark:bg-[#0e0e0e] hover:border-brand-300 dark:hover:border-brand-500/35 hover:shadow-2xl hover:shadow-brand-500/10 dark:hover:shadow-brand-500/15">

                {/* Top gradient accent bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${accent} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/3 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>

                  <h3 className="font-heading font-bold text-gray-900 dark:text-white text-base mb-2.5 tracking-tight group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-200">
                    {titulo}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
                    {descripcion}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ── Bottom CTA block — futuristic ── */}
        <AnimateIn animation="fade-up" delay={100}>
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-brand-500/20 bg-white dark:bg-[#0e0e0e] p-8 md:p-12">

            {/* Animated gradient border glow (dark only) */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-600/0 via-brand-500/8 to-brand-600/0 dark:via-brand-500/5 pointer-events-none" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-500/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-500/40 rounded-br-3xl pointer-events-none" />

            <div className="relative grid md:grid-cols-3 gap-8 items-start">

              {/* Col 1: NO */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400 dark:text-red-400 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Esto NO es para ti si…
                </p>
                <ul className="flex flex-col gap-2.5">
                  {noItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2: SÍ */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-500 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Esto SÍ es para ti si…
                </p>
                <ul className="flex flex-col gap-2.5">
                  {siItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-200 font-medium">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: CTA */}
              <div className="flex flex-col items-start gap-5">
                <div>
                  <p className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-2 tracking-tight leading-snug">
                    ¿Estás listo para crecer de verdad?
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Cuéntame tu situación y te digo si puedo ayudarte — sin rodeos y sin compromiso.
                  </p>
                </div>
                <a
                  href="https://wa.me/34676017218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm cursor-pointer shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 glow-brand-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablemos sin rodeos
                </a>
              </div>

            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
