import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
const EMOJIS = ["🚀", "⚡", "🔥", "💻", "✨", "🎉", "🧠", "☕"]

// Easter egg: Konami code (or typing "crazy") toggles chaos mode — hue cycling + emoji confetti.
export default function ChaosMode() {
  const [on, setOn] = useState(false)
  const [burst, setBurst] = useState([])
  const seq = useRef([])
  const typed = useRef("")

  useEffect(() => {
    const toggle = () => setOn((v) => !v)
    const onKey = (e) => {
      if (e.target.closest?.("input, textarea, [cmdk-input]")) return
      seq.current = [...seq.current, e.key].slice(-KONAMI.length)
      typed.current = (typed.current + e.key.toLowerCase()).slice(-5)
      if (seq.current.join() === KONAMI.join() || typed.current === "crazy") {
        seq.current = []
        typed.current = ""
        toggle()
      }
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("jf:chaos", toggle)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("jf:chaos", toggle)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("chaos", on)
    if (!on) return setBurst([])
    setBurst(
      Array.from({ length: 60 }, (_, i) => ({
        id: `${Date.now()}-${i}`,
        emoji: EMOJIS[i % EMOJIS.length],
        x: Math.random() * 100,
        delay: Math.random() * 0.6,
        rotate: (Math.random() - 0.5) * 720,
        duration: 2.2 + Math.random() * 1.6,
      })),
    )
    const t = setTimeout(() => setBurst([]), 4500)
    return () => clearTimeout(t)
  }, [on])

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[150] overflow-hidden">
        {burst.map((b) => (
          <motion.span
            key={b.id}
            className="absolute -top-10 text-3xl"
            style={{ left: `${b.x}%` }}
            initial={{ y: -40, rotate: 0, opacity: 1 }}
            animate={{ y: "110vh", rotate: b.rotate, opacity: [1, 1, 0] }}
            transition={{ duration: b.duration, delay: b.delay, ease: "easeIn" }}
          >
            {b.emoji}
          </motion.span>
        ))}
      </div>
      <AnimatePresence>
        {on && (
          <motion.div
            role="status"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-[160] -translate-x-1/2 rounded-full border border-primary bg-background/90 px-5 py-2 font-mono text-xs text-foreground shadow-[0_0_30px_hsl(var(--primary)/0.4)] backdrop-blur"
          >
            🌀 CHAOS MODE ENGAGED — type <kbd className="text-primary">crazy</kbd> again to calm down
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
