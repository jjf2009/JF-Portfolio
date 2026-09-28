import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react"
import SectionHeading from "./fx/SectionHeading"
import { galleryData } from "../lib/gallery-data"

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
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [active, close, step])

  const current = active !== null ? galleryData[active] : null

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="07" label="Hackathons & Events" title="Out in the community" id="gallery-heading" className="max-w-3xl" />
          <p className="max-w-sm text-muted-foreground md:text-right">
            Hackathons, pitches and meetups across Goa — where I build fast, present to judges and meet other builders.
          </p>
        </div>

        {/* Masonry via CSS columns: keeps each photo's natural aspect ratio */}
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4" role="list">
          {galleryData.map((item, i) => (
            <motion.li
              key={item.src}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            >
              <figure className="group relative overflow-hidden rounded-xl border border-border bg-card">
                <button type="button" onClick={() => setActive(i)} className="block w-full text-left" aria-label={`Open photo: ${item.caption}`}>
                  <Photo
                    item={item}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span aria-hidden="true" className="absolute right-3 top-3 rounded-full bg-background/70 p-2 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </button>
                <figcaption className="border-t border-border px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{item.event}</p>
                  <p className="text-xs text-muted-foreground">
                    {[item.location, item.date && formatDate(item.date)].filter(Boolean).join(" · ") || item.caption}
                  </p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.event}
            className="fixed inset-0 z-[190] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button type="button" onClick={close} autoFocus aria-label="Close" className="absolute right-4 top-4 rounded-full border border-border bg-card p-2.5 text-foreground hover:border-primary">
              <X className="h-5 w-5" />
            </button>
            <button type="button" onClick={(e) => (e.stopPropagation(), step(-1))} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground hover:border-primary md:left-6">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={(e) => (e.stopPropagation(), step(1))} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground hover:border-primary md:right-6">
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Photo item={current} eager sizes="90vw" className="max-h-[75vh] w-auto rounded-lg object-contain" />
              <figcaption className="mt-4 text-center">
                <p className="font-semibold text-foreground">{current.event}</p>
                <p className="text-sm text-muted-foreground">{current.caption}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/70">
                  {active + 1} / {galleryData.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
