import type { Metadata } from 'next'
import { AddressBlock, LegalPage, LegalSection, Pruefen } from '@/components/legal/legal-page'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf der Website der Kita St. Vitus Venhaus.',
}

const toc = [
  { id: 'ueberblick', label: 'Überblick' },
  { id: 'verantwortlicher', label: 'Verantwortlicher' },
  { id: 'datenschutzbeauftragter', label: 'Datenschutzbeauftragte:r' },
  { id: 'rechtsgrundlagen', label: 'Rechtsgrundlagen' },
  { id: 'hosting', label: 'Hosting bei Vercel' },
  { id: 'logfiles', label: 'Server-Logfiles' },
  { id: 'cookies', label: 'Cookies & Einwilligung' },
  { id: 'analytics', label: 'Vercel Web Analytics' },
  { id: 'kontakt', label: 'Kontaktformular & E-Mail' },
  { id: 'bewerbungen', label: 'Bewerbungen' },
  { id: 'youtube', label: 'YouTube-Videos' },
  { id: 'schriften', label: 'Schriftarten' },
  { id: 'links', label: 'Externe Links & PDFs' },
  { id: 'rechte', label: 'Ihre Rechte' },
  { id: 'aufsicht', label: 'Aufsichtsbehörde' },
  { id: 'sicherheit', label: 'Datensicherheit' },
  { id: 'aenderungen', label: 'Änderungen' },
]

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      intro="Wir freuen uns über Ihr Interesse an unserer Kindertagesstätte. Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche Daten beim Besuch dieser Website verarbeitet werden und welche Rechte Ihnen zustehen."
      updated={
        <>
          Stand: <Pruefen>Datum der Veröffentlichung eintragen</Pruefen>
        </>
      }
      toc={toc}
    >
      <LegalSection id="ueberblick" title="Das Wichtigste in Kürze">
        <ul>
          <li>Diese Website setzt <strong>keine Cookies</strong> und keine Tracking-Dienste ein.</li>
          <li>
            Es wird ausschließlich eine <strong>anonyme, cookielose Reichweitenmessung</strong> (Vercel Web Analytics)
            verwendet, die keine Nutzerprofile bildet.
          </li>
          <li>
            Das Kontaktformular sendet <strong>nichts an unseren Server</strong> – es öffnet Ihr eigenes E-Mail-Programm.
          </li>
          <li>
            YouTube-Videos werden erst nach Ihrem <strong>aktiven Klick</strong> geladen (Zwei-Klick-Lösung im erweiterten
            Datenschutzmodus).
          </li>
          <li>Daher ist kein Cookie-Banner erforderlich.</li>
        </ul>
      </LegalSection>

      <LegalSection id="verantwortlicher" title="Verantwortlicher">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO bzw. des KDG ist:</p>
        <AddressBlock>
          <strong>{contact.traeger}</strong>
          <br />
          als Trägerin der {contact.name}
          <br />
          <Pruefen>Postanschrift der Kirchengemeinde / des Pfarrbüros</Pruefen>
          <br />
          vertreten durch: <Pruefen>Name und Funktion der Trägervertretung</Pruefen>
        </AddressBlock>
        <p>Ansprechpartnerin vor Ort:</p>
        <AddressBlock>
          {contact.leitung}, Kitaleitung
          <br />
          {contact.name}
          <br />
          {contact.street}, {contact.city}
          <br />
          Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </AddressBlock>
        <p>
          <strong>Hinweis zum anwendbaren Recht:</strong> Als Einrichtung in katholischer Trägerschaft gilt für uns das{' '}
          <em>Gesetz über den Kirchlichen Datenschutz (KDG)</em>, das inhaltlich der DSGVO entspricht. Wo in dieser
          Erklärung auf Artikel der DSGVO verwiesen wird, gelten die entsprechenden Paragrafen des KDG.{' '}
          <Pruefen>Anwendbarkeit des KDG durch den Träger bestätigen lassen</Pruefen>
        </p>
      </LegalSection>

      <LegalSection id="datenschutzbeauftragter" title="Datenschutzbeauftragte:r">
        <p>Sie erreichen unsere betriebliche Datenschutzbeauftragte bzw. unseren Datenschutzbeauftragten unter:</p>
        <AddressBlock>
          <Pruefen>Name der/des Datenschutzbeauftragten des Trägers bzw. des Bistums Osnabrück</Pruefen>
          <br />
          <Pruefen>Anschrift</Pruefen>
          <br />
          E-Mail: <Pruefen>E-Mail-Adresse</Pruefen>
        </AddressBlock>
      </LegalSection>

      <LegalSection id="rechtsgrundlagen" title="Rechtsgrundlagen der Verarbeitung">
        <p>Soweit wir personenbezogene Daten verarbeiten, stützen wir uns auf folgende Rechtsgrundlagen:</p>
        <ul>
          <li>
            <strong>Art. 6 Abs. 1 lit. a DSGVO / § 6 Abs. 1 lit. b KDG</strong> – Einwilligung (z. B. beim Start eines
            YouTube-Videos)
          </li>
          <li>
            <strong>Art. 6 Abs. 1 lit. b DSGVO / § 6 Abs. 1 lit. c KDG</strong> – Vertragsanbahnung und -erfüllung (z. B.
            Anfragen zur Anmeldung, Bewerbungen)
          </li>
          <li>
            <strong>Art. 6 Abs. 1 lit. f DSGVO / § 6 Abs. 1 lit. g KDG</strong> – berechtigtes Interesse (z. B. sichere
            und stabile Bereitstellung der Website, anonyme Reichweitenmessung)
          </li>
        </ul>
        <p>
          Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection id="hosting" title="Hosting bei Vercel">
        <p>
          Diese Website wird bei <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet.
          Vercel stellt die Server-Infrastruktur bereit und liefert die Seiten über ein weltweites Content Delivery
          Network (CDN) aus. Dabei werden die unter „Server-Logfiles“ beschriebenen Daten auf Servern von Vercel
          verarbeitet.
        </p>
        <p>
          Der Einsatz von Vercel erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren, schnellen und
          zuverlässigen Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO). Wir haben mit Vercel einen
          Vertrag über Auftragsverarbeitung (Data Processing Agreement) geschlossen.
        </p>
        <p>
          Eine Verarbeitung in den USA kann nicht ausgeschlossen werden. Vercel ist unter dem{' '}
          <strong>EU-US Data Privacy Framework</strong> zertifiziert; ergänzend gelten die Standardvertragsklauseln der
          EU-Kommission. Weitere Informationen:{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
        <p>
          <Pruefen>Vercel-Region der Deployments prüfen (empfohlen: fra1 / Frankfurt) und AVV im Vercel-Dashboard
          akzeptieren</Pruefen>
        </p>
      </LegalSection>

      <LegalSection id="logfiles" title="Server-Logfiles">
        <p>
          Beim Aufruf dieser Website werden automatisch Informationen erfasst, die Ihr Browser an den Server übermittelt.
          Dies sind:
        </p>
        <ul>
          <li>IP-Adresse (gekürzt bzw. nur temporär gespeichert)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite bzw. Datei</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
          <li>Browsertyp und -version, Betriebssystem</li>
        </ul>
        <p>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der technischen
          Bereitstellung, der Fehleranalyse und der Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          Die Logfiles werden bei Vercel nach kurzer Zeit automatisch gelöscht.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies und Einwilligung">
        <p>
          Diese Website setzt <strong>keine Cookies</strong> – weder technisch notwendige noch Analyse- oder
          Marketing-Cookies. Es werden auch keine vergleichbaren Technologien (Local Storage, Fingerprinting) zur
          Wiedererkennung von Besucherinnen und Besuchern eingesetzt.
        </p>
        <p>
          Aus diesem Grund verzichten wir bewusst auf einen Cookie-Banner: Ein Einwilligungsdialog ist nach § 25 TDDDG nur
          erforderlich, wenn auf Informationen im Endgerät zugegriffen wird, was hier nicht geschieht. Die einzige
          Verarbeitung, die eine Einwilligung erfordert – das Abspielen eingebetteter YouTube-Videos – erfolgt erst nach
          Ihrem aktiven Klick (siehe Abschnitt „YouTube-Videos“).
        </p>
      </LegalSection>

      <LegalSection id="analytics" title="Reichweitenmessung mit Vercel Web Analytics">
        <p>
          Um zu verstehen, welche Seiten unseres Angebots genutzt werden, setzen wir <strong>Vercel Web Analytics</strong>{' '}
          ein, einen Dienst der Vercel Inc. (Anschrift siehe „Hosting“).
        </p>
        <p>Vercel Web Analytics arbeitet datensparsam:</p>
        <ul>
          <li>Es werden <strong>keine Cookies</strong> gesetzt und keine Daten im Browser gespeichert.</li>
          <li>
            Die IP-Adresse wird nicht gespeichert; zur Unterscheidung von Seitenaufrufen innerhalb eines Besuchs wird ein
            kurzlebiger, nicht rückführbarer Hash aus Anfrage-Merkmalen gebildet, der nach 24 Stunden verfällt.
          </li>
          <li>Es findet keine seitenübergreifende Verfolgung und keine Profilbildung statt.</li>
        </ul>
        <p>
          Erfasst werden aggregierte Angaben wie Seitenaufrufe, Referrer, Land, Gerätetyp und Browser. Rechtsgrundlage ist
          unser berechtigtes Interesse an der statistischen Auswertung und Verbesserung unseres Angebots (Art. 6 Abs. 1
          lit. f DSGVO). Weitere Informationen:{' '}
          <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">
            vercel.com/docs/analytics/privacy-policy
          </a>
          .
        </p>
        <p>
          <Pruefen>Entscheidung des Trägers: Soll Vercel Web Analytics aktiv bleiben? Falls nein, diesen Abschnitt
          streichen und die Analytics-Komponente aus app/layout.tsx entfernen.</Pruefen>
        </p>
      </LegalSection>

      <LegalSection id="kontakt" title="Kontaktformular und E-Mail-Kontakt">
        <h3>Kontaktformular</h3>
        <p>
          Das Kontaktformular auf unserer Website überträgt <strong>keine Daten an unseren Server</strong>. Beim Klick auf
          „Absenden“ öffnet sich Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht (sog.{' '}
          <em>mailto</em>-Link). Erst wenn Sie diese E-Mail selbst versenden, erhalten wir Ihre Angaben – auf demselben
          Weg wie bei einer gewöhnlichen E-Mail. Eine Speicherung Ihrer Eingaben auf der Website findet nicht statt.
        </p>
        <h3>E-Mail und Telefon</h3>
        <p>
          Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (Name,
          Kontaktdaten, Inhalt der Anfrage, ggf. Name und Alter Ihres Kindes) zur Bearbeitung Ihres Anliegens und für
          mögliche Anschlussfragen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage auf einen Betreuungsvertrag abzielt, im
          Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald Ihr Anliegen abschließend bearbeitet ist
          und keine Aufbewahrungspflichten bestehen.{' '}
          <Pruefen>Löschfrist für allgemeine Anfragen festlegen, z. B. 6 Monate</Pruefen>
        </p>
        <p>
          Bitte beachten Sie, dass unverschlüsselte E-Mails auf dem Übertragungsweg grundsätzlich nicht vor Kenntnisnahme
          Dritter geschützt sind. Sensible Angaben (z. B. zu Gesundheit oder Familiensituation) teilen Sie uns bitte
          telefonisch oder persönlich mit.
        </p>
      </LegalSection>

      <LegalSection id="bewerbungen" title="Bewerbungen">
        <p>
          Bewerbungen auf ausgeschriebene Stellen oder Initiativbewerbungen erreichen uns per E-Mail. Wir verarbeiten die
          darin enthaltenen Daten (Lebenslauf, Zeugnisse, Anschreiben, Kontaktdaten) ausschließlich zur Durchführung des
          Bewerbungsverfahrens auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO i. V. m. § 26 BDSG bzw. § 53 KDG.
        </p>
        <p>
          Bewerbungsunterlagen werden nach Abschluss des Verfahrens spätestens nach{' '}
          <Pruefen>Frist, üblich: 6 Monate</Pruefen> gelöscht, sofern Sie nicht ausdrücklich in eine längere Speicherung
          für zukünftige Stellen eingewilligt haben. Empfänger innerhalb des Trägers sind die Kitaleitung sowie die für
          Personal zuständigen Stellen der Kirchengemeinde <Pruefen>ggf. Personalabteilung des Bistums ergänzen</Pruefen>.
        </p>
      </LegalSection>

      <LegalSection id="youtube" title="Eingebettete YouTube-Videos">
        <p>
          In unserer Mediathek binden wir Videos des Dienstes <strong>YouTube</strong> ein. Anbieter ist die Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <h3>Zwei-Klick-Lösung</h3>
        <p>
          Beim Aufruf der Mediathek wird <strong>keine Verbindung zu YouTube</strong> hergestellt. Sie sehen zunächst nur
          ein von uns selbst bereitgestelltes Vorschaubild. Erst wenn Sie auf die Abspielschaltfläche klicken, wird das
          Video von YouTube nachgeladen. Mit diesem Klick willigen Sie in die Datenübertragung an Google ein (Art. 6 Abs. 1
          lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können die Einwilligung jederzeit für die Zukunft widerrufen, indem Sie
          die Seite verlassen bzw. neu laden.
        </p>
        <h3>Erweiterter Datenschutzmodus</h3>
        <p>
          Wir nutzen die Einbettung über die Domain <em>youtube-nocookie.com</em>. Nach Angaben von Google werden dabei
          vor dem Start des Videos keine Cookies gesetzt und keine Informationen über Besucher gespeichert. Sobald Sie ein
          Video starten, erhält YouTube Ihre IP-Adresse und Informationen über das aufgerufene Video; wenn Sie in Ihrem
          Google-Konto eingeloggt sind, kann Google die Wiedergabe Ihrem Konto zuordnen.
        </p>
        <p>
          Dabei kann es zu einer Übermittlung in die USA kommen. Google LLC ist unter dem EU-US Data Privacy Framework
          zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="schriften" title="Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten (Fredoka, Nunito) werden beim Erstellen der Website
          heruntergeladen und <strong>von unserem eigenen Hosting</strong> ausgeliefert. Beim Besuch der Seite wird keine
          Verbindung zu Servern von Google Fonts oder anderen Schriftanbietern aufgebaut; Ihre IP-Adresse wird nicht an
          Dritte übermittelt.
        </p>
      </LegalSection>

      <LegalSection id="links" title="Externe Links und PDF-Dokumente">
        <p>
          Unsere Website enthält Links zu externen Angeboten, etwa zum Bistum Osnabrück, zur Grundschule oder zu unserem
          YouTube-Kanal. Beim Anklicken verlassen Sie unsere Website; für die Datenverarbeitung auf den Zielseiten ist der
          jeweilige Anbieter verantwortlich.
        </p>
        <p>
          PDF-Dokumente (Konzeption, Kita-ABC, Aufnahmekriterien, Ferienplanung, Stellenausschreibungen) werden direkt von
          unserem Hosting bereitgestellt. Beim Download fallen lediglich die unter „Server-Logfiles“ genannten Daten an.
        </p>
      </LegalSection>

      <LegalSection id="rechte" title="Ihre Rechte als betroffene Person">
        <p>Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
        <ul>
          <li>
            <strong>Auskunft</strong> (Art. 15 DSGVO / § 17 KDG) über die von uns verarbeiteten Daten
          </li>
          <li>
            <strong>Berichtigung</strong> (Art. 16 DSGVO / § 18 KDG) unrichtiger Daten
          </li>
          <li>
            <strong>Löschung</strong> (Art. 17 DSGVO / § 19 KDG), soweit keine Aufbewahrungspflichten entgegenstehen
          </li>
          <li>
            <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO / § 20 KDG)
          </li>
          <li>
            <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO / § 22 KDG)
          </li>
          <li>
            <strong>Widerspruch</strong> (Art. 21 DSGVO / § 23 KDG) gegen Verarbeitungen auf Grundlage berechtigter
            Interessen
          </li>
          <li>
            <strong>Widerruf</strong> erteilter Einwilligungen mit Wirkung für die Zukunft
          </li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten Kontaktdaten des
          Verantwortlichen oder der/des Datenschutzbeauftragten.
        </p>
      </LegalSection>

      <LegalSection id="aufsicht" title="Beschwerderecht bei der Aufsichtsbehörde">
        <p>
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für kirchliche Einrichtungen im
          Bistum Osnabrück ist zuständig:
        </p>
        <AddressBlock>
          <strong>Katholisches Datenschutzzentrum (KdöR)</strong>
          <br />
          Brackeler Hellweg 144
          <br />
          44309 Dortmund
          <br />
          Telefon: 0231 138985-0
          <br />
          E-Mail: <a href="mailto:info@kdsz.de">info@kdsz.de</a>
          <br />
          <a href="https://www.katholisches-datenschutzzentrum.de" target="_blank" rel="noopener noreferrer">
            www.katholisches-datenschutzzentrum.de
          </a>
        </AddressBlock>
        <p>
          <Pruefen>Zuständigkeit und Kontaktdaten der kirchlichen Aufsicht bestätigen. Falls das KDG nicht anwendbar ist:
          Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover</Pruefen>
        </p>
      </LegalSection>

      <LegalSection id="sicherheit" title="Datensicherheit">
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
          TLS-Verschlüsselung (erkennbar an „https://“ und dem Schloss-Symbol in der Adresszeile). Wir setzen zudem
          technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Manipulation und unberechtigten
          Zugriff zu schützen.
        </p>
      </LegalSection>

      <LegalSection id="aenderungen" title="Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
          Anforderungen entspricht oder um Änderungen unseres Angebots umzusetzen – etwa bei der Einführung neuer
          Funktionen. Für Ihren erneuten Besuch gilt dann die jeweils aktuelle Fassung.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
