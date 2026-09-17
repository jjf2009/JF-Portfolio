import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { formatMonth } from "../lib/projects"

/** Language distribution bar. Colours come from the theme, not from GitHub. */
function LanguageBar({ languages }) {
  if (!languages.length) return null
  const shades = ["bg-primary", "bg-accent", "bg-primary/50", "bg-accent/50"]

  return (
    <div className="space-y-2">
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-muted" aria-hidden="true">
        {languages.map(([name, pct], i) => (
          <div key={name} className={shades[i % shades.length]} style={{ width: `${pct}%` }} />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1" role="list">
        {languages.map(([name, pct], i) => (
          <li key={name} className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
            <span className={`h-2 w-2 rounded-full ${shades[i % shades.length]}`} aria-hidden="true" />
            {name} {pct}%
          </li>
        ))}
      </ul>
    </div>
  )
}

const statusStyles = {
  shipped: "text-success border-success/30 bg-success/10",
  building: "text-accent border-accent/30 bg-accent/10",
  paused: "text-muted-foreground border-border bg-muted",
}

const statusLabels = {
  shipped: "Shipped",
  building: "In progress",
  paused: "Paused",
}

export default function ProjectCard({ project }) {
  const pushed = formatMonth(project.pushedAt)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
      {project.image && (
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
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </picture>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
            <span
              className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[project.status]}`}
            >
              {statusLabels[project.status]}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>

          {project.note && (
            <p className="border-l-2 border-border pl-3 font-mono text-xs leading-relaxed text-muted-foreground">
              {project.note}
            </p>
          )}

          <p className="text-xs leading-relaxed text-foreground/85">
            <span className="font-mono text-muted-foreground">Role — </span>
            {project.role}
          </p>
        </div>

        <LanguageBar languages={project.languages} />

        <ul className="flex flex-wrap gap-2" role="list" aria-label={`Technologies used in ${project.title}`}>
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>

        {/* Live GitHub stats. Zeroes are hidden rather than shown as "0 stars". */}
        {project.hasStats && (
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-muted-foreground">
            {project.stars > 0 && (
              <span className="flex items-center gap-1.5">
                <Star size={12} aria-hidden="true" />
                {project.stars}
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center gap-1.5">
                <GitFork size={12} aria-hidden="true" />
                {project.forks}
              </span>
            )}
            {pushed && <span>Last push {pushed}</span>}
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-1">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              aria-label={`View Live: ${project.title}`}
            >
              <ExternalLink size={13} aria-hidden="true" />
              View Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
              aria-label={`View Code: ${project.title} on GitHub`}
            >
              <Github size={13} aria-hidden="true" />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
