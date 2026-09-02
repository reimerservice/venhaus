import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { PackingChecklist, type PackGroup } from '@/components/packing-checklist'
import { AnchorNav, PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Anmeldung',
  description:
    'Anmeldung, Eingewöhnung nach dem Berliner Modell, Aufnahmekriterien und Packliste für die Kita St. Vitus Venhaus.',
}

type Step = { title: string; when: string; text: React.ReactNode }

const steps: Step[] = [
  {
    title: 'Online anmelden',
    when: 'Im Herbst',
    text: (
      <>
        Die Anmeldung findet im Herbst statt. Sie läuft zentral für alle Einrichtungen der Samtgemeinde Spelle und
        erfolgt online.{' '}
        <span className="font-semibold text-destructive">
          [[ZU PRÜFEN: Link zum Anmeldeportal der Samtgemeinde und genauer Anmeldezeitraum]]
        </span>
      </>
    ),
  },
  {
    title: 'Platzvergabe nach Aufnahmekriterien',
    when: 'Nach Anmeldeschluss',
    text: (
      <>
        Die Vergabe der Plätze richtet sich nach festgelegten Aufnahmekriterien.{' '}
        <a href="/docs/aufnahmekriterien.pdf" className="font-semibold text-primary underline-offset-4 hover:underline">
          Aufnahmekriterien 2025/2026 (PDF, 108 KB)
        </a>{' '}
        <span className="font-semibold text-destructive">[[ZU PRÜFEN: Gibt es eine aktuellere Fassung?]]</span>
      </>
    ),
  },
  {
    title: 'Aufnahmegespräch und Infoabend',
    when: 'Vor dem Start',
    text: 'Zu Beginn der Krippen- und Kindergartenzeit findet ein Aufnahmegespräch zwischen den zukünftigen Gruppenerzieherinnen und den Eltern statt. Ein gemeinsamer Informationsabend für alle neuen Eltern stellt unsere Arbeit vor und beantwortet offene Fragen.',
  },
  {
    title: 'Eingewöhnung nach dem Berliner Modell',
    when: 'Die ersten Wochen',
    text: 'Eine allmähliche Eingewöhnung, begleitet von einem Elternteil und einer Erzieherin als fester Bezugsperson. Wir gehen auf die individuellen Bedürfnisse und Kita-Vorerfahrungen ein – einen festen Ablaufplan gibt es deshalb nicht.',
  },
  {
    title: 'Dein erster richtiger Tag bei uns',
    when: 'Und dann ist er da',
    text: 'Wichtig ist, dass ein Elternteil in den ersten Wochen telefonisch erreichbar ist und jemand das Kind in den ersten Tagen früher abholen könnte – auch wenn das eher selten passiert.',
  },
]

const packliste: PackGroup[] = [
  {
    title: 'Für alle Kinder',
    hint: 'Bleibt in der Kita an der Garderobe',
    items: ['Regenkleidung: Gummistiefel, Matschhose und Jacke oder Overall', 'Sportbeutel mit Hose, Shirt und Sportschuhen', 'Hausschuhe'],
  },
  {
    title: 'Für Wickelkinder',
    hint: 'Wird bei Bedarf nachgefüllt',
    items: ['Eine große Packung Windeln', 'Feuchttücher', 'Ein großes Handtuch'],
  },
  {
    title: 'Jeden Tag neu',
    hint: 'Getränke sind vorhanden',
    items: ['Eine Brotdose fürs Frühstück', 'Ein kleiner Snack, falls das Kind länger als 14:30 Uhr bleibt'],
  },
]

export default function AnmeldungPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Kita"
        title="Anmeldung und die ersten Tage"
        intro="Von der Online-Anmeldung im Herbst bis zum ersten richtigen Kita-Tag: Hier finden Sie den Ablauf in fünf Schritten, die Aufnahmekriterien und die Packliste."
        image={{ src: '/images/anmeldung.jpg', alt: 'Kind mit Rucksack auf dem Weg in die Kita' }}
      >
        <AnchorNav items={[{ href: '#ablauf', label: 'Ablauf' }, { href: '#packliste', label: 'Packliste' }]} />
      </PageHero>

      <Section id="ablauf">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="So läuft es ab" title="In fünf Schritten zu uns" className="mb-0" />
            <Reveal delay={100} className="flex flex-wrap gap-3">
              <a
                href="/docs/aufnahmekriterien.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <FileText className="size-4" aria-hidden /> Aufnahmekriterien (PDF)
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/70"
              >
                Fragen? Kontakt <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <ol className="flex flex-col">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={Math.min(i * 70, 210)}
                className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr]"
              >
                <span
                  aria-hidden
                  className="font-display text-5xl font-semibold leading-none text-primary/80 sm:text-6xl"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.when}</p>
                  <h3 className="text-2xl font-semibold leading-tight">{s.title}</h3>
                  <p className="text-[1.0625rem] leading-[1.7] text-foreground/85">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="packliste" tone="tinted">
        <SectionHeading
          eyebrow="Packliste"
          title="Was braucht mein Kind?"
          intro="Jedes Kind hat einen festen Platz an unserer Garderobe. Auch Matschsachen bleiben bei uns, sodass wir gut eingepackt auch bei feuchten Witterungsverhältnissen nach draußen gehen können."
        />
        <PackingChecklist groups={packliste} />
        <Reveal className="mt-10">
          <Prose>
            <p className="text-sm text-muted-foreground">
              Bitte melden Sie sich kurz, falls Sie Ihrem Kind gekühlte Lebensmittel mitgeben. Diese bewahren wir bis zum
              Verzehr in unserem Kühlschrank auf.
            </p>
          </Prose>
        </Reveal>
      </Section>
    </>
  )
}
