import AnimateIn from '@/components/AnimateIn'

const pasos = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    descripcion: 'Analizamos tu negocio, tu mercado y dónde están las oportunidades reales de crecimiento.',
  },
  {
    numero: '02',
    titulo: 'Diseño del sistema',
    descripcion: 'Diseñamos el sistema exacto que necesitas, adaptado a tu sector y tus objetivos.',
  },
  {
    numero: '03',
    titulo: 'Implementación',
    descripcion: 'Lo construimos e integramos en tu negocio. Tú te enfocas en vender, yo me encargo del resto.',
  },
  {
    numero: '04',
    titulo: 'Resultados medibles',
    descripcion: 'Seguimos las métricas juntos y optimizamos para maximizar el retorno de tu inversión.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-50 dark:bg-[#0d0d0d] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateIn animation="fade-up">
            <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Proceso</p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Cómo trabajamos juntos</h2>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={160}>
            <p className="text-gray-500 dark:text-gray-400 text-base font-light">Un proceso claro, sin sorpresas ni tecnicismos.</p>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <AnimateIn key={paso.numero} animation="fade-up" delay={index * 100}>
              <div className="relative">
                {index < pasos.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+1.5rem)] right-[-50%] h-px bg-gradient-to-r from-brand-300/50 dark:from-brand-500/30 to-transparent" />
                )}
                <div className="flex flex-col items-start group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center mb-4 flex-shrink-0 shadow-md shadow-brand-600/25 group-hover:shadow-lg group-hover:shadow-brand-600/40 group-hover:scale-110 transition-all duration-300">
                    <span className="font-heading text-white text-xs font-bold">{paso.numero}</span>
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 dark:text-white text-base mb-2 tracking-tight group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-200">{paso.titulo}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{paso.descripcion}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
