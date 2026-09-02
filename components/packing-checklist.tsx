'use client'

import { useId, useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export type PackGroup = { title: string; hint?: string; items: string[] }

/**
 * Abhakbare Packliste. Der Zustand lebt nur im Browser-Tab – das ist bewusst so,
 * es geht nur um das Gefühl „alles beisammen“ beim Packen.
 */
export function PackingChecklist({ groups }: { groups: PackGroup[] }) {
  const total = groups.reduce((n, g) => n + g.items.length, 0)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const done = Object.values(checked).filter(Boolean).length
  const baseId = useId()

  return (
    <div className="flex flex-col gap-8">
      <Reveal className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <p className="text-sm font-semibold text-muted-foreground" aria-live="polite">
          {done} von {total} eingepackt
        </p>
        {done > 0 && (
          <button
            type="button"
            onClick={() => setChecked({})}
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Zurücksetzen
          </button>
        )}
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        {groups.map((g, gi) => (
          <Reveal as="fieldset" key={g.title} delay={gi * 90} className="flex min-w-0 flex-col gap-4">
            <legend className="mb-4 flex flex-col gap-1">
              <span className="text-xl font-semibold">{g.title}</span>
              {g.hint && <span className="text-sm text-muted-foreground">{g.hint}</span>}
            </legend>
            <ul className="flex flex-col">
              {g.items.map((item, ii) => {
                const key = `${gi}-${ii}`
                const id = `${baseId}-${key}`
                const isOn = !!checked[key]
                return (
                  <li key={key} className="border-b border-border/80 last:border-0">
                    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 py-3">
                      <input
                        id={id}
                        type="checkbox"
                        className="peer sr-only"
                        checked={isOn}
                        onChange={(e) => setChecked((c) => ({ ...c, [key]: e.target.checked }))}
                      />
                      <span
                        aria-hidden
                        className={cn(
                          'mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-lg border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
                          isOn ? 'border-primary bg-primary text-primary-foreground' : 'border-foreground/25 bg-card',
                        )}
                      >
                        {isOn && <Check className="size-4" strokeWidth={3} />}
                      </span>
                      <span className={cn('leading-relaxed transition-colors', isOn ? 'text-muted-foreground line-through' : 'text-foreground/90')}>
                        {item}
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
