import type { Metadata } from 'next'
import Image from 'next/image'
import { BookOpenText, GraduationCap, Smile, Sparkles, Users } from 'lucide-react'
import { PageHero, Section } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Besondere Angebote',
  description: 'Strolche, Schulvorbereitung, Kidsclub, Gesunde Zähne, Märchenstunde und gruppenübergreifendes Spiel.',
}

const angebote = [
  {
    icon: Smile,
    title: 'Die Strolche',
    text: 'Die Strolche sind die jüngsten Kinder in der Gruppe. Ihnen wird regelmäßig die Möglichkeit geboten, sich zu Angeboten und Aktivitäten in Kleingruppen zusammenzufinden und so als eine altershomogene Gruppe etwas gemeinsam zu machen.',
  },
  {
    icon: GraduationCap,
    title: 'Schulvorbereitung – die „Schukis“',
    text: 'Jährlich nach den Herbstferien beginnt die Schulvorbereitung für die angehenden Schulkinder. Einmal wöchentlich treffen sich die Kinder in gemischten Kleingruppen oder in der Großgruppe für ca. 30 Minuten. In praktischen Angeboten werden sie spielerisch an die Aufgaben der Schule herangeführt. Die Kinder erfahren eine besondere Stellung im Kindergarten – sie sind nun „die Großen“, übernehmen Verantwortung und altersentsprechende Pflichten im Alltag.',
    wide: true,
  },
  {
    icon: Users,
    title: 'Kidsclub-Aktivitäten',
    text: 'Zum Kidsclub gehören die Kinder, die im darauffolgenden Jahr eingeschult werden. Ihnen möchten wir frühzeitig die Möglichkeit bieten, als Gruppe zusammenzufinden. Gemeinsame Aktivitäten finden einmal monatlich statt – mit wechselndem Angebot und je einer Erzieherin der Bären-, Löwen- oder Elefantengruppe.',
  },
  {
    icon: BookOpenText,
    title: 'Märchenstunde mit Martha',
    text: 'In regelmäßigen Abständen besucht uns Frau Martha Löcken und erzählt den Kindern sehr anschaulich Märchen. Um auf jedes Alter passend eingehen zu können, nimmt sie mal die Strolche, mal die Kidsclub-Kinder oder die Schukis zu den Märchenstunden mit.',
  },
  {
    icon: Sparkles,
    title: 'Gruppenübergreifendes Spiel',
    text: 'In unserer Eingangshalle findet das gruppenübergreifende Spiel sowohl in altersgemischten als auch in altershomogenen Kindergruppen statt. Den Kindern bieten wir somit einen erweiterten Spielraum, um vielfältige Kontakte zu knüpfen und Spielpartner kennenzulernen.',
  },
]

export default function AngebotePage() {
  return (
    <>
      <PageHero
        eyebrow="Konzeption"
        title="Besondere Angebote und Aktivitäten"
        intro="Neben dem freien Spiel gibt es bei uns feste Angebote für jede Altersstufe – von den Strolchen bis zu den Schukis."
      />

      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {angebote.map(({ icon: Icon, title, text, wide }) => (
            <li
              key={title}
              className={`flex flex-col gap-4 rounded-4xl bg-card p-7 ring-1 ring-border ${wide ? 'md:col-span-2 md:flex-row md:gap-8' : ''}`}
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="leading-relaxed text-foreground/85">{text}</p>
              </div>
            </li>
          ))}
          <li className="grid overflow-hidden rounded-4xl bg-secondary/60 md:col-span-2 md:grid-cols-[1fr_1.4fr]">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image src="/images/zahnarzt.jpg" alt="Zahnpflege in der Kita" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Gesundheitsamt</p>
              <h2 className="text-2xl font-semibold">Gesunde Zähne</h2>
              <p className="leading-relaxed text-foreground/85">
                Halbjährlich bekommen die Kinder gruppenintern Besuch von Mitarbeitern des Gesundheitsamtes. Auf
                spielerische und kindgerechte Art und Weise verdeutlichen sie, wie wichtig eine gute Zahnhygiene ist.
              </p>
            </div>
          </li>
        </ul>
      </Section>
    </>
  )
}
