import type { Metadata } from 'next'
import { HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react'
import { PageHero, Prose, Section, SectionHeading } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Schwerpunkte und Ziele',
  description: 'Unsere pädagogischen Schwerpunkte, Ziele und das Verständnis von Bildung in der Kita St. Vitus Venhaus.',
}

const ziele = [
  'Jedes Kind wird in seiner Persönlichkeit unterstützt, angeleitet und in seiner Entwicklung begleitet.',
  'Wir ermöglichen Selbstbildung und stärken dadurch die Handlungskompetenzen eines jeden Kindes.',
  'Das Selbstwertgefühl und das Selbstvertrauen werden gefestigt.',
]

const kompetenzen = [
  {
    icon: ShieldCheck,
    title: 'Widerstandsfähigkeit',
    text: 'Sich von Misserfolgen nicht entmutigen lassen oder resignieren, sondern belastbar werden.',
  },
  {
    icon: Lightbulb,
    title: 'Lernfähigkeit',
    text: 'Wir helfen dem Kind, eigene Lösungen zu finden, mit anderen zusammenzuarbeiten und seine Stärken einzubringen.',
  },
  {
    icon: HeartHandshake,
    title: 'Umgang mit Krisen und Konflikten',
    text: 'Auf eigenes Können vertrauen und zurückgreifen, neue Möglichkeiten suchen, erkennen und umsetzen.',
  },
]

export default function SchwerpunktePage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Unsere Schwerpunkte und Ziele"
        intro="Eine wichtige Grundlage unserer Arbeit ist es, die Kinder so anzunehmen, wie sie sind. Jeder Mensch ist gut, so wie er ist, weil er von Gott gewollt ist."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <blockquote className="flex flex-col gap-4 rounded-4xl bg-accent p-8 text-accent-foreground lg:sticky lg:top-28 lg:p-10">
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              „Kinder sind wie Blumenzwiebeln und wir müssen ihnen gute Wachstumsbedingungen geben.“
            </p>
            <footer className="text-sm font-bold uppercase tracking-wider">Maria Montessori</footer>
          </blockquote>
          <Prose>
            <p>
              Wir holen das Kind dort ab, wo es von der Entwicklung her steht und nehmen seine Bedürfnisse, Interessen und
              sein Wohlbefinden wahr. Von dieser Grundlage aus arbeiten wir mit dem Kind zusammen.
            </p>
            <p>
              Wie die Anlagen einer Blumenzwiebel in Bezug auf Form, Farbe und Schönheit schon vorhanden sind, so ist jedem
              Kind eine einzigartige Identität gegeben. Wir übernehmen die Verantwortung, gute Bedingungen für Wachstum und
              Entfaltung zu schaffen. So wie die Pflanze ihre Nährstoffe selbst aufnimmt, ist auch jedes Kind Selbstgestalter
              seiner Entwicklung und zeigt uns, was es für den nächsten Entwicklungsschritt benötigt.
            </p>
            <p>
              Wir begleiten jedes Kind individuell, damit es seinen Weg zu einer eigenständigen Persönlichkeit sinnvoll
              gestalten kann. Wir begegnen jedem Kind mit Offenheit und Akzeptanz, schenken ihm Vertrauen und Halt. Somit
              gewährleisten wir einen vertrauensvollen, sicheren und zuverlässigen Bindungs- und Beziehungsaufbau. Wir
              respektieren jedes Kind in seiner Individualität und fördern somit stabile Kindergemeinschaften.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="tinted">
        <SectionHeading eyebrow="Ziele" title="Für unsere tägliche Arbeit haben wir uns Ziele gesetzt" />
        <ul className="grid gap-4 md:grid-cols-3">
          {ziele.map((z, i) => (
            <li key={z} className="flex flex-col gap-3 rounded-3xl bg-card p-6 ring-1 ring-border">
              <span className="font-display text-4xl text-primary">{i + 1}</span>
              <p className="leading-relaxed text-foreground/85">{z}</p>
            </li>
          ))}
        </ul>
        <Prose className="mt-10">
          <p>
            Somit werden Grundlagen zum Erwerb von Basiskompetenzen geschaffen. Diese sind zur Bewältigung des alltäglichen
            Lebens notwendig. Der Pädagoge Wassilios Fthenakis geht davon aus, dass, wenn unter Bildung ausschließlich
            Wissensvermittlung verstanden wird, Kinder die auf sie zukommenden Aufgaben nicht mehr lösen können.
          </p>
        </Prose>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Resilienz"
          title="Diese Basiskompetenzen möchten wir stärken"
          intro="Zusammen bezeichnet man diese Fähigkeiten als Resilienz."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {kompetenzen.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tinted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Bildung" title="Bildung ermöglichen, begleiten und herausfordern" />
          <Prose>
            <p>
              Durch anregend gestaltete Innen- und Außenräume mit altersgerechten Materialien wird Bildung ermöglicht,
              begleitet und herausgefordert. Spiele werden initiiert und erweitert, die Bewegung wird angeregt und
              gefördert sowie die Sprachkompetenz unterstützt.
            </p>
            <p>
              Die Entwicklungs- und Lernprozesse werden regelmäßig beobachtet und dokumentiert. Diese Dokumentation findet
              unter anderem anhand von Bildungs- und Lerngeschichten statt, welche jedes Kind jährlich in einer
              Geburtstagsgeschichte geschenkt bekommt. In einem von uns entwickelten Beobachtungsbogen wird die
              Weiterentwicklung eines jeden Kindes festgehalten. So können wir die Stärken des Kindes einsetzen, um mögliche
              Schwächen zu mindern. Es findet eine ressourcenorientierte Dokumentation und keine Auflistung von Defiziten
              statt.
            </p>
            <p>
              Wir orientieren uns in unserer täglichen Arbeit mit den Kindern über den gesetzlichen Bildungsauftrag hinaus
              am christlichen Menschenbild. Wir vermitteln Werte wie Dankbarkeit und Hilfsbereitschaft. Dabei spielt die
              Religionszugehörigkeit der Kinder keine Rolle – in unserer Arbeit ist jedes Kind willkommen.
            </p>
          </Prose>
        </div>
      </Section>
    </>
  )
}
