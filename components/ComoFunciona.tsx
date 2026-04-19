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
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Proceso</p>
          <h2 className="font-heading text-3xl md:text-4xl font-700 text-gray-900 dark:text-white mb-4 tracking-tight">Cómo trabajamos juntos</h2>
          <p className="text-gray-500 dark:text-gray-400 text-base">Un proceso claro, sin sorpresas ni tecnicismos.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <div key={paso.numero} className="relative">
              {index < pasos.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+1.5rem)] right-[-50%] h-px bg-gradient-to-r from-blue-300/50 dark:from-blue-500/30 to-transparent" />
              )}

              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-4 flex-shrink-0">
                  <span className="font-heading text-white text-xs font-700">{paso.numero}</span>
                </div>
                <h3 className="font-heading font-600 text-gray-900 dark:text-white text-base mb-2 tracking-tight">{paso.titulo}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
