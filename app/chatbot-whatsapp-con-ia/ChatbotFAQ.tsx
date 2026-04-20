'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿El bot puede generar cotizaciones solo, sin que intervenga el agente?',
    a: 'Sí. El bot recoge destino, fechas, número de personas y presupuesto, genera la cotización y se la envía al viajero al momento. El agente entra directamente a confirmar la reserva — el cliente ya llega convencido.',
  },
  {
    q: '¿Responde preguntas frecuentes como visados, seguros o vuelos incluidos?',
    a: 'Exactamente para eso está entrenado. Responde al instante las dudas más comunes: visados, seguros de viaje, qué incluye el paquete, condiciones de cancelación... Sin que el agente tenga que estar pendiente.',
  },
  {
    q: '¿El bot suena natural o parece un robot?',
    a: 'Está entrenado con inteligencia artificial para responder de forma cálida y empática, como lo haría tu mejor agente. Se adapta al tono de tu agencia y nunca suena frío ni genérico.',
  },
  {
    q: '¿Qué pasa si el viajero hace una pregunta que el bot no sabe responder?',
    a: 'El chatbot detecta cuándo una consulta está fuera de su alcance y escala la conversación al agente con un resumen completo de lo hablado. El viajero nunca queda sin respuesta.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar funcionando?',
    a: 'El proceso completo dura aproximadamente 4 semanas: análisis de tu agencia, entrenamiento del bot con tus paquetes y destinos, pruebas y lanzamiento.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El precio depende de la complejidad de tu catálogo y las integraciones necesarias. No hay tarifas fijas porque cada agencia es diferente. Escríbeme y te hago una propuesta en 24h.',
  },
]

export default function ChatbotFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
            open === i
              ? 'border-brand-300 dark:border-brand-500/40 bg-white dark:bg-[#111]'
              : 'border-gray-200 dark:border-white/8 bg-white dark:bg-[#0e0e0e] hover:border-brand-200 dark:hover:border-brand-500/25'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
          >
            <span className={`font-semibold text-sm md:text-base tracking-tight transition-colors duration-200 ${
              open === i ? 'text-brand-600 dark:text-brand-400' : 'text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300'
            }`}>
              {faq.q}
            </span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
              open === i ? 'bg-brand-600 rotate-45' : 'bg-gray-100 dark:bg-white/8'
            }`}>
              <svg className={`w-3 h-3 ${open === i ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
