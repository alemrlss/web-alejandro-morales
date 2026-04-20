import { CheckIcon } from '@/components/Icons'
import AnimateIn from '@/components/AnimateIn'

const trust = ['100% orientado a resultados', 'Implementación rápida', 'Soporte incluido']

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-200">

      {/* ── Background: dot grid ── */}
      <div className="absolute inset-0 dot-overlay opacity-0 dark:opacity-100 pointer-events-none" />

      {/* ── Background: subtle line grid ── */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right,#7C3AED 1px,transparent 1px),linear-gradient(to bottom,#7C3AED 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Gradient vignette bottom ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-transparent dark:via-transparent dark:to-[#0A0A0A] pointer-events-none" />

      {/* ── Ambient orbs ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-600/8 dark:bg-brand-600/12 rounded-full blur-[80px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-brand-400/6 dark:bg-brand-400/10 rounded-full blur-[60px] pointer-events-none animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-[10%] w-48 h-48 bg-brand-700/6 dark:bg-brand-700/10 rounded-full blur-[50px] pointer-events-none animate-float-slow" style={{ animationDelay: '2.5s' }} />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* ── Text column ── */}
        <div className="flex-1 text-center lg:text-left">

          <AnimateIn animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-600/10 text-brand-700 dark:text-brand-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-brand-200/60 dark:border-brand-500/25 mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Sistemas Digitales con IA
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-blink" />
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.08] mb-6 tracking-tight">
              Haz crecer tu negocio con{' '}
              <span className="text-shimmer">sistemas que trabajan</span>{' '}
              por ti
            </h1>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={200}>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Si tu negocio depende de ti para conseguir clientes, tienes un problema de sistema — no de esfuerzo. Yo lo resuelvo.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#servicios"
                className="relative overflow-hidden bg-brand-600 hover:bg-brand-700 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-center text-sm cursor-pointer shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 glow-brand-sm"
              >
                Ver mis servicios
              </a>
              <a
                href="#contacto"
                className="border border-gray-200 dark:border-white/15 hover:border-brand-400 dark:hover:border-brand-500/50 text-gray-700 dark:text-gray-300 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-600/8 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-center text-sm cursor-pointer"
              >
                Contactar
              </a>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-in" delay={450}>
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <CheckIcon className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* ── Avatar card column ── */}
        <AnimateIn animation="slide-right" delay={200} className="flex-shrink-0">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">

            {/* Outer spinning ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-brand-400/20 dark:border-brand-500/25 animate-spin-slow pointer-events-none" />
            {/* Inner spinning ring (reverse) */}
            <div className="absolute -inset-8 rounded-[3rem] border border-dashed border-brand-300/10 dark:border-brand-500/15 animate-spin-rev pointer-events-none" />

            {/* Orbiting dot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-3 h-3 animate-spin-slow" style={{ animationDuration: '8s' }}>
                <div className="w-2.5 h-2.5 bg-brand-500 rounded-full shadow-lg shadow-brand-500/60 glow-brand-sm"
                  style={{ transform: 'translateX(148px)' }} />
              </div>
            </div>

            {/* Card */}
            <div className="w-full h-full rounded-3xl overflow-hidden border border-brand-100 dark:border-brand-500/20 shadow-2xl shadow-brand-500/10 dark:shadow-brand-500/20 hover:shadow-brand-500/25 transition-shadow duration-300 dark:glow-brand">
              <img
                src="/avatar-test.png"
                alt="Alejandro Morales"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#111] border border-gray-200 dark:border-brand-500/20 rounded-xl px-3 py-2 shadow-lg dark:shadow-brand-500/10 animate-float-slow" style={{ animationDelay: '1s' }}>
              <p className="text-xs font-bold text-gray-900 dark:text-white">España</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-light">Disponible globalmente</p>
            </div>

            {/* Top-left accent */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-500 rounded-lg opacity-80 glow-brand-sm animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
