const links = [
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Events", href: "#photos", hideOnMobile: true },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-serif text-xl text-foreground">
          Jared Furtado
        </a>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`transition-colors hover:text-foreground ${l.hideOnMobile ? "hidden sm:inline" : ""}`}>
              {l.name}
            </a>
          ))}
          <a href="/Jared_Furtado_Resume.pdf" className="hidden text-foreground transition-colors hover:text-primary sm:inline">
            Résumé
          </a>
        </nav>
      </div>
    </header>
  )
}
