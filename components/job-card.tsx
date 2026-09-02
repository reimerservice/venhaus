import Image from 'next/image'
import { CalendarDays, Check, Clock, FileText, ImageIcon, Mail, Phone, UserRound } from 'lucide-react'
import { jobMailHref, type JobPosting } from '@/lib/jobs'

export function JobCard({ job }: { job: JobPosting }) {
  const { contactPerson } = job
  const isPlaceholder = (s: string) => s.startsWith('[[ZU PRÜFEN')

  return (
    <article
      id={job.id}
      className="grid gap-8 rounded-4xl bg-card p-7 ring-1 ring-border transition-shadow hover:shadow-lg sm:p-8 lg:grid-cols-[1.4fr_1fr]"
      aria-labelledby={`${job.id}-title`}
    >
      <div className="flex flex-col gap-6">
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
              <dd className={isPlaceholder(job.start) ? 'text-sm font-semibold text-destructive' : 'font-semibold'}>
                {job.start}
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:col-span-2">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <UserRound className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bewerbung an</dt>
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

        {job.benefits && job.benefits.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Wir bieten</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {job.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm leading-snug">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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
          {job.flyer && (
            <a
              href={job.flyer.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/70 lg:hidden"
            >
              <ImageIcon className="size-4" aria-hidden /> Flyer ansehen
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
          )}
        </footer>
      </div>

      {job.flyer && (
        <a
          href={job.flyer.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden aspect-[1/1.414] overflow-hidden rounded-2xl bg-muted ring-1 ring-border lg:block"
          aria-label={`${job.flyer.alt} – Flyer in voller Größe öffnen`}
        >
          <Image
            src={job.flyer.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, 0px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur">
            Flyer öffnen
          </span>
        </a>
      )}
    </article>
  )
}
