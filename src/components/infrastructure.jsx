import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { infraProjects, githubActivity, formatMonth } from "../lib/projects"
import ProjectCard from "./project-card"

/**
 * Where the infra work lives. Kept deliberately honest: this is a learning
 * track, not a portfolio of production systems. The "learning next" list below
 * exists so the section still reads as substantial while only one build is
 * genuinely underway — rather than padding it with repos that are only READMEs.
 */
const learningNext = [
  {
    title: "Containers and CI",
    detail: "Dockerising the Beacon API and putting it behind a GitHub Actions pipeline.",
  },
  {
    title: "Infrastructure as code",
    detail: "Terraform for the AWS side, so environments stop being hand-built.",
  },
  {
    title: "Observability",
    detail: "Prometheus metrics and OpenTelemetry traces out of the Go services, read through Grafana.",
  },
  {
    title: "Go, properly",
    detail: "Working through the language beyond the backend — concurrency, testing, and standard library depth.",
  },
]

export default function Infrastructure() {
  const recent = githubActivity?.repos?.slice(0, 4) ?? []

  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            05. Infrastructure
          </p>
          <h2
            id="infrastructure-heading"
            className="mb-6 font-display text-4xl font-bold text-foreground sm:text-5xl"
          >
            Learning to run things, not just build them
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            I can ship a product end to end. What I can't yet claim is operating one properly —
            so that's what I'm working on now, and where I want my career to go. This section is
            the honest state of it: one system being built in the open, and a list of what I'm
            working through next. I've kept the roadmap here rather than dressing it up as
            finished work.
          </p>
        </motion.div>

        {infraProjects.length > 0 && (
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {infraProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Working through next
            </h3>
            <ul className="space-y-5" role="list">
              {learningNext.map((item) => (
                <li key={item.title} className="flex gap-4 border-l-2 border-border pl-4">
                  <div>
                    <p className="font-display font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {recent.length > 0 && (
            <div className="lg:col-span-2">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Recently pushed
              </h3>
              <ul className="space-y-3" role="list">
                {recent.map((r) => (
                  <li key={r.repo}>
                    <a
                      href={`https://github.com/jjf2009/${r.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4 border-b border-border/50 pb-3 transition-colors hover:border-primary/40"
                    >
                      <span className="font-mono text-sm text-foreground/85 transition-colors group-hover:text-primary">
                        {r.repo}
                        <ArrowUpRight
                          size={12}
                          className="ml-1 inline opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="whitespace-nowrap font-mono text-[11px] text-muted-foreground">
                        {formatMonth(r.at)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
