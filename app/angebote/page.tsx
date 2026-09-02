import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Besondere Angebote',
  description: 'Strolche, Schulvorbereitung, Kidsclub, Gesunde Zähne, Märchenstunde und gruppenübergreifendes Spiel.',
}

type Angebot = { who: string; rhythm: string; title: string; text: string }

const nachAlter: Angebot[] = [
  {
    who: 'Die Jüngsten',
    rhythm: 'Regelmäßig',
    title: 'Die Strolche',
    text: 'Die Strolche sind die jüngsten Kinder in der Gruppe. Ihnen wird regelmäßig die Möglichkeit geboten, sich zu Angeboten und Aktivitäten in Kleingruppen zusammenzufinden und so als eine altershomogene Gruppe etwas gemeinsam zu machen.',
  },
  {
    who: 'Vorletztes Kita-Jahr',
    rhythm: 'Einmal monatlich',
    title: 'Der Kidsclub',
    text: 'Zum Kidsclub gehören die Kinder, die im darauffolgenden Jahr eingeschult werden. Ihnen möchten wir frühzeitig die Möglichkeit bieten, als Gruppe zusammenzufinden. Gemeinsame Aktivitäten finden einmal monatlich statt – mit wechselndem Angebot und je einer Erzieherin der Bären-, Löwen- oder Elefantengruppe.',
  },
  {
    who: 'Letztes Kita-Jahr',
    rhythm: 'Wöchentlich, ab den Herbstferien',
    title: 'Die Schukis',
    text: 'Jährlich nach den Herbstferien beginnt die Schulvorbereitung für die angehenden Schulkinder. Einmal wöchentlich treffen sich die Kinder in gemischten Kleingruppen oder in der Großgruppe für ca. 30 Minuten. In praktischen Angeboten werden sie spielerisch an die Aufgaben der Schule herangeführt. Die Kinder erfahren eine besondere Stellung im Kindergarten – sie sind nun „die Großen“, übernehmen Verantwortung und altersentsprechende Pflichten im Alltag.',
  },
]

const fuerAlle: Angebot[] = [
  {
    who: 'Alle Altersstufen',
    rhythm: 'In regelmäßigen Abständen',
    title: 'Märchenstunde mit Martha',
    text: 'In regelmäßigen Abständen besucht uns Frau Martha Löcken und erzählt den Kindern sehr anschaulich Märchen. Um auf jedes Alter passend eingehen zu können, nimmt sie mal die Strolche, mal die Kidsclub-Kinder oder die Schukis zu den Märchenstunden mit.',
  },
  {
    who: 'Alle Gruppen',
    rhythm: 'Täglich',
    title: 'Gruppenübergreifendes Spiel',
    text: 'In unserer Eingangshalle findet das gruppenübergreifende Spiel sowohl in altersgemischten als auch in altershomogenen Kindergruppen statt. Den Kindern bieten wir somit einen erweiterten Spielraum, um vielfältige Kontakte zu knüpfen und Spielpartner kennenzulernen.',
  },
]

function AngebotRow({ a, index }: { a: Angebot; index: number }) {
  return (
    <Reveal
      as="li"
      delay={Math.min(index * 70, 210)}
      className="grid gap-4 border-t border-border py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-12"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{a.who}</p>
        <h3 className="text-3xl font-semibold leading-tight">{a.title}</h3>
        <p className="text-sm font-semibold text-muted-foreground">{a.rhythm}</p>
      </div>
      <p className="text-[1.0625rem] leading-[1.7] text-foreground/85">{a.text}</p>
    </Reveal>
  )
}

export default function AngebotePage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Besondere Angebote und Aktivitäten"
        intro="Neben dem freien Spiel gibt es bei uns feste Angebote für jede Altersstufe – von den Strolchen bis zu den Schukis."
        image={{ src: '/images/raeume/halle-1.jpg', alt: 'Die Halle – viel Platz für gruppenübergreifendes Spiel' }}
      />

      <Section>
        <SectionHeading eyebrow="Vom Strolch zum Schuki" title="Angebote nach Altersstufe" intro="Drei Stationen begleiten die Kinder durch ihre Kita-Zeit – jede mit eigener Gruppe, eigenem Rhythmus und wachsender Verantwortung." />
        <ol className="border-b border-border">
          {nachAlter.map((a, i) => (
            <AngebotRow key={a.title} a={a} index={i} />
          ))}
        </ol>
      </Section>

      <Section tone="tinted">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_0.75rem]">
            <Image src="/images/zahnarzt.jpg" alt="Zahnpflege in der Kita" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={100}>
            <Prose>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Besuch vom Gesundheitsamt · halbjährlich</p>
              <h2 className="!mt-2">Gesunde Zähne</h2>
              <p className="lead">
                Halbjährlich bekommen die Kinder gruppenintern Besuch von Mitarbeitern des Gesundheitsamtes.
              </p>
              <p>
                Auf spielerische und kindgerechte Art und Weise verdeutlichen sie, wie wichtig eine gute Zahnhygiene ist.
              </p>
            </Prose>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Für alle" title="Was alle Kinder verbindet" />
        <ul className="border-b border-border">
          {fuerAlle.map((a, i) => (
            <AngebotRow key={a.title} a={a} index={i} />
          ))}
        </ul>
      </Section>
    </>
  )
}
