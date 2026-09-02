'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export function VideoCard({ id, title, thumb }: { id: string; title: string; thumb: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-3xl bg-foreground">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Video abspielen: ${title}`}
          >
            <Image src={thumb} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <span className="relative inline-flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform group-hover:scale-110">
              <Play className="ml-1 size-7" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <figcaption className="font-semibold">{title}</figcaption>
    </figure>
  )
}
