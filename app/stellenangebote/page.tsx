import type { Metadata } from 'next'
import { Mail, Phone, Sprout } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '@/components/page-hero'
import { JobCard } from '@/components/job-card'
import { initiativeMailHref, jobPostings } from '@/lib/jobs'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Stellenangebote',
  description:
    'Aktuelle Stellenausschreibungen und Initiativbewerbung bei der Kita St. Vitus Venhaus – wir suchen immer mal wieder Mitarbeiter*innen und Jahrespraktikant*innen.',
}

export default function StellenangebotePage() {
  const hasJobs = jobPostings.length > 0

  return (
    <>
      <PageHero
        eyebrow="Mitarbeiten"
        title="Stellenangebote"
        intro="Wir suchen immer mal wieder neue Mitarbeiter*innen oder Jahrespraktikant*innen für unser Team. Wir geben jeder Bewerbung eine kurze Rückmeldung."
        image={{ src: '/images/luft-3.jpg', alt: 'Luftaufnahme der Kita St. Vitus in Venhaus' }}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={hasJobs ? '#ausschreibungen' : '#initiativbewerbung'}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {hasJobs ? `${jobPostings.length} offene ${jobPostings.length === 1 ? 'Stelle' : 'Stellen'}` : 'Initiativ bewerben'}
          </a>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground transition-colors hover:bg-secondary/70"
          >
            <Phone className="size-4" aria-hidden /> {contact.phone}
          </a>
        </div>
      </PageHero>

      <Section id="ausschreibungen">
        <SectionHeading
          eyebrow="Aktuelle Ausschreibungen"
          title={hasJobs ? 'Diese Stellen sind derzeit offen' : 'Derzeit keine offenen Stellen'}
          intro={
            hasJobs
              ? 'Alle Details zur jeweiligen Stelle finden Sie in der Karte – bei Fragen melden Sie sich gern direkt bei der genannten Ansprechpartnerin.'
              : undefined
          }
        />

        {hasJobs ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {jobPostings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 rounded-4xl bg-card p-8 ring-1 ring-border sm:flex-row sm:items-center sm:gap-8 sm:p-10">
            <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-3xl bg-accent text-accent-foreground">
              <Sprout className="size-8" aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-balance">Im Moment ist bei uns keine Stelle ausgeschrieben.</p>
              <p className="leading-relaxed text-muted-foreground">
                Das kann sich aber schnell ändern. Schauen Sie gern wieder vorbei – oder schicken Sie uns einfach jetzt
                schon Ihre Initiativbewerbung. Wir freuen uns, Sie kennenzulernen.
              </p>
            </div>
          </div>
        )}
      </Section>

      <Section tone="primary" id="initiativbewerbung">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Initiativbewerbung</p>
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              Keine passende Stelle dabei? Bewerben Sie sich trotzdem.
            </h2>
            <p className="text-lg leading-relaxed text-primary-foreground/85">
              Sollten hier keine passenden Angebote ausgeschrieben sein, freuen wir uns auch über Ihre
              Initiativbewerbung – gerne auch per Mail. Wir geben jeder Bewerbung eine kurze Rückmeldung.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={initiativeMailHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Mail className="size-4" aria-hidden /> Initiativbewerbung per E-Mail
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="size-4" aria-hidden /> Anrufen
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-4xl bg-primary-foreground/10 p-7 ring-1 ring-primary-foreground/15 sm:p-8">
            <h3 className="text-lg font-semibold">Ihre Ansprechpartnerin</h3>
            <dl className="flex flex-col gap-3 text-primary-foreground/90">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Name</dt>
                <dd className="font-semibold">
                  {contact.leitung} <span className="font-normal text-primary-foreground/70">· Kitaleitung</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">E-Mail</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="break-all underline-offset-4 hover:underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Telefon</dt>
                <dd>
                  <a href={contact.phoneHref} className="underline-offset-4 hover:underline">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Post</dt>
                <dd>
                  {contact.name}, {contact.street}, {contact.city}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
    </>
  )
}
