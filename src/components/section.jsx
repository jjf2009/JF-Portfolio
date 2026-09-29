// Two-column editorial layout: a quiet label on the left, content on the right.
export default function Section({ id, title, children, className = "" }) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-border py-14 md:py-20 ${className}`}>
      <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-[180px_1fr] md:gap-12 md:px-8">
        <h2 id={headingId} className="font-serif text-2xl leading-tight text-foreground md:sticky md:top-24 md:self-start">
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
