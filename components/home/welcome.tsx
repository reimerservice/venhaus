import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/page-hero'

export function Welcome() {
  return (
    <Section tone="tinted">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src="/images/luft-3.jpg"
            alt="Luftaufnahme der Kindertagesstätte neben Kirche und Burgpark in Venhaus"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="blob-alt object-cover"
          />
          <blockquote className="absolute -bottom-4 right-0 max-w-xs rounded-3xl bg-card p-5 shadow-lg shadow-foreground/5 sm:-right-6">
            <p className="font-display text-lg leading-snug">
              „Jeder Mensch ist ein Geschöpf Gottes und von Gott gewollt.“
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Wer wir sind</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ein Ort, an dem jedes Kind sein darf, wie es ist</h2>
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Wir freuen uns über Ihr Interesse an unserer Kindertagesstätte und möchten Ihnen auf den folgenden Seiten
              einen Einblick in unsere Einrichtung und die pädagogische Arbeit geben.
            </p>
            <p>
              Die Kindertagesstätte St. Vitus Venhaus ist eine katholische Einrichtung, jedoch offen für alle
              Religionen und Nationalitäten. Unsere pädagogische Arbeit ist geprägt vom christlichen Menschenbild. Uns
              ist es wichtig, jedes Kind so anzunehmen wie es ist, ihm Halt zu geben, Beständigkeit, Zuverlässigkeit
              und Vertrauen zu schenken.
            </p>
            <p>
              Bei Fragen oder Anliegen melden Sie sich gerne telefonisch, per Mail oder über unser Kontaktformular –
              oder schauen Sie einfach mal vorbei. Wir wünschen Ihnen viel Freude beim Entdecken unserer Kita.
            </p>
            <p className="font-display text-lg text-foreground">Ihr Kindergartenteam St. Vitus Venhaus</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/team" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Unser Team kennenlernen <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href="/schwerpunkte" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Unsere Schwerpunkte <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
