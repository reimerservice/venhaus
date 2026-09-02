'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { ParallaxTile } from '@/components/parallax'

export function Gallery({
  images,
  columns = 3,
  featured = false,
}: {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  /** Erstes Bild großformatig (2×2), die übrigen als Raster daneben */
  featured?: boolean
}) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  return (
    <>
      <ul
        className={cn(
          'grid gap-4',
          !featured && columns === 2 && 'sm:grid-cols-2',
          !featured && columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          !featured && columns === 4 && 'grid-cols-2 lg:grid-cols-4',
          featured && 'grid-cols-2 lg:grid-cols-4',
        )}
      >
        {images.map((img, i) => {
          const isLead = featured && i === 0
          const tile = (
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group flex h-full w-full flex-col gap-2 text-left focus-visible:outline-none"
                aria-label={`${img.caption} – Bild vergrößern`}
              >
                <span
                  className={cn(
                    'relative block w-full overflow-hidden bg-muted ring-offset-background group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2',
                    isLead ? 'flex-1 rounded-[2rem_2rem_2rem_0.75rem] aspect-[4/3] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[4/3] rounded-2xl',
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes={isLead ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {isLead && (
                    <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur">
                      {images.length} Bilder
                    </span>
                  )}
                </span>
                <span className={cn('leading-snug text-muted-foreground', isLead ? 'text-base' : 'text-sm')}>
                  {img.title && <span className="block font-semibold text-foreground">{img.title}</span>}
                  {img.caption}
                </span>
              </button>
          )
          return (
            <li key={img.src} className={cn(isLead && 'col-span-2 row-span-2')}>
              {/* Kleine Kacheln bewegen sich minimal unterschiedlich schnell; das Leitbild steht ruhig. */}
              {isLead ? tile : <ParallaxTile index={i} amount={14} className="h-full">{tile}</ParallaxTile>}
            </li>
          )
        })}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].caption}
          className="fixed inset-0 z-[100] flex flex-col bg-foreground/95 text-primary-foreground"
          onClick={close}
        >
          <div className="flex items-center justify-end p-3">
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-full hover:bg-primary-foreground/10"
              aria-label="Schließen"
            >
              <X className="size-6" aria-hidden />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-14" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-2 inline-flex size-11 items-center justify-center rounded-full hover:bg-primary-foreground/10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="size-7" aria-hidden />
            </button>
            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={images[active].src}
                alt={images[active].caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-2 inline-flex size-11 items-center justify-center rounded-full hover:bg-primary-foreground/10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="size-7" aria-hidden />
            </button>
          </div>
          <p className="p-5 text-center text-sm text-primary-foreground/80">
            {images[active].caption}{' '}
            <span className="text-primary-foreground/50">
              · {active + 1} / {images.length}
            </span>
          </p>
        </div>
      )}
    </>
  )
}
