import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Gesetzlicher Bildungsauftrag',
  description: 'Die neun Bildungsbereiche nach dem niedersächsischen KiTaG und wie wir sie in der Kita St. Vitus Venhaus umsetzen.',
}

const aufgaben = [
  'Stärkung der Persönlichkeit',
  'Einführung in sozial verantwortliches Handeln',
  'Vermittlung von Kenntnissen und Fähigkeiten, die eine eigenständige Lebensbewältigung im Rahmen der jeweiligen Möglichkeiten des einzelnen Kindes fördern',
  'Förderung der Erlebnisfähigkeit, Kreativität und Fantasie',
  'Aufrechterhalten des natürlichen Wissensdrangs und der Freude am Lernen',
  'Förderung der Gleichberechtigung von Jungen und Mädchen',
  'Förderung der Integration von Kindern mit und ohne Behinderung sowie von Kindern unterschiedlicher Herkunft und Prägung',
]

type Bereich = { title: string; points: string[]; umsetzung: string; lead?: string }

const bereiche: Bereich[] = [
  {
    title: 'Religiöse Erziehung und Wertevermittlung',
    points: [
      'Vorleben und Vermitteln von religiösen und christlichen Grundwerten wie Nächstenliebe, Achtung und Respekt',
      'Orientierung, Sicherheit und Halt',
      'Rücksichtsvoller Umgang miteinander',
      'Verantwortung für das eigene Tun',
      'Hilfsbereitschaft',
    ],
    umsetzung:
      'Wir Erzieherinnen leben den Kindern diese Werte täglich vor. Ebenfalls bringen wir ihnen Zeichen und Rituale nahe, die den Glauben sichtbar machen. So wird beispielsweise vor dem Essen ein Gebet gesprochen oder es finden verschiedene religionspädagogische Anschauungen statt.',
  },
  {
    title: 'Emotionale Entwicklung und soziales Lernen',
    points: [
      'Aufbauen von Bindungen und Beziehungen zu anderen Kindern und Erzieherinnen',
      'Gefühle wie Glück, Stolz und Freude, aber auch Trauer und Enttäuschung wahrnehmen und mit ihnen umgehen',
      'Verständnis für die Gefühle anderer wecken',
      'Regeln für das Miteinander im Alltag aufstellen',
    ],
    umsetzung:
      'In Kleingruppen kann jedes Kind seine Stärken und Fähigkeiten einbringen und lernt ebenfalls die der anderen Kinder kennen, zu beachten und zu akzeptieren. In diesen Situationen kann es seine Wichtigkeit im Zusammensein mit anderen Menschen erleben und erfährt, dass es Einfluss nehmen und selbst etwas bewirken kann.',
  },
  {
    title: 'Kognitive Fähigkeiten und Freude am Lernen',
    points: [
      'Durch vielfältige und unterschiedliche Materialien kann das Kind Erfahrungen mit allen Sinnen machen',
      'Selbstständiges Auswählen entsprechend Lerntempo, Interesse und Entwicklungsstand',
      'Eigenes Verhalten steuern',
      'Konzentriert und ausdauernd bei einer Tätigkeit verweilen',
      'Eigenes Tun schrittweise planen',
    ],
    umsetzung:
      'Wir Erzieherinnen schenken den Tätigkeiten der Kinder Beachtung und kommen so mit ihnen in den Dialog. Das Kind erlebt und spürt, dass seine Ideen und Vorstellungen ernst genommen werden. Um Lernerfolge zu ermöglichen, lassen wir dem Kind ausreichend Zeit und Raum, die Aktivitäten zu wiederholen. Angeleitete und fremdgestellte Beschäftigungen fordern das Aufgabenverständnis und das Durchhaltevermögen heraus.',
  },
  {
    title: 'Körper, Bewegung und Gesundheit',
    points: [
      'Stärken von Muskeln, Knochen, Herz-Kreislauf-System und Hirnaktivität',
      'Bewegung nimmt positiven Einfluss auf Lernen und Denkleistung',
      'Erlernen von eigenem Zu- und Vertrauen in Raum-Lage-Beziehungen',
      'Fähigkeiten und eigene Stärken wahrnehmen',
    ],
    umsetzung:
      'Selbstgewählte sowie angeleitete Bewegungsangebote ermöglichen das Erproben und Trainieren. Einmal wöchentlich steht jeder Gruppe der Turnraum zur Verfügung. Dort können die Kinder den Umgang mit Geräten erlernen, sich erproben und mit Fantasie und Kreativität Bewegungen entwickeln. Aktivitäten wie Rennen, Balancieren, Springen und Klettern stärken das Selbstbewusstsein und das Reaktionsvermögen.',
  },
  {
    title: 'Sprache und Sprechen',
    lead: 'Sprache ist das wichtigste Kommunikationsmittel und umfasst das Sprachverständnis und die Sprechfähigkeit.',
    points: [
      'Alltagsgespräche',
      'Durch Fragen und Nachfragen werden Denk- und Erinnerungsprozesse angeregt',
      'Kinder werden ermuntert, Bedürfnisse zu formulieren und sich in der Gruppe zu äußern',
      'Grundlage der gezielten und differenzierten Sprachförderung ist die systematische Begleitung eines jeden Kindes',
    ],
    umsetzung:
      'Wir bieten dem Kind Sprachanlässe im Miteinander. Als Pädagogen haben wir eine Vorbildfunktion und möchten die Sprechlust und die Freude an der Sprache wecken und vorleben. Dieses findet neben Alltagsgesprächen auch durch kindgemäße Literatur und während Gesprächskreisen statt. Im Stuhlkreis werden zudem Lieder, Fingerspiele und Reime erlernt.',
  },
  {
    title: 'Mathematisches Grundverständnis',
    lead: 'Sicherheiten und erste grundlegende Erfahrungen der Einteilung, Sortierung und Strukturierung.',
    points: [
      'Die Basis sind frühkindliche Erfahrungen – von Geburt an versuchen Kinder, Orientierung zu finden',
      'Unterstützung des Interesses an Formen und Zahlen',
      'Strukturierte Tagesabläufe, Rituale und wiederkehrende Handlungen schaffen',
    ],
    umsetzung:
      'Das natürliche Interesse der Kinder wird durch die Möglichkeit zu zählen, zu ordnen oder zu vergleichen unterstützt. Im sprachlichen und symbolischen Ausdruck lernen die Kinder Begriffe wie größer und kleiner oder auch Zahlwörter. Materialien zum Konstruieren und Bauen lehren mathematisches Verständnis ebenso wie Gesellschaftsspiele.',
  },
  {
    title: 'Lebenspraktische Kompetenzen',
    points: [
      'Selbsttätiges Handeln',
      'Selbstständiges Handeln',
      'Verantwortung für sich und andere übernehmen',
      'Schrittweise unabhängig werden von Erwachsenen',
    ],
    umsetzung:
      'Wir orientieren uns am Motto von Maria Montessori „Hilf mir, es selbst zu tun“. Wir leiten die Kinder zu selbsttätigem und selbstständigem Handeln an. So lernen sie beispielsweise das An- und Ausziehen, das Decken des Frühstückstisches und das Zubereiten von Speisen.',
  },
  {
    title: 'Ästhetische Bildung',
    points: [
      'Ästhetik = mit allen Sinnen wahrnehmen',
      'Entwicklung des eigenen Weltbildes',
      'Jedes Kind soll seinen eigenen Ausdruck finden',
      'Ästhetik zeigt sich sowohl im schöpferischen Gestalten als auch im Ausdruck im Rollenspiel',
    ],
    umsetzung:
      'Wir bieten den Kindern Möglichkeiten, das Wahrgenommene schöpferisch und kreativ umzusetzen, indem wir Freiräume schaffen, in denen sie ihre Gefühle und ihr Empfinden ausdrücken können. Dabei steht nicht das Ergebnis, sondern das Tun im Mittelpunkt. Abwechslungsreiche Materialien fördern die Neugier, die Lust und die Freude am Tun.',
  },
  {
    title: 'Natur- und Lebenswelt',
    points: [
      'Die Lage der Einrichtung ermöglicht das Kennenlernen von Dingen und Abläufen der Natur',
      'Sehen – Staunen – Ausprobieren lässt Freude und Entspannung erleben',
      'Natur wird als bereichernder Lebensraum wahrgenommen',
      'Entwicklung von Achtung und Verantwortung vor der Schöpfung',
    ],
    umsetzung:
      'Wir bieten den Kindern die Möglichkeit, sich Gegenstände und Lebewesen unter der Lupe anzusehen, zu experimentieren, zu vergleichen und Zusammenhänge herauszufinden. Ausflüge in die nähere Umgebung und Besichtigungen von Betrieben bringen den Kindern die Arbeitswelt der Erwachsenen näher.',
  },
]

export default function BildungsauftragPage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Gesetzlicher Bildungsauftrag"
        intro="Für Kindertagesstätten in Deutschland gilt das Kinder- und Jugendhilfegesetz (KJHG). Die bundesgesetzliche Grundlage findet sich in § 22 und legt drei wesentliche Aufgaben fest: die Betreuung, die Bildung und die Erziehung des Kindes."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="KiTaG Niedersachsen"
            title="Aufgaben des Erziehungs- und Bildungsauftrags"
            intro="Das niedersächsische Kindertagesstättengesetz benennt folgende Aufgaben:"
          />
          <ul className="flex flex-col gap-3">
            {aufgaben.map((a) => (
              <li key={a} className="flex gap-3 rounded-2xl bg-card p-4 ring-1 ring-border">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="leading-relaxed text-foreground/85">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="tinted">
        <SectionHeading
          eyebrow="Neun Bildungsbereiche"
          title="Was das konkret bei uns bedeutet"
          intro="Aus den Aufgaben ergeben sich neun Bildungsbereiche, die wir hier anhand kurzer Beispiele erläutern. Ausführlichere Informationen erhalten Sie in unserer Konzeption."
        />
        <ol className="grid gap-6 lg:grid-cols-2">
          {bereiche.map((b, i) => (
            <li key={b.title} className="flex flex-col gap-5 rounded-4xl bg-card p-7 ring-1 ring-border">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xl text-accent-foreground">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">{b.title}</h3>
                  {b.lead && <p className="text-sm text-muted-foreground">{b.lead}</p>}
                </div>
              </div>
              <ul className="flex flex-col gap-2 pl-1 text-sm leading-relaxed text-foreground/85">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-secondary/60 p-4 text-sm leading-relaxed text-secondary-foreground">
                <span className="font-bold">Umsetzung: </span>
                {b.umsetzung}
              </div>
            </li>
          ))}
        </ol>
        <Prose className="mt-10">
          <p>
            <a href="/docs/konzeption.pdf" className="font-semibold text-primary underline-offset-4 hover:underline">
              Unsere vollständige Konzeption als PDF herunterladen
            </a>
          </p>
        </Prose>
      </Section>
    </>
  )
}
