import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, Prose, Section } from '@/components/page-hero'

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
        intro="Träger unserer Kindertagesstätte ist die Katholische Kirchengemeinde St. Vitus Venhaus – Teil der Pfarreiengemeinschaft Spelle."
      />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="rounded-4xl bg-card p-8 ring-1 ring-border">
              <Image
                src="/images/traeger.png"
                alt="Katholische Kirchengemeinde St. Vitus Venhaus"
                width={600}
                height={400}
                className="h-auto w-full object-contain"
              />
            </div>
            <blockquote className="rounded-4xl bg-secondary/60 p-8 font-display text-xl leading-snug text-secondary-foreground">
              „Da rief Jesus ein Kind herbei, stellte es in ihre Mitte und sagte: Amen, das sage ich euch: … Wer ein
              solches Kind um meinetwillen aufnimmt, der nimmt mich auf.“
              <footer className="mt-3 font-sans text-sm font-bold uppercase tracking-wider text-primary">Mt 18, 2.5</footer>
            </blockquote>
          </div>
          <Prose>
            <p>Liebe Leserin, lieber Leser,</p>
            <p>
              von Kindern ist in der Bibel viele hundertmal die Rede. Eine der schönsten Stellen begegnet uns im
              Matthäus-Evangelium. Diese vielzitierten Verse der Heiligen Schrift enthalten maßgebende Aussagen für die
              Grundlagen und das Selbstverständnis unserer Kindertagesstätte St. Vitus in Venhaus.
            </p>
            <h2>Jesus rief das Kind herbei und stellte es in die Mitte.</h2>
            <p>
              Er sprach also nicht nur über dieses Kind, sondern er sprach mit diesem Kind, rief es herbei. Ihm ging es
              ganz konkret um dieses Kind, und wir dürfen annehmen, dass es ihm um die Bedürfnisse und vor allem um das
              Wohl dieses Kindes ging; um dessen Einmaligkeit, Anliegen, Fähigkeiten, Förderung, Entwicklung … Und all das
              stellte Jesus in die Mitte!
            </p>
            <p>
              Dieses Handeln Jesu ist das zentrale Anliegen der kath. Kirchengemeinde St. Vitus, Venhaus, als Träger
              dieser Kindertagesstätte. Alles dreht sich um die Kinder, die diese Einrichtung besuchen. Sie bilden den
              Mittelpunkt des Tagesgeschehens.
            </p>
            <p>
              Ihnen gilt alle Aufmerksamkeit und Wertschätzung, die grundgelegt ist in unserer christlichen
              Weltanschauung; dabei ist jedes Kind willkommen, gleich welcher Nation, Religion oder Konfession es angehört.
            </p>
            <h2>Wer ein solches Kind um meinetwillen aufnimmt, der nimmt mich auf.</h2>
            <p>
              Diese Aussage Jesu verdeutlicht die Absicht und den Auftrag, dem sich die Kindertagesstätte St. Vitus
              stellt. Jedes Kind ist ein Geschöpf Gottes und dessen Ebenbild. Von diesem Gottes- und Menschenbild lassen
              wir uns leiten, gern mit Ihnen zusammen.
            </p>
            <p>Für Anfragen oder Anregungen stehen wir gern zur Verfügung.</p>
            <p>
              <a href="/docs/leitbild.pdf" className="font-semibold text-primary underline-offset-4 hover:underline">
                Leitbild der Pfarreiengemeinschaft Spelle (PDF)
              </a>
            </p>
          </Prose>
        </div>
      </Section>
    </>
  )
}
