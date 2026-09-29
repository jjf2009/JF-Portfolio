import { freelanceData } from "../lib/freelance-data"
import Section from "./section"

export default function Freelance() {
  return (
    <Section id="work" title="Client work">
      <div className="space-y-14">
        {freelanceData.map((p) => (
          <article key={p.title}>
            <a href={p.web} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-sm border border-border" tabIndex={-1} aria-hidden="true">
              <picture>
                <source srcSet={p.image} type="image/webp" />
                <img src={p.imageFallback} alt="" width={640} height={360} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover object-top" />
              </picture>
            </a>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
              <p className="font-mono text-xs text-muted-foreground">{p.technologies.join(" · ")}</p>
            </div>
            <p className="mt-2 max-w-[38rem] leading-relaxed text-muted-foreground">{p.description}</p>
            <p className="mt-3 flex gap-5 text-sm">
              {p.web && (
                <a className="link" href={p.web} target="_blank" rel="noopener noreferrer">
                  Visit site ↗
                </a>
              )}
              {p.git && (
                <a className="link" href={p.git} target="_blank" rel="noopener noreferrer">
                  Source ↗
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
