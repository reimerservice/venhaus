'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Gallery({ images, columns = 3 }: { images: GalleryImage[]; columns?: 2 | 3 | 4 }) {
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
          columns === 2 && 'sm:grid-cols-2',
          columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          columns === 4 && 'grid-cols-2 lg:grid-cols-4',
        )}
      >
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group flex w-full flex-col gap-2 text-left focus-visible:outline-none"
              aria-label={`${img.caption} – Bild vergrößern`}
            >
              <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted ring-offset-background group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </span>
              <span className="text-sm leading-snug text-muted-foreground">
                {img.title && <span className="block font-semibold text-foreground">{img.title}</span>}
                {img.caption}
              </span>
            </button>
          </li>
        ))}
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
