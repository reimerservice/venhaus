import type { Metadata } from 'next'
import { PageHero, Prose, Section } from '@/components/page-hero'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Datenschutzerklärung' }

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Section>
        <Prose>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können.
          </p>
          <h3>Verantwortliche Stelle</h3>
          <p>
            {contact.name}
            <br />
            {contact.street}, {contact.city}
            <br />
            Tel. {contact.phone}
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>Träger: {contact.traeger}</p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden technisch notwendige Daten
            (z. B. IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Browsertyp) in Server-Logfiles verarbeitet.
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zum Zweck der sicheren und
            zuverlässigen Bereitstellung der Website.
          </p>

          <h2>3. Datenerfassung auf dieser Website</h2>
          <h3>Cookies</h3>
          <p>Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken ein.</p>
          <h3>Kontaktaufnahme</h3>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage
            und für den Fall von Anschlussfragen bei uns gespeichert. Das Kontaktformular öffnet dabei Ihr eigenes
            E-Mail-Programm; eine Speicherung Ihrer Eingaben auf unserem Server findet nicht statt. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
          </p>
          <h3>YouTube-Videos</h3>
          <p>
            In der Mediathek binden wir Videos von YouTube (Google Ireland Limited) im erweiterten Datenschutzmodus ein.
            Erst wenn Sie ein Video aktiv starten, wird eine Verbindung zu den Servern von YouTube hergestellt und Daten
            übertragen. Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </p>

          <h2>4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
            deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung
            oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
            unter der oben angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu.
          </p>
        </Prose>
      </Section>
    </>
  )
}
