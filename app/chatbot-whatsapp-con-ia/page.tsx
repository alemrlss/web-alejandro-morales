import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import ChatbotFAQ from './ChatbotFAQ'

export const metadata: Metadata = {
  title: 'Chatbot de WhatsApp con IA — Atiende clientes 24/7 automáticamente',
  description: 'Instalo un chatbot de WhatsApp con inteligencia artificial que responde, califica y convierte tus leads automáticamente. Sin que estés tú delante. Resultados desde el día 1.',
}

const WA_LINK = 'https://wa.me/34676017218?text=Hola%20Alejandro%2C%20me%20interesa%20el%20chatbot%20de%20WhatsApp%20con%20IA'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: 'Respuesta en menos de 3 segundos',
    descripcion: 'Tu bot responde al instante, a cualquier hora, cualquier día del año. Ningún cliente espera.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    titulo: 'Califica leads automáticamente',
    descripcion: 'El bot detecta qué clientes tienen interés real y los separa de los que solo curiosean.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    titulo: 'Agenda citas sin intervención',
    descripcion: 'Recoge datos, propone horarios y confirma citas directamente en la conversación.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    titulo: 'Escala al humano cuando toca',
    descripcion: 'Si el cliente necesita atención personalizada, el bot te avisa y transfiere la conversación.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    titulo: 'Entrenado con tu negocio',
    descripcion: 'No es un bot genérico. Habla como tú, conoce tus servicios y responde exactamente lo que necesitas.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titulo: 'Reportes y métricas reales',
    descripcion: 'Sabrás cuántas conversaciones hubo, qué se preguntó y cuántos leads se captaron cada semana.',
  },
]

const pasos = [
  {
    num: '01',
    titulo: 'Analizamos tu negocio',
    descripcion: 'En una llamada de 30 minutos entiendo cómo funciona tu captación, qué preguntas reciben y qué necesitas automatizar.',
  },
  {
    num: '02',
    titulo: 'Configuro y entreno el bot',
    descripcion: 'Programo el chatbot con tus servicios, precios y tono de comunicación. En 5-10 días está listo para funcionar.',
  },
  {
    num: '03',
    titulo: 'Tu negocio trabaja solo',
    descripcion: 'Desde el día 1 el bot atiende, califica y convierte. Tú recibes solo los leads que de verdad merecen tu tiempo.',
  },
]

const stats = [
  { value: '< 3s', label: 'Tiempo de respuesta' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: '+60%', label: 'Más leads atendidos' },
  { value: '−80%', label: 'Tareas repetitivas' },
]

export default function ChatbotLanding() {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] min-h-screen">

      {/* ── Minimal Nav ───────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/85 backdrop-blur-md border-b border-gray-200/60 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-heading font-semibold text-gray-900 dark:text-white text-base tracking-tight">
            Alejandro Morales
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150 cursor-pointer shadow-md shadow-green-500/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quiero mi chatbot
          </a>
        </div>
      </header>

      <main>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden bg-[#0A0A0A]">
          {/* Background effects */}
          <div className="absolute inset-0 dot-overlay opacity-60 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#25D366]/6 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />
          <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-brand-600/8 rounded-full blur-[80px] pointer-events-none animate-float" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <AnimateIn animation="fade-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#25D366]/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Chatbot WhatsApp con IA
                </div>
              </AnimateIn>

              <AnimateIn animation="fade-up" delay={80}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                  Tu negocio responde{' '}
                  <span className="text-shimmer">en segundos</span>
                  <br />aunque estés durmiendo
                </h1>
              </AnimateIn>

              <AnimateIn animation="fade-up" delay={160}>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
                  Instalo un chatbot de WhatsApp con IA que atiende a tus clientes, califica leads y agenda citas automáticamente — sin que estés tú delante.
                </p>
              </AnimateIn>

              <AnimateIn animation="fade-up" delay={240}>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] hover:scale-[1.03] active:scale-[0.98] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-sm cursor-pointer shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/35"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Quiero mi chatbot ahora
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm cursor-pointer"
                  >
                    Ver cómo funciona
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </div>
              </AnimateIn>

              <AnimateIn animation="fade-in" delay={350}>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <div className="flex -space-x-2">
                    {['AM','BL','CR'].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-brand-600/20 border-2 border-[#0A0A0A] flex items-center justify-center">
                        <span className="text-brand-400 text-[9px] font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span>+20 negocios ya lo usan</span>
                </div>
              </AnimateIn>
            </div>

            {/* WhatsApp Phone Mockup */}
            <AnimateIn animation="slide-right" delay={200} className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-[#25D366]/15 rounded-[3rem] blur-3xl scale-110 animate-glow-pulse" />

                {/* Phone frame */}
                <div className="relative w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#ECE5DD]">
                  {/* Status bar */}
                  <div className="bg-[#075E54] px-4 pt-3 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#25D366]/30 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-none">Asistente IA</p>
                        <p className="text-[#25D366] text-xs mt-0.5">En línea ahora</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="px-3 py-4 space-y-3 min-h-[320px]" style={{ background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23128C7E' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), #ECE5DD" }}>
                    {/* User msg */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-gray-800 text-xs leading-relaxed">Hola, quiero información sobre vuestros servicios</p>
                        <p className="text-gray-400 text-[10px] text-right mt-1">09:14</p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                        <p className="text-gray-800 text-xs leading-relaxed">¡Hola! 👋 Soy el asistente de Alejandro Morales. Estoy aquí para ayudarte.</p>
                        <p className="text-gray-800 text-xs leading-relaxed mt-1">¿Qué servicio te interesa?</p>
                        <p className="text-gray-400 text-[10px] text-right mt-1">09:14 ✓✓</p>
                      </div>
                    </div>

                    {/* User msg 2 */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-gray-800 text-xs leading-relaxed">El chatbot de WhatsApp</p>
                        <p className="text-gray-400 text-[10px] text-right mt-1">09:15</p>
                      </div>
                    </div>

                    {/* Bot response 2 */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                        <p className="text-gray-800 text-xs leading-relaxed">Perfecto. En 5-10 días tendrías un bot respondiendo 24/7 por ti. 🚀</p>
                        <p className="text-gray-800 text-xs leading-relaxed mt-1">¿Quieres que Alejandro te llame hoy?</p>
                        <p className="text-gray-400 text-[10px] text-right mt-1">09:15 ✓✓</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm">
                        <div className="flex gap-1 items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2 border-t border-gray-200">
                    <div className="flex-1 bg-white rounded-full px-4 py-2">
                      <p className="text-gray-400 text-xs">Escribe un mensaje...</p>
                    </div>
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/30 animate-float">
                  Responde en &lt; 3s
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PAIN — PROBLEMA
        ══════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50 dark:bg-[#080808]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateIn animation="fade-up">
              <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">El problema real</p>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                El 78% de los clientes compran al<br className="hidden md:block" />
                <span className="text-brand-600 dark:text-brand-400"> primero que responde</span>
              </h2>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={160}>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Mientras tardas en responder, tu competencia ya ha cerrado la venta. No es un problema de producto — es un problema de velocidad de respuesta.
              </p>
            </AnimateIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '12h', label: 'Tiempo medio de respuesta de las empresas', color: 'text-red-500' },
                { stat: '1/3', label: 'Mensajes de WhatsApp que nunca reciben respuesta', color: 'text-orange-500' },
                { stat: '5x', label: 'Más probabilidad de cerrar si respondes en menos de 1 minuto', color: 'text-[#25D366]' },
              ].map(({ stat, label, color }, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 80}>
                  <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-2xl p-6 hover:border-brand-200 dark:hover:border-brand-500/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <p className={`font-heading text-5xl font-black mb-3 ${color}`}>{stat}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{label}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FEATURES
        ══════════════════════════════════════════════ */}
        <section className="py-24 bg-white dark:bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <AnimateIn animation="fade-up">
                <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Qué hace el chatbot</p>
              </AnimateIn>
              <AnimateIn animation="fade-up" delay={80}>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                  Todo lo que necesita tu negocio<br />
                  <span className="text-shimmer">para no perder ni un lead</span>
                </h2>
              </AnimateIn>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon, titulo, descripcion }, i) => (
                <AnimateIn key={titulo} animation="fade-up" delay={i * 80}>
                  <div className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 bg-white dark:bg-[#0e0e0e] p-6 hover:border-[#25D366]/30 dark:hover:border-[#25D366]/25 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/8 transition-all duration-300 cursor-default">
                    <div className="h-0.5 w-full bg-gradient-to-r from-[#25D366] to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0" />
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 dark:bg-[#25D366]/8 flex items-center justify-center mb-4 text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 dark:text-white text-sm mb-2 tracking-tight group-hover:text-[#1ebe5d] transition-colors duration-200">{titulo}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{descripcion}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════ */}
        <section id="como-funciona" className="py-24 bg-gray-50 dark:bg-[#080808] relative overflow-hidden">
          <div className="absolute inset-0 dot-overlay opacity-0 dark:opacity-60 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <AnimateIn animation="fade-up">
                <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Proceso</p>
              </AnimateIn>
              <AnimateIn animation="fade-up" delay={80}>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  En marcha en menos de 2 semanas
                </h2>
              </AnimateIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-6 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px bg-gradient-to-r from-[#25D366]/40 via-brand-500/40 to-[#25D366]/40" />

              {pasos.map(({ num, titulo, descripcion }, i) => (
                <AnimateIn key={num} animation="fade-up" delay={i * 120}>
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#25D366] to-brand-600 flex items-center justify-center mb-5 shadow-lg shadow-green-500/20 group-hover:scale-110 group-hover:shadow-green-500/35 transition-all duration-300">
                      <span className="font-heading text-white text-sm font-extrabold">{num}</span>
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 dark:text-white text-base mb-3 tracking-tight group-hover:text-[#1ebe5d] transition-colors duration-200">{titulo}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light max-w-xs">{descripcion}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            STATS
        ══════════════════════════════════════════════ */}
        <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 via-brand-600/5 to-[#25D366]/5 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }, i) => (
                <AnimateIn key={label} animation="fade-up" delay={i * 80}>
                  <div className="text-center relative">
                    {i < stats.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/8" />
                    )}
                    <p className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight mb-2">{value}</p>
                    <p className="text-gray-400 text-sm font-light">{label}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            MID-PAGE CTA
        ══════════════════════════════════════════════ */}
        <section className="py-20 bg-white dark:bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-6">
            <AnimateIn animation="fade-up">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#075E54] to-[#128C7E] p-10 md:p-14 text-center">
                <div className="absolute inset-0 dot-overlay opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Sin compromiso
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                    ¿Cuántos clientes perdiste ayer por no responder a tiempo?
                  </h2>
                  <p className="text-green-100 text-base font-light mb-8 max-w-xl mx-auto">
                    Escríbeme ahora y en 24 horas te digo si el chatbot es lo que necesitas y cómo lo implementaríamos en tu negocio.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-white hover:bg-green-50 hover:scale-[1.03] active:scale-[0.98] text-[#075E54] font-bold px-8 py-4 rounded-xl transition-all duration-200 text-sm cursor-pointer shadow-xl"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hablar con Alejandro ahora
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════ */}
        <section className="py-24 bg-gray-50 dark:bg-[#080808]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-24">
                  <AnimateIn animation="slide-left">
                    <p className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Preguntas frecuentes</p>
                  </AnimateIn>
                  <AnimateIn animation="slide-left" delay={80}>
                    <h2 className="font-heading text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-5 leading-tight">
                      Tus dudas,<br />
                      <span className="text-[#25D366]">resueltas</span>
                    </h2>
                  </AnimateIn>
                  <AnimateIn animation="slide-left" delay={160}>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      ¿Tienes alguna pregunta que no está aquí? Escríbeme directamente.
                    </p>
                  </AnimateIn>
                  <AnimateIn animation="slide-left" delay={240}>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1ebe5d] transition-colors duration-200 cursor-pointer group"
                    >
                      <span className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors duration-200">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </span>
                      Pregúntame por WhatsApp
                    </a>
                  </AnimateIn>
                </div>
              </div>

              <div className="lg:col-span-3">
                <ChatbotFAQ />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════ */}
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 dot-overlay opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#25D366]/8 rounded-full blur-[80px] pointer-events-none animate-glow-pulse" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <AnimateIn animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#25D366]/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Respondo en menos de 24h
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={80}>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Deja de perder clientes<br />
                <span className="text-shimmer">por no responder a tiempo</span>
              </h2>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={160}>
              <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
                Escríbeme ahora y cuéntame cómo funciona tu negocio. Sin compromiso, sin formularios — solo una conversación directa.
              </p>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={240}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] hover:scale-[1.04] active:scale-[0.98] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-200 text-base cursor-pointer shadow-2xl shadow-green-500/30 hover:shadow-green-500/45"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero mi chatbot — Hablar ahora
              </a>
            </AnimateIn>
            <AnimateIn animation="fade-in" delay={360}>
              <p className="text-gray-600 text-xs mt-6">Sin permanencia · Propuesta personalizada en 24h · 100% sin compromiso</p>
            </AnimateIn>
          </div>
        </section>

      </main>

      {/* ── Minimal Footer ─────────────────────────── */}
      <footer className="bg-[#080808] border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© 2026 Alejandro Morales · Sistemas Digitales con IA</p>
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-150 cursor-pointer">Volver al inicio</a>
            <a href="mailto:alejandroaml0528@gmail.com" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-150 cursor-pointer">alejandroaml0528@gmail.com</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
