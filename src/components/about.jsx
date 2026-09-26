import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./fx/SectionHeading"
import TiltCard from "./fx/TiltCard"

const stats = [
  { value: 6, suffix: "+", label: "Projects shipped" },
  { value: 2, suffix: "", label: "Paid client builds" },
  { value: 15, suffix: "", label: "Technologies in rotation" },
  { value: 19, suffix: "", label: "Years old (and counting)" },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1400)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      <span className="text-primary">{suffix}</span>
    </span>
  )
}

const statement = "I don't just write code. I ship products people actually use."

export default function About() {
  const statementRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: statementRef, offset: ["start 85%", "end 45%"] })
  const words = statement.split(" ")

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading index="05" label="About Me" title="Building things that actually work" id="about-heading" className="mb-8 max-w-4xl" />

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Jared — a 19-year-old full-stack developer based in Goa and a student at Goa College of Engineering. I build end-to-end web
              applications, from backend architecture to clean, usable interfaces.
            </p>
            <p>
              I focus on practical solutions — shipping real products like carpooling platforms, funding aggregators, and computer vision tools —
              with an emphasis on maintainable, scalable code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard as="div" max={10} className="h-full rounded-xl border border-border bg-card p-6">
                  <div className="relative z-20 font-display text-5xl font-extrabold text-foreground md:text-6xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="relative z-20 mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll-lit statement: each word brightens as you scroll through it */}
        <p ref={statementRef} className="mt-24 max-w-5xl font-display text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const highlight = children === "ship" || children === "use."
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${highlight ? "text-primary" : "text-foreground"}`}>
      {children}
    </motion.span>
  )
}
