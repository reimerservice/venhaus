export const contact = {
  name: 'Kindertagesstätte St. Vitus Venhaus',
  leitung: 'Annette Hüer',
  street: 'Dorfstraße 13',
  city: '48480 Spelle/Venhaus',
  phone: '05977 / 8524',
  phoneHref: 'tel:+4959778524',
  email: 'kita-venhaus@pfarreiengemeinschaft-spelle.de',
  web: 'www.kita-st-vitus-venhaus.de',
  traeger: 'Katholische Kirchengemeinde St. Vitus Venhaus',
}

export type NavItem = { label: string; href: string; description?: string }
export type NavGroup = { label: string; href?: string; items?: NavItem[] }

export const navigation: NavGroup[] = [
  {
    label: 'Über uns',
    items: [
      { label: 'Team', href: '/team', description: 'Die Menschen, die Ihr Kind begleiten' },
      { label: 'Raumangebot', href: '/raumangebot', description: 'Unsere Räume und Spielplätze' },
      { label: 'Ein Tag bei uns', href: '/tagesablauf', description: 'So läuft ein Tag in Kita und Krippe' },
      { label: 'Unser Träger', href: '/traeger', description: 'Kath. Kirchengemeinde St. Vitus' },
    ],
  },
  {
    label: 'Unsere Kita',
    items: [
      { label: 'Anmeldung', href: '/anmeldung', description: 'Anmeldung, Eingewöhnung & Packliste' },
      { label: 'Auszeichnungen', href: '/auszeichnungen', description: 'Zertifikate und Projekte' },
      { label: 'Zusammenarbeit', href: '/zusammenarbeit', description: 'Eltern, Elternbeirat, Grundschule' },
    ],
  },
  {
    label: 'Konzeption',
    items: [
      { label: 'Besondere Angebote', href: '/angebote', description: 'Strolche, Schukis, Kidsclub & mehr' },
      { label: 'Schwerpunkte und Ziele', href: '/schwerpunkte', description: 'Was uns in der Arbeit leitet' },
      { label: 'Gesetzlicher Bildungsauftrag', href: '/bildungsauftrag', description: 'Die neun Bildungsbereiche' },
      { label: 'Feste und Feiern', href: '/feste', description: 'Das Jahr in unserer Kita' },
    ],
  },
  { label: 'Mediathek', href: '/mediathek' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const openingHours = [
  {
    group: 'Regelgruppe',
    core: '8:00 – 12:00 Uhr',
    extra: ['7:00 – 8:00 Uhr (halbstündlich)', '12:00 – 13:00 Uhr (halbstündlich)'],
  },
  {
    group: 'Ganztagsgruppe',
    core: '8:00 – 16:00 Uhr',
    extra: ['7:00 – 8:00 Uhr (halbstündlich)'],
  },
]

export type Group = {
  slug: string
  name: string
  kind: 'Krippe' | 'Kindergarten'
  image: string
  tagline: string
}

// Gruppennamen und Zuordnung Krippe/Kindergarten stammen von der Original-Website
// (Team- und Raumangebot-Seite). Die Kurzbeschreibungen sind bewusst rein beschreibend gehalten.
export const groups: Group[] = [
  {
    slug: 'spatzennest',
    name: 'Das Spatzennest',
    kind: 'Krippe',
    image: '/images/raeume/spatzennest-1.jpg',
    tagline: 'Krippengruppe',
  },
  {
    slug: 'elefantengruppe',
    name: 'Die Elefantengruppe',
    kind: 'Kindergarten',
    image: '/images/raeume/elefanten-1.jpg',
    tagline: 'Kindergartengruppe',
  },
  {
    slug: 'baerengruppe',
    name: 'Die Bärengruppe',
    kind: 'Kindergarten',
    image: '/images/raeume/baeren-1.jpg',
    tagline: 'Kindergartengruppe',
  },
  {
    slug: 'loewengruppe',
    name: 'Die Löwengruppe',
    kind: 'Kindergarten',
    image: '/images/raeume/loewen-1.jpg',
    tagline: 'Kindergartengruppe',
  },
]

export type TeamMember = {
  name: string
  role: string
  image?: string
}

export type TeamSection = {
  title: string
  members: TeamMember[]
}

export const leadership: TeamMember & { description: string } = {
  name: 'Annette Hüer',
  role: 'Leitung, Fachwirtin, Erzieherin',
  image: '/images/team/annette-hueer.jpg',
  description:
    'Frau Hüer trägt Fürsorge für die Erzieherinnen, Kinder und die Arbeit mit den Familien. Somit ist sie Bindeglied zwischen Team, Kindern, Eltern, Träger, Gemeinde und diversen Institutionen. Sie koordiniert, repräsentiert, organisiert und trägt Verantwortung für die pädagogische Arbeit.',
}

export const teamSections: TeamSection[] = [
  {
    title: 'Das Spatzennest',
    members: [
      {
        name: 'Annette Bohlin',
        role: 'Erzieherin, religionspädagogische Fachkraft, qualifizierte Krippenfachkraft',
        image: '/images/team/annette-bohlin.jpg',
      },
      {
        name: 'Alena Keller',
        role: 'Heilerziehungspflegerin, qualifizierte Krippenfachkraft',
        image: '/images/team/alena-keller.jpg',
      },
      { name: 'Natalie Schröder', role: 'Kinderpflegerin', image: '/images/team/natalie-schroeder.jpg' },
      { name: 'Katja Thye-Moormann', role: 'Erzieherin', image: '/images/team/katja-thye-moormann.jpg' },
    ],
  },
  {
    title: 'Die Elefantengruppe',
    members: [
      { name: 'Felicitas Esders', role: 'Erzieherin', image: '/images/team/felicitas-esders.jpg' },
      {
        name: 'Lena Kreuznacht',
        role: 'Erzieherin, religionspädagogische Fachkraft',
        image: '/images/team/lena-kreuznacht.jpg',
      },
    ],
  },
  {
    title: 'Die Bärengruppe',
    members: [
      {
        name: 'Agnes Schmitwilken',
        role: 'Erzieherin mit heilpädagogischer Zusatzqualifikation',
        image: '/images/team/agnes-schmitwilken.png',
      },
      {
        name: 'Martina Wiesch',
        role: 'Erzieherin, Motopädin, Kneipp-Gesundheitserzieherin',
        image: '/images/team/martina-wiesch.jpg',
      },
    ],
  },
  {
    title: 'Die Löwengruppe',
    members: [
      { name: 'Luzie Landwehr', role: 'Erzieherin und Sprachförderkraft', image: '/images/team/luzie-landwehr.jpg' },
      { name: 'Nadia Mendoza-Dirkes', role: 'Sozialassistentin', image: '/images/team/nadia-mendoza-dirkes.jpg' },
      { name: 'Anja Scheepers', role: 'Erzieherin', image: '/images/team/anja-scheepers.jpg' },
    ],
  },
  {
    title: 'Hauswirtschaft',
    members: [{ name: 'Maria Rauen', role: 'Hauswirtschaftskraft', image: '/images/team/maria-rauen.png' }],
  },
  {
    title: 'Reinigung & Hausmeister',
    members: [
      { name: 'Nina Storch', role: 'Reinigungskraft' },
      { name: 'Maria Aschenbrenner', role: 'Reinigungskraft' },
      { name: 'Galina Ramchen', role: 'Reinigungskraft' },
      { name: 'Jürgen Ehrreisser', role: 'Hausmeister' },
    ],
  },
]

export type GalleryImage = { src: string; title?: string; caption: string }

export const houseGallery: GalleryImage[] = [
  { src: '/images/raeume/spielplatz-krippe.jpg', title: 'Spielplatz der Krippe', caption: 'Der Spielplatz der Krippenkinder' },
  { src: '/images/raeume/spielplatz-kindergarten.jpg', title: 'Spielplatz', caption: 'Der Kindergarten-Spielplatz' },
  { src: '/images/raeume/eingangshalle.jpg', title: 'Unsere Eingangshalle', caption: 'Willkommen in unserer KiTa!' },
  { src: '/images/raeume/halle-1.jpg', title: 'Die Halle', caption: 'Hier ist viel Platz für gruppenübergreifendes Spiel.' },
  {
    src: '/images/raeume/halle-2.jpg',
    title: 'Die Halle',
    caption: 'Hier kann man schaukeln, Spiele spielen, Bilderbücher anschauen und Fische beobachten!',
  },
  { src: '/images/raeume/baellebad.jpg', title: 'Das Bällebad', caption: 'Das Bällebad lädt zum Toben ein!' },
  { src: '/images/raeume/turnraum.png', title: 'Unser Turnraum', caption: 'Hier gibt es unendlich viele Möglichkeiten, Bewegung zu fördern!' },
  { src: '/images/raeume/spatzennest-bauen.jpg', title: 'Bauen & Toben', caption: 'Hier können die Kinder aus dem Spatzennest bauen und toben!' },
]

export const groupGalleries: { title: string; images: GalleryImage[] }[] = [
  {
    title: 'Das Spatzennest',
    images: [
      { src: '/images/raeume/spatzennest-1.jpg', caption: 'Unser Geburtstagskalender im Spatzennest.' },
      { src: '/images/raeume/spatzennest-2.jpg', caption: 'Etwas Ordnung muss sein: Die Garderobe der Spatzen.' },
      { src: '/images/raeume/spatzennest-3.jpg', caption: 'Die Spiellandschaft im Spatzennest.' },
      { src: '/images/raeume/spatzennest-4.jpg', caption: 'Hier essen die Kinder im Spatzennest.' },
      { src: '/images/raeume/spatzennest-5.jpg', caption: 'Pause! Im Spatzennest gibt es auch einen Schlafraum.' },
      { src: '/images/raeume/spatzennest-6.jpg', caption: 'Auf Augenhöhe: Hier können die Kinder der Krippe schon ganz alleine Hände waschen.' },
      { src: '/images/raeume/spatzennest-7.jpg', caption: 'Viel Platz gibt es auf dem Wickeltisch im Spatzennest!' },
      { src: '/images/raeume/spatzennest-8.jpg', caption: 'Auch im Waschraum der Elefantengruppe hat jedes Wickelkind ein eigenes Fach.' },
    ],
  },
  {
    title: 'Die Löwengruppe',
    images: [
      { src: '/images/raeume/loewen-1.jpg', caption: 'Der Gruppenraum der Löwenkinder.' },
      { src: '/images/raeume/loewen-2.jpg', caption: 'Frühstückstisch in der Löwengruppe.' },
      { src: '/images/raeume/loewen-3.jpg', caption: 'Viel Platz zum Spielen in der Löwengruppe!' },
      { src: '/images/raeume/loewen-4.jpg', caption: 'In der Löwengruppe wurde gebaut!' },
      { src: '/images/raeume/loewen-5.jpg', caption: 'Hier waschen die Löwenkinder ihre Hände.' },
    ],
  },
  {
    title: 'Die Bärengruppe',
    images: [
      { src: '/images/raeume/baeren-1.jpg', caption: 'Ein Blick in die Bärengruppe.' },
      { src: '/images/raeume/baeren-2.jpg', caption: 'Der Gruppenraum der Bärenkinder.' },
      { src: '/images/raeume/baeren-3.jpg', caption: 'Die Puppenwohnung in der Bärengruppe.' },
      { src: '/images/raeume/baeren-4.jpg', caption: 'In der Bärengruppe gibt es gleich Frühstück!' },
      { src: '/images/raeume/baeren-5.jpg', caption: 'Hier waschen sich die Bärenkinder.' },
    ],
  },
  {
    title: 'Die Elefantengruppe',
    images: [
      { src: '/images/raeume/elefanten-1.jpg', caption: 'Das ist der Gruppenraum der Elefanten.' },
      { src: '/images/raeume/elefanten-2.jpg', caption: '[[ZU PRÜFEN: Bildunterschrift – im Original ohne Text]]' },
      { src: '/images/raeume/elefanten-3.jpg', caption: 'Milch, Wasser oder ein Kakao? Unser Esstisch in der Elefantengruppe.' },
      { src: '/images/raeume/elefanten-4.jpg', caption: 'Jede Gruppe hat einen eigenen Waschraum. Hier werden die Elefantenkinder sauber!' },
    ],
  },
]

export const documents = [
  {
    title: 'Unsere Konzeption',
    description:
      'Das pädagogische Konzept ist die Grundlage unserer täglichen Arbeit. Fortlaufend aktualisieren und überarbeiten wir es, um neuen Erkenntnissen zu folgen und den Aufgaben unserer Zeit gerecht zu werden.',
    href: '/docs/konzeption.pdf',
    image: '/images/mediathek/konzeption.png',
  },
  {
    title: 'Das Kita-ABC',
    description:
      'Alle wichtigen Informationen, die Eltern und Kinder für den Alltag im Kindergarten bei uns benötigen – kompakt von A bis Z.',
    href: '/docs/kita-abc.pdf',
  },
  {
    title: 'Das Krippen-ABC',
    description:
      'Das Gegenstück für unsere Krippenfamilien im Spatzennest. Gerne geben wir Ihnen auch eine gedruckte Fassung mit!',
    href: '/docs/krippen-abc.pdf',
  },
  {
    title: 'Leitbild der Pfarreiengemeinschaft Spelle',
    description:
      'Übergreifend für alle Einrichtungen des KGV Spelle wurde ein Leitbild formuliert, das Sie hier einsehen können.',
    href: '/docs/leitbild.pdf',
  },
  {
    title: 'Aufnahmekriterien 2025/2026',
    description:
      'Die Aufnahmekriterien als PDF (Stand laut Original-Website: Kita-Jahr 2025/2026). [[ZU PRÜFEN: Gibt es eine aktuellere Fassung?]]',
    href: '/docs/aufnahmekriterien.pdf',
  },
  {
    title: 'Ferienplanung 2026',
    description: 'Die Ferienplanung der Kita Venhaus für das Jahr 2026 als PDF.',
    href: '/docs/ferienplanung-2026.pdf',
  },
]

// Reihenfolge, Titel und Video-IDs entsprechen exakt dem Karussell auf der Original-Mediathek.
export const videos = [
  { id: 'Uz3WgMVg6Vs', title: 'Martinslegende', thumb: '/images/mediathek/martinslegende.png' },
  { id: 'MxH0w5nyZHw', title: 'Palmsonntag', thumb: '/images/mediathek/palmsonntag.png' },
  { id: 'Z1oEZ25ZfWQ', title: 'Gründonnerstag', thumb: '/images/mediathek/gruendonnerstag.png' },
  { id: 'FdYNO3OSagg', title: 'Karfreitag', thumb: '/images/mediathek/karfreitag.png' },
  { id: '6lwAGCnP_og', title: 'Ostern', thumb: '/images/mediathek/ostern.png' },
  { id: 'Vnjnj1VQ3LM', title: 'Emmaus', thumb: '/images/mediathek/emmaus.png' },
  { id: '2vceFdVS94Y', title: 'Pfingsten', thumb: '/images/mediathek/pfingsten.png' },
]

export const youtubeChannel = 'https://www.youtube.com/channel/UC_GGzQcyafYQE1DjLBNYcsg'
