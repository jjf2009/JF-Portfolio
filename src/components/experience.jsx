import { experiences } from "../lib/experience-data"
import Section from "./section"

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-6">
        {experiences.map((e) => (
          <li key={e.role + e.company} className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
            <time dateTime={e.startDate} className="pt-0.5 font-mono text-xs text-muted-foreground">
              {e.displayDate}
            </time>
            <div>
              <h3 className="font-medium text-foreground">
                {e.role} <span className="font-normal text-muted-foreground">· {e.company}</span>
              </h3>
              <p className="mt-0.5 text-muted-foreground">{e.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
