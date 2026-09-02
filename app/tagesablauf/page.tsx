import type { Metadata } from 'next'
import Image from 'next/image'
import { AnchorNav, PageHero, Prose, Section } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Ein Tag bei uns',
  description: 'So sieht ein typischer Tag in Kindergarten und Krippe der Kita St. Vitus Venhaus aus.',
}

type Slot = { time: string; title: string; text: string; fixed?: boolean }

const kitaDay: Slot[] = [
  {
    time: 'ab 7:00',
    title: 'Ankommen & offene Bildungsphase',
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
  { time: '12:15', title: 'Mittagessen', text: 'Für alle angemeldeten Kinder beginnt das gemeinsame Mittagessen.', fixed: true },
  {
    time: 'Nachmittag',
    title: 'Erweiterte Spiel- und Erfahrungsfelder',
    text: 'Gruppenübergreifend und in Kleingruppen entdecken die Kinder neue Spielmöglichkeiten.',
  },
  { time: '14:30', title: 'Snackpause', text: 'Für die Pause bringen die Kinder eine Kleinigkeit von zu Hause mit.', fixed: true },
  { time: '16:00', title: 'Die Kita schließt', text: 'Ende der Ganztagsbetreuung.', fixed: true },
]

const krippeDay: Slot[] = [
  {
    time: 'ab 7:00',
    title: 'Ankommen & Freispiel',
    text: 'Die Kinder entscheiden selbst, was sie wann, wo und mit wem spielen möchten. Sie experimentieren viel und sammeln ständig neue Erfahrungen.',
  },
  {
    time: '9:00',
    title: 'Morgenkreis',
    text: 'Auf dem runden Teppich begrüßen wir uns, schauen wer da ist und wer fehlt, singen Lieder und spielen (Finger-)Spiele.',
    fixed: true,
  },
  {
    time: 'Vormittag',
    title: 'Gleitendes Frühstück',
    text: 'Auch die Spatzen entscheiden selbst, wann sie frühstücken. An Geburtstagen gibt es ein gemeinsames Frühstück nach dem Morgenkreis.',
  },
  { time: 'danach', title: 'Spiel auf dem Außengelände', text: 'Nach der Freispielzeit folgt das Spiel auf dem Außengelände.' },
  { time: '11:30', title: 'Mittagessen', text: 'Für die angemeldeten Kinder gibt es Mittagessen.', fixed: true },
  {
    time: 'Mittag',
    title: 'Mittagsschlaf oder Weiterspielen',
    text: 'Jedes Kind kann einen Mittagsschlaf halten oder weiterhin im Gruppenraum spielen.',
  },
  { time: '15:00', title: 'Snackpause', text: 'Wie am Vormittag bringen die Kinder ihr eigenes Essen mit.', fixed: true },
]

function Timeline({ slots }: { slots: Slot[] }) {
  return (
    <ol className="relative">
      {/* durchgehende Linie in der Uhrzeiten-Spalte */}
      <span aria-hidden className="absolute bottom-3 left-[5.25rem] top-3 w-px bg-primary/25 sm:left-[6.25rem]" />
      {slots.map((s, i) => (
        <Reveal
          as="li"
          key={`${s.title}-${i}`}
          delay={Math.min(i * 60, 240)}
          className="relative grid grid-cols-[4.5rem_1.5rem_1fr] items-start gap-x-2 py-5 sm:grid-cols-[5.5rem_1.5rem_1fr]"
        >
          <time className={s.fixed ? 'pt-0.5 font-display text-xl font-semibold text-foreground' : 'pt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground'}>
            {s.time}
          </time>
          <span className="flex justify-center pt-1.5">
            <span
              aria-hidden
              className={s.fixed ? 'size-3.5 rounded-full bg-primary ring-4 ring-background' : 'size-2.5 rounded-full border-2 border-primary bg-background'}
            />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        </Reveal>
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
        image={{ src: '/images/tag-kita.webp', alt: 'Kinder spielen im Kindergarten' }}
      >
        <AnchorNav items={[{ href: '#kita', label: 'Kindergarten' }, { href: '#krippe', label: 'Krippe' }]} />
      </PageHero>

      <Section id="kita">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Kindergarten</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">… in der Kita</h2>
            </Reveal>
            <Reveal delay={100}>
              <Prose>
                <p>
                  Die Erzieherinnen beobachten und begleiten die Spielsituationen der Kinder und geben gegebenenfalls
                  Impulse und Unterstützung zum Weiterarbeiten. Uns ist es wichtig, dass die Kinder möglichst vielfältige
                  Spielmöglichkeiten ausprobieren und neue Erfahrungsfelder kennenlernen.
                </p>
              </Prose>
            </Reveal>
            <Reveal delay={160} className="relative hidden aspect-[4/3] overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] lg:block">
              <Image src="/images/raeume/halle-1.jpg" alt="Die Halle – viel Platz für gruppenübergreifendes Spiel" fill sizes="35vw" className="object-cover" />
            </Reveal>
          </div>
          <Timeline slots={kitaDay} />
        </div>
      </Section>

      <Section id="krippe" tone="tinted">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Krippe · Spatzennest</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">… in der Krippe</h2>
            </Reveal>
            <Reveal delay={100}>
              <Prose>
                <p>
                  In unserer Krippe ist ein routinierter Tagesablauf mit festen Bestandteilen für die Kinder von hoher
                  Bedeutung, denn dies gibt ihnen Sicherheit, Orientierung und Struktur.
                </p>
              </Prose>
            </Reveal>
            <Reveal delay={160} className="relative hidden aspect-[4/3] overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] lg:block">
              <Image src="/images/tag-krippe.webp" alt="Kleinkinder spielen am Tisch in der Krippe" fill sizes="35vw" className="object-cover" />
            </Reveal>
          </div>
          <Timeline slots={krippeDay} />
        </div>
      </Section>
    </>
  )
}
