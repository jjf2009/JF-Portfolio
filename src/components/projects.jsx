import { ExternalLink, Github } from "lucide-react"
import { projectsData } from "../lib/projects-data"

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border">
      <div className="container px-4 md:px-6">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
         Personal Projects
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 sm:text-5xl">
          What I've built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-border bg-card flex flex-col hover:border-primary/40 transition-colors overflow-hidden"
            >
              {/* Project image — fixed aspect ratio prevents layout shift */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <picture>
                  <source srcSet={project.image} type="image/webp" />
                  <img
                    src={project.imageFallback}
                    alt={project.imageAlt}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </picture>
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <ul
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* CTAs — always visible */}
                <div className="flex gap-3 mt-auto pt-1">
                 {project.web!='' && (<a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    View Live
                  </a>)
                  }
                  {project.git!='' && (<a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                    aria-label={`View source code of ${project.title} on GitHub`}
                  >
                    <Github size={13} aria-hidden="true" />
                    View Code
                  </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
