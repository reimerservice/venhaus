import type { Metadata } from 'next'
import { Baby, Backpack, CalendarCheck, FileText, Sandwich, Umbrella } from 'lucide-react'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Anmeldung',
  description: 'Anmeldung, Eingewöhnung nach dem Berliner Modell, Aufnahmekriterien und Packliste für die Kita St. Vitus Venhaus.',
}

const packliste = [
  {
    icon: Umbrella,
    title: 'Für alle Kinder',
    items: ['Regenkleidung (Gummistiefel, Hose und Jacke oder Overall)', 'Sportbeutel mit Hose, Shirt und Sportschuhen', 'Hausschuhe'],
  },
  {
    icon: Baby,
    title: 'Für Wickelkinder',
    items: ['Eine große Packung Windeln', 'Feuchttücher', 'Ein großes Handtuch'],
  },
  {
    icon: Sandwich,
    title: 'Und jeden Tag neu',
    items: ['Eine Brotdose', 'Ein kleiner Snack, falls das Kind länger als 14:30 Uhr bleibt', 'Getränke sind vorhanden'],
  },
]

export default function AnmeldungPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Kita"
        title="Anmeldung"
        intro="Die Anmeldung findet im Herbst statt. Sie läuft zentral für alle Einrichtungen der Samtgemeinde Spelle und erfolgt online."
        image={{ src: '/images/anmeldung.jpg', alt: 'Kind mit Rucksack auf dem Weg in die Kita' }}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="/docs/aufnahmekriterien.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <FileText className="size-4" aria-hidden /> Aufnahmekriterien (PDF)
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground transition-colors hover:bg-secondary/70"
          >
            Fragen? Kontakt aufnehmen
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Eingewöhnung"
            title="Und dann ist er da: Dein erster Tag bei uns!"
          />
          <Prose>
            <p>
              Wir arbeiten grundsätzlich nach dem sogenannten <strong>Berliner Modell</strong>. Das bedeutet im Prinzip,
              dass es eine allmähliche Eingewöhnung gibt, die von einem Elternteil und einer Erzieherin als feste
              Bezugsperson begleitet wird.
            </p>
            <p>
              Allerdings gehen wir auf die individuellen Bedürfnisse und Kita-Vorerfahrungen ein, sodass es keinen festen
              Ablaufplan gibt. Wichtig ist, dass ein Elternteil in den ersten Wochen telefonisch erreichbar ist und jemand
              das Kind in den ersten Tagen früher abholen könnte – auch wenn das eher selten passiert.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="tinted">
        <SectionHeading
          eyebrow="Aufnahmekriterien"
          title="Wer bekommt einen Platz?"
          intro="Die Vergabe der Plätze richtet sich nach festgelegten Aufnahmekriterien, die Sie hier als PDF herunterladen können."
        />
        <a
          href="/docs/aufnahmekriterien.pdf"
          className="flex items-center gap-5 rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-primary sm:max-w-xl"
        >
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <CalendarCheck className="size-7" aria-hidden />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-lg font-semibold">Aufnahmekriterien 2025/2026</span>
            <span className="text-sm text-muted-foreground">PDF herunterladen</span>
          </span>
        </a>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Kindergarten Packliste"
          title="Was braucht mein Kind?"
          intro="Jedes Kind hat einen festen Platz an unserer Garderobe. Auch Matschsachen bleiben bei uns, sodass wir gut eingepackt auch bei feuchten Witterungsverhältnissen nach draußen gehen können."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {packliste.map(({ icon: Icon, title, items }) => (
            <li key={title} className="flex flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-border">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/85">
                {items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <Backpack className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          Bitte melden Sie sich kurz, falls Sie Ihrem Kind gekühlte Lebensmittel mitgeben. Diese bewahren wir bis zum
          Verzehr in unserem Kühlschrank auf.
        </p>
      </Section>
    </>
  )
}
