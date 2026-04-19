import { CheckIcon } from '@/components/Icons'

const trust = ['100% orientado a resultados', 'Implementación rápida', 'Soporte incluido']

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-transparent dark:via-transparent dark:to-[#0A0A0A]" />
      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-blue-100 dark:border-blue-600/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Sistemas Digitales con IA
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-700 text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            Haz crecer tu negocio con{' '}
            <span className="text-blue-600 dark:text-blue-500">sistemas que trabajan</span>{' '}
            por ti
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            Diseño e implemento sistemas de captación y automatización con IA para startups, autónomos y pequeñas empresas que quieren competir en el mercado actual.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
            <a
              href="#servicios"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-150 text-center text-sm cursor-pointer"
            >
              Ver mis servicios
            </a>
            <a
              href="#contacto"
              className="border border-gray-300 dark:border-white/15 hover:border-gray-400 dark:hover:border-white/30 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium px-6 py-3 rounded-lg transition-colors duration-150 text-center text-sm cursor-pointer"
            >
              Contactar
            </a>
          </div>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            {trust.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CheckIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar card */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 dark:from-blue-900/20 dark:to-[#111] border border-gray-200/80 dark:border-white/10 flex items-center justify-center shadow-xl dark:shadow-none">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-600/20 border-2 border-blue-200 dark:border-blue-500/30 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-3xl font-700 text-blue-600 dark:text-blue-400">AM</span>
                </div>
                <p className="text-gray-400 dark:text-gray-600 text-xs">Foto profesional</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 shadow-lg">
              <p className="text-xs font-semibold text-gray-900 dark:text-white">España</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Disponible globalmente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
