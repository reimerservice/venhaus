import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type PageHeroProps = {
  eyebrow: string
  title: string
  intro?: string
  image?: { src: string; alt: string; position?: string }
  children?: React.ReactNode
}

/**
 * Kompakter Seitenkopf: Text links, Bild rechts in warmem Zuschnitt.
 * Jede Unterseite bekommt ein eigenes Motiv aus dem Bestand.
 */
export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <div
        className={cn(
          'grid items-center gap-8 border-b border-border pb-10 lg:gap-14 lg:pb-14',
          image && 'lg:grid-cols-[1.15fr_0.85fr]',
        )}
      >
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          {intro && <p className="text-lg leading-relaxed text-pretty text-muted-foreground">{intro}</p>}
          {children}
        </Reveal>
        {image && (
          <Reveal delay={120} className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_0.75rem] lg:aspect-[5/4]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={image.position ? { objectPosition: image.position } : undefined}
              priority
            />
          </Reveal>
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
        'scroll-mt-24 py-16 lg:py-24',
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
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  as?: 'h2' | 'h3'
  className?: string
}) {
  return (
    <Reveal className={cn('mb-10 flex max-w-2xl flex-col gap-3', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <Tag className="text-3xl font-semibold text-balance sm:text-4xl">{title}</Tag>
      {intro && <p className="text-lg leading-relaxed text-pretty text-muted-foreground">{intro}</p>}
    </Reveal>
  )
}

/** Fließtext mit klarer Hierarchie und komfortabler Zeilenlänge. */
export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-3xl text-[1.0625rem] leading-[1.7] text-foreground/85',
        '[&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-balance [&_h2]:text-foreground sm:[&_h2]:text-3xl',
        '[&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground',
        '[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-base [&_h4]:font-bold [&_h4]:text-foreground',
        '[&_p]:mb-5 [&_ul]:mb-5 [&_ol]:mb-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5',
        '[&_ul>li]:list-disc [&_ol>li]:list-decimal [&_li]:marker:text-primary [&_li]:marker:font-bold',
        '[&_strong]:font-bold [&_strong]:text-foreground',
        '[&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline',
        '[&_.lead]:text-xl [&_.lead]:leading-relaxed [&_.lead]:text-foreground',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Hervorgehobene Kernaussage innerhalb eines Fließtextes. */
export function PullQuote({
  children,
  cite,
  tone = 'accent',
  className,
}: {
  children: React.ReactNode
  cite?: string
  tone?: 'accent' | 'secondary'
  className?: string
}) {
  return (
    <Reveal
      as="blockquote"
      className={cn(
        'my-10 rounded-[2rem_2rem_2rem_0.5rem] px-7 py-6 font-display text-2xl leading-snug text-balance sm:text-[1.75rem]',
        tone === 'accent' && 'bg-accent text-accent-foreground',
        tone === 'secondary' && 'bg-secondary text-secondary-foreground',
        className,
      )}
    >
      <p>{children}</p>
      {cite && <footer className="mt-3 font-sans text-sm font-bold uppercase tracking-wider opacity-80">{cite}</footer>}
    </Reveal>
  )
}

/** Kleine Sprungmarken-Leiste, z. B. für Gruppen oder Kapitel. */
export function AnchorNav({ items, label = 'Direkt zu' }: { items: { href: string; label: string }[]; label?: string }) {
  return (
    <nav aria-label={label} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {it.label}
        </a>
      ))}
    </nav>
  )
}
