import { useEffect, useRef, useState } from "react"

const GLYPHS = "!<>-_\\/[]{}—=+*^?#$%&@01"

// Cycles through `words`, decoding each one out of random glyphs.
export default function ScrambleText({ words, interval = 2600, className = "" }) {
  const [display, setDisplay] = useState(words[0])
  const indexRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    let raf = 0

    const scrambleTo = (target) => {
      const from = display
      const length = Math.max(from.length, target.length)
      const queue = Array.from({ length }, (_, i) => ({
        to: target[i] ?? "",
        start: Math.floor(Math.random() * 12),
        end: Math.floor(Math.random() * 12) + 12,
      }))
      frame = 0
      const tick = () => {
        let out = ""
        let done = 0
        for (const q of queue) {
          if (frame >= q.end) {
            done++
            out += q.to
          } else if (frame >= q.start) {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          } else {
            out += q.to ? " " : ""
          }
        }
        setDisplay(out)
        if (done < queue.length) {
          frame++
          raf = requestAnimationFrame(tick)
        }
      }
      tick()
    }

    const id = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length
      scrambleTo(words[indexRef.current])
    }, interval)

    return () => {
      clearInterval(id)
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, interval])

  return (
    <span className={className} aria-live="off">
      {display}
    </span>
  )
}
