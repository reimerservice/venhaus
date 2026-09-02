import Image from 'next/image'
import { Parallax } from '@/components/parallax'
import { cn } from '@/lib/utils'

/**
 * Großformatige Bildsektion als ruhiger Bruch zwischen Textabschnitten.
 * Das Bild bewegt sich beim Scrollen langsamer als die Seite (Parallax ≈ 15 %).
 * Optionaler kurzer Text unten links – nur ein Satz, keine Absätze.
 */
export function ImageBreak({
  src,
  alt,
  caption,
  position,
  height = 'md',
  className,
}: {
  src: string
  alt: string
  caption?: string
  position?: string
  height?: 'md' | 'lg'
  className?: string
}) {
  return (
    <section aria-label={caption ?? alt} className={cn('relative', className)}>
      <Parallax
        amount={15}
        scale={1.15}
        className={cn('w-full', height === 'md' ? 'h-[52vw] max-h-[520px] min-h-[280px]' : 'h-[64vw] max-h-[680px] min-h-[340px]')}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </Parallax>
      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <p className="inline-block max-w-md rounded-[1.5rem_1.5rem_1.5rem_0.375rem] bg-background/90 px-5 py-3 font-display text-lg font-semibold text-foreground backdrop-blur sm:text-xl">
              {caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
