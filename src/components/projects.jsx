import { projectsData, infraProjects, otherProjects } from "../lib/projects-data"
import Section from "./section"
import Entry from "./entry"

export function InfraProjects() {
  return (
    <Section id="infra" title="In progress">
      <p className="mb-8 max-w-[38rem] leading-relaxed text-muted-foreground">
        Builds aimed at closing my DevOps gap: containers, pipelines, infrastructure as code and Kubernetes, learned hands-on.
      </p>
      <ul className="space-y-8" role="list">
        {infraProjects.map((p) => (
          <Entry key={p.title} item={p} />
        ))}
      </ul>
    </Section>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-8" role="list">
        {projectsData.map((p) => (
          <Entry key={p.title} item={p} />
        ))}
      </ul>

      <h3 className="mb-3 mt-12 text-sm text-muted-foreground">Also</h3>
      <ul className="max-w-[38rem] divide-y divide-border border-y border-border" role="list">
        {otherProjects.map((p) => (
          <li key={p.title} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5">
            <span>
              <a className="link text-foreground" href={p.git} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
              {p.description && <span className="text-muted-foreground"> · {p.description}</span>}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
