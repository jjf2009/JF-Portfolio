import { freelanceData } from "../lib/freelance-data"
import ProjectCard from "./project-card"
import SectionHeading from "./fx/SectionHeading"

export default function Freelance() {
  return (
    <section id="freelance" aria-labelledby="freelance-heading" className="relative border-t border-border py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-fuchsia-500/5 blur-[120px]" />
      <div className="container relative px-4 md:px-6">
        <SectionHeading index="03" label="Freelance Projects" title="What I've worked on" id="freelance-heading" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {freelanceData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} badge="Client Work" />
          ))}
        </div>
      </div>
    </section>
  )
}
