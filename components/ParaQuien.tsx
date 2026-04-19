import { BoltIcon, BriefcaseIcon, BuildingOfficeIcon } from '@/components/Icons'
import type { FC } from 'react'

const perfiles: { icon: FC<{ className?: string }>; titulo: string; descripcion: string }[] = [
  {
    icon: BoltIcon,
    titulo: 'Startups en crecimiento',
    descripcion: 'Quieres escalar rápido sin contratar un equipo de marketing. Necesitas sistemas que funcionen solos mientras tú te enfocas en el producto.',
  },
  {
    icon: BriefcaseIcon,
    titulo: 'Autónomos y freelancers',
    descripcion: 'Lo haces todo tú. Quieres automatizar la captación para enfocarte en entregar tu trabajo y dejar de preocuparte por conseguir el siguiente cliente.',
  },
  {
    icon: BuildingOfficeIcon,
    titulo: 'Pequeñas empresas',
    descripcion: 'Tienes un negocio funcionando pero quieres modernizarlo, atraer más clientes y dejar de depender del boca a boca para crecer.',
  },
]

export default function ParaQuien() {
  return (
    <section id="para-quien" className="py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Para quién</p>
          <h2 className="font-heading text-3xl md:text-4xl font-700 text-gray-900 dark:text-white mb-4 tracking-tight">¿Esto es para ti?</h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Trabajo con negocios que quieren crecer de forma inteligente, no solo trabajar más horas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {perfiles.map(({ icon: Icon, titulo, descripcion }) => (
            <div
              key={titulo}
              className="group bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-2xl p-6 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-sm transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-600/15 transition-colors duration-200">
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-heading font-600 text-gray-900 dark:text-white mb-2 text-base tracking-tight">{titulo}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{descripcion}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-8 md:p-10">
          <p className="font-heading font-600 text-gray-900 dark:text-white text-xl mb-2 tracking-tight">¿Te identificas con alguno de estos perfiles?</p>
          <p className="text-gray-500 dark:text-gray-400 mb-7 max-w-lg mx-auto text-sm leading-relaxed">
            Podemos trabajar juntos. Dame 30 minutos y te cuento exactamente qué sistema necesitas y qué resultados puedes esperar.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-lg transition-colors duration-150 text-sm cursor-pointer"
          >
            Hablemos sin compromiso
          </a>
        </div>
      </div>
    </section>
  )
}
