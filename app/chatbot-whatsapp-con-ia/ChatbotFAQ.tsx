'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito WhatsApp Business API para esto?',
    a: 'Sí, pero yo me encargo de todo el proceso de activación. No tienes que hacer nada técnico — solo necesito acceso a tu número de WhatsApp Business y me ocupo del resto.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar funcionando?',
    a: 'Entre 5 y 10 días desde que empezamos. Incluye la configuración técnica, el entrenamiento con la información de tu negocio y las pruebas antes del lanzamiento.',
  },
  {
    q: '¿Qué pasa si el bot no sabe responder algo?',
    a: 'El chatbot detecta automáticamente cuando una pregunta está fuera de su alcance y escala la conversación a ti o a tu equipo. Nunca deja a un cliente sin respuesta.',
  },
  {
    q: '¿Puedo personalizar qué dice y cómo responde?',
    a: 'Completamente. El chatbot se entrena con el tono, los servicios, los precios y la información específica de tu negocio. No es un bot genérico — es tu asistente.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El precio depende de la complejidad de tu negocio y las integraciones necesarias. No hay tarifas fijas porque cada sistema es diferente. Escríbeme y te hago una propuesta en 24h.',
  },
  {
    q: '¿Funciona en cualquier sector?',
    a: 'Sí. He implementado chatbots para clínicas, academias, negocios de servicios, e-commerce y más. Si recibes consultas por WhatsApp, el chatbot puede gestionarlas.',
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
