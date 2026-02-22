// Profile images — WebP for modern browsers, PNG fallback
const PROFILE_WEBP = "/images/Profile_image.webp"
const PROFILE_PNG = "/images/Profile_image.png"

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Hero() {
  return (
    <section id="home" className="relative py-24 md:py-32 lg:py-36 overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Full Stack Developer
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl text-foreground">
              Jared<br />Furtado
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              19 years old · Goa, India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Let's Collaborate
              </button>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Accent ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-primary/10 scale-105 blur-md"
              />
              <picture>
                <source srcSet={PROFILE_WEBP} type="image/webp" />
                <img
                  src={PROFILE_PNG}
                  alt="Portrait of Jared Furtado, Full Stack Developer from Goa"
                  width={380}
                  height={380}
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="relative rounded-2xl object-cover w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] border border-border"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
