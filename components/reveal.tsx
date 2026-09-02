'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Verzögerung in ms – für gestaffelte Reveals */
  delay?: number
  /** Element-Typ (div, li, section, …) */
  as?: ElementType
  id?: string
}

/**
 * Dezenter Scroll-Reveal. Das Element startet leicht abgesenkt und transparent
 * und blendet ein, sobald es in den Viewport kommt. Läuft nur einmal.
 * `prefers-reduced-motion` wird in globals.css berücksichtigt (kein Effekt).
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div', id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            io.unobserve(el)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn('reveal', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
