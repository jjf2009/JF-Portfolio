export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-8 sm:text-5xl">
            Building things that actually work
          </h2>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm Jared — a 19-year-old full stack developer based in Goa, currently studying at Goa College of Engineering. I build web applications end-to-end, from REST APIs and database schemas to the React UIs people actually use.
            </p>
            <p>
              Most of my work lives at the intersection of clean backend logic and interfaces that don't get in the way. I've shipped carpooling platforms, a government funding aggregator, and computer vision tools using YOLO — not because I was assigned to, but because the problems were real and unsolved in my immediate environment.
            </p>
            <p>
              Being 19 in Goa means I figure most things out without a senior engineer looking over my shoulder. That pushes me toward writing clean, maintainable code I can actually debug six months later.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
