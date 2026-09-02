import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Section } from '@/components/page-hero'
import { contact } from '@/lib/site-data'

export function JobsAndContact() {
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-8 rounded-4xl bg-primary p-8 text-primary-foreground sm:p-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Stellenangebote</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Lust, unser Team zu verstärken?</h2>
            <p className="text-lg leading-relaxed text-primary-foreground/85">
              Wir suchen immer mal wieder neue Mitarbeiter*innen oder Jahrespraktikant*innen für unser Team. Sollten
              hier keine passenden Angebote ausgeschrieben sein, freuen wir uns auch über Ihre Initiativbewerbung – gerne
              auch per Mail. Wir geben jeder Bewerbung eine kurze Rückmeldung.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Jetzt bewerben
          </Link>
        </div>

        <div className="flex flex-col gap-6 overflow-hidden rounded-4xl bg-card ring-1 ring-border">
          <div className="relative aspect-[16/8]">
            <Image src="/images/luft-3.jpg" alt="Luftaufnahme der Kita St. Vitus in Venhaus" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-5 p-8 pt-0">
            <h2 className="text-2xl font-semibold">Kommen Sie vorbei</h2>
            <ul className="flex flex-col gap-3 text-foreground/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>
                  {contact.street}, {contact.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-primary" aria-hidden />
                <a href={contact.phoneHref} className="hover:text-primary">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-primary">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
