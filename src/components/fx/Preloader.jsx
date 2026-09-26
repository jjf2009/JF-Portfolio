import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const LINES = [
  "> booting jared.exe",
  "> loading react, node, mongo...",
  "> compiling caffeine → code",
  "> establishing vibes: ██████████ 100%",
  "> ready.",
]

// Fake boot sequence shown once per session. Skipped entirely for reduced-motion users.
export default function Preloader() {
  const [show, setShow] = useState(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
      return !sessionStorage.getItem("jf-booted")
    } catch {
      return false
    }
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = "hidden"
    const start = performance.now()
    const duration = 1700
    let raf = 0
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else
        setTimeout(() => {
          setShow(false)
          try {
            sessionStorage.setItem("jf-booted", "1")
          } catch {
            /* storage unavailable */
          }
        }, 250)
    }
    raf = requestAnimationFrame(tick)
    const skip = () => setShow(false)
    window.addEventListener("keydown", skip)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("keydown", skip)
      document.documentElement.style.overflow = ""
    }
  }, [show])

  const visibleLines = Math.min(LINES.length, Math.floor(count / (100 / LINES.length)) + 1)

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-background p-6 sm:p-12"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setShow(false)}
        >
          <div className="font-mono text-xs sm:text-sm text-muted-foreground space-y-1">
            {LINES.slice(0, visibleLines).map((line) => (
              <motion.p key={line} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-primary">{line.slice(0, 1)}</span>
                {line.slice(1)}
              </motion.p>
            ))}
          </div>
          <div className="flex items-end justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Click or press any key to skip</span>
            <span className="font-display text-7xl sm:text-9xl font-extrabold leading-none text-foreground tabular-nums">
              {count}
              <span className="text-primary">%</span>
            </span>
          </div>
          <div className="absolute bottom-0 left-0 h-1 bg-primary" style={{ width: `${count}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
