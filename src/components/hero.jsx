import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { profile } from "../lib/site-data"
import { freelanceData } from "../lib/freelance-data"
import { openCommandPalette } from "./fx/CommandPalette"

// Hero content is animated with CSS only, so it is fully visible in the prerendered HTML
// before JavaScript loads (good for LCP and for crawlers that don't execute JS).
export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div className="space-y-8">
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance projects &amp; full-time roles
            </p>

            <div className="space-y-5">
              <h1
                id="hero-heading"
                className="fade-up font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground [animation-delay:80ms] sm:text-6xl md:text-7xl xl:text-8xl"
              >
                Jared Furtado{" "}
                <span className="mt-4 block text-xl font-semibold tracking-normal text-muted-foreground sm:text-2xl md:text-3xl">
                  Full Stack Developer <span className="text-primary">in Goa, India</span>
                </span>
              </h1>
            </div>

            <p className="fade-up max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms] sm:text-xl">
              I design and build fast, reliable web applications with <strong className="font-medium text-foreground">React, Next.js and Node.js</strong> —
              from database to deployment — for startups, businesses and organisations worldwide.
            </p>

            <div className="fade-up flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
              <a
                href="#freelance"
                onClick={(e) => scrollTo(e, "#freelance")}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)] transition-all hover:bg-primary/90 hover:shadow-[0_8px_40px_-6px_hsl(var(--primary)/0.7)]"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-foreground/30 hover:bg-card"
              >
                Start a project
              </a>
              <button
                type="button"
                onClick={openCommandPalette}
                className="hidden items-center gap-2 pl-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
              >
                Quick nav
                <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
              </button>
            </div>

            {/* Proof: shipped client work, linked so visitors and crawlers can verify it */}
            <div className="fade-up border-t border-border/60 pt-6 [animation-delay:320ms]">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">Recent client work</p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
                {freelanceData.map((p) => (
                  <li key={p.title}>
                    <a
                      href={p.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                    >
                      {p.shortTitle ?? p.title}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                    </a>
                  </li>
                ))}
                <li className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  Goa, IN · working worldwide
                </li>
              </ul>
            </div>
          </div>

          {/* Portrait */}
          <div className="fade-in flex justify-center [animation-delay:150ms] lg:justify-end">
            <figure className="relative">
              <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/50 via-border to-transparent" />
              <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl bg-card">
                <picture>
                  <source srcSet="/images/jared-furtado-profile.avif" type="image/avif" />
                  <source srcSet="/images/jared-furtado-profile.webp" type="image/webp" />
                  <img
                    src="/images/jared-furtado-profile.jpg"
                    alt="Portrait of Jared Furtado, full stack developer based in Goa, India"
                    width={400}
                    height={500}
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                    className="h-[380px] w-[304px] object-cover object-center sm:h-[440px] sm:w-[352px] md:h-[500px] md:w-[400px]"
                  />
                </picture>
                <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/10 bg-background/70 px-4 py-3 backdrop-blur-md">
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{profile.name}</span>
                    <span className="block text-xs text-muted-foreground">MERN · Next.js · {profile.school}</span>
                  </span>
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Open</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
