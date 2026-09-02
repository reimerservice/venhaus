import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Ein Tag bei uns',
  description: 'So sieht ein typischer Tag in Kindergarten und Krippe der Kita St. Vitus Venhaus aus.',
}

type Slot = { time: string; title: string; text: string }

const kitaDay: Slot[] = [
  {
    time: 'Ankommen',
    title: 'Offene Bildungsphase',
    text: 'Die wichtigste und umfangreichste Zeitspanne des Tages: Das Kind entscheidet selbst, mit wem, mit was und wo es spielen möchte – und wie lange.',
  },
  {
    time: 'Vormittag',
    title: 'Kleingruppenangebote',
    text: 'Religionspädagogische Übungen, angeleitetes Turnen oder Bilderbuchbetrachtungen. Gruppenübergreifend wird in der Halle, im Bällebad oder Turnraum gespielt.',
  },
  {
    time: 'Freispiel',
    title: 'Gleitendes Frühstück',
    text: 'Die Kinder frühstücken zu einem selbst festgelegten Zeitpunkt. An Geburtstagen und Festen gibt es ein gemeinsames Frühstück in der Gruppe.',
  },
  { time: '12:15 Uhr', title: 'Mittagessen', text: 'Für alle angemeldeten Kinder beginnt das gemeinsame Mittagessen.' },
  {
    time: 'Nachmittag',
    title: 'Erweiterte Spiel- und Erfahrungsfelder',
    text: 'Gruppenübergreifend und in Kleingruppen entdecken die Kinder neue Spielmöglichkeiten.',
  },
  { time: '14:30 – 15:00 Uhr', title: 'Snackpause', text: 'Für die Pause bringen die Kinder eine Kleinigkeit von zu Hause mit.' },
]

const krippeDay: Slot[] = [
  {
    time: 'Ankommen',
    title: 'Freispiel',
    text: 'Die Kinder entscheiden selbst, was sie wann, wo und mit wem spielen möchten. Sie experimentieren viel und sammeln ständig neue Erfahrungen.',
  },
  {
    time: '9:00 Uhr',
    title: 'Morgenkreis',
    text: 'Auf dem runden Teppich begrüßen wir uns, schauen wer da ist und wer fehlt, singen Lieder und spielen (Finger-)Spiele.',
  },
  {
    time: 'Vormittag',
    title: 'Gleitendes Frühstück',
    text: 'Auch die Spatzen entscheiden selbst, wann sie frühstücken. An Geburtstagen gibt es ein gemeinsames Frühstück nach dem Morgenkreis.',
  },
  { time: 'Nach dem Freispiel', title: 'Spiel auf dem Außengelände', text: 'Nach der Freispielzeit folgt das Spiel auf dem Außengelände.' },
  { time: '11:30 Uhr', title: 'Mittagessen', text: 'Für die angemeldeten Kinder gibt es Mittagessen.' },
  {
    time: 'Mittag',
    title: 'Mittagsschlaf oder Weiterspielen',
    text: 'Jedes Kind kann einen Mittagsschlaf halten oder weiterhin im Gruppenraum spielen.',
  },
  { time: '15:00 Uhr', title: 'Snackpause', text: 'Wie am Vormittag bringen die Kinder ihr eigenes Essen mit.' },
]

function Timeline({ slots }: { slots: Slot[] }) {
  return (
    <ol className="relative flex flex-col gap-7 border-l-2 border-primary/30 pl-8">
      {slots.map((s, i) => (
        <li key={`${s.title}-${i}`} className="relative flex flex-col gap-1">
          <span aria-hidden className="absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-background bg-primary" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{s.time}</span>
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}

export default function TagesablaufPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Tag bei uns"
        intro="Der Tagesablauf wird flexibel gestaltet und orientiert sich an den Themen der Kinder sowie aktuellen Anlässen. Feste Bestandteile bieten den Kindern Routine und Struktur."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-4xl">
              <Image src="/images/tag-kita.webp" alt="Kinder spielen im Kindergarten" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <SectionHeading eyebrow="Kindergarten" title="… in der Kita" />
            <Prose className="-mt-6">
              <p>
                Die Erzieherinnen beobachten und begleiten die Spielsituationen der Kinder und geben gegebenenfalls Impulse
                und Unterstützung zum Weiterarbeiten. Uns ist es wichtig, dass die Kinder möglichst vielfältige
                Spielmöglichkeiten ausprobieren und neue Erfahrungsfelder kennenlernen.
              </p>
            </Prose>
            <Timeline slots={kitaDay} />
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-4xl">
              <Image src="/images/tag-krippe.webp" alt="Kleinkinder spielen am Tisch in der Krippe" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <SectionHeading eyebrow="Krippe" title="… in der Krippe" />
            <Prose className="-mt-6">
              <p>
                In unserer Krippe ist ein routinierter Tagesablauf mit festen Bestandteilen für die Kinder von hoher
                Bedeutung, denn dies gibt ihnen Sicherheit, Orientierung und Struktur.
              </p>
            </Prose>
            <Timeline slots={krippeDay} />
          </div>
        </div>
      </Section>
    </>
  )
}
