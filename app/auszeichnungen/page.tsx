import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, Prose, Section } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Auszeichnungen',
  description: 'Haus für Kinder und Familien des Bistums Osnabrück und Modellprojekt Brückenjahr.',
}

export default function AuszeichnungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Kita"
        title="Unsere Auszeichnungen"
        intro="Qualität, die man sehen kann: Zwei Zertifikate und Projekte, die unsere Arbeit seit vielen Jahren prägen."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-4xl bg-card p-8 ring-1 ring-border">
            <Image
              src="/images/haus-fuer-kinder.jpg"
              alt="Zertifikat Haus für Kinder und Familien des Bistums Osnabrück"
              width={600}
              height={450}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
          <Prose>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Bistum Osnabrück</p>
            <h2 className="!mt-2">Haus für Kinder und Familien</h2>
            <p>
              Im Jahr 2011 wurde unsere Einrichtung mit dem Zertifikat „Haus für Kinder und Familien“ des Bistums
              Osnabrück ausgezeichnet. Dieses Prädikat wurde im Jahr 2016 rezertifiziert.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="tinted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Prose className="lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Übergang zur Grundschule</p>
            <h2 className="!mt-2">Modellprojekt Brückenjahr</h2>
            <p>
              Unsere Kita hat zusammen mit der Grundschule St. Vitus Venhaus an dem Modellprojekt „Brückenjahr – Wege
              zeigen, Übergänge schaffen, den Start erleichtern“ teilgenommen. Aufgrund der sehr guten Erfahrungen führen
              wir diesen Übergang zur Grundschule schon seit vielen Jahren eigenständig weiter fort.
            </p>
            <p>
              Weitere Informationen zum letzten Kita-Jahr vor der Einschulung finden Sie unter{' '}
              <Link href="/angebote" className="font-semibold text-primary underline-offset-4 hover:underline">
                Besondere Angebote
              </Link>{' '}
              und{' '}
              <Link href="/zusammenarbeit" className="font-semibold text-primary underline-offset-4 hover:underline">
                Zusammenarbeit
              </Link>
              .
            </p>
          </Prose>
          <div className="rounded-4xl bg-card p-8 ring-1 ring-border lg:order-2">
            <Image
              src="/images/brueckenjahr.png"
              alt="Logo des Modellprojekts Brückenjahr"
              width={600}
              height={450}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
