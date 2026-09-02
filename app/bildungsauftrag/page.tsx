import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { PageHero, Prose, Section } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Gesetzlicher Bildungsauftrag',
  description:
    'Die neun Bildungsbereiche nach dem niedersächsischen KiTaG und wie wir sie in der Kita St. Vitus Venhaus umsetzen.',
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

type Bereich = { slug: string; short: string; title: string; points: string[]; umsetzung: string; lead?: string }

const bereiche: Bereich[] = [
  {
    slug: 'religion',
    short: 'Religion & Werte',
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
    slug: 'soziales',
    short: 'Emotionen & Soziales',
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
    slug: 'lernen',
    short: 'Denken & Lernen',
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
    slug: 'bewegung',
    short: 'Körper & Bewegung',
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
    slug: 'sprache',
    short: 'Sprache',
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
    slug: 'mathematik',
    short: 'Mathematik',
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
    slug: 'lebenspraxis',
    short: 'Lebenspraxis',
    title: 'Lebenspraktische Kompetenzen',
    points: ['Selbsttätiges Handeln', 'Selbstständiges Handeln', 'Verantwortung für sich und andere übernehmen', 'Schrittweise unabhängig werden von Erwachsenen'],
    umsetzung:
      'Wir orientieren uns am Motto von Maria Montessori „Hilf mir, es selbst zu tun“. Wir leiten die Kinder zu selbsttätigem und selbstständigem Handeln an. So lernen sie beispielsweise das An- und Ausziehen, das Decken des Frühstückstisches und das Zubereiten von Speisen.',
  },
  {
    slug: 'aesthetik',
    short: 'Ästhetik',
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
    slug: 'natur',
    short: 'Natur & Lebenswelt',
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
        image={{ src: '/images/raeume/turnraum.png', alt: 'Unser Turnraum mit Sprossenwand und Matten' }}
      />

      {/* Aufgaben nach KiTaG */}
      <Section className="pb-8 lg:pb-12">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Prose className="max-w-none">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">KiTaG Niedersachsen</p>
              <h2 className="!mt-2">Aufgaben des Erziehungs- und Bildungsauftrags</h2>
              <p className="lead">Das niedersächsische Kindertagesstättengesetz benennt folgende Aufgaben:</p>
              <ol>
                {aufgaben.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
              <p>
                Aus diesen Aufgaben ergeben sich <strong>neun Bildungsbereiche</strong>, die wir im Folgenden anhand kurzer
                Beispiele erläutern. Ausführlichere Informationen erhalten Sie in unserer Konzeption.
              </p>
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* Neun Bildungsbereiche – Fließtext mit Kapitelnavigation */}
      <Section tone="tinted">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
          <Reveal as="nav" aria-label="Bildungsbereiche" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Neun Bildungsbereiche</p>
            <ol className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {bereiche.map((b, i) => (
                <li key={b.slug} className="lg:border-t lg:border-foreground/10">
                  <a
                    href={`#${b.slug}`}
                    className="inline-flex items-baseline gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-semibold transition-colors hover:text-primary lg:w-full lg:rounded-none lg:bg-transparent lg:px-0 lg:py-2.5"
                  >
                    <span className="font-display text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                    {b.short}
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="mx-auto w-full max-w-3xl lg:mx-0">
            {bereiche.map((b, i) => (
              <Reveal as="article" key={b.slug} id={b.slug} className="scroll-mt-28 border-t border-foreground/10 py-12 first:border-t-0 first:pt-0">
                <Prose className="max-w-none">
                  <p className="flex items-baseline gap-3">
                    <span className="font-display text-5xl font-semibold leading-none text-primary/80">{i + 1}</span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Bildungsbereich</span>
                  </p>
                  <h2 className="!mt-3">{b.title}</h2>
                  {b.lead && <p className="lead">{b.lead}</p>}
                  <ul>
                    {b.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Prose>
                <div className="mt-6 rounded-[1.5rem_1.5rem_1.5rem_0.5rem] bg-card p-6 ring-1 ring-foreground/5 sm:p-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">So setzen wir es um</p>
                  <p className="font-display text-lg leading-snug text-foreground sm:text-xl">{b.umsetzung}</p>
                </div>
              </Reveal>
            ))}

            <Reveal className="mt-4 border-t border-foreground/10 pt-10">
              <a
                href="/docs/konzeption.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <FileText className="size-4" aria-hidden /> Vollständige Konzeption (PDF, 2,3 MB)
              </a>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
