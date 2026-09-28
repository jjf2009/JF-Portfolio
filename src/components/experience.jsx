import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import SectionHeading from "./fx/SectionHeading"
import { experiences } from "../lib/experience-data"

export default function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 60%"] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider opacity-50" />

      <div className="container relative px-6 md:px-12 mx-auto max-w-7xl">
        <SectionHeading index="02" label="History" title="Experience" id="experience-heading" className="mb-16 max-w-3xl" />

        <div ref={timelineRef} className="space-y-12 md:space-y-16 lg:ml-[25%] relative">
          
          {/* Vertical timeline line (desktop only) */}
          <div className="hidden lg:block absolute top-2 left-[-3.5rem] bottom-0 w-px bg-border/50" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: lineScale }}
            className="hidden lg:block absolute top-2 left-[-3.5rem] bottom-0 w-[2px] origin-top bg-primary"
          />

          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Timeline marker */}
              <motion.div
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block absolute top-2 left-[-3.75rem] w-3 h-3 bg-primary border-2 border-primary rounded-full z-10"
              />

              <header className="mb-4 space-y-2 lg:absolute lg:top-0 lg:left-[-25%] lg:w-[20%] lg:pr-8 lg:mb-0 lg:-mt-1">
                <time 
                  dateTime={exp.startDate} 
                  className="font-mono text-sm sm:text-base font-semibold text-foreground/70 tracking-wide bg-muted/40 px-3 py-1 rounded inline-block whitespace-nowrap lg:bg-transparent lg:px-0 lg:py-0"
                >
                  {exp.displayDate}
                </time>
                <div className="text-xs font-mono uppercase tracking-widest text-primary/80 mt-2 block lg:hidden">
                  {exp.company}
                </div>
              </header>

              <div className="space-y-4 relative">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground transition-colors group-hover:text-primary">
                    {exp.role} <span className="hidden lg:inline text-muted-foreground font-light">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-sm text-muted-foreground/80">
                    <span className="text-accent">{exp.type}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <ul className="space-y-3 mt-4 text-foreground/85 max-w-3xl">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-primary select-none mt-1">→</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-border/40 max-w-3xl">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-primary/80 bg-primary/10 px-3 py-1 rounded-sm border border-primary/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
