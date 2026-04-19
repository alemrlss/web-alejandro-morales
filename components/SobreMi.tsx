import { ChartBarIcon, ChatBubbleIcon, SparklesIcon } from '@/components/Icons'
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
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Sobre mí
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-700 text-gray-900 dark:text-white mb-5 leading-tight tracking-tight">
              No soy un proveedor.{' '}
              <span className="text-blue-600 dark:text-blue-500">Soy tu socio de crecimiento.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-[15px]">
              Soy Alejandro Morales, especialista en crecimiento digital para empresas. No instalo herramientas sueltas: entiendo tu negocio, identifico qué te frena y construyo el sistema exacto que necesitas para escalar.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
              Combino web, publicidad, redes sociales, email marketing e inteligencia artificial en una sola estrategia cohesionada — para que cada pieza trabaje con las demás y los resultados se multipliquen.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-4">
            {valores.map(({ icon: Icon, titulo, descripcion }) => (
              <div
                key={titulo}
                className="flex gap-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-xl p-5 hover:border-blue-200 dark:hover:border-blue-500/20 transition-colors duration-200 cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading font-600 text-gray-900 dark:text-white text-sm mb-1">{titulo}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
