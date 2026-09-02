'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Bewegt seinen Inhalt beim Scrollen langsamer als den Rest der Seite.
 *
 * - Gebunden an das eigene Sektions-Element (useScroll mit target), kein globaler Scroll-Listener.
 * - Nur transform/translate3d, kein top/margin/background-position → läuft auf der GPU.
 * - `amount` = maximaler Versatz in Prozent der Element-Höhe (Hero 15–20, Seitenköpfe ≤ 10).
 * - `scale` überhöht das Bild, damit beim Versatz keine leeren Ränder entstehen.
 * - prefers-reduced-motion: Parallax komplett aus, Bild steht statisch.
 * - Viewports < 768 px: Versatz halbiert (oder aus, wenn `mobile="off"`).
 * - Der Inhalt wird serverseitig gerendert; ohne JS steht das Bild einfach still.
 */
export function Parallax({
  children,
  amount = 15,
  scale = 1.15,
  mobile = 'half',
  className,
}: {
  children: React.ReactNode
  /** Versatz in % der Element-Höhe */
  amount?: number
  /** Überhöhung des Inhalts, damit keine Ränder sichtbar werden */
  scale?: number
  /** Verhalten unter 768 px */
  mobile?: 'half' | 'off'
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [factor, setFactor] = useState(1)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const apply = () => setFactor(mq.matches ? (mobile === 'off' ? 0 : 0.5) : 1)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [mobile])

  // Fortschritt 0 → 1, während das Element durch den Viewport wandert
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const effective = reduce ? 0 : amount * factor
  const y = useTransform(scrollYProgress, [0, 1], [`${-effective / 2}%`, `${effective / 2}%`])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        aria-hidden={false}
        style={{ y, scale: effective === 0 ? 1 : scale }}
        className="absolute inset-0 will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

/**
 * Gestaffelter Mini-Versatz für Bildkacheln in einem Raster.
 * `index` bestimmt Richtung und Stärke, sehr subtil (max. ±amount px).
 */
export function ParallaxTile({
  children,
  index,
  amount = 18,
  className,
}: {
  children: React.ReactNode
  index: number
  /** maximaler Versatz in px */
  amount?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [factor, setFactor] = useState(1)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const apply = () => setFactor(mq.matches ? 0 : 1)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Vier Geschwindigkeitsstufen, abwechselnd nach oben/unten
  const steps = [1, -0.6, 0.35, -1, 0.7, -0.35]
  const dir = steps[index % steps.length]
  const px = reduce ? 0 : amount * dir * factor
  const y = useTransform(scrollYProgress, [0, 1], [-px, px])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
