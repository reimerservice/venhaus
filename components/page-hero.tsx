import Image from 'next/image'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: string
  intro?: string
  image?: { src: string; alt: string }
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className={cn('grid items-center gap-10', image && 'lg:grid-cols-[1.1fr_0.9fr]')}>
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
          {children}
        </div>
        {image && (
          <div className="relative mx-auto aspect-[5/4] w-full max-w-lg lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="blob object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}

export function Section({
  children,
  className,
  tone = 'default',
  id,
}: {
  children: React.ReactNode
  className?: string
  tone?: 'default' | 'tinted' | 'primary'
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 lg:py-24',
        tone === 'tinted' && 'bg-secondary/60',
        tone === 'primary' && 'bg-primary text-primary-foreground',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('mb-10 flex max-w-2xl flex-col gap-3', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  )
}

/** Long-form article text with comfortable measure. */
export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-3xl text-base leading-relaxed text-foreground/85 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground sm:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-primary [&_strong]:font-bold [&_strong]:text-foreground [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:font-display [&_blockquote]:text-xl [&_blockquote]:text-foreground',
        className,
      )}
    >
      {children}
    </div>
  )
}
