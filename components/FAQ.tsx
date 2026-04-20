'use client'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'

const faqs = [
  {
    pregunta: '¿Cuánto tiempo tarda en estar listo mi sistema?',
    respuesta: 'Depende del servicio. Una web profesional está lista en 7-14 días. Un sistema de automatización con IA tarda entre 2 y 4 semanas. El sistema completo de crecimiento, entre 4 y 6 semanas. Siempre te doy una fecha concreta antes de empezar.',
  },
  {
    pregunta: '¿Necesito tener conocimientos técnicos?',
    respuesta: 'No. Me encargo de todo: diseño, desarrollo, configuración e integración. Tú solo tienes que contarme tu negocio y tus objetivos. Al final te entrego el sistema funcionando y te explico cómo usarlo en una sesión de onboarding.',
  },
  {
    pregunta: '¿Qué pasa si no estoy satisfecho con el resultado?',
    respuesta: 'Trabajamos con revisiones incluidas en cada entrega, así que ajustamos hasta que el resultado sea exactamente lo que necesitas. Mi objetivo es que el sistema funcione y genere resultados reales, no solo entregarte algo.',
  },
  {
    pregunta: '¿Cómo funciona el chatbot de WhatsApp con IA?',
    respuesta: 'Conecto tu número de WhatsApp Business a un sistema de IA que responde automáticamente a los mensajes de tus clientes: responde preguntas frecuentes, recoge datos de contacto, agenda citas y escala al humano cuando es necesario. Funciona 24/7 sin que tengas que hacer nada.',
  },
  {
    pregunta: '¿Trabajas solo con empresas de España?',
    respuesta: 'Estoy basado en España pero trabajo con clientes de cualquier país hispanohablante. Todo el trabajo es remoto y los resultados son igual de efectivos independientemente de tu ubicación.',
  },
  {
    pregunta: '¿Cuánto cuesta contratar tus servicios?',
    respuesta: 'Cada proyecto es diferente y el precio depende del alcance y las necesidades de tu negocio. Por eso no publico tarifas fijas: prefiero entender tu situación y ofrecerte una propuesta personalizada. Pide una llamada gratuita y hablamos sin compromiso.',
  },
]

function Item({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      open
        ? 'border-brand-200 dark:border-brand-500/30 bg-white dark:bg-[#111]'
        : 'border-gray-200 dark:border-white/8 bg-white dark:bg-[#111] hover:border-brand-200 dark:hover:border-brand-500/20'
    }`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className={`font-heading font-semibold text-sm md:text-base tracking-tight transition-colors duration-200 ${
          open ? 'text-brand-600 dark:text-brand-400' : 'text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300'
        }`}>
          {pregunta}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-brand-600 rotate-45'
            : 'bg-gray-100 dark:bg-white/8 group-hover:bg-brand-50 dark:group-hover:bg-brand-600/10'
        }`}>
          <svg className={`w-3 h-3 transition-colors duration-200 ${open ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left — sticky header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <AnimateIn animation="slide-left">
                <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
              </AnimateIn>
              <AnimateIn animation="slide-left" delay={80}>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-5">
                  Preguntas<br />
                  <span className="text-brand-600 dark:text-brand-400">frecuentes</span>
                </h2>
              </AnimateIn>
              <AnimateIn animation="slide-left" delay={160}>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-8">
                  ¿Tienes alguna duda que no esté aquí? Escríbeme directamente y te respondo en menos de 24 horas.
                </p>
              </AnimateIn>
              <AnimateIn animation="slide-left" delay={240}>
                <a
                  href="https://wa.me/34676017218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors duration-200 cursor-pointer group"
                >
                  <span className="w-8 h-8 bg-brand-50 dark:bg-brand-600/10 rounded-lg flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-600/20 transition-colors duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  Pregúntame por WhatsApp
                </a>
              </AnimateIn>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                <Item {...faq} />
              </AnimateIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
