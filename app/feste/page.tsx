import type { Metadata } from 'next'
import { Cake, PartyPopper, School } from 'lucide-react'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Feste und Feiern',
  description: 'Kirchliche Feste, Kindergeburtstage, Karneval und das Abschiedsfest in der Kita St. Vitus Venhaus.',
}

const kirchenjahr = [
  { month: 'Oktober', title: 'Erntedank', text: 'Das erste Fest im Kita-Jahr: Den Kindern wird der bewusste Umgang mit den geschenkten Gaben (Getreide, Obst etc.) nahegebracht.' },
  { month: 'November', title: 'St. Martin & Hl. Elisabeth', text: 'Die Kinder hören die Geschichte vom heiligen Martin und seiner guten Tat. Gemeinsam werden Laternen gebastelt. Die Kinder lernen, was es bedeutet zu teilen. In einer Katechese hören sie außerdem von der heiligen Elisabeth.' },
  { month: 'Advent', title: 'Adventszeit & Nikolaus', text: 'Wir hören von Maria und Josef auf dem Weg nach Bethlehem. Jeden Tag wird der Adventskranz entzündet und ein Kind öffnet eine Tür des Adventskalenders. Natürlich kommt auch der Nikolaus mit einer kleinen Überraschung.' },
  { month: 'Januar', title: 'Heilige Drei Könige', text: 'Im neuen Jahr bekommen wir Besuch von den Heiligen Drei Königen.' },
  { month: 'Fastenzeit', title: 'Aschermittwoch bis Ostern', text: 'Mit dem Aschermittwoch beginnt die Fastenzeit. Zu Palmsonntag werden Palmstöcke gebastelt, die die Kinder bei der Prozession tragen dürfen. Während der Messe findet in unserer Einrichtung eine Kinderkirche statt.' },
  { month: 'Mai', title: 'Marienmonat', text: 'Ein Wortgottesdienst gemeinsam mit den Eltern – Maria, die Mutter Jesu, steht im Mittelpunkt.' },
  { month: 'Fronleichnam', title: 'Prozession', text: 'Die Kindergartenkinder begleiten die Prozession der Kirchengemeinde St. Vitus Venhaus von der Kluse am Parkplatz bis zur Kirche.' },
]

export default function FestePage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Feste und Feiern in unserer Kita"
        intro="In unserer Einrichtung feiern wir die Feste des kirchlichen Jahreskreises. Die Kinder hören Geschichten aus dem Leben Jesu, die ihnen kindgerecht und altersentsprechend nähergebracht werden."
      />

      <Section>
        <SectionHeading eyebrow="Kirchliche Feste" title="Das Kita-Jahr im Rhythmus des Kirchenjahres" />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kirchenjahr.map((f) => (
            <li key={f.title} className="flex flex-col gap-2 rounded-3xl bg-card p-6 ring-1 ring-border">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{f.month}</span>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/85">{f.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="tinted">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-4xl bg-card p-7 ring-1 ring-border">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Cake className="size-6" aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold">Kindergeburtstag</h2>
            <p className="leading-relaxed text-foreground/85">
              Der Geburtstag des Kindes ist ein ganz besonderer Tag. Ein Jahr älter werden bedeutet auch größer werden und
              manchmal auch, eine neue Rolle einzunehmen. Diesen Tag möchten wir gemeinsam mit den Kindern feiern.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-4xl bg-card p-7 ring-1 ring-border">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <School className="size-6" aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold">Abschiedsfest</h2>
            <p className="leading-relaxed text-foreground/85">
              Am Ende des Kindergartenjahres findet für die angehenden Schulkinder das Abschiedsfest statt. Nach einem
              gemeinsamen Wortgottesdienst wartet auf die Kinder ein Theaterspiel, welches traditionell von den Eltern
              vorgeführt wird – ein besonderes Highlight.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-4xl bg-card p-7 ring-1 ring-border">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <PartyPopper className="size-6" aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold">Karneval & mehr</h2>
            <p className="leading-relaxed text-foreground/85">
              Im Februar beginnt die Karnevalszeit. Gruppenräume und Halle werden bunt geschmückt, am Rosenmontag kommen
              die Kinder verkleidet und es wird ausgiebig gefeiert. Im Wechsel finden einmal jährlich besondere Feste statt:
              Großelternfest, Familiennachmittag oder Adventsstunde im Kindergarten.
            </p>
          </div>
        </div>
        <Prose className="mt-10">
          <p>
            Videos zu einigen unserer Feste – von der Martinslegende bis Ostern – finden Sie in unserer{' '}
            <a href="/mediathek" className="font-semibold text-primary underline-offset-4 hover:underline">
              Mediathek
            </a>
            .
          </p>
        </Prose>
      </Section>
    </>
  )
}
