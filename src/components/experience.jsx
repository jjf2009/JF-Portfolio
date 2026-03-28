import { motion } from "framer-motion"

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote / Goa, India",
    startDate: "2025-12",
    displayDate: "Dec 2025 — Present",
    type: "Freelance",
    description: "Specializing in building production-ready MERN stack applications for clients worldwide. Developed full-stack solutions with custom authentication, complex database schemas, and optimized frontends.",
    achievements: [
      "Completed two paid client projects including rebuilding the Global Tourist Centre website with multilingual support.",
      "Developed the Techjeeva funding platform for FIIRE Forum (Forum for Innovation, Incubation, Research and Entrepreneurship).",
      "Implemented SEO best practices such as Schema markup, Open Graph tags, robots.txt configuration, and XML sitemap generation.",
    ],
    tags: ["Full Stack Development", "MERN Stack", "SEO Architecture", "React Frontend"],
  },
  {
    role: "Sales Intern",
    company: "Avyott",
    location: "North Goa, India",
    startDate: "2025-12",
    endDate: "2026-01",
    displayDate: "Dec 2025 — Jan 2026",
    type: "Internship",
    description: "Worked closely with product teams to understand and communicate the value proposition of a text AI agent product.",
    achievements: [
      "Conducted B2B outreach through cold calls, WhatsApp messaging, email campaigns, and LinkedIn DMs.",
      "Generated two qualified leads through consistent outreach efforts.",
      "Developed practical experience in handling client objections and understanding product-market fit.",
    ],
    tags: ["B2B Sales", "Client Communication", "Product Market Fit"],
  },
  {
    role: "Event Coordinator",
    company: "GEC Coders Club",
    location: "Goa College of Engineering",
    startDate: "2025-07",
    displayDate: "Jul 2025 — Present",
    type: "Leadership",
    description: "Organizing and leading coding initiatives, technical workshops, and hackathon participation strategies for engineering students.",
    achievements: [
      "Organized technical workshops and coding competitions for students.",
      "Conducted sessions such as 'Getting Started with Hackathons' to help juniors enter competitive coding.",
      "Mentored junior students on technical fundamentals.",
    ],
    tags: ["Leadership", "Mentoring", "Event Management"],
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
                  className="font-mono text-sm sm:text-base font-semibold text-foreground/70 tracking-wide bg-muted/40 px-3 py-1 rounded inline-block whitespace-nowrap lg:bg-transparent lg:px-0 lg:py-0"
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
                  <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-sm text-muted-foreground/80">
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
