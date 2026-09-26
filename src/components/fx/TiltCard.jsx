import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"

// 3D tilt card with a cursor-following spotlight glow.
export default function TiltCard({ children, className = "", as = "article", max = 8, glow = "hsl(var(--primary) / 0.18)", style, ...rest }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 150, damping: 18 })
  const sy = useSpring(py, { stiffness: 150, damping: 18 })
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const gx = useTransform(px, (v) => `${v * 100}%`)
  const gy = useTransform(py, (v) => `${v * 100}%`)
  const background = useMotionTemplate`radial-gradient(420px circle at ${gx} ${gy}, ${glow}, transparent 60%)`

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  const Comp = motion[as]
  return (
    <Comp
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ ...style, rotateX, rotateY, transformPerspective: 1000 }}
      className={`group relative ${className}`}
      {...rest}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </Comp>
  )
}
