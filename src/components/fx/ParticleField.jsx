import { useEffect, useRef } from "react"

// Interactive constellation: particles drift, link to neighbours, and get pulled toward the cursor.
export default function ParticleField({ className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999, active: false }
    let particles = []
    let width = 0
    let height = 0
    let raf = 0
    let visible = true

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(130, Math.floor((width * height) / 11000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random() < 0.8 ? 43 : 190 + Math.random() * 120,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const linkDist = 120
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!reduceMotion) {
          if (mouse.active) {
            const dx = mouse.x - p.x
            const dy = mouse.y - p.y
            const d = Math.hypot(dx, dy)
            if (d < 200 && d > 0.1) {
              const f = (200 - d) / 200
              p.vx += (dx / d) * f * 0.06
              p.vy += (dy / d) * f * 0.06
            }
          }
          p.vx *= 0.985
          p.vy *= 0.985
          p.vx += (Math.random() - 0.5) * 0.02
          p.vy += (Math.random() - 0.5) * 0.02
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
          p.x = Math.max(0, Math.min(width, p.x))
          p.y = Math.max(0, Math.min(height, p.y))
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < linkDist) {
            ctx.strokeStyle = `hsla(43, 96%, 56%, ${(1 - d / linkDist) * 0.18})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        if (mouse.active) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
          if (d < 160) {
            ctx.strokeStyle = `hsla(${p.hue}, 96%, 60%, ${(1 - d / 160) * 0.5})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }

        ctx.fillStyle = `hsla(${p.hue}, 96%, 62%, 0.85)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      if (visible) draw()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = mouse.y >= 0 && mouse.y <= rect.height
    }
    const onLeave = () => (mouse.active = false)

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(canvas)

    resize()
    if (reduceMotion) draw()
    else raf = requestAnimationFrame(loop)

    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} />
}
