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
        title="Raum zum Spielen, Lernen und Entfalten!"
        intro="Unsere Einrichtung liegt im Ortskern von Venhaus, neben der Kirche und dem dazugehörigen Burgpark. Diese schöne und zentrale Lage nutzen wir immer mal wieder für Spaziergänge oder „Ausfahrten“ mit unseren vielen Rädern und Tretfahrzeugen."
        image={{ src: '/images/luft-2.jpg', alt: 'Luftaufnahme der Kita St. Vitus Venhaus' }}
      />

      <Section>
        <SectionHeading eyebrow="Unser Haus" title="Halle, Turnraum, Spielplätze" />
        <Prose className="mb-10">
          <p>
            Wann immer es das Wetter auch nur einigermaßen zulässt, gehen wir täglich mit jedem Kind mindestens einmal an
            die frische Luft, vor allem auf unseren Spielplatz. Hier erhalten Sie viele bunte Eindrücke unserer Räume und
            Außenanlage. Kommen Sie gerne einmal vorbei, falls Sie Ihr Kind bei uns anmelden möchten.
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
