import { faqs } from "../lib/site-data"
import Section from "./section"

// Plain Q&A, all answers visible: mirrors the FAQPage schema and is readable without JavaScript.
export default function Faq() {
  return (
    <Section id="faq" title="Questions">
      <dl className="max-w-[38rem] space-y-7">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="font-medium text-foreground">{f.q}</dt>
            <dd className="mt-1.5 leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
