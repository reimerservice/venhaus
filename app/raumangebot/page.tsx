import type { Metadata } from 'next'
import { Gallery } from '@/components/gallery'
import { AnchorNav, PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
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

const anchors = [
  { href: '#haus', label: 'Halle & Spielplätze' },
  ...groupGalleries.map((g) => ({ href: `#${slugFor(g.title)}`, label: g.title.replace(/^(Das|Die) /, '') })),
]

export default function RaumangebotPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Raum zum Spielen, Lernen und Entfalten"
        intro="Unsere Einrichtung liegt im Ortskern von Venhaus, neben der Kirche und dem dazugehörigen Burgpark. Diese schöne und zentrale Lage nutzen wir immer mal wieder für Spaziergänge oder „Ausfahrten“ mit unseren vielen Rädern und Tretfahrzeugen."
        image={{ src: '/images/luft-2.jpg', alt: 'Luftaufnahme der Kita St. Vitus Venhaus' }}
      >
        <AnchorNav items={anchors} />
      </PageHero>

      <Section id="haus">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading eyebrow="Unser Haus" title="Halle, Turnraum, Bällebad und zwei Spielplätze" className="mb-0" />
          <Reveal delay={100}>
            <Prose>
              <p>
                Wann immer es das Wetter auch nur einigermaßen zulässt, gehen wir täglich mit jedem Kind mindestens einmal
                an die frische Luft, vor allem auf unseren Spielplatz. Hier erhalten Sie viele bunte Eindrücke unserer
                Räume und Außenanlage. Kommen Sie gerne einmal vorbei, falls Sie Ihr Kind bei uns anmelden möchten.
              </p>
            </Prose>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <Gallery images={houseGallery} featured />
        </Reveal>
      </Section>

      {groupGalleries.map((g, i) => {
        const isKrippe = g.title === 'Das Spatzennest'
        return (
          <Section key={g.title} id={slugFor(g.title)} tone={i % 2 === 0 ? 'tinted' : 'default'}>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow={isKrippe ? 'Krippe' : 'Kindergarten'} title={g.title} className="mb-0" />
              <Reveal delay={80} className="text-sm text-muted-foreground">
                {g.images.length} Bilder – zum Vergrößern anklicken
              </Reveal>
            </div>
            <Reveal>
              <Gallery images={g.images} featured />
            </Reveal>
          </Section>
        )
      })}
    </>
  )
}
