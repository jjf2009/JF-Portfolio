import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <p className="font-display text-sm font-bold text-foreground">
          Jared Furtado<span className="text-primary">.</span>
        </p>

        {/* Links */}
        <nav aria-label="Footer social links">
          <ul className="flex items-center gap-4" role="list">
            <li>
              <a
                href="https://github.com/jjf2009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Jared Furtado"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jared-furtado/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Jared Furtado"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="mailto:jaredfurtadowork@gmail.com"
                aria-label="Email Jared Furtado"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {currentYear} Jared Furtado. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
