'use client'
import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
  as?: keyof JSX.IntrinsicElements
}

export default function AnimateIn({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const run = () => el.classList.add('in-view')
          delay ? setTimeout(run, delay) : run()
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`anim-${animation} ${className}`}>
      {children}
    </Tag>
  )
}
