import Image from 'next/image'
import Link from 'next/link'
import { Section, SectionHeading } from '@/components/page-hero'
import { groups } from '@/lib/site-data'

export function GroupsOverview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Unsere Gruppen"
        title="Vier Gruppen, ein Zuhause"
        intro="Im Spatzennest werden unsere Krippenkinder betreut, in drei Kindergartengruppen wachsen die Größeren gemeinsam heran."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/raumangebot#${g.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={g.image}
                  alt={`Gruppenraum – ${g.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur">
                  {g.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h3 className="text-xl font-semibold">{g.name}</h3>
                <p className="text-sm text-muted-foreground">{g.tagline}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
