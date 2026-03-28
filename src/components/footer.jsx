import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12 text-center md:text-left">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="space-y-2">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Jared Furtado
          </h2>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            Full Stack Developer
          </p>
          <address className="not-italic text-sm text-muted-foreground/80 mt-2 font-sans">
            <p>Goa, India</p>
            <a href="mailto:jaredfurtadowork@gmail.com" className="hover:text-primary transition-colors">
              jaredfurtadowork@gmail.com
            </a>
          </address>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <ul className="flex items-center gap-6" aria-label="Social media links">
          <li>
              <a 
                href="https://www.linkedin.com/in/jared-furtado/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block p-2 -m-2"
                aria-label="Jared Furtado's Linkedin Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
    <li>
              <a 
                href="https://github.com/jjf2009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block p-2 -m-2"
                aria-label="Jared Furtado's GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a 
                href="mailto:jaredfurtadowork@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors block p-2 -m-2"
                aria-label="Email Jared Furtado directly"
              >
                <Mail className="w-5 h-5" />
              </a>
            </li>
          </ul>
          
          <p className="text-sm font-mono text-muted-foreground/60">
            &copy; 2026 Jared Furtado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
