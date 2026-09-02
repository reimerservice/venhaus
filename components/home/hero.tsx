import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Heart, Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div className="flex flex-col gap-7">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <Heart className="size-4" aria-hidden />
            Offen für alle
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Herzlich willkommen in der Kita St. Vitus Venhaus
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Eine katholische Kindertagesstätte im Herzen von Venhaus – offen für alle Religionen und Nationalitäten. Wir
            nehmen jedes Kind so an, wie es ist, und schenken ihm Halt, Beständigkeit und Vertrauen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/anmeldung"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Anmeldung & Aufnahme
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/raumangebot"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Unsere Räume entdecken
            </Link>
          </div>
          <dl className="mt-2 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Users className="size-3.5" aria-hidden /> Gruppen
              </dt>
              <dd className="font-display text-2xl font-semibold">4</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Krippe & Kiga</dt>
              <dd className="text-xs font-semibold leading-snug text-destructive">[[ZU PRÜFEN: Altersspanne]]</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Clock className="size-3.5" aria-hidden /> Geöffnet
              </dt>
              <dd className="font-display text-2xl font-semibold">7–16 Uhr</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/luft-1.jpg"
              alt="Luftaufnahme der Kita St. Vitus Venhaus mit roten Ziegeldächern, Sonnensegeln und Spielplatz"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-48 rotate-[-4deg] overflow-hidden rounded-3xl border-4 border-background shadow-xl shadow-foreground/10 sm:block lg:-left-10 lg:w-60">
            <Image
              src="/images/raeume/spielplatz-kindergarten.jpg"
              alt="Der Kindergarten-Spielplatz"
              width={480}
              height={360}
              className="aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
