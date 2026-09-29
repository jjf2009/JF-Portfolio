import { projectsData } from "../lib/projects-data"
import Section from "./section"
import Entry from "./entry"

export default function Projects() {
  return (
    <Section id="projects" title="Learning projects">
      <ul className="space-y-8" role="list">
        {projectsData.map((p) => (
          <Entry key={p.title} item={p} />
        ))}
      </ul>
    </Section>
  )
}
