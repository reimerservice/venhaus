import { stat } from 'node:fs/promises'
import path from 'node:path'
import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export type FileItem = {
  title: string
  description?: string
  href: string
}

function formatBytes(bytes: number) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1).replace('.', ',')} MB`
  return `${Math.round(bytes / 1024)} KB`
}

function formatOf(href: string) {
  return (path.extname(href).replace('.', '') || 'Datei').toUpperCase()
}

async function sizeOf(href: string) {
  try {
    const abs = path.join(process.cwd(), 'public', href)
    const s = await stat(abs)
    return formatBytes(s.size)
  } catch {
    return null
  }
}

/**
 * Downloads als klar erkennbare Dateizeilen: Icon, Titel, Beschreibung,
 * Format-Badge, Dateigröße (serverseitig ermittelt) und Download-Aktion.
 */
export async function FileList({ files }: { files: FileItem[] }) {
  const withMeta = await Promise.all(
    files.map(async (f) => ({ ...f, format: formatOf(f.href), size: await sizeOf(f.href) })),
  )

  return (
    <ul className="divide-y divide-border border-y border-border">
      {withMeta.map((f, i) => (
        <Reveal key={f.href} as="li" delay={Math.min(i * 50, 200)}>
          <a
            href={f.href}
            download
            className="group grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-2 py-5 sm:grid-cols-[auto_1fr_auto_auto] sm:items-center sm:gap-x-6"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <FileText className="size-5" aria-hidden />
            </span>
            <span className="flex min-w-0 flex-col gap-1">
              <span className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary">{f.title}</span>
              {f.description && <span className="text-sm leading-relaxed text-muted-foreground">{f.description}</span>}
            </span>
            <span className="col-start-2 flex items-center gap-2 text-sm sm:col-start-3">
              <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs font-bold tracking-wider text-foreground">
                {f.format}
              </span>
              {f.size && <span className="tabular-nums text-muted-foreground">{f.size}</span>}
            </span>
            <span className="col-start-2 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors group-hover:border-primary group-hover:text-primary sm:col-start-4">
              <Download className="size-4" aria-hidden />
              Download
              <span className="sr-only">: {f.title}</span>
            </span>
          </a>
        </Reveal>
      ))}
    </ul>
  )
}
