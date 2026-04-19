import { CheckIcon } from '@/components/Icons'

const trust = ['100% orientado a resultados', 'Implementación rápida', 'Soporte incluido']

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right,#7C3AED 1px,transparent 1px),linear-gradient(to bottom,#7C3AED 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-transparent dark:via-transparent dark:to-[#0A0A0A]" />
      {/* Brand glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-500/6 dark:bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-600/10 text-brand-700 dark:text-brand-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-brand-100 dark:border-brand-600/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Sistemas Digitales con IA
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.08] mb-6 tracking-tight">
            Haz crecer tu negocio con{' '}
            <span className="text-brand-600 dark:text-brand-400">sistemas que trabajan</span>{' '}
            por ti
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
            Diseño e implemento sistemas de captación y automatización con IA para startups, autónomos y pequeñas empresas que quieren competir en el mercado actual.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
            <a
              href="#servicios"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 text-center text-sm cursor-pointer shadow-lg shadow-brand-600/20"
            >
              Ver mis servicios
            </a>
            <a
              href="#contacto"
              className="border border-gray-200 dark:border-white/15 hover:border-brand-300 dark:hover:border-brand-500/30 text-gray-700 dark:text-gray-300 hover:text-brand-700 dark:hover:text-brand-300 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-center text-sm cursor-pointer"
            >
              Contactar
            </a>
          </div>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            {trust.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CheckIcon className="w-4 h-4 text-brand-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar card */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-brand-50 to-slate-100 dark:from-brand-900/20 dark:to-[#111] border border-brand-100 dark:border-white/10 flex items-center justify-center shadow-2xl shadow-brand-500/10 dark:shadow-none">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-brand-100 dark:bg-brand-600/20 border-2 border-brand-200 dark:border-brand-500/30 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-3xl font-extrabold text-brand-600 dark:text-brand-400">AM</span>
                </div>
                <p className="text-gray-400 dark:text-gray-600 text-xs font-medium">Foto profesional</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 shadow-lg">
              <p className="text-xs font-bold text-gray-900 dark:text-white">España</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-light">Disponible globalmente</p>
            </div>
            {/* Top-left accent */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-500 rounded-lg opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
