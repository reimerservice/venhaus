'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { navigation } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Zum Inhalt springen
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Kita St. Vitus Venhaus – Startseite">
          <Image
            src="/images/logo.jpg"
            alt=""
            width={72}
            height={51}
            className="h-11 w-auto rounded-md"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold text-foreground">Kita St. Vitus</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Venhaus</span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-1">
            {navigation.map((group) =>
              group.items ? (
                <li key={group.label} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground',
                      group.items.some((i) => pathname.startsWith(i.href)) && 'text-primary',
                    )}
                    aria-haspopup="true"
                  >
                    {group.label}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-foreground/5">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              'block rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary',
                              pathname === item.href && 'bg-secondary',
                            )}
                          >
                            <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                            {item.description && (
                              <span className="block text-xs text-muted-foreground">{item.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={group.label}>
                  <Link
                    href={group.href!}
                    className={cn(
                      'block rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground',
                      pathname === group.href && 'text-primary',
                    )}
                  >
                    {group.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+4959778524"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            05977 / 8524
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile navigation – outside the header so backdrop-blur does not trap the fixed panel */}
      <div
        id="mobile-nav"
        className={cn(
          'lg:hidden fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-background transition-opacity duration-200',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6" aria-label="Mobile Navigation">
          {navigation.map((group) =>
            group.items ? (
              <div key={group.label} className="flex flex-col gap-1">
                <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{group.label}</p>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-xl px-3 py-3 font-display text-lg font-medium transition-colors hover:bg-secondary',
                      pathname === item.href && 'bg-secondary text-primary',
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={group.label}
                href={group.href!}
                className={cn(
                  'rounded-xl px-3 py-3 font-display text-lg font-medium transition-colors hover:bg-secondary',
                  pathname === group.href && 'bg-secondary text-primary',
                )}
              >
                {group.label}
              </Link>
            ),
          )}
          <a
            href="tel:+4959778524"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden />
            05977 / 8524
          </a>
        </nav>
      </div>
    </>
  )
}
