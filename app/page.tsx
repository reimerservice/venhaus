import { Hero } from '@/components/home/hero'
import { Welcome } from '@/components/home/welcome'
import { GroupsOverview } from '@/components/home/groups-overview'
import { OpeningHours } from '@/components/home/opening-hours'
import { ImpressionsStrip } from '@/components/home/impressions-strip'
import { QuickLinks } from '@/components/home/quick-links'
import { JobsAndContact } from '@/components/home/jobs-and-contact'
import { ImageBreak } from '@/components/image-break'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <ImageBreak
        src="/images/luft-3.jpg"
        alt="Luftaufnahme der Kita mit Spielplatz, Sonnensegeln und den umliegenden Feldern von Venhaus"
        caption="Mitten im Grünen – im Ortskern von Venhaus, neben Kirche und Burgpark."
        position="center 40%"
      />
      <GroupsOverview />
      <OpeningHours />
      <ImpressionsStrip />
      <QuickLinks />
      <JobsAndContact />
    </>
  )
}
