import { motion } from "framer-motion"
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 z-10"
          >
            <div className="space-y-4">
              <h1 id="hero-heading" className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem] text-foreground">
                Jared Furtado
              </h1>
              
              <div className="h-8 sm:h-10 text-xl sm:text-2xl md:text-3xl font-mono text-primary font-medium">
                <span >Full Stack Developer</span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg font-light">
              I build fast, scalable web applications from Goa, India — specializing in MERN stack.
            </p>
            
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono opacity-80">
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
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-muted-foreground opacity-50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
