import { motion } from "framer-motion"
import { Code2, RefreshCcw, Search } from "lucide-react"
import SectionHeading from "./fx/SectionHeading"
import TiltCard from "./fx/TiltCard"
import { services } from "../lib/site-data"
import { freelanceData } from "../lib/freelance-data"
import { projectsData } from "../lib/projects-data"

const serviceIcons = [Code2, RefreshCcw, Search]

const stats = [
  { value: `${freelanceData.length + projectsData.length}+`, label: "Projects shipped" },
  { value: String(freelanceData.length), label: "Client builds delivered" },
  { value: "4", label: "Languages added for GTC" },
  { value: "24h", label: "Typical reply time" },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading index="05" label="About" title="Building things that actually work" id="about-heading" className="mb-10 max-w-4xl" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <strong className="font-medium text-foreground">Jared Furtado</strong>, a full stack developer based in Goa, India, and a student at
              Goa College of Engineering. I build end-to-end web applications — from database design and APIs to clean, accessible interfaces.
            </p>
            <p>
              I focus on practical, maintainable solutions: a multilingual Next.js rebuild for a live tourism business, a government-funding discovery
              portal for FIIRE Forum, a campus carpooling platform and real-time computer vision tools.
            </p>
            <p>In plain terms: you bring the problem, I'll ship a fast, reliable website or web app that solves it.</p>
          </div>

          <dl className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <dt className="order-2 mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold text-foreground md:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="mb-6 mt-20 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">How I can help</h3>
        <ul className="grid gap-4 md:grid-cols-3" role="list">
          {services.map((s, i) => {
            const Icon = serviceIcons[i]
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <TiltCard as="div" max={0} className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="relative z-20">
                    <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h4 className="mb-2 font-display text-lg font-bold text-foreground">{s.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  </div>
                </TiltCard>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
