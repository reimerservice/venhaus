import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/page-hero'

const impressions = [
  { src: '/images/raeume/halle-1.jpg', alt: 'Die große Halle mit Platz für gruppenübergreifendes Spiel', className: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/raeume/baellebad.jpg', alt: 'Das Bällebad' },
  { src: '/images/raeume/turnraum.png', alt: 'Der Turnraum' },
  { src: '/images/raeume/spielplatz-kindergarten.jpg', alt: 'Der Kindergarten-Spielplatz' },
  { src: '/images/raeume/spatzennest-3.jpg', alt: 'Die Spiellandschaft im Spatzennest' },
]

export function ImpressionsStrip() {
  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Einblicke"
          title="Räume, die zum Entdecken einladen"
          intro="Helle Gruppenräume, eine große Halle, Turnraum, Bällebad und zwei Spielplätze – mitten im Grünen."
        />
        <Link
          href="/raumangebot"
          className="mb-10 inline-flex shrink-0 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
        >
          Alle Räume ansehen <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
      <ul className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
        {impressions.map((img) => (
          <li key={img.src} className={`relative overflow-hidden rounded-3xl bg-muted ${img.className ?? ''}`}>
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </Section>
  )
}
