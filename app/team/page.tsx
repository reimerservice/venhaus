import type { Metadata } from 'next'
import Image from 'next/image'
import { User } from 'lucide-react'
import { PageHero, Section } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { leadership, teamSections } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Unser Team',
  description: 'Die pädagogischen Fachkräfte und Mitarbeitenden der Kita St. Vitus Venhaus.',
}

/* Warme Zuschnitte im Wechsel – gibt dem Raster Rhythmus statt Uniformität. */
const cuts = ['cut-arch', 'rounded-[2rem]', 'cut-leaf', 'cut-pebble', 'rounded-[2rem_2rem_2rem_0.5rem]']
const tints = ['bg-secondary', 'bg-accent/50', 'bg-muted', 'bg-secondary', 'bg-accent/40']

export default function TeamPage() {
  const staffSections = teamSections.filter((s) => s.members.some((m) => m.image))
  const supportSections = teamSections.filter((s) => !s.members.some((m) => m.image))

  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Die Menschen, die Ihr Kind begleiten"
        intro="Unser Team besteht aus 15 pädagogischen Fachkräften und einer Hauswirtschaftskraft. Mit viel Liebe, Geduld und pädagogischem Fachwissen sorgen alle Mitarbeiterinnen und Mitarbeiter dafür, dass sich die Kinder sicher und geborgen fühlen."
        image={{ src: '/images/raeume/eingangshalle.jpg', alt: 'Die helle Eingangshalle der Kita St. Vitus Venhaus' }}
      />

      {/* Leitung – groß und ruhig hervorgehoben */}
      <Section className="pb-8 lg:pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rotate-[-3deg] rounded-[2.5rem] bg-accent/60" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <Image
                src={leadership.image!}
                alt={`Porträt von ${leadership.name}`}
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Leitung</p>
            <h2 className="text-4xl font-semibold sm:text-5xl">{leadership.name}</h2>
            <p className="text-lg font-semibold text-secondary-foreground">{leadership.role}</p>
            <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-foreground/85">{leadership.description}</p>
            <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-foreground/85">
              Die Kitaleitung ist freigestellt – dennoch ist es ihr ein wichtiges Anliegen, unterstützend in den Gruppen
              tätig zu sein.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Gruppen – Fotoraster mit warmen Zuschnitten */}
      {staffSections.map((section, si) => (
        <Section key={section.title} className="py-12 lg:py-16" id={section.title.toLowerCase().replace(/^(das|die) /, '')}>
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <Reveal className="flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {section.title === 'Das Spatzennest' ? 'Krippe' : section.title === 'Hauswirtschaft' ? 'Küche' : 'Kindergarten'}
              </p>
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              <p className="text-sm text-muted-foreground">
                {section.members.length} {section.members.length === 1 ? 'Kollegin' : 'Kolleginnen'}
              </p>
            </Reveal>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {section.members.map((m, i) => {
                const idx = (si * 2 + i) % cuts.length
                return (
                  <Reveal as="li" key={m.name} delay={i * 80} className="flex flex-col gap-4">
                    <div className={cn('relative aspect-[4/5] w-full overflow-hidden', cuts[idx], tints[idx])}>
                      {m.image ? (
                        <Image
                          src={m.image}
                          alt={`Porträt von ${m.name}`}
                          fill
                          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-muted-foreground">
                          <User className="size-12" aria-hidden />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold leading-tight">{m.name}</h3>
                      <p className="text-sm leading-snug text-muted-foreground">{m.role}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </Section>
      ))}

      {/* Reinigung & Hausmeister – ohne Fotos, als ruhige Namensliste */}
      {supportSections.map((section) => (
        <Section key={section.title} tone="tinted" className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <Reveal className="flex flex-col gap-2">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Im Hintergrund</p>
              <h2 className="text-3xl font-semibold">{section.title}</h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {section.members.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-4 border-b border-foreground/10 py-3">
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-sm text-muted-foreground">{m.role}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  )
}
