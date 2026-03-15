import { experienceData } from "../lib/experience-data"

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border">
      <div className="container px-4 md:px-6">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
          Experience
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 sm:text-5xl">
          Where I've worked
        </h2>

        <div className="space-y-8 max-w-4xl">
          {experienceData.map((exp, index) => (
            <article
              key={index}
              className="group relative flex flex-col gap-4 border-l-2 border-border pl-6 pb-8 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary transition-transform duration-300 group-hover:scale-125"></div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                
                <div className="text-muted-foreground text-base mb-4 flex flex-wrap gap-2 items-center">
                  <span className="font-semibold text-foreground">{exp.organization}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-3 text-muted-foreground leading-relaxed" role="list">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <ul
                className="flex flex-wrap gap-2 mt-4"
                role="list"
                aria-label={`Skills used as ${exp.role}`}
              >
                {exp.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              
              {/* Projects (if any) */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 p-4 rounded-xl border border-border bg-card">
                  <h4 className="font-semibold text-sm mb-3 text-foreground uppercase tracking-widest">Key Projects</h4>
                  <ul className="space-y-2">
                    {exp.projects.map((project, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center justify-between">
                        <span>{project.name}</span>
                        {project.organization && <span className="text-xs opacity-70">for {project.organization}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
