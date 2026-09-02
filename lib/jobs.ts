import { contact } from '@/lib/site-data'

export type JobPosting = {
  /** Eindeutige ID, z. B. "erzieherin-2026" – wird als React-Key und Anker verwendet. */
  id: string
  /** Stellenbezeichnung, z. B. "Pädagogische Fachkraft (m/w/d)". */
  title: string
  /** Umfang, z. B. "Teilzeit, 30 Std./Woche" oder "Vollzeit". */
  scope: string
  /** Beginn, z. B. "ab 01.08.2026" oder "zum nächstmöglichen Zeitpunkt". */
  start: string
  /** Kurzbeschreibung – optional. */
  summary?: string
  /** Ansprechpartnerin für Rückfragen. */
  contactPerson: {
    name: string
    role?: string
    phone?: string
    phoneHref?: string
    email?: string
  }
  /** Optionaler Link zur vollständigen Ausschreibung als PDF, z. B. "/docs/stellen/erzieherin-2026.pdf". */
  pdf?: string
}

/**
 * Standard-Ansprechpartnerin für Bewerbungen: die Kitaleitung.
 * Kann pro Stelle überschrieben werden.
 */
export const defaultJobContact: JobPosting['contactPerson'] = {
  name: contact.leitung,
  role: 'Kitaleitung',
  phone: contact.phone,
  phoneHref: contact.phoneHref,
  email: contact.email,
}

/**
 * Aktuelle Stellenausschreibungen.
 *
 * Neue Stelle hinzufügen: ein Objekt in dieses Array eintragen.
 * PDFs unter /public/docs/stellen/ ablegen und über das Feld `pdf` verlinken.
 * Ist das Array leer, zeigt /stellenangebote automatisch den Hinweistext
 * plus den Abschnitt für Initiativbewerbungen.
 *
 * Die Original-Website enthält derzeit keine konkreten Ausschreibungen,
 * deshalb ist die Liste bewusst leer – es werden keine Stellen erfunden.
 */
export const jobPostings: JobPosting[] = [
  // Beispiel (auskommentiert – zum Aktivieren die Kommentarzeichen entfernen):
  // {
  //   id: 'paedagogische-fachkraft-2026',
  //   title: 'Pädagogische Fachkraft (m/w/d)',
  //   scope: 'Teilzeit, 30 Std./Woche',
  //   start: 'ab 01.08.2026',
  //   summary: 'Für unsere Kindergartengruppen suchen wir Verstärkung.',
  //   contactPerson: defaultJobContact,
  //   pdf: '/docs/stellen/paedagogische-fachkraft-2026.pdf',
  // },
]

/** Betreff für Initiativbewerbungen per E-Mail. */
export const initiativeMailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Initiativbewerbung – Kita St. Vitus Venhaus',
)}`

/** Betreff für Bewerbungen auf eine konkrete Stelle. */
export function jobMailHref(job: JobPosting) {
  const to = job.contactPerson.email ?? contact.email
  return `mailto:${to}?subject=${encodeURIComponent(`Bewerbung: ${job.title} – Kita St. Vitus Venhaus`)}`
}
