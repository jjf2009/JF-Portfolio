import { freelanceData } from "../lib/freelance-data"
import Section from "./section"
import Entry from "./entry"

export default function Freelance() {
  return (
    <Section id="work" title="Client work">
      <p className="mb-8 font-mono text-xs text-muted-foreground">Freelance, Dec 2025 — Aug 2026</p>
      <ul className="space-y-8" role="list">
        {freelanceData.map((p) => (
          <Entry key={p.title} item={p} />
        ))}
      </ul>
    </Section>
  )
}
