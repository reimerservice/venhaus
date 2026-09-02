import { Clock, Coffee, Moon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/page-hero'
import { openingHours } from '@/lib/site-data'

export function OpeningHours() {
  return (
    <Section tone="tinted" id="oeffnungszeiten">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Öffnungszeiten"
          title="Verlässliche Zeiten für den Familienalltag"
          intro="Unsere Kernzeiten können Sie flexibel um Früh- und Spätdienste ergänzen – buchbar in halben Stunden."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {openingHours.map((h) => (
            <div key={h.group} className="flex flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-border">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Clock className="size-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold">{h.group}</h3>
              </div>
              <p className="font-display text-3xl text-primary">{h.core}</p>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {h.extra.map((e) => (
                  <li key={e} className="flex items-center gap-2">
                    {e.startsWith('7') ? (
                      <Coffee className="size-4 shrink-0 text-primary" aria-hidden />
                    ) : (
                      <Moon className="size-4 shrink-0 text-primary" aria-hidden />
                    )}
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Die Schließzeiten des Jahres finden Sie in unserer{' '}
            <a href="/docs/ferienplanung-2026.pdf" className="font-semibold text-primary underline-offset-4 hover:underline">
              Ferienplanung 2026 (PDF)
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}
