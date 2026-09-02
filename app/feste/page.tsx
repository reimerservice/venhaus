import type { Metadata } from 'next'
import { Cake, PartyPopper, School } from 'lucide-react'
import { PageHero, Prose, PullQuote, Section, SectionHeading } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Feste und Feiern',
  description: 'Kirchliche Feste, Kindergeburtstage, Karneval und das Abschiedsfest in der Kita St. Vitus Venhaus.',
}

type Fest = {
  month: string
  title: string
  text: string
  kind: 'kirchlich' | 'weltlich'
}

// Chronologisch im Kita-Jahr (Beginn August/September). Inhalte laut Original-Website.
const jahreslauf: Fest[] = [
  {
    month: 'Oktober',
    title: 'Erntedank',
    kind: 'kirchlich',
    text: 'Das erste Fest im Kita-Jahr: Den Kindern wird der bewusste Umgang mit den geschenkten Gaben (Getreide, Obst etc.) nahegebracht.',
  },
  {
    month: 'November',
    title: 'St. Martin & Heilige Elisabeth',
    kind: 'kirchlich',
    text: 'Die Kinder hören die Geschichte vom heiligen Martin und seiner guten Tat. Gemeinsam werden Laternen gebastelt. Die Kinder lernen, was es bedeutet zu teilen. In einer Katechese hören sie außerdem von der heiligen Elisabeth.',
  },
  {
    month: 'Dezember',
    title: 'Adventszeit & Nikolaus',
    kind: 'kirchlich',
    text: 'Wir hören von Maria und Josef auf dem Weg nach Bethlehem. Jeden Tag wird der Adventskranz entzündet und ein Kind öffnet eine Tür des Adventskalenders. Natürlich kommt auch der Nikolaus mit einer kleinen Überraschung.',
  },
  {
    month: 'Januar',
    title: 'Heilige Drei Könige',
    kind: 'kirchlich',
    text: 'Im neuen Jahr bekommen wir Besuch von den Heiligen Drei Königen.',
  },
  {
    month: 'Februar',
    title: 'Karneval',
    kind: 'weltlich',
    text: 'Im Februar beginnt die Karnevalszeit. Gruppenräume und Halle werden bunt geschmückt, am Rosenmontag kommen die Kinder verkleidet und es wird ausgiebig gefeiert.',
  },
  {
    month: 'Fastenzeit',
    title: 'Aschermittwoch bis Ostern',
    kind: 'kirchlich',
    text: 'Mit dem Aschermittwoch beginnt die Fastenzeit. Zu Palmsonntag werden Palmstöcke gebastelt, die die Kinder bei der Prozession tragen dürfen. Während der Messe findet in unserer Einrichtung eine Kinderkirche statt.',
  },
  {
    month: 'Mai',
    title: 'Marienmonat',
    kind: 'kirchlich',
    text: 'Ein Wortgottesdienst gemeinsam mit den Eltern – Maria, die Mutter Jesu, steht im Mittelpunkt.',
  },
  {
    month: 'Juni',
    title: 'Fronleichnam',
    kind: 'kirchlich',
    text: 'Die Kindergartenkinder begleiten die Prozession der Kirchengemeinde St. Vitus Venhaus von der Kluse am Parkplatz bis zur Kirche.',
  },
  {
    month: 'Sommer',
    title: 'Abschiedsfest der Schulkinder',
    kind: 'weltlich',
    text: 'Am Ende des Kindergartenjahres findet für die angehenden Schulkinder das Abschiedsfest statt. Nach einem gemeinsamen Wortgottesdienst wartet auf die Kinder ein Theaterspiel, welches traditionell von den Eltern vorgeführt wird – ein besonderes Highlight.',
  },
]

export default function FestePage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Feste und Feiern im Jahreslauf"
        intro="In unserer Einrichtung feiern wir die Feste des kirchlichen Jahreskreises. Die Kinder hören Geschichten aus dem Leben Jesu, die ihnen kindgerecht und altersentsprechend nähergebracht werden."
        image={{ src: '/images/mediathek/martinslegende.png', alt: 'Szene aus der Martinslegende, gespielt in der Kita', position: 'center' }}
      />

      {/* Jahreslauf als Zeitachse */}
      <Section>
        <SectionHeading
          eyebrow="Ein Jahr in der Kita"
          title="Von Erntedank bis zum Abschiedsfest"
          intro="Chronologisch durch das Kita-Jahr: kirchliche Feste in Grün, weitere Feiern in Gelb."
        />
        <ol className="relative flex flex-col gap-0 border-l-2 border-border pl-8 sm:pl-12">
          {jahreslauf.map((f, i) => (
            <Reveal
              key={f.title}
              as="li"
              delay={Math.min(i * 60, 240)}
              className="relative pb-12 last:pb-0"
            >
              {/* Marker auf der Linie */}
              <span
                aria-hidden
                className={cn(
                  'absolute -left-[calc(2rem+7px)] top-1.5 size-3.5 rounded-full ring-4 ring-background sm:-left-[calc(3rem+7px)]',
                  f.kind === 'kirchlich' ? 'bg-primary' : 'bg-accent',
                )}
              />
              <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary sm:pt-0.5">{f.month}</p>
                <div className="flex max-w-2xl flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-balance">{f.title}</h3>
                  <p className="leading-relaxed text-foreground/85">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Das ganze Jahr über */}
      <Section tone="tinted">
        <SectionHeading eyebrow="Das ganze Jahr über" title="Feste, die keinen festen Monat haben" />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex gap-5">
            <span className="mt-1 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Cake className="size-6" aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Kindergeburtstag</h3>
              <p className="leading-relaxed text-foreground/85">
                Der Geburtstag des Kindes ist ein ganz besonderer Tag. Ein Jahr älter werden bedeutet auch größer werden
                und manchmal auch, eine neue Rolle einzunehmen. Diesen Tag möchten wir gemeinsam mit den Kindern feiern.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="flex gap-5">
            <span className="mt-1 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <PartyPopper className="size-6" aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Im jährlichen Wechsel</h3>
              <p className="leading-relaxed text-foreground/85">
                Einmal jährlich findet im Wechsel ein besonderes Fest statt: das Großelternfest, ein Familiennachmittag
                oder eine Adventsstunde im Kindergarten.
              </p>
            </div>
          </Reveal>
        </div>

        <PullQuote tone="accent" className="mt-12 max-w-3xl">
          Die Kinder hören Geschichten aus dem Leben Jesu – kindgerecht und altersentsprechend.
        </PullQuote>

        <Prose className="mt-6">
          <p className="flex items-start gap-3">
            <School className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <span>
              Videos zu einigen unserer Feste – von der Martinslegende bis Pfingsten – finden Sie in unserer{' '}
              <a href="/mediathek#videos">Mediathek</a>.
            </span>
          </p>
        </Prose>
      </Section>
    </>
  )
}
