import { Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jjf2009",
    icon: Github,
    display: "github.com/jjf2009",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jared-furtado/",
    icon: Linkedin,
    display: "linkedin.com/in/jared-furtado",
  },
  {
    label: "Email",
    href: "mailto:jaredfurtadowork@gmail.com",
    icon: Mail,
    display: "jaredfurtadowork@gmail.com",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 sm:text-5xl">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Freelance, contracts, internships — if you have a project that needs a full stack developer, reach out directly.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:jaredfurtadowork@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors mb-12"
          >
            Hire Me
          </a>

          {/* Contact links */}
          <ul className="space-y-4" role="list" aria-label="Contact links">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${link.label}: ${link.display}`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted group-hover:border-primary/50 transition-colors">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium">{link.display}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
