'use client'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@/components/Icons'
import AnimateIn from '@/components/AnimateIn'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', servicio: '', mensaje: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ nombre: '', email: '', empresa: '', servicio: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  const field = 'w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-150 placeholder-gray-400 dark:placeholder-gray-600'

  return (
    <section id="contacto" className="py-24 bg-slate-50 dark:bg-[#0d0d0d] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateIn animation="fade-up">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Contacto</p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="font-heading text-3xl md:text-4xl font-700 text-gray-900 dark:text-white mb-4 tracking-tight">Hablemos</h2>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={160}>
            <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
              Cuéntame sobre tu negocio y te digo cómo puedo ayudarte. Sin compromiso.
            </p>
          </AnimateIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Form — 3 cols */}
          <AnimateIn animation="slide-left" delay={100} className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-1">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Te responderé en menos de 24 horas. También te llegará una confirmación a tu email.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-brand-600 dark:text-brand-400 text-sm underline underline-offset-2 cursor-pointer">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-1.5 block">Nombre *</label>
                  <input id="nombre" type="text" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-1.5 block">Email *</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" className={field} />
                </div>
              </div>

              <div>
                <label htmlFor="empresa" className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-1.5 block">Empresa <span className="text-gray-400">(opcional)</span></label>
                <input id="empresa" type="text" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} placeholder="Nombre de tu empresa o negocio" className={field} />
              </div>

              <div>
                <label htmlFor="servicio" className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-1.5 block">Servicio de interés</label>
                <select id="servicio" value={form.servicio} onChange={(e) => setForm({ ...form, servicio: e.target.value })} className={field}>
                  <option value="">Selecciona un servicio</option>
                  <option value="Sistema de Captación de Clientes">Sistema de Captación de Clientes</option>
                  <option value="Sistema de Automatización con IA">Sistema de Automatización con IA</option>
                  <option value="Sistema Completo de Crecimiento">Sistema Completo de Crecimiento</option>
                  <option value="No estoy seguro todavía">No estoy seguro todavía</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-1.5 block">¿Cuál es tu mayor desafío ahora mismo? *</label>
                <textarea id="mensaje" required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} placeholder="Cuéntame sobre tu negocio y qué quieres lograr..." rows={5} className={`${field} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-600 hover:bg-brand-700 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 text-white font-medium py-3 rounded-lg transition-all duration-200 text-sm cursor-pointer shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 dark:text-red-400 text-xs text-center">Hubo un error al enviar. Intenta de nuevo o escríbeme directamente.</p>
              )}
            </form>
            )}
          </AnimateIn>

          {/* Info — 2 cols */}
          <AnimateIn animation="slide-right" delay={150} className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-heading font-600 text-gray-900 dark:text-white text-lg mb-1 tracking-tight">Alejandro Morales</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Sistemas digitales con IA para que tu negocio crezca.</p>
              </div>

              <div className="flex flex-col gap-3">
                <a href="mailto:alejandroaml0528@gmail.com" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-600/10 group-hover:scale-110 transition-all duration-200">
                    <EnvelopeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">Email</p>
                    <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">alejandroaml0528@gmail.com</span>
                  </div>
                </a>

                <a href="https://wa.me/34676017218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-600/10 group-hover:scale-110 transition-all duration-200">
                    <PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">WhatsApp / Teléfono</p>
                    <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">+34 676 017 218</span>
                  </div>
                </a>
              </div>

              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-xl p-4 hover:border-brand-200 dark:hover:border-brand-500/20 hover:shadow-md hover:shadow-brand-500/5 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold">Disponible</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  Respondo en menos de 24 horas. Para urgencias, escríbeme directamente por WhatsApp.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
