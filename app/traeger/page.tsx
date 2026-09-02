import type { Metadata } from 'next'
import Image from 'next/image'
import { FileText } from 'lucide-react'
import { PageHero, Prose, PullQuote, Section } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Unser Träger',
  description: 'Träger der Kita St. Vitus Venhaus ist die Katholische Kirchengemeinde St. Vitus Venhaus.',
}

export default function TraegerPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Unser Träger"
        intro="Träger unserer Kindertagesstätte ist die Katholische Kirchengemeinde St. Vitus Venhaus – direkt neben Kirche und Burgpark, mitten im Ort."
        image={{ src: '/images/luft-3.jpg', alt: 'Luftaufnahme der Kindertagesstätte neben Kirche und Burgpark in Venhaus' }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Randspalte: Träger-Fakten */}
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <dl className="flex flex-col gap-4 text-[0.95rem]">
              <div className="flex flex-col gap-0.5 border-b border-border pb-4">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Träger</dt>
                <dd className="font-semibold">{contact.traeger}</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-border pb-4">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Verbund</dt>
                <dd className="font-semibold">Pfarreiengemeinschaft Spelle</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-border pb-4">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Bistum</dt>
                <dd className="font-semibold">Osnabrück</dd>
              </div>
            </dl>
            <a
              href="/docs/leitbild.pdf"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/70"
            >
              <FileText className="size-4" aria-hidden /> Leitbild (PDF, 1,2 MB)
            </a>
          </Reveal>

          {/* Brief */}
          <div>
            <Reveal>
              <Prose>
                <p className="lead">Liebe Leserin, lieber Leser,</p>
                <p>
                  von Kindern ist in der Bibel viele hundertmal die Rede. Eine der schönsten Stellen begegnet uns im
                  Matthäus-Evangelium. Diese vielzitierten Verse der Heiligen Schrift enthalten maßgebende Aussagen für
                  die Grundlagen und das Selbstverständnis unserer Kindertagesstätte St. Vitus in Venhaus.
                </p>
              </Prose>
            </Reveal>

            <PullQuote cite="Matthäus 18, 2.5" tone="secondary" className="max-w-3xl">
              „Da rief Jesus ein Kind herbei, stellte es in ihre Mitte und sagte: Amen, das sage ich euch: … Wer ein
              solches Kind um meinetwillen aufnimmt, der nimmt mich auf.“
            </PullQuote>

            <Reveal>
              <Prose>
                <h2>Jesus rief das Kind herbei und stellte es in die Mitte.</h2>
                <p>
                  Er sprach also nicht nur über dieses Kind, sondern er sprach mit diesem Kind, rief es herbei. Ihm ging
                  es ganz konkret um dieses Kind, und wir dürfen annehmen, dass es ihm um die Bedürfnisse und vor allem
                  um das Wohl dieses Kindes ging; um dessen Einmaligkeit, Anliegen, Fähigkeiten, Förderung, Entwicklung …
                  Und all das stellte Jesus in die Mitte!
                </p>
                <p>
                  Dieses Handeln Jesu ist das zentrale Anliegen der kath. Kirchengemeinde St. Vitus, Venhaus, als Träger
                  dieser Kindertagesstätte. <strong>Alles dreht sich um die Kinder, die diese Einrichtung besuchen.</strong>{' '}
                  Sie bilden den Mittelpunkt des Tagesgeschehens.
                </p>
                <p>
                  Ihnen gilt alle Aufmerksamkeit und Wertschätzung, die grundgelegt ist in unserer christlichen
                  Weltanschauung; dabei ist jedes Kind willkommen, gleich welcher Nation, Religion oder Konfession es
                  angehört.
                </p>
                <h2>Wer ein solches Kind um meinetwillen aufnimmt, der nimmt mich auf.</h2>
                <p>
                  Diese Aussage Jesu verdeutlicht die Absicht und den Auftrag, dem sich die Kindertagesstätte St. Vitus
                  stellt. Jedes Kind ist ein Geschöpf Gottes und dessen Ebenbild. Von diesem Gottes- und Menschenbild
                  lassen wir uns leiten, gern mit Ihnen zusammen.
                </p>
                <p>Für Anfragen oder Anregungen stehen wir gern zur Verfügung.</p>
              </Prose>
            </Reveal>

            <Reveal className="mt-10 flex flex-col gap-4">
              <Image
                src="/images/traeger.png"
                alt="Fotos und Unterschriften von Ludger Pöttering und Dominik Witte"
                width={800}
                height={430}
                className="h-auto w-full max-w-md rounded-2xl bg-card p-4 ring-1 ring-border"
              />
              <dl className="flex flex-wrap gap-x-12 gap-y-3">
                <div className="flex flex-col">
                  <dt className="font-semibold text-foreground">Ludger Pöttering</dt>
                  <dd className="text-sm text-muted-foreground">Pfarrer</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="font-semibold text-foreground">Dominik Witte</dt>
                  <dd className="text-sm text-muted-foreground">Pastoraler Koordinator</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
