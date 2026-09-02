import Link from 'next/link'
import { ArrowRight, BookOpen, CalendarDays, ClipboardList, Sparkles, Sun, Users } from 'lucide-react'
import { Section, SectionHeading } from '@/components/page-hero'

const links = [
  { href: '/anmeldung', icon: ClipboardList, title: 'Anmeldung', text: 'Alles zur Anmeldung, Eingewöhnung und Aufnahmekriterien.' },
  { href: '/tagesablauf', icon: Sun, title: 'Ein Tag bei uns', text: 'So sieht ein Tag in Krippe und Kindergarten aus.' },
  { href: '/team', icon: Users, title: 'Unser Team', text: 'Die Menschen, die Ihr Kind jeden Tag begleiten.' },
  { href: '/angebote', icon: Sparkles, title: 'Besondere Angebote', text: 'Strolche, Schukis, Kidsclub, Märchenstunde und gruppenübergreifendes Spiel.' },
  { href: '/feste', icon: CalendarDays, title: 'Feste und Feiern', text: 'Das Kita-Jahr im Rhythmus des Kirchenjahres.' },
  { href: '/mediathek', icon: BookOpen, title: 'Mediathek', text: 'Konzeption, Kita-ABC und Videos zum Herunterladen.' },
]

export function QuickLinks() {
  return (
    <Section tone="tinted">
      <SectionHeading eyebrow="Gut zu wissen" title="Schnell gefunden" align="center" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ href, icon: Icon, title, text }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-primary"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Mehr erfahren
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
