import { projectsData } from "../lib/projects-data"
import Section from "./section"

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="divide-y divide-border border-y border-border" role="list">
        {projectsData.map((p) => (
          <li key={p.title} className="grid gap-4 py-6 sm:grid-cols-[132px_1fr] sm:gap-6">
            <picture>
              <source srcSet={p.image} type="image/webp" />
              <img src={p.imageFallback} alt={p.imageAlt} width={640} height={360} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded-sm border border-border object-cover object-top sm:w-[132px]" />
            </picture>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-medium text-foreground">{p.title}</h3>
                {p.devops && (
                  <span className="font-mono text-[11px] text-primary">
                    DevOps: {p.devops.status.toLowerCase()} ({p.devops.stack.join(", ")})
                  </span>
                )}
              </div>
              <p className="mt-1 leading-relaxed text-muted-foreground">{p.description}</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
                <span className="font-mono text-xs text-muted-foreground">{p.technologies.join(" · ")}</span>
                {p.web && (
                  <a className="link" href={p.web} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`}>
                    Live ↗
                  </a>
                )}
                {p.git && (
                  <a className="link" href={p.git} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code on GitHub`}>
                    Code ↗
                  </a>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
