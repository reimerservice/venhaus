import { cn } from '@/lib/utils'

export type LegalTocEntry = { id: string; label: string }

/**
 * Ruhiges, textzentriertes Layout für Impressum & Datenschutz:
 * schmale Lesespalte, Sprungmarken als Seitenleiste (Desktop) bzw. Inhaltsliste (Mobil).
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  toc,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  intro?: React.ReactNode
  toc: LegalTocEntry[]
  updated?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <header className="flex max-w-3xl flex-col gap-4 border-b border-border pb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl">{title}</h1>
        {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        {updated && <p className="text-sm text-muted-foreground">{updated}</p>}
      </header>

      <div className="grid gap-12 pt-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="Inhaltsverzeichnis" className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Inhalt</p>
          <ol className="flex flex-col gap-1.5 border-l border-border text-sm">
            {toc.map((entry, i) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  className="-ml-px flex gap-2 border-l-2 border-transparent py-1 pl-4 leading-snug text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <span className="w-5 shrink-0 tabular-nums text-muted-foreground/70">{i + 1}.</span>
                  <span>{entry.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="legal-prose max-w-3xl">{children}</article>
      </div>
    </div>
  )
}

/** Ein nummerierter Abschnitt mit Sprungmarke. */
export function LegalSection({
  id,
  title,
  children,
  className,
}: {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-28 border-b border-border py-10 first:pt-0 last:border-b-0', className)}>
      <h2 className="mb-5 text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      {children}
    </section>
  )
}

/** Deutlich sichtbare Markierung für Angaben, die vor Veröffentlichung geprüft/eingetragen werden müssen. */
export function Pruefen({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded-sm bg-destructive/10 px-1 py-0.5 font-semibold text-destructive [font-family:var(--font-mono),ui-monospace,monospace] text-[0.9em]">
      [[ZU PRÜFEN: {children}]]
    </mark>
  )
}

/** Adressblock als Definitionsliste – ohne Karte, nur Typografie. */
export function AddressBlock({ children }: { children: React.ReactNode }) {
  return <address className="not-italic leading-relaxed">{children}</address>
}
