'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { contact } from '@/lib/site-data'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Anfrage über die Website – ${name}`)
    const body = encodeURIComponent(`${message}\n\n---\nName / Name des Kindes: ${name}\nE-Mail: ${email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold">
          Name / Name des Kindes
        </label>
        <input id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold">
          E-Mail
        </label>
        <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} autoComplete="email" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold">
          Nachricht
        </label>
        <textarea id="message" name="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
      </div>
      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send className="size-4" aria-hidden /> Absenden
      </button>
      <p className="text-xs text-muted-foreground">
        Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Nachricht an {contact.email}.
      </p>
    </form>
  )
}
