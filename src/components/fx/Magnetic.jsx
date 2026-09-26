import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

// Wraps a child so it gets pulled toward the cursor while hovered.
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={reset} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  )
}
