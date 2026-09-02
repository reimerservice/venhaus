import { Hero } from '@/components/home/hero'
import { Welcome } from '@/components/home/welcome'
import { GroupsOverview } from '@/components/home/groups-overview'
import { OpeningHours } from '@/components/home/opening-hours'
import { ImpressionsStrip } from '@/components/home/impressions-strip'
import { QuickLinks } from '@/components/home/quick-links'
import { JobsAndContact } from '@/components/home/jobs-and-contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <GroupsOverview />
      <OpeningHours />
      <ImpressionsStrip />
      <QuickLinks />
      <JobsAndContact />
    </>
  )
}
