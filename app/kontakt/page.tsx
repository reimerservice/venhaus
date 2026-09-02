import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { PageHero, Section, SectionHeading } from '@/components/page-hero'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'So erreichen Sie die Kita St. Vitus Venhaus: Adresse, Telefon, E-Mail und Kontaktformular.',
}

export default function KontaktPage() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contact.street}, ${contact.city}`)}`

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir freuen uns auf Sie"
        intro="Sie haben Fragen zur Anmeldung, möchten uns kennenlernen oder sich bewerben? Rufen Sie an, schreiben Sie uns oder kommen Sie einfach vorbei."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-4xl">
              <Image src="/images/luft-4.jpg" alt="Luftaufnahme der Kita St. Vitus Venhaus mit Kirche" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <address className="flex flex-col gap-5 not-italic">
              <div>
                <p className="text-lg font-semibold">{contact.name}</p>
                <p className="text-muted-foreground">Leitung: Fachwirtin {contact.leitung}</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {contact.street}
                    <br />
                    {contact.city}
                  </a>
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
                <li className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-primary" aria-hidden />
                  <span>Montag bis Freitag, 7:00 – 16:00 Uhr (Randzeit bis Ende Ganztagsgruppe)</span>
                </li>
              </ul>
            </address>
          </div>

          <div className="rounded-4xl bg-secondary/60 p-8 lg:p-10">
            <SectionHeading title="Schreiben Sie uns" intro="Sie können uns gerne über dieses Kontaktformular eine Nachricht schicken." />
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
