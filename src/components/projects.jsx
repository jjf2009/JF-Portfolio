import { shippedProjects, githubProfile } from "../lib/projects"
import ProjectCard from "./project-card"

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          04. Projects
        </p>
        <h2 className="mb-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
          What I've built
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Stats below are pulled from the GitHub API at build time. A handful of repos out of{" "}
          {githubProfile.publicRepos} — the rest is coursework and scratch work.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {shippedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
