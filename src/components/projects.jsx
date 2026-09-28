import { projectsData } from "../lib/projects-data"
import ProjectCard from "./project-card"
import SectionHeading from "./fx/SectionHeading"

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading index="04" label="Personal Projects" title="What I've built" id="projects-heading" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
