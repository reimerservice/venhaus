import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, navigation, openingHours } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-5">
          <Image src="/images/logo.jpg" alt="Logo Kindertagesstätte St. Vitus Venhaus" width={140} height={99} className="h-auto w-36 rounded-lg" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Eine katholische Einrichtung – offen für alle Religionen und Nationalitäten. Jedes Kind ist bei uns willkommen.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Kontakt</h2>
          <address className="flex flex-col gap-3 text-sm not-italic text-muted-foreground">
            <span className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>
                {contact.name}
                <br />
                {contact.street}
                <br />
                {contact.city}
              </span>
            </span>
            <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-foreground">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all hover:text-foreground">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden />
              {contact.email}
            </a>
          </address>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Öffnungszeiten</h2>
          <dl className="flex flex-col gap-3 text-sm text-muted-foreground">
            {openingHours.map((o) => (
              <div key={o.group}>
                <dt className="font-semibold text-foreground">{o.group}</dt>
                <dd>Kernzeit {o.core}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Seiten</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {navigation.flatMap((g) => (g.items ? g.items : [{ label: g.label, href: g.href! }])).map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-foreground">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {contact.name} · Träger: {contact.traeger}
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/impressum" className="hover:text-foreground">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-foreground">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
