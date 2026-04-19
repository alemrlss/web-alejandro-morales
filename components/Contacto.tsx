'use client'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@/components/Icons'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', servicio: '', mensaje: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Consulta web — ${form.servicio || 'General'} — ${form.nombre}`
    const body = [`Hola Alejandro,`, '', `Nombre: ${form.nombre}`, `Email: ${form.email}`, `Empresa: ${form.empresa || 'No especificada'}`, `Servicio: ${form.servicio || 'No especificado'}`, '', `Mensaje:`, form.mensaje].join('\n')
    window.location.href = `mailto:alejandroaml0528@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const field = 'w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-150 placeholder-gray-400 dark:placeholder-gray-600'

  return (
    <section id="contacto" className="py-24 bg-slate-50 dark:bg-[#0d0d0d] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Contacto</p>
          <h2 className="font-heading text-3xl md:text-4xl font-700 text-gray-900 dark:text-white mb-4 tracking-tight">Hablemos</h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
            Cuéntame sobre tu negocio y te digo cómo puedo ayudarte. Sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Form — 3 cols */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
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

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-150 text-sm cursor-pointer">
              Enviar mensaje
            </button>
            <p className="text-gray-400 dark:text-gray-600 text-xs text-center">Al enviar se abrirá tu cliente de email con el mensaje listo.</p>
          </form>

          {/* Info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="font-heading font-600 text-gray-900 dark:text-white text-lg mb-1 tracking-tight">Alejandro Morales</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Sistemas digitales con IA para que tu negocio crezca.</p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="mailto:alejandroaml0528@gmail.com" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-600/10 transition-colors duration-150">
                  <EnvelopeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150" />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-xs">Email</p>
                  <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">alejandroaml0528@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/34676017218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-600/10 transition-colors duration-150">
                  <PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150" />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-xs">WhatsApp / Teléfono</p>
                  <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">+34 676 017 218</span>
                </div>
              </a>
            </div>

            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold">Disponible</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Respondo en menos de 24 horas. Para urgencias, escríbeme directamente por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
