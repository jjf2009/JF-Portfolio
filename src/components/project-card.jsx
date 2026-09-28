import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import TiltCard from "./fx/TiltCard"

export default function ProjectCard({ project, index, badge }) {
  const number = String(index + 1).padStart(2, "0")
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard max={0} className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50">
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
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <span aria-hidden="true" className="text-outline absolute bottom-2 right-4 font-display text-6xl font-extrabold leading-none">
            {number}
          </span>
          {badge && (
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              {badge}
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="relative z-20 flex flex-1 flex-col gap-4 p-6">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </div>

          {/* Tech stack */}
          <ul className="flex flex-wrap gap-2" role="list" aria-label={`Technologies used in ${project.title}`}>
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30">
                {tech}
              </li>
            ))}
          </ul>

          {project.devops && (
            <p className="flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                DevOps · {project.devops.status}
              </span>
              {project.devops.stack.join(" · ")}
            </p>
          )}

          {/* CTAs — always visible */}
          <div className="mt-auto flex gap-3 pt-1">
            {project.web && (
              <a
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label={`View live demo of ${project.title}`}
              >
                View Live
                <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
            )}
            {project.git && (
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <Github size={13} aria-hidden="true" />
                View Code
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}
