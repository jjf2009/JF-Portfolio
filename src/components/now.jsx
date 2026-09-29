import { now } from "../lib/site-data"
import Section from "./section"

export default function Now() {
  return (
    <Section id="now" title="Now">
      <p className="mb-6 font-mono text-xs text-muted-foreground">Updated September 2026</p>
      <ul className="space-y-6" role="list">
        {now.map((item) => (
          <li key={item.key} className="max-w-[38rem]">
            <h3 className="font-medium text-foreground">{item.title}</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              {item.description}{" "}
              {item.link && (
                <a
                  className="link text-foreground"
                  href={item.link.href}
                  {...(item.link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {item.link.text}
                  {item.link.href.startsWith("http") ? " ↗" : " ↓"}
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
