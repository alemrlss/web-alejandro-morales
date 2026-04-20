export default function Footer() {
  const servicios = [
    { label: 'Sistema de Captación de Clientes', href: '#servicios' },
    { label: 'Sistema de Automatización con IA', href: '#servicios' },
    { label: 'Sistema Completo de Crecimiento', href: '#servicios' },
    { label: 'Chatbot de WhatsApp con IA para agencias de viajes', href: '/chatbot-whatsapp-con-ia' },
  ]

  const nav = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Para quién', href: '#para-quien' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-[#080808] border-t border-gray-200 dark:border-white/5 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src="/logo-negro.png" alt="AM." className="h-11 w-auto mb-2 block dark:hidden" />
            <img src="/logo.png" alt="AM." className="h-11 w-auto mb-2 hidden dark:block" />
            <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed mb-4">
              Sistemas digitales con IA para que tu negocio crezca.
            </p>
            <a href="mailto:alejandroaml0528@gmail.com" className="text-brand-600 dark:text-brand-400 text-xs hover:underline cursor-pointer">
              alejandroaml0528@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">Servicios</h4>
            <div className="flex flex-col gap-2.5">
              {servicios.map((s) => (
                <a key={s.label} href={s.href} className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 text-sm transition-colors duration-150 cursor-pointer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">Navegación</h4>
            <div className="flex flex-col gap-2.5">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 text-sm transition-colors duration-150 cursor-pointer">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 dark:text-gray-600 text-xs">© 2026 AM<span className="text-brand-500">.</span> Todos los derechos reservados.</p>
          <p className="text-gray-300 dark:text-gray-700 text-xs">España · Disponible globalmente</p>
        </div>
      </div>
    </footer>
  )
}
