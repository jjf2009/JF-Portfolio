import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

// Dot + trailing ring cursor. Only on fine pointers; the ring swells over interactive elements.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add("has-custom-cursor")

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHovering(!!e.target.closest?.("a, button, input, textarea, [role='button'], [data-cursor]"))
    }
    const down = () => setPressed(true)
    const up = () => setPressed(false)
    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("pointerdown", down)
    window.addEventListener("pointerup", up)
    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerdown", down)
      window.removeEventListener("pointerup", up)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x, y }}>
        <div className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-primary" />
      </motion.div>
      <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: rx, y: ry }}>
        <motion.div
          className="rounded-full border border-primary"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            width: hovering ? 56 : 32,
            height: hovering ? 56 : 32,
            scale: pressed ? 0.75 : 1,
            backgroundColor: hovering ? "hsla(43, 96%, 56%, 0.15)" : "hsla(43, 96%, 56%, 0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </>
  )
}
