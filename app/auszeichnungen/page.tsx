import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, Prose, Section } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Auszeichnungen',
  description: 'Haus für Kinder und Familien des Bistums Osnabrück und Modellprojekt Brückenjahr.',
}

export default function AuszeichnungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Kita"
        title="Wofür wir ausgezeichnet wurden"
        intro="Zwei Prädikate begleiten unsere Arbeit: das Zertifikat „Haus für Kinder und Familien“ des Bistums Osnabrück und die Teilnahme am Modellprojekt Brückenjahr mit der Grundschule St. Vitus Venhaus."
        image={{ src: '/images/luft-4.jpg', alt: 'Luftaufnahme der Kita St. Vitus Venhaus' }}
      />

      {/* Kapitel 1 */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal className="flex items-baseline gap-4">
              <span className="font-display text-6xl font-semibold leading-none text-primary/80 sm:text-7xl">2011</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                rezertifiziert 2016
              </span>
            </Reveal>
            <Reveal delay={80}>
              <Prose>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Bistum Osnabrück</p>
                <h2 className="!mt-2">Haus für Kinder und Familien</h2>
                <p>
                  Im Jahr 2011 wurde unsere Einrichtung mit dem Zertifikat „Haus für Kinder und Familien“ des Bistums
                  Osnabrück ausgezeichnet. Dieses Prädikat wurde im Jahr 2016 rezertifiziert.
                </p>
                <p>
                  <span className="font-semibold text-destructive">
                    [[ZU PRÜFEN: Kurz erläutern, was das Zertifikat auszeichnet (z. B. Familienangebote, Beratung, Öffnung
                    in die Gemeinde) – auf der Original-Website nicht beschrieben]]
                  </span>
                </p>
              </Prose>
            </Reveal>
          </div>
          <Reveal delay={140} className="relative">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2.5rem] bg-accent/50" aria-hidden />
            <Image
              src="/images/haus-fuer-kinder.jpg"
              alt="Zertifikat Haus für Kinder und Familien des Bistums Osnabrück"
              width={900}
              height={675}
              className="h-auto w-full rounded-[2rem] bg-card object-contain p-6 ring-1 ring-border"
            />
          </Reveal>
        </div>
      </Section>

      {/* Kapitel 2 */}
      <Section tone="tinted">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="relative lg:order-2">
            <div className="absolute -inset-3 -z-10 -rotate-2 rounded-[2.5rem] bg-secondary" aria-hidden />
            <Image
              src="/images/brueckenjahr.png"
              alt="Logo des Modellprojekts Brückenjahr"
              width={900}
              height={675}
              className="h-auto w-full rounded-[2rem] bg-card object-contain p-8 ring-1 ring-border"
            />
          </Reveal>
          <div className="flex flex-col gap-6 lg:order-1">
            <Reveal className="flex items-baseline gap-4">
              <span className="font-display text-6xl font-semibold leading-none text-primary/80 sm:text-7xl">Seit Jahren</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">eigenständig fortgeführt</span>
            </Reveal>
            <Reveal delay={80}>
              <Prose>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Übergang zur Grundschule</p>
                <h2 className="!mt-2">Modellprojekt Brückenjahr</h2>
                <p>
                  Unsere Kita hat zusammen mit der Grundschule St. Vitus Venhaus an dem Modellprojekt „Brückenjahr – Wege
                  zeigen, Übergänge schaffen, den Start erleichtern“ teilgenommen.{' '}
                  <strong>Aufgrund der sehr guten Erfahrungen führen wir diesen Übergang zur Grundschule schon seit vielen
                  Jahren eigenständig weiter fort.</strong>
                </p>
                <p>
                  <span className="font-semibold text-destructive">[[ZU PRÜFEN: Jahr der Projektteilnahme]]</span>
                </p>
              </Prose>
            </Reveal>
            <Reveal delay={140} className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/angebote" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Schulvorbereitung & Kidsclub <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/zusammenarbeit#grundschule" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Zusammenarbeit mit der Grundschule <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
