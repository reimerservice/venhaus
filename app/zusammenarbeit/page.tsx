import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnchorNav, PageHero, Prose, PullQuote, Section, SectionHeading } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Zusammenarbeit und Kooperation',
  description: 'Zusammenarbeit mit Träger, Elternbeirat, Eltern und der Grundschule Venhaus.',
}

const elternPunkte: { title: string; text: string }[] = [
  {
    title: 'Aufnahmegespräch',
    text: 'Zu Beginn der Krippen- und Kindergartenzeit findet ein Aufnahmegespräch zwischen den zukünftigen Gruppenerzieherinnen und den Eltern in Einzelgesprächen statt.',
  },
  {
    title: 'Informationsabend',
    text: 'Ein gemeinsamer Informationsabend für alle „neuen“ Eltern, welcher ebenfalls vor Beginn der Kita-Zeit stattfindet, soll unsere Arbeit vorstellen und offene Fragen beantworten.',
  },
  {
    title: 'Tür- und Angelgespräche',
    text: 'Während der Krippen- und Kindergartenzeit haben Eltern die Möglichkeit, in kurzen Tür- und Angelgesprächen vom Tag des Kindes zu erfahren. Für Austauschgespräche stehen die Erzieherinnen bei Bedarf am Nachmittag zur Verfügung.',
  },
  {
    title: 'Entwicklungsgespräch',
    text: 'Einmal jährlich findet für jedes Kind ein Entwicklungsgespräch statt. Darin werden Beobachtungen ausgetauscht, Entwicklungsschritte benannt und Ziele für eine positive Weiterentwicklung formuliert.',
  },
  {
    title: 'Elternabende',
    text: 'In regelmäßigen Abständen finden Elternabende statt, wie beispielsweise der Kennlernabend mit der Wahl des Elternbeirates.',
  },
]

const anchors = [
  { href: '#traeger', label: 'Träger' },
  { href: '#elternbeirat', label: 'Elternbeirat' },
  { href: '#eltern', label: 'Eltern' },
  { href: '#grundschule', label: 'Grundschule' },
]

export default function ZusammenarbeitPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Kita"
        title="Zusammenarbeit und Kooperation"
        intro="Wir pflegen ein gutes Verhältnis zu allen Eltern – der Elternbeirat vertritt sie als offizielles Gremium. Auch mit Träger und Grundschule arbeiten wir eng zusammen."
        image={{ src: '/images/kooperation.png', alt: 'Kooperation – Kinder und Erwachsene Hand in Hand' }}
      >
        <AnchorNav items={anchors} />
      </PageHero>

      {/* Träger */}
      <Section id="traeger" className="pb-10 lg:pb-14">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Träger" title="Gemeinsam zum Wohle der Kinder" className="mb-0 lg:sticky lg:top-28 lg:self-start" />
          <Reveal delay={100}>
            <Prose>
              <p>
                Sowohl der Träger als auch die Erzieherinnen arbeiten zum Wohle der Kinder und Familien. Die Basis für
                eine gute Zusammenarbeit zwischen Träger und Einrichtung ist der gegenseitige Austausch über Belange und
                Aktionen der Kindertagesstätte.
              </p>
              <p>
                An Elternbeiratssitzungen und einigen Teambesprechungen nimmt der Träger oder ein Vertreter des Trägers
                teil. In Abstimmung mit der Leitung entscheidet der Träger über personelle Veränderungen innerhalb der
                Einrichtung. Und immer mal wieder besucht Pastor Pöttering die Kinder in den Gruppen.
              </p>
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* Elternbeirat */}
      <Section id="elternbeirat" tone="tinted">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Elternbeirat" title="Die Stimme der Eltern" className="mb-0" />
            <Reveal delay={80}>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col gap-0.5 border-t border-foreground/10 pt-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gewählt</dt>
                  <dd className="font-semibold">Jährlich, je 2 pro Gruppe</dd>
                </div>
                <div className="flex flex-col gap-0.5 border-t border-foreground/10 pt-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sitzungen</dt>
                  <dd className="font-semibold">Mind. 2× im Kita-Jahr</dd>
                </div>
                <div className="flex flex-col gap-0.5 border-t border-foreground/10 pt-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Grundlage</dt>
                  <dd className="font-semibold">§ 10 KiTaG Niedersachsen</dd>
                </div>
                <div className="flex flex-col gap-0.5 border-t border-foreground/10 pt-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Außerdem</dt>
                  <dd className="font-semibold">Elternkasse</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <Prose>
              <p>
                Im § 10 des KiTaG Niedersachsens ist geregelt, welche Aufgaben und Rechte der Elternbeirat hat. In
                unserem Elternbeirat fördern wir die Zusammenarbeit von Träger, Einrichtung und Eltern. Aus jeder unserer
                Gruppen wird einmal jährlich ein Sorgeberechtigter / eine Sorgeberechtigte samt Stellvertretung gewählt.
              </p>
              <p>
                Die Elternsprecher können zwischen Sorgeberechtigten und der Kita vermitteln, ihre Wünsche, Anregungen,
                Vorschläge und Kritik an die Leitung und den Träger herantragen. Sie sind beteiligt an wesentlichen
                Angelegenheiten der Erziehung, Bildung und Betreuung, am pädagogischen Konzept und der Organisation. Auch
                eine Elternkasse wird vom Beirat unterhalten.
              </p>
              <p>
                Der Elternbeirat besteht aus jeweils zwei gewählten Vertretern aus jeder Gruppe, der Einrichtungsleitung
                mit einer Vertreterin für die Erzieherinnen und Vertretern aus dem Kirchenvorstand. Die Elternvertreter
                werden jährlich neu gewählt. Mindestens zweimal im Kita-Jahr finden gemeinsame Sitzungen statt.
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
          </Reveal>
        </div>
      </Section>

      {/* Eltern */}
      <Section id="eltern">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Eltern" title="Eltern sind die Experten für ihre Kinder" className="mb-0" />
            <PullQuote className="mt-8 text-xl sm:text-2xl">
              Wir sehen uns als Erziehungsbegleiter der Kinder – gegenseitige Akzeptanz und Respekt gehören zum
              individuellen Umgang.
            </PullQuote>
          </div>
          <ol className="flex flex-col">
            {elternPunkte.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={Math.min(i * 70, 210)}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-border py-6 first:border-t-0 first:pt-0"
              >
                <span aria-hidden className="font-display text-3xl font-semibold leading-none text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-semibold leading-tight">{p.title}</h3>
                  <p className="leading-relaxed text-foreground/85">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Kita-Info-App */}
      <Section tone="primary" className="py-12 lg:py-16">
        <Reveal className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Kita-Info-App</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Immer auf dem neuesten Stand</h2>
          </div>
          <p className="text-lg leading-relaxed text-primary-foreground/85">
            Wir arbeiten mit der Kita-Info-App, über die wir Eltern schnell und unkompliziert über alle Neuigkeiten
            informieren. Zusätzlich arbeiten wir weiterhin mit Aushängen – vor allem für Neuigkeiten, über die wir die
            Kinder direkt und bildlich informieren möchten.
          </p>
        </Reveal>
      </Section>

      {/* Grundschule */}
      <Section id="grundschule">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Grundschule" title="Der Übergang zur Grundschule" className="mb-0" />
            <Reveal delay={100}>
              <Image
                src="/images/brueckenjahr.png"
                alt="Modellprojekt Brückenjahr"
                width={600}
                height={450}
                className="h-auto w-full max-w-xs rounded-2xl bg-card p-5 ring-1 ring-border"
              />
            </Reveal>
          </div>
          <Reveal delay={100}>
            <Prose>
              <p className="lead">
                Es findet eine intensive und kontinuierliche Zusammenarbeit mit der Grundschule Venhaus statt. Ein guter
                und offener Austausch ist für uns selbstverständlich.
              </p>
              <p>
                Während des Brückenjahres lernen die angehenden Schulkinder die Kinder der 3. Klasse kennen und bekommen
                einen Paten aus diesem Jahrgang. In verschiedenen Angeboten, die über das Jahr verteilt sowohl in unserer
                Einrichtung als auch in der Grundschule stattfinden, können sich die Kinder kennenlernen und bekommen so
                bereits ersten Kontakt zu der neuen Institution Schule.
              </p>
              <p>
                Im Kooperationskalender sind beispielsweise eine Schulrallye und gemeinsame Turnstunden verankert. Somit
                wird ein gleitender und sanfter Übergang für die Kinder ermöglicht. Mehr über das Brückenjahr finden Sie
                unter <Link href="/auszeichnungen">unseren Auszeichnungen</Link>.
              </p>
            </Prose>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
