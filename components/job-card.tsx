import { CalendarDays, Clock, FileText, Mail, Phone, UserRound } from 'lucide-react'
import { jobMailHref, type JobPosting } from '@/lib/jobs'

export function JobCard({ job }: { job: JobPosting }) {
  const { contactPerson } = job

  return (
    <article
      id={job.id}
      className="flex flex-col gap-6 rounded-4xl bg-card p-7 ring-1 ring-border transition-shadow hover:shadow-lg sm:p-8"
      aria-labelledby={`${job.id}-title`}
    >
      <header className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Stellenausschreibung</p>
        <h2 id={`${job.id}-title`} className="text-2xl font-semibold text-balance">
          {job.title}
        </h2>
        {job.summary && <p className="leading-relaxed text-muted-foreground">{job.summary}</p>}
      </header>

      <dl className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <Clock className="size-5" aria-hidden />
          </span>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Umfang</dt>
            <dd className="font-semibold">{job.scope}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <CalendarDays className="size-5" aria-hidden />
          </span>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Beginn</dt>
            <dd className="font-semibold">{job.start}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3 sm:col-span-2">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <UserRound className="size-5" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ansprechpartnerin</dt>
            <dd className="flex flex-col gap-1">
              <span className="font-semibold">
                {contactPerson.name}
                {contactPerson.role && <span className="font-normal text-muted-foreground"> · {contactPerson.role}</span>}
              </span>
              <span className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {contactPerson.phone && (
                  <a href={contactPerson.phoneHref} className="inline-flex items-center gap-1.5 hover:text-primary">
                    <Phone className="size-3.5" aria-hidden /> {contactPerson.phone}
                  </a>
                )}
                {contactPerson.email && (
                  <a
                    href={`mailto:${contactPerson.email}`}
                    className="inline-flex items-center gap-1.5 break-all hover:text-primary"
                  >
                    <Mail className="size-3.5" aria-hidden /> {contactPerson.email}
                  </a>
                )}
              </span>
            </dd>
          </div>
        </div>
      </dl>

      <footer className="mt-auto flex flex-wrap gap-3 border-t border-border pt-6">
        <a
          href={jobMailHref(job)}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="size-4" aria-hidden /> Per E-Mail bewerben
        </a>
        {job.pdf && (
          <a
            href={job.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/70"
          >
            <FileText className="size-4" aria-hidden /> Ausschreibung als PDF
            <span className="sr-only"> (öffnet in neuem Tab)</span>
          </a>
        )}
      </footer>
    </article>
  )
}
