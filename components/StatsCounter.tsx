'use client'
import { useEffect, useRef, useState } from 'react'

interface Stat {
  prefix?: string
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { prefix: '+', value: 20,  suffix: '',  label: 'Proyectos realizados' },
  { prefix: '',  value: 24,  suffix: 'h', label: 'Tiempo máx. de respuesta' },
  { prefix: '',  value: 100, suffix: '%', label: 'Satisfacción de clientes' },
  { prefix: '+', value: 3,   suffix: '',  label: 'Años de experiencia' },
]

function Counter({ prefix = '', value, suffix = '', label }: Stat) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.disconnect()

          const duration = 1800
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 group">
      <span className="font-heading text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-gray-500 dark:text-gray-400 text-sm text-center font-light leading-snug">
        {label}
      </span>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-10 px-8 md:px-12 bg-white dark:bg-[#111] border border-gray-100 dark:border-white/8 rounded-3xl shadow-sm">
      {stats.map((s, i) => (
        <div key={i} className="relative flex flex-col items-center">
          {i < stats.length - 1 && (
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gray-200 dark:bg-white/8" />
          )}
          <Counter {...s} />
        </div>
      ))}
    </div>
  )
}
