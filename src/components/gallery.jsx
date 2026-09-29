import { useCallback, useEffect, useRef, useState } from "react"
import { galleryData } from "../lib/gallery-data"
import Section from "./section"

// Deterministic formatting (no locale APIs) so server and client render identical HTML.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const formatDate = (d) => `${MONTHS[Number(d.slice(5, 7)) - 1]} ${d.slice(0, 4)}`

function Photo({ item, className = "", sizes, eager = false }) {
  return (
    <picture>
      <source srcSet={`${item.src}.webp`} type="image/webp" />
      <img
        src={`${item.src}.jpg`}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    </picture>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)
  const dialogRef = useRef(null)
  const close = useCallback(() => setActive(null), [])
  const step = useCallback((dir) => setActive((i) => (i + dir + galleryData.length) % galleryData.length), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.documentElement.style.overflow = "hidden"
    dialogRef.current?.focus()
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [active, close, step])

  const current = active !== null ? galleryData[active] : null

  return (
    <Section id="photos" title="Events">
      <ul className="columns-1 gap-5 sm:columns-2 [&>li]:mb-6" role="list">
        {galleryData.map((item, i) => (
          <li key={item.src} className="break-inside-avoid">
            <figure>
              <button type="button" onClick={() => setActive(i)} className="block w-full overflow-hidden rounded-sm" aria-label={`Enlarge photo: ${item.caption}`}>
                <Photo item={item} sizes="(min-width: 640px) 380px, 100vw" className="h-auto w-full transition-opacity hover:opacity-90" />
              </button>
              <figcaption className="mt-2 text-sm">
                <span className="text-foreground">{item.event}</span>
                {(item.location || item.date) && (
                  <span className="text-muted-foreground"> · {[item.location, item.date && formatDate(item.date)].filter(Boolean).join(", ")}</span>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {current && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={current.event}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 p-4 outline-none md:p-10"
          onClick={close}
        >
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Photo item={current} eager sizes="90vw" className="max-h-[78vh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-3 flex items-baseline justify-between gap-6 text-sm">
              <span>
                <span className="text-foreground">{current.event}</span> <span className="text-muted-foreground">· {current.caption}</span>
              </span>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {active + 1}/{galleryData.length}
              </span>
            </figcaption>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <button type="button" className="link" onClick={() => step(-1)}>
                ← Previous
              </button>
              <button type="button" className="link" onClick={close}>
                Close
              </button>
              <button type="button" className="link" onClick={() => step(1)}>
                Next →
              </button>
            </div>
          </figure>
        </div>
      )}
    </Section>
  )
}
