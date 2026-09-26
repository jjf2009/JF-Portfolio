import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ChevronDown, MapPin, Command as CommandIcon } from "lucide-react"
import ParticleField from "./fx/ParticleField"
import ScrambleText from "./fx/ScrambleText"
import Magnetic from "./fx/Magnetic"
import TiltCard from "./fx/TiltCard"
import Marquee from "./fx/Marquee"
import { openCommandPalette } from "./fx/CommandPalette"

const roles = ["Full Stack Developer", "MERN Specialist", "AI Workflow Builder", "Freelancer for Hire", "Bug Exterminator"]

const orbitBadges = [
  { label: "React", className: "-left-6 top-10 sm:-left-10", delay: 0 },
  { label: "Node.js", className: "-right-4 top-1/3 sm:-right-10", delay: 0.6 },
  { label: "MongoDB", className: "-left-4 bottom-16 sm:-left-12", delay: 1.2 },
  { label: "Next.js", className: "-right-2 bottom-6 sm:-right-8", delay: 1.8 },
]

const tickerItems = ["Full Stack", "MERN", "Next.js", "AI Workflows", "SEO Architecture", "Computer Vision", "Freelance", "Goa → World"]

function BouncyWord({ word, delay = 0, className = "" }) {
  return (
    <span aria-hidden="true" className={`inline-block whitespace-nowrap ${className}`}>
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "100%", opacity: 0, rotate: 12 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: delay + i * 0.05, type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ y: -18, rotate: -8, scale: 1.1, transition: { type: "spring", stiffness: 500, damping: 10 } }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        aria-labelledby="hero-heading"
        className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-20 md:py-24"
      >
        {/* Background: grid, aurora blobs, interactive particles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-grid absolute inset-0" />
          <div className="aurora absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-primary/15 blur-[120px]" />
          <div className="aurora absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-fuchsia-500/10 blur-[120px] [animation-delay:-6s]" />
          <div className="aurora absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px] [animation-delay:-12s]" />
        </div>
        <ParticleField />

        <div className="container relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            {/* Text content */}
            <motion.div style={{ y: textY, opacity: fade }} className="z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance &amp; full-time
              </motion.div>

              <div className="space-y-5">
                <h1
                  id="hero-heading"
                  aria-label="Jared Furtado — Full Stack Developer"
                  className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl xl:text-[8.5rem]"
                >
                  <BouncyWord word="Jared" delay={0.3} />
                  <br />
                  <BouncyWord word="Furtado" delay={0.55} className="text-shine" />
                  <motion.span
                    aria-hidden="true"
                    className="inline-block text-primary"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    .
                  </motion.span>
                </h1>

                <div className="flex h-9 items-center gap-2 font-mono text-lg font-medium text-primary sm:h-10 sm:text-2xl md:text-3xl">
                  <span className="text-muted-foreground">&gt;</span>
                  <span className="sr-only">Full Stack Developer</span>
                  <ScrambleText words={roles} className="whitespace-nowrap" />
                  <motion.span
                    aria-hidden="true"
                    className="inline-block h-[1em] w-[0.55em] bg-primary"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                  />
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="max-w-lg text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
              >
                I build fast, scalable web applications from Goa, India — specializing in MERN stack, and shipping things that
                actually <span className="font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4">work</span>.
              </motion.p>

              <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground opacity-80">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Based in Goa, IN • Available Worldwide</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
              >
                <Magnetic>
                  <button
                    onClick={() => scrollTo("#projects")}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.35)] transition-shadow hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] sm:w-auto"
                  >
                    <span className="relative z-10">View My Projects</span>
                    <ArrowDownRight className="relative z-10 h-4 w-4 transition-transform group-hover:rotate-45" />
                    <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
                  </button>
                </Magnetic>
                <Magnetic>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:w-auto"
                  >
                    Get In Touch
                  </button>
                </Magnetic>
                <button
                  onClick={openCommandPalette}
                  className="hidden items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
                >
                  or press
                  <kbd className="inline-flex items-center gap-0.5 rounded border border-border bg-card px-1.5 py-0.5">
                    <CommandIcon className="h-3 w-3" />K
                  </kbd>
                </button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Spinning conic halo */}
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-2xl bg-[conic-gradient(from_0deg,hsl(var(--primary)),#e879f9,#22d3ee,hsl(var(--primary)))] opacity-70 blur-md"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
                <TiltCard as="div" max={12} className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-card" data-cursor>
                  <div className="h-[360px] w-[280px] sm:h-[420px] sm:w-[330px] md:h-[480px] md:w-[380px]">
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
                        className="h-full w-full object-cover object-center contrast-125 transition-transform duration-700 group-hover:scale-105"
                      />
                    </picture>
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                    <div aria-hidden="true" className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                      {"// goa, india"}
                    </div>
                  </div>
                </TiltCard>

                {orbitBadges.map((b) => (
                  <motion.div
                    key={b.label}
                    aria-hidden="true"
                    className={`absolute z-20 rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-xs text-foreground shadow-lg backdrop-blur ${b.className}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{
                      opacity: { delay: 1.2 + b.delay / 3 },
                      scale: { delay: 1.2 + b.delay / 3, type: "spring" },
                      y: { repeat: Infinity, duration: 3, delay: b.delay, ease: "easeInOut" },
                    }}
                  >
                    <span className="text-primary">●</span> {b.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          onClick={() => scrollTo("#skills")}
          aria-label="Scroll to skills"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60">Scroll</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown className="h-4 w-4 text-muted-foreground opacity-60" />
          </motion.span>
        </motion.button>
      </section>

      {/* Skewed ticker band */}
      <div aria-hidden="true" className="relative z-10 -my-2 overflow-hidden py-6">
        <div className="-rotate-2 scale-105 bg-primary py-3 text-primary-foreground">
          <Marquee speed={35}>
            {tickerItems.map((t) => (
              <span key={t} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-extrabold uppercase sm:text-3xl">
                {t} <span className="text-lg">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 rotate-2 scale-105 border-y border-border bg-card py-3">
          <Marquee speed={45} reverse>
            {tickerItems.map((t) => (
              <span key={t} className="text-outline whitespace-nowrap font-display text-2xl font-extrabold uppercase sm:text-3xl">
                {t} ✦
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  )
}
