import type { Metadata } from 'next'
import Image from 'next/image'
import { Download, ExternalLink, FileText } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '@/components/page-hero'
import { VideoCard } from '@/components/video-card'
import { documents, videos, youtubeChannel } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Mediathek',
  description: 'Konzeption, Kita-ABC, Krippen-ABC, Leitbild und Videos der Kita St. Vitus Venhaus zum Herunterladen.',
}

export default function MediathekPage() {
  const [konzeption, ...rest] = documents

  return (
    <>
      <PageHero
        eyebrow="Mediathek"
        title="Zum Lesen, Ansehen und Herunterladen"
        intro="Unsere Konzeption, das Kita- und Krippen-ABC, das Leitbild sowie Videos aus unserer Kita."
      />

      <Section>
        <a
          href={konzeption.href}
          className="grid overflow-hidden rounded-4xl bg-card ring-1 ring-border transition-colors hover:ring-primary lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="relative aspect-[4/3] bg-secondary lg:aspect-auto">
            {konzeption.image && (
              <Image src={konzeption.image} alt="Titelseite der Konzeption" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
            )}
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Grundlage unserer Arbeit</p>
            <h2 className="text-3xl font-semibold">{konzeption.title}</h2>
            <p className="leading-relaxed text-foreground/85">{konzeption.description}</p>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">
              <Download className="size-4" aria-hidden /> Konzeption herunterladen (PDF)
            </span>
          </div>
        </a>
      </Section>

      <Section tone="tinted">
        <SectionHeading eyebrow="Dokumente" title="Broschüren und Downloads" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((d) => (
            <li key={d.href}>
              <a
                href={d.href}
                className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-primary"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <FileText className="size-5" aria-hidden />
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Download className="size-4" aria-hidden /> PDF herunterladen
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
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
          {videos.map((v) => (
            <li key={v.id}>
              <VideoCard {...v} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
