import type { Metadata } from 'next'
import { AddressBlock, LegalPage, LegalSection, Pruefen } from '@/components/legal/legal-page'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Anbieterkennzeichnung der Kindertagesstätte St. Vitus Venhaus.',
}

const toc = [
  { id: 'anbieter', label: 'Anbieter' },
  { id: 'traeger', label: 'Träger' },
  { id: 'vertretung', label: 'Vertretungsberechtigte' },
  { id: 'aufsicht', label: 'Aufsichtsbehörde' },
  { id: 'verantwortlich', label: 'Inhaltlich Verantwortliche' },
  { id: 'streitschlichtung', label: 'Streitschlichtung' },
  { id: 'haftung-inhalte', label: 'Haftung für Inhalte' },
  { id: 'haftung-links', label: 'Haftung für Links' },
  { id: 'urheberrecht', label: 'Urheberrecht' },
  { id: 'bildnachweise', label: 'Bildnachweise' },
  { id: 'realisation', label: 'Technische Realisation' },
]

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 18 Abs. 2 MStV (Medienstaatsvertrag)."
      toc={toc}
    >
      <LegalSection id="anbieter" title="Anbieter">
        <AddressBlock>
          <strong>{contact.name}</strong>
          <br />
          {contact.street}
          <br />
          {contact.city}
        </AddressBlock>
        <dl>
          <dt>Telefon</dt>
          <dd>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </dd>
          <dt>E-Mail</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
          <dt>Internet</dt>
          <dd>{contact.web}</dd>
        </dl>
        <p>
          Kitaleitung: {contact.leitung}, Fachwirtin für Kindertageseinrichtungen
        </p>
      </LegalSection>

      <LegalSection id="traeger" title="Träger der Einrichtung">
        <p>
          Die Kindertagesstätte St. Vitus Venhaus ist eine Einrichtung in Trägerschaft der{' '}
          <strong>{contact.traeger}</strong>, einer Körperschaft des öffentlichen Rechts.
        </p>
        <AddressBlock>
          {contact.traeger}
          <br />
          Pfarrbüro der Pfarreiengemeinschaft Spelle
          <br />
          Kirchstraße 5, 48480 Spelle
          <br />
          Telefon: <a href="tel:+49597793940">05977 93940</a>
          <br />
          E-Mail: <a href="mailto:pfarrbuero-spelle@bistum-os.de">pfarrbuero-spelle@bistum-os.de</a>
        </AddressBlock>
        <p>Die Kirchengemeinde gehört zur Pfarreiengemeinschaft Spelle im Bistum Osnabrück.</p>
      </LegalSection>

      <LegalSection id="vertretung" title="Vertretungsberechtigte">
        <p>Die Kirchengemeinde wird gesetzlich vertreten durch den Kirchenvorstand, dieser durch:</p>
        <ul>
          <li>Ludger Pöttering, Pfarrer (Vorsitzender des Kirchenvorstands)</li>
          <li>
            <Pruefen>stellv. Vorsitzende:r des Kirchenvorstands – Name ergänzen</Pruefen>
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="aufsicht" title="Zuständige Aufsichtsbehörde">
        <p>
          Kirchenaufsicht: Bischöfliches Generalvikariat Osnabrück, Domhof 2, 49074 Osnabrück
          <br />
          <Pruefen>Angabe bestätigen</Pruefen>
        </p>
        <p>
          Betriebserlaubnis nach § 45 SGB VIII: Niedersächsisches Landesamt für Soziales, Jugend und Familie,
          Landesjugendamt <Pruefen>Standort/Außenstelle und Anschrift ergänzen</Pruefen>
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer: <Pruefen>falls vorhanden, sonst diesen Absatz entfernen</Pruefen>
        </p>
      </LegalSection>

      <LegalSection id="verantwortlich" title="Verantwortlich für den Inhalt">
        <p>Verantwortlich im Sinne des § 18 Abs. 2 MStV:</p>
        <AddressBlock>
          {contact.leitung}
          <br />
          {contact.name}
          <br />
          {contact.street}, {contact.city}
        </AddressBlock>
        <p>
          <Pruefen>Bestätigen, dass die Kitaleitung als inhaltlich Verantwortliche benannt werden soll – alternativ
          Trägervertretung eintragen</Pruefen>
        </p>
      </LegalSection>

      <LegalSection id="streitschlichtung" title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection id="haftung-inhalte" title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <p>
          Alle Inhalte wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
          Inhalte können wir jedoch keine Gewähr übernehmen. Insbesondere Öffnungszeiten, Ferienregelungen und
          Aufnahmekriterien können sich ändern – maßgeblich sind die Auskünfte der Einrichtung.
        </p>
      </LegalSection>

      <LegalSection id="haftung-links" title="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
          können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
          entfernen.
        </p>
      </LegalSection>

      <LegalSection id="urheberrecht" title="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
        <p>
          Fotos, auf denen Kinder oder Mitarbeitende zu erkennen sind, werden nur mit Einwilligung der Betroffenen bzw.
          ihrer Erziehungsberechtigten veröffentlicht. Eine Weiterverwendung dieser Aufnahmen ist ausdrücklich untersagt.
        </p>
      </LegalSection>

      <LegalSection id="bildnachweise" title="Bildnachweise">
        <p>Die auf dieser Website verwendeten Fotos und Grafiken stammen aus folgenden Quellen:</p>
        <ul>
          <li>Luftaufnahmen, Räume, Außengelände und Teamfotos: {contact.name} / Andreas Reimer</li>
          <li>Symbolbilder auf der Seite „Ein Tag bei uns“: Pixabay (lizenzfrei)</li>
          <li>Symbolbild auf der Seite „Anmeldung“: Daiga Ellaby via Unsplash (Unsplash-Lizenz)</li>
          <li>Kinderzahnpflege-Illustration: <Pruefen>Quelle des Zahnarzt-Bildes</Pruefen></li>
          <li>Logo „Haus für Kinder und Familien“: Bistum Osnabrück</li>
          <li>Logo „Brückenjahr“: <Pruefen>Rechteinhaber des Brückenjahr-Logos</Pruefen></li>
          <li>
            Weitere Fotografinnen laut bisheriger Website: Keira Burton, Sofielafée Studio, Vanessa Loring{' '}
            <Pruefen>Zuordnung zu konkreten Bildern prüfen; nicht mehr verwendete Nachweise entfernen</Pruefen>
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="realisation" title="Technische Realisation und Gestaltung">
        <AddressBlock>
          Reimer Elektrotechnik
          <br />
          Brahmsstraße 5
          <br />
          48480 Spelle
        </AddressBlock>
        <p>
          Die Website wird über die Plattform Vercel bereitgestellt. Details zur Datenverarbeitung finden Sie in unserer{' '}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
