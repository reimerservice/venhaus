import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Zusammenarbeit und Kooperation',
  description: 'Zusammenarbeit mit Träger, Elternbeirat, Eltern und der Grundschule Venhaus.',
}

const elternPunkte = [
  'Zu Beginn der Krippen- und Kindergartenzeit findet ein Aufnahmegespräch zwischen den zukünftigen Gruppenerzieherinnen und den Eltern in Einzelgesprächen statt.',
  'Ein gemeinsamer Informationsabend für alle „neuen“ Eltern, welcher ebenfalls vor Beginn der Kita-Zeit stattfindet, soll unsere Arbeit vorstellen und offene Fragen beantworten.',
  'Während der Krippen- und Kindergartenzeit haben Eltern die Möglichkeit, in kurzen Tür- und Angelgesprächen vom Tag des Kindes zu erfahren. Für Austauschgespräche stehen die Erzieherinnen bei Bedarf am Nachmittag zur Verfügung.',
  'Einmal jährlich findet für jedes Kind ein Entwicklungsgespräch statt. Darin werden Beobachtungen ausgetauscht, Entwicklungsschritte benannt und Ziele für eine positive Weiterentwicklung formuliert.',
  'In regelmäßigen Abständen finden Elternabende statt, wie beispielsweise der Kennlernabend mit der Wahl des Elternbeirates.',
]

export default function ZusammenarbeitPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Kita"
        title="Zusammenarbeit und Kooperation"
        intro="Wir pflegen ein gutes Verhältnis zu allen Eltern – der Elternbeirat vertritt sie als offizielles Gremium. Auch mit Träger und Grundschule arbeiten wir eng zusammen."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Träger" title="Gemeinsam zum Wohle der Kinder" />
          <Prose>
            <p>
              Sowohl der Träger als auch die Erzieherinnen arbeiten zum Wohle der Kinder und Familien. Die Basis für eine
              gute Zusammenarbeit zwischen Träger und Einrichtung ist der gegenseitige Austausch über Belange und Aktionen
              der Kindertagesstätte.
            </p>
            <p>
              An Elternbeiratssitzungen und einigen Teambesprechungen nimmt der Träger oder ein Vertreter des Trägers
              teil. In Abstimmung mit der Leitung entscheidet der Träger über personelle Veränderungen innerhalb der
              Einrichtung. Und immer mal wieder besucht Pastor Pöttering die Kinder in den Gruppen.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="tinted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Elternbeirat" title="Die Stimme der Eltern" />
          <Prose>
            <p>
              Im § 10 des KiTaG Niedersachsens ist geregelt, welche Aufgaben und Rechte der Elternbeirat hat. In unserem
              Elternbeirat fördern wir die Zusammenarbeit von Träger, Einrichtung und Eltern. Aus jeder unserer Gruppen
              wird einmal jährlich ein Sorgeberechtigter / eine Sorgeberechtigte samt Stellvertretung gewählt.
            </p>
            <p>
              Die Elternsprecher können zwischen Sorgeberechtigten und der Kita vermitteln, ihre Wünsche, Anregungen,
              Vorschläge und Kritik an die Leitung und den Träger herantragen. Sie sind beteiligt an wesentlichen
              Angelegenheiten der Erziehung, Bildung und Betreuung, am pädagogischen Konzept und der Organisation. Auch eine
              Elternkasse wird vom Beirat unterhalten.
            </p>
            <p>
              Der Elternbeirat besteht aus jeweils zwei gewählten Vertretern aus jeder Gruppe, der Einrichtungsleitung mit
              einer Vertreterin für die Erzieherinnen und Vertretern aus dem Kirchenvorstand. Die Elternvertreter werden
              jährlich neu gewählt. Mindestens zweimal im Kita-Jahr finden gemeinsame Sitzungen statt.
            </p>
            <h3>Der pädagogische Beirat</h3>
            <p>
              Der pädagogische Beirat berät und fördert gemeinsame Belange von Eltern und Kindertagesstätte. Wichtige
              Entscheidungen des Trägers und der Leitung erfolgen im Benehmen mit dem pädagogischen Beirat. Er kann
              Vorschläge zu Konzeption, Betreuungsangeboten, Öffnungs- und Ferienzeiten sowie zur Verwendung der
              Haushaltsmittel machen und wird über personelle Veränderungen, Haushaltsführung sowie Bau- und
              Investitionsmaßnahmen unterrichtet.
            </p>
          </Prose>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Eltern"
            title="Eltern sind die Experten für ihre Kinder"
            intro="Die Kooperation mit den Eltern und Erziehungsberechtigten ist ein wichtiger Bestandteil unserer Arbeit. Gegenseitige Akzeptanz und Respekt gehören zum individuellen Umgang. Wir sehen uns als Erziehungsbegleiter der Kinder."
          />
          <ol className="flex flex-col gap-4">
            {elternPunkte.map((p, i) => (
              <li key={i} className="flex gap-4 rounded-3xl bg-card p-5 ring-1 ring-border">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg text-accent-foreground">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-foreground/85">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="primary">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Kita-Info-App</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Immer auf dem neuesten Stand</h2>
          </div>
          <p className="text-lg leading-relaxed text-primary-foreground/85">
            Wir arbeiten mit der Kita-Info-App, über die wir Eltern schnell und unkompliziert über alle Neuigkeiten
            informieren. Zusätzlich arbeiten wir weiterhin mit Aushängen – vor allem für Neuigkeiten, über die wir die
            Kinder direkt und bildlich informieren möchten.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-4xl">
            <Image src="/images/brueckenjahr.png" alt="Modellprojekt Brückenjahr" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain bg-card p-8" />
          </div>
          <Prose>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Grundschule</p>
            <h2 className="!mt-2">Der Übergang zur Grundschule</h2>
            <p>
              Es findet eine intensive und kontinuierliche Zusammenarbeit mit der Grundschule Venhaus statt. Ein guter und
              offener Austausch ist für uns selbstverständlich.
            </p>
            <p>
              Während des Brückenjahres lernen die angehenden Schulkinder die Kinder der 3. Klasse kennen und bekommen einen
              Paten aus diesem Jahrgang. In verschiedenen Angeboten, die über das Jahr verteilt sowohl in unserer
              Einrichtung als auch in der Grundschule stattfinden, können sich die Kinder kennenlernen und bekommen so
              bereits ersten Kontakt zu der neuen Institution Schule.
            </p>
            <p>
              Im Kooperationskalender sind beispielsweise eine Schulrallye und gemeinsame Turnstunden verankert. Somit wird
              ein gleitender und sanfter Übergang für die Kinder ermöglicht. Mehr über das Brückenjahr finden Sie unter{' '}
              <Link href="/auszeichnungen" className="font-semibold text-primary underline-offset-4 hover:underline">
                unseren Auszeichnungen
              </Link>
              .
            </p>
          </Prose>
        </div>
      </Section>
    </>
  )
}
