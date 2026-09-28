import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Command as CommandIcon } from "lucide-react"
import { openCommandPalette } from "./fx/CommandPalette"

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#freelance" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Highlight the nav link for whichever section sits in the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    document.querySelectorAll("main section[id]").forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          aria-label="Go to top of page"
        >
          <span className="inline-block transition-transform duration-500 group-hover:rotate-[360deg]">JF</span>
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative isolate rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === link.href ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          ))}
          <button
            onClick={openCommandPalette}
            aria-label="Open command palette"
            className="ml-2 inline-flex items-center gap-1 rounded-md border border-border px-2 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <CommandIcon className="h-3 w-3" />K
          </button>
          <a
            href="/Jared_Furtado_Resume.pdf"
            download="Jared_Furtado_Resume"
            className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)]"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4" role="list">
              {navLinks.map((link, i) => (
                <motion.li key={link.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-baseline gap-3 py-2 font-display text-2xl font-bold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="/Jared_Furtado_Resume.pdf"
                  download="Jared_Furtado_Resume"
                  className="block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
