import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { AnchorNav, PageHero, Section, SectionHeading } from '@/components/page-hero'
import { FileList } from '@/components/file-list'
import { VideoCard } from '@/components/video-card'
import { Reveal } from '@/components/reveal'
import { documents, videos, youtubeChannel } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Mediathek',
  description: 'Konzeption, Kita-ABC, Krippen-ABC, Leitbild und Videos der Kita St. Vitus Venhaus zum Herunterladen.',
}

export default function MediathekPage() {
  const [konzeption] = documents

  return (
    <>
      <PageHero
        eyebrow="Mediathek"
        title="Zum Lesen, Ansehen und Herunterladen"
        intro="Unsere Konzeption, das Kita- und Krippen-ABC, das Leitbild sowie Videos aus unserer Kita."
        image={{ src: '/images/raeume/halle-2.jpg', alt: 'Blick in die Halle der Kita' }}
      >
        <AnchorNav
          items={[
            { href: '#dokumente', label: 'Dokumente' },
            { href: '#videos', label: 'Videos' },
          ]}
        />
      </PageHero>

      {/* Dokumente */}
      <Section id="dokumente">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28">
            <SectionHeading eyebrow="Grundlage unserer Arbeit" title={konzeption.title} className="mb-0" />
            <a
              href={konzeption.href}
              download
              className="group relative block aspect-[3/4] max-w-xs overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] bg-secondary ring-1 ring-border"
            >
              {konzeption.image && (
                <Image
                  src={konzeption.image}
                  alt="Titelseite der Konzeption"
                  fill
                  sizes="(min-width: 1024px) 25vw, 80vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
              <span className="absolute inset-x-4 bottom-4 rounded-full bg-background/90 px-4 py-2 text-center text-sm font-bold text-foreground backdrop-blur">
                Konzeption herunterladen (PDF)
              </span>
            </a>
            <p className="max-w-sm leading-relaxed text-foreground/85">{konzeption.description}</p>
          </Reveal>

          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Downloads" title="Alle Dokumente" className="mb-0" />
            <FileList files={documents} />
          </div>
        </div>
      </Section>

      {/* Videos */}
      <Section id="videos" tone="tinted">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Videos"
            title="Unsere Erzählungen"
            intro="Auf dem YouTube-Kanal unserer Kita finden Sie ein paar unserer Erzählungen, die im Lockdown 2021 entstanden sind – vor allem, um den Kontakt zu den Kindern halten zu können."
          />
          <a
            href={youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex shrink-0 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            Zum YouTube-Kanal <ExternalLink className="size-4" aria-hidden />
          </a>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <Reveal key={v.id} as="li" delay={Math.min(i * 60, 240)}>
              <VideoCard {...v} />
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Die Videos werden erst nach einem Klick von YouTube geladen (Zwei-Klick-Lösung, Datenschutz-Modus).
        </p>
      </Section>
    </>
  )
}
