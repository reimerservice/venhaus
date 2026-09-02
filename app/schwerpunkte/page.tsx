import type { Metadata } from 'next'
import { AnchorNav, PageHero, Prose, PullQuote, Section } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Schwerpunkte und Ziele',
  description: 'Unsere pädagogischen Schwerpunkte, Ziele und das Verständnis von Bildung in der Kita St. Vitus Venhaus.',
}

const anchors = [
  { href: '#haltung', label: 'Unsere Haltung' },
  { href: '#ziele', label: 'Ziele' },
  { href: '#resilienz', label: 'Resilienz' },
  { href: '#bildung', label: 'Bildung' },
]

export default function SchwerpunktePage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Unsere Schwerpunkte und Ziele"
        intro="Eine wichtige Grundlage unserer Arbeit ist es, die Kinder so anzunehmen, wie sie sind. Jeder Mensch ist gut, so wie er ist, weil er von Gott gewollt ist."
        image={{ src: '/images/raeume/spielplatz-kindergarten.jpg', alt: 'Der Kindergarten-Spielplatz mit Klettergerüst und Sonnensegel' }}
      >
        <AnchorNav items={anchors} label="Kapitel" />
      </PageHero>

      <Section className="pb-0 lg:pb-0">
        <div className="mx-auto max-w-3xl">
          {/* Haltung */}
          <Reveal id="haltung" className="scroll-mt-28">
            <Prose className="max-w-none">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Unsere Haltung</p>
              <h2 className="!mt-2">Das Kind dort abholen, wo es steht</h2>
              <p className="lead">
                Wir holen das Kind dort ab, wo es von der Entwicklung her steht und nehmen seine Bedürfnisse, Interessen
                und sein Wohlbefinden wahr. Von dieser Grundlage aus arbeiten wir mit dem Kind zusammen.
              </p>
            </Prose>
          </Reveal>

          <PullQuote cite="Maria Montessori">
            „Kinder sind wie Blumenzwiebeln und wir müssen ihnen gute Wachstumsbedingungen geben.“
          </PullQuote>

          <Reveal>
            <Prose className="max-w-none">
              <p>
                Wie die Anlagen einer Blumenzwiebel in Bezug auf Form, Farbe und Schönheit schon vorhanden sind, so ist
                jedem Kind eine einzigartige Identität gegeben. Wir übernehmen die Verantwortung, gute Bedingungen für
                Wachstum und Entfaltung zu schaffen. So wie die Pflanze ihre Nährstoffe selbst aufnimmt,{' '}
                <strong>ist auch jedes Kind Selbstgestalter seiner Entwicklung</strong> und zeigt uns, was es für den
                nächsten Entwicklungsschritt benötigt.
              </p>
              <p>
                Wir begleiten jedes Kind individuell, damit es seinen Weg zu einer eigenständigen Persönlichkeit sinnvoll
                gestalten kann. Wir begegnen jedem Kind mit Offenheit und Akzeptanz, schenken ihm Vertrauen und Halt.
                Somit gewährleisten wir einen vertrauensvollen, sicheren und zuverlässigen Bindungs- und
                Beziehungsaufbau. Wir respektieren jedes Kind in seiner Individualität und fördern somit stabile
                Kindergemeinschaften.
              </p>
            </Prose>
          </Reveal>

          {/* Ziele */}
          <Reveal id="ziele" className="mt-16 scroll-mt-28">
            <Prose className="max-w-none">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Ziele</p>
              <h2 className="!mt-2">Für unsere tägliche Arbeit haben wir uns drei Ziele gesetzt</h2>
            </Prose>
          </Reveal>
          <ol className="my-8 flex flex-col">
            {[
              'Jedes Kind wird in seiner Persönlichkeit unterstützt, angeleitet und in seiner Entwicklung begleitet.',
              'Wir ermöglichen Selbstbildung und stärken dadurch die Handlungskompetenzen eines jeden Kindes.',
              'Das Selbstwertgefühl und das Selbstvertrauen werden gefestigt.',
            ].map((z, i) => (
              <Reveal
                as="li"
                key={z}
                delay={i * 80}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-t border-border py-5 last:border-b"
              >
                <span aria-hidden className="font-display text-4xl font-semibold leading-none text-primary/80">
                  {i + 1}
                </span>
                <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">{z}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Prose className="max-w-none">
              <p>
                Somit werden Grundlagen zum Erwerb von Basiskompetenzen geschaffen. Diese sind zur Bewältigung des
                alltäglichen Lebens notwendig. Der Pädagoge Wassilios Fthenakis geht davon aus, dass, wenn unter Bildung
                ausschließlich Wissensvermittlung verstanden wird, Kinder die auf sie zukommenden Aufgaben nicht mehr
                lösen können.
              </p>
            </Prose>
          </Reveal>

          {/* Resilienz */}
          <Reveal id="resilienz" className="mt-16 scroll-mt-28">
            <Prose className="max-w-none">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Resilienz</p>
              <h2 className="!mt-2">Diese Basiskompetenzen möchten wir stärken</h2>
              <p className="lead">Zusammen bezeichnet man diese Fähigkeiten als Resilienz.</p>
              <h3>Widerstandsfähigkeit</h3>
              <p>Sich von Misserfolgen nicht entmutigen lassen oder resignieren, sondern belastbar werden.</p>
              <h3>Lernfähigkeit</h3>
              <p>
                Wir helfen dem Kind, eigene Lösungen zu finden, mit anderen zusammenzuarbeiten und seine Stärken
                einzubringen.
              </p>
              <h3>Umgang mit Krisen und Konflikten</h3>
              <p>Auf eigenes Können vertrauen und zurückgreifen, neue Möglichkeiten suchen, erkennen und umsetzen.</p>
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* Bildung */}
      <Section id="bildung" tone="tinted" className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Prose className="max-w-none">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Bildung</p>
              <h2 className="!mt-2">Bildung ermöglichen, begleiten und herausfordern</h2>
              <p>
                Durch anregend gestaltete Innen- und Außenräume mit altersgerechten Materialien wird Bildung ermöglicht,
                begleitet und herausgefordert. Spiele werden initiiert und erweitert, die Bewegung wird angeregt und
                gefördert sowie die Sprachkompetenz unterstützt.
              </p>
              <p>
                Die Entwicklungs- und Lernprozesse werden regelmäßig beobachtet und dokumentiert. Diese Dokumentation
                findet unter anderem anhand von Bildungs- und Lerngeschichten statt, welche jedes Kind jährlich in einer
                Geburtstagsgeschichte geschenkt bekommt. In einem von uns entwickelten Beobachtungsbogen wird die
                Weiterentwicklung eines jeden Kindes festgehalten.
              </p>
            </Prose>
          </Reveal>
          <PullQuote tone="secondary" className="bg-card">
            Es findet eine ressourcenorientierte Dokumentation und keine Auflistung von Defiziten statt.
          </PullQuote>
          <Reveal>
            <Prose className="max-w-none">
              <p>
                So können wir die Stärken des Kindes einsetzen, um mögliche Schwächen zu mindern. Wir orientieren uns in
                unserer täglichen Arbeit mit den Kindern über den gesetzlichen Bildungsauftrag hinaus am christlichen
                Menschenbild. Wir vermitteln Werte wie Dankbarkeit und Hilfsbereitschaft. Dabei spielt die
                Religionszugehörigkeit der Kinder keine Rolle – <strong>in unserer Arbeit ist jedes Kind willkommen.</strong>
              </p>
            </Prose>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
