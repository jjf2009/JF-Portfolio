import { motion } from "framer-motion"
import { ArrowUpRight, GraduationCap, Rocket, Users, Server } from "lucide-react"
import SectionHeading from "./fx/SectionHeading"
import TiltCard from "./fx/TiltCard"
import { now } from "../lib/site-data"
import { projectsData } from "../lib/projects-data"

const icons = { devops: GraduationCap, entrepreneurship: Rocket, events: Users }

export default function Now() {
  const devopsProjects = projectsData.filter((p) => p.devops)

  return (
    <section id="now" aria-labelledby="now-heading" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading index="06" label="Now" title="What I'm focused on" id="now-heading" className="mb-12 max-w-4xl" />

        <ul className="grid gap-4 md:grid-cols-3" role="list">
          {now.map((item, i) => {
            const Icon = icons[item.key]
            const external = item.link?.href.startsWith("http")
            return (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <TiltCard as="article" max={0} className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="relative z-20 flex h-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{item.label}</span>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary hover:underline"
                      >
                        {item.link.text}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </TiltCard>
              </motion.li>
            )
          })}
        </ul>

        {devopsProjects.length > 0 && (
          <div className="mt-12 rounded-xl border border-border bg-card/50 p-6 md:p-8">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Server className="h-4 w-4 text-primary" aria-hidden="true" />
              In the DevOps pipeline
            </h3>
            <ul className="divide-y divide-border" role="list">
              {devopsProjects.map((p) => (
                <li key={p.title} className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.devops.summary}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {p.devops.stack.map((t) => (
                      <span key={t} className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{p.devops.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
