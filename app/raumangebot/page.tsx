import type { Metadata } from 'next'
import { Gallery } from '@/components/gallery'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'
import { groupGalleries, houseGallery } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Raumangebot',
  description: 'Gruppenräume, Halle, Turnraum, Bällebad und Spielplätze der Kita St. Vitus Venhaus.',
}

const slugFor = (title: string) =>
  title
    .toLowerCase()
    .replace(/^(das|die) /, '')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')

export default function RaumangebotPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Raum zum Spielen, Lernen und Wohlfühlen"
        intro="Unsere Kita liegt im Grünen, umgeben von Kirche, Grundschule und Sportplatz. Drinnen wie draußen gibt es viel Platz, um zu bauen, zu toben, zu forschen und zur Ruhe zu kommen."
        image={{ src: '/images/luft-2.jpg', alt: 'Luftaufnahme der Kita St. Vitus Venhaus' }}
      />

      <Section>
        <SectionHeading eyebrow="Unser Haus" title="Halle, Turnraum, Spielplätze" />
        <Prose className="mb-10">
          <p>
            Herzstück unseres Hauses ist die große Halle: Hier treffen sich die Kinder aller Gruppen zum Schaukeln, Spielen,
            Bilderbücher anschauen und Fische beobachten. Der Turnraum und das Bällebad bieten unendlich viele Möglichkeiten,
            Bewegung zu fördern. Draußen warten ein eigener Spielplatz für die Krippenkinder und ein großer Kindergarten-Spielplatz.
          </p>
        </Prose>
        <Gallery images={houseGallery} columns={4} />
      </Section>

      {groupGalleries.map((g, i) => (
        <Section key={g.title} id={slugFor(g.title)} tone={i % 2 === 0 ? 'tinted' : 'default'}>
          <SectionHeading
            eyebrow={g.title === 'Das Spatzennest' ? 'Krippe' : 'Kindergarten'}
            title={g.title}
          />
          <Gallery images={g.images} columns={4} />
        </Section>
      ))}
    </>
  )
}
