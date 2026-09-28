import { Plus } from "lucide-react"
import SectionHeading from "./fx/SectionHeading"
import { faqs } from "../lib/site-data"

// Visible FAQ that mirrors the FAQPage schema. Native <details> keeps every answer in the HTML
// (readable by crawlers and AI assistants) and works without JavaScript.
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-border py-20 md:py-28">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <SectionHeading index="08" label="FAQ" title="Frequently asked questions" id="faq-heading" className="mb-6" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Quick answers about who I am, what I build and how to work with me.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-display text-lg font-semibold text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg">{f.q}</h3>
                <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:text-primary" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-5 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
