import { ChevronDown, MapPin } from "lucide-react"

export default function Hero() {



  const scrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative py-24 md:py-32 lg:py-36 overflow-hidden">
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative px-6 md:px-12 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Text content */}
          <div className="animate-hero-rise z-10 space-y-8">
            <div className="space-y-4">
              <h1 id="hero-heading" className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem] text-foreground">
                Jared Furtado
              </h1>
              
              <div className="text-xl font-mono font-medium text-primary sm:text-2xl md:text-3xl">
                <span>Full-Stack Engineer</span>
                <span className="mx-2 text-muted-foreground" aria-hidden="true">/</span>
                <span className="text-accent">learning DevOps</span>
              </div>
            </div>

            <p className="max-w-lg text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              I build and ship full-stack web apps — client work, campus tools, hackathon
              builds. Right now I'm going deep on the infrastructure side: Go services,
              containers, CI, observability. That's the career I'm building toward.
            </p>
            
            <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Based in Goa, IN • Available Worldwide</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-hero-scale flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative blocks */}
              <div aria-hidden="true" className="absolute -inset-4 border border-white/10 translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div aria-hidden="true" className="absolute inset-0 bg-primary/20 blur-xl mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-20 w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] overflow-hidden bg-card border border-white/5">
                <picture>
                  <source srcSet="/images/jared-furtado-profile.avif" type="image/avif" />
                  <source srcSet="/images/jared-furtado-profile.webp" type="image/webp" />
                  <img
                    src="/images/jared-furtado-profile.jpg"
                    alt="Jared Furtado, Full Stack Developer from Goa, India"
                    width={400}
                    height={500}
                    fetchpriority="high"
                    loading="eager"
                    className="object-cover w-full h-full object-center filter contrast-125 saturate-100 g transition-all duration-700"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-hero-fade absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2"
        onClick={() => scrollTo("#skills")}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="animate-hero-nudge">
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
