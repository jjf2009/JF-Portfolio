export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            06. About Me
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Building things that actually work
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Jared — a third-year Computer Engineering student at Goa College of
              Engineering and a freelance full-stack developer. I've been paid to rebuild a
              live tourism site and to build a funding directory for a startup incubator, and
              most of what I make outside client work is for the campus I'm on.
            </p>
            <p>
              What I'm doing now is going one layer down. I can build and deploy an
              application; I'm learning to run it properly — Go on the backend, containers,
              pipelines, and observability — and that's the direction I want my career to
              take. It's early, and the Infrastructure section says exactly how far along
              it is.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
