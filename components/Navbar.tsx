'use client'
import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@/components/Icons'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const links = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#para-quien', label: 'Para quién' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/85 backdrop-blur-md border-b border-gray-200/60 dark:border-white/5 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading font-600 text-gray-900 dark:text-white text-base tracking-tight select-none">
          Alejandro Morales
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-gray-500 dark:text-gray-400 hover:text-brand-700 dark:hover:text-brand-300 text-sm font-medium transition-colors duration-150 cursor-pointer"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-150 cursor-pointer"
          >
            {theme === 'dark'
              ? <SunIcon className="w-4.5 h-4.5" />
              : <MoonIcon className="w-4.5 h-4.5" />
            }
          </button>

          <a
            href="https://wa.me/34676017218"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            Agenda tu asesoría
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 cursor-pointer"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 cursor-pointer"
          >
            {menuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-3 bg-white/95 dark:bg-black/95 border-t border-gray-100 dark:border-white/5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 dark:text-gray-400 text-sm font-medium py-2 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/34676017218"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center transition-colors duration-150 cursor-pointer"
          >
            Agenda tu asesoría
          </a>
        </div>
      )}
    </nav>
  )
}
