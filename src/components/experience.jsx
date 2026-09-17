import { motion } from "framer-motion"

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote / Goa, India",
    startDate: "2025-12",
    displayDate: "Dec 2025 — Present",
    type: "Freelance",
    description:
      "Paid client work building and rebuilding production web applications end to end — scoping, build, deploy, and the search and metadata work that follows.",
    achievements: [
      "Rebuilt the Global Tourist Centre site in Next.js with multilingual support for German, French, Russian and Italian, plus a persistent WhatsApp Business widget for enquiries.",
      "Built TechJeeva for FIIRE (Forum for Innovation, Incubation, Research and Entrepreneurship) — a searchable directory of Indian government funding schemes for founders.",
      "Handled the deployment and SEO side on both: schema markup, Open Graph tags, robots.txt and sitemap generation.",
    ],
    tags: ["Next.js", "React", "i18n", "Production Deployment", "SEO"],
  },
  {
    role: "Founder",
    company: "VGen Studio",
    location: "Goa, India",
    startDate: "2026-07",
    displayDate: "Jul 2026 — paused",
    type: "Side venture",
    description:
      "A solo attempt at a small web and AI automation studio. I worked on it for about three weeks before college took priority, so it is on hold rather than trading — I plan to pick it back up alongside freelancing.",
    achievements: [
      "Set up the positioning and service offering for a web and AI automation studio.",
      "Paused after roughly three weeks to focus on coursework; intend to resume.",
    ],
    tags: ["Positioning", "SEO", "Solo Venture"],
  },
  {
    role: "Growth & Strategy Intern",
    company: "The Grit City",
    location: "Remote / Goa, India",
    startDate: "2026-04",
    endDate: "2026-06",
    displayDate: "Apr 2026 — Jun 2026",
    type: "Internship",
    description:
      "A short, part-time stint on the growth side of an education product, alongside a full college term. Small team, limited scope — mostly competitor research and building a list of places worth getting links from.",
    achievements: [
      "Ran backlink and keyword analysis on competing products to find where their organic traffic came from.",
      "Identified and vetted 50+ backlink opportunities for an outreach list.",
      "Looked at where demo sign-ups were dropping off in the funnel.",
    ],
    tags: ["Keyword Research", "Backlink Research", "Funnel Analysis"],
  },
  {
    role: "Vice President",
    company: "GEC Coders Club",
    location: "Goa College of Engineering",
    startDate: "2025-07",
    displayDate: "Jul 2025 — Present",
    type: "Leadership",
    description:
      "Event Coordinator from Jul 2025, Vice President since Aug 2026. Running the technical programme for the college's coding community.",
    achievements: [
      "Organised technical workshops and coding competitions across the year.",
      "Ran sessions including 'Getting Started with Hackathons' to get juniors into competitive events.",
      "Mentor juniors on fundamentals and on how to approach hackathons.",
    ],
    tags: ["Leadership", "Mentoring", "Event Management"],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote / India",
    startDate: "2024-10",
    endDate: "2024-11",
    displayDate: "Oct 2024 — Nov 2024",
    type: "Open Source",
    description:
      "Contributed to open-source projects during GSSoC, working with maintainers across time zones on backend and UI issues.",
    achievements: [
      "13+ merged pull requests across participating repositories.",
      "Collaborated with international teams through issue triage and code review.",
    ],
    tags: ["Open Source", "Git", "Code Review"],
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider opacity-50" />

      <div className="container relative px-6 md:px-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            02. History
          </span>
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16 lg:ml-[25%] relative">
          
          {/* Vertical timeline line (desktop only) */}
          <div className="hidden lg:block absolute top-2 left-[-3.5rem] bottom-0 w-px bg-border/50" />

          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline marker */}
              <div className="hidden lg:block absolute top-2 left-[-3.75rem] w-3 h-3 bg-background border-2 border-primary rounded-full z-10" />

              <header className="mb-4 space-y-2 lg:absolute lg:top-0 lg:left-[-25%] lg:w-[20%] lg:pr-8 lg:mb-0 lg:-mt-1">
                <time 
                  dateTime={exp.startDate} 
                  className="font-mono text-sm sm:text-base font-semibold text-foreground/85 tracking-wide bg-muted/40 px-3 py-1 rounded inline-block whitespace-nowrap lg:bg-transparent lg:px-0 lg:py-0"
                >
                  {exp.displayDate}
                </time>
                <div className="text-xs font-mono uppercase tracking-widest text-primary/80 mt-2 block lg:hidden">
                  {exp.company}
                </div>
              </header>

              <div className="space-y-4 relative">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                    {exp.role} <span className="hidden lg:inline text-muted-foreground font-light">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-sm text-muted-foreground">
                    <span className="text-accent">{exp.type}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <ul className="space-y-3 mt-4 text-foreground/85 max-w-3xl">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-primary select-none mt-1">→</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-border/40 max-w-3xl">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-primary/80 bg-primary/10 px-3 py-1 rounded-sm border border-primary/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
