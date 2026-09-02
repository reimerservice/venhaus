import type { Metadata } from 'next'
import { PageHero, Prose, Section } from '@/components/page-hero'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Impressum' }

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <Section>
        <Prose>
          <p>
            <strong>{contact.name}</strong>
            <br />
            Leitung Fachwirtin {contact.leitung}
            <br />
            {contact.street}
            <br />
            {contact.city}
            <br />
            Tel. {contact.phone}
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            {contact.web}
          </p>
          <p>Träger ist die {contact.traeger}.</p>

          <h2>Haftungsausschluss</h2>
          <h3>Inhalt der Webseite</h3>
          <p>
            Der Autor nimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der
            bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder
            ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die
            Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen,
            sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle
            Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder
            das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung
            zeitweise oder endgültig einzustellen.
          </p>
          <h3>Verweise und Links</h3>
          <p>
            Bei direkten oder indirekten Verweisen auf fremde Internetseiten („Links“), die außerhalb des
            Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft
            treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
            Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt daher ausdrücklich, dass zum Zeitpunkt
            der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren. Der Autor hat keinerlei
            Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten.
            Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach
            der Linksetzung verändert wurden. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für
            Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein
            der Anbieter der Seite, auf welche verwiesen wurde.
          </p>
          <h3>Urheber- und Kennzeichenrecht</h3>
          <p>
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente,
            Videosequenzen und Texte zu beachten. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
            geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen
            Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Das Copyright für
            veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung
            oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder
            gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
          <h3>Rechtswirksamkeit dieses Haftungsausschlusses</h3>
          <p>
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von wo aus auf diese Seite
            verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht
            mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und
            ihrer Gültigkeit davon unberührt.
          </p>

          <h2>Technische Realisation und Gestaltung</h2>
          <p>
            Reimer Elektrotechnik
            <br />
            Brahmsstraße 5
            <br />
            48480 Spelle
          </p>

          <h2>Fotonachweise</h2>
          <p>© Pixabay · © Keira Burton · © Sofielafée Studio · © Vanessa Loring · © Andreas Reimer</p>
        </Prose>
      </Section>
    </>
  )
}
