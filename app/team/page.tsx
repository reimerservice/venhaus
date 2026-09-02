import type { Metadata } from 'next'
import Image from 'next/image'
import { User } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '@/components/page-hero'
import { leadership, teamSections } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Unser Team',
  description: 'Die pädagogischen Fachkräfte und Mitarbeitenden der Kita St. Vitus Venhaus.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Unser Team"
        intro="Unser Team besteht aus 15 pädagogischen Fachkräften und einer Hauswirtschaftskraft. Die Kitaleitung ist freigestellt – dennoch ist es ihr ein wichtiges Anliegen, unterstützend in den Gruppen tätig zu sein. Mit viel Liebe, Geduld und pädagogischem Fachwissen sorgen alle Mitarbeiter dafür, dass sich die Kinder sicher und geborgen fühlen."
      />

      <Section>
        <div className="grid items-center gap-10 rounded-4xl bg-secondary/60 p-8 lg:grid-cols-[auto_1fr] lg:p-12">
          <div className="relative mx-auto size-56 shrink-0 sm:size-64">
            <Image
              src={leadership.image!}
              alt={leadership.name}
              fill
              sizes="256px"
              className="blob object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Leitung</p>
            <h2 className="text-3xl font-semibold">{leadership.name}</h2>
            <p className="font-semibold text-secondary-foreground">{leadership.role}</p>
            <p className="leading-relaxed text-foreground/85">{leadership.description}</p>
          </div>
        </div>
      </Section>

      {teamSections.map((section, i) => (
        <Section key={section.title} tone={i % 2 === 1 ? 'tinted' : 'default'} className="py-12 lg:py-16">
          <SectionHeading title={section.title} />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {section.members.map((m) => (
              <li key={m.name} className="flex flex-col items-center gap-4 text-center">
                <div className="relative size-40 overflow-hidden rounded-full bg-muted ring-4 ring-card">
                  {m.image ? (
                    <Image src={m.image} alt={m.name} fill sizes="160px" className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-muted-foreground">
                      <User className="size-14" aria-hidden />
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm leading-snug text-muted-foreground">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  )
}
