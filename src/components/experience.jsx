import { experiences } from "../lib/experience-data"
import Section from "./section"

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experiences.map((e) => (
          <li key={e.role + e.company} className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
            <time dateTime={e.startDate} className="pt-0.5 font-mono text-xs text-muted-foreground">
              {e.displayDate}
            </time>
            <div>
              <h3 className="font-medium text-foreground">
                {e.role} <span className="font-normal text-muted-foreground">· {e.company}</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 leading-relaxed text-foreground/80 marker:text-border">
                {e.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
