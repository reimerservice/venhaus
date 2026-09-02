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
  /** Was die Kita bietet – optional, wird als Liste angezeigt. */
  benefits?: string[]
  /** Optionaler Link zur vollständigen Ausschreibung als PDF, z. B. "/docs/stellen/erzieherin-2026.pdf". */
  pdf?: string
  /** Optionaler Flyer als Bild (PNG/JPG) – wird in der Karte angezeigt und ist verlinkt. */
  flyer?: { src: string; alt: string }
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
 * Inhalte 1:1 aus den Stellen-Flyern der Kita übernommen (Stand: Flyer vom Träger).
 * Ein Eintrittstermin steht in den Flyern nicht – daher als Platzhalter markiert.
 */
export const jobPostings: JobPosting[] = [
  {
    id: 'heilpaedagogische-fachkraft',
    title: 'Heilpädagogische Fachkraft (m/w/d)',
    scope: 'Voll- und Teilzeit, unbefristet',
    start: '[[ZU PRÜFEN: Eintrittstermin]]',
    summary: 'Wir suchen dich! Fachkraft mit „Kopf, Herz & Hand“.',
    benefits: [
      'entsprechendes Entgelt (TVöD)',
      'betriebliche Altersversorgung',
      'Weiterbildungsmöglichkeiten',
      'vielseitiger Arbeitsbereich',
      'offenes & engagiertes Team',
      'Gestaltungsspielraum eigener Ideen',
      'Fahrradleasing',
    ],
    contactPerson: defaultJobContact,
    flyer: {
      src: '/docs/stellen/heilpaedagogische-fachkraft.png',
      alt: 'Stellenausschreibung Heilpädagogische Fachkraft (m/w/d) – Kita St. Vitus Venhaus',
    },
  },
  {
    id: 'paedagogische-fachkraft-assistenzkraft',
    title: 'Pädagogische Fachkraft (m/w/d) oder Pädagogische Assistenzkraft (m/w/d)',
    scope: 'Voll- oder Teilzeit, unbefristet',
    start: '[[ZU PRÜFEN: Eintrittstermin]]',
    summary: 'Gemeinsam. Wertschätzend mit „Kopf, Herz & Hand“. Du möchtest Teil unseres Teams werden? Dann freuen wir uns auf deine Bewerbung!',
    benefits: [
      'entsprechendes Entgelt (TVöD)',
      'betriebliche Altersversorgung',
      'Weiterbildungsmöglichkeiten',
      'wertschätzendes, offenes und engagiertes Team',
      'Gestaltungsspielraum eigener Ideen',
      'Fahrradleasing',
    ],
    contactPerson: defaultJobContact,
    flyer: {
      src: '/docs/stellen/paedagogische-fachkraft-assistenzkraft.png',
      alt: 'Stellenausschreibung Pädagogische Fachkraft oder Pädagogische Assistenzkraft (m/w/d) – Kita St. Vitus Venhaus',
    },
  },
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
