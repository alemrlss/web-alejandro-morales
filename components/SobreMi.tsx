import { ChartBarIcon, ChatBubbleIcon, SparklesIcon } from '@/components/Icons'
import AnimateIn from '@/components/AnimateIn'
import type { FC } from 'react'

const valores: { icon: FC<{ className?: string }>; titulo: string; descripcion: string }[] = [
  {
    icon: ChartBarIcon,
    titulo: 'Orientado a resultados',
    descripcion: 'Cada acción se mide en clientes, ingresos o tiempo ahorrado. Sin métricas de vanidad.',
  },
  {
    icon: ChatBubbleIcon,
    titulo: 'Comunicación directa',
    descripcion: 'Sin tecnicismos, sin promesas vacías. Solo claridad total sobre qué hago y qué esperar.',
  },
  {
    icon: SparklesIcon,
    titulo: 'IA aplicada, no de moda',
    descripcion: 'La aplico donde genera impacto real: atención al cliente, seguimiento y análisis de datos.',
  },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 bg-slate-50 dark:bg-[#0d0d0d] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <AnimateIn animation="slide-left">
              <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Sobre mí
              </p>
            </AnimateIn>
            <AnimateIn animation="slide-left" delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight tracking-tight">
                No soy un proveedor.{' '}
                <span className="text-brand-600 dark:text-brand-400">Soy tu socio de crecimiento.</span>
              </h2>
            </AnimateIn>
            <AnimateIn animation="slide-left" delay={160}>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-[15px] font-light">
                Soy Alejandro Morales, especialista en crecimiento digital para empresas. No instalo herramientas sueltas: entiendo tu negocio, identifico qué te frena y construyo el sistema exacto que necesitas para escalar.
              </p>
            </AnimateIn>
            <AnimateIn animation="slide-left" delay={240}>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[15px] font-light">
                Combino web, publicidad, redes sociales, email marketing e inteligencia artificial en una sola estrategia cohesionada — para que cada pieza trabaje con las demás y los resultados se multipliquen.
              </p>
            </AnimateIn>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-4">
            {valores.map(({ icon: Icon, titulo, descripcion }, i) => (
              <AnimateIn key={titulo} animation="slide-right" delay={i * 100}>
                <div className="group flex gap-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all duration-300 cursor-default">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-50 dark:bg-brand-600/10 rounded-xl flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-600/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-200">{titulo}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{descripcion}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
