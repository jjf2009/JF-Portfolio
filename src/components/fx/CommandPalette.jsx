import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Copy } from "lucide-react"

const sections = [
  ["Home", "#home"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Freelance Work", "#freelance"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Now", "#now"],
  ["Hackathon Gallery", "#gallery"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
]

export const openCommandPalette = () => window.dispatchEvent(new Event("jf:palette"))

// ⌘K / Ctrl+K launcher for navigation and quick links.
export default function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === "Escape") setOpen(false)
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener("jf:palette", onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("jf:palette", onOpen)
    }
  }, [])

  const run = (fn) => () => {
    setOpen(false)
    setTimeout(fn, 50)
  }

  const itemClass =
    "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground aria-selected:bg-primary/10 aria-selected:text-foreground"

  const groupClass =
    "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground/70"

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[180] flex items-start justify-center bg-background/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -10 }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-[0_0_80px_hsl(var(--primary)/0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Command label="Command palette" loop>
              <div className="flex items-center gap-2 border-b border-border px-4">
                <span className="font-mono text-primary">&gt;</span>
                <Command.Input
                  autoFocus
                  placeholder="Where to? Type a command…"
                  className="h-12 w-full bg-transparent text-sm text-foreground outline-none focus-visible:outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">ESC</kbd>
              </div>
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">No results.</Command.Empty>
                <Command.Group heading="Navigate" className={groupClass}>
                  {sections.map(([name, href]) => (
                    <Command.Item key={href} value={`go ${name}`} className={itemClass} onSelect={run(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }))}>
                      <ArrowRight size={14} className="text-primary" /> {name}
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Links" className={groupClass}>
                  <Command.Item value="download resume cv" className={itemClass} onSelect={run(() => window.open("/Jared_Furtado_Resume.pdf", "_blank"))}>
                    <Download size={14} className="text-primary" /> Download Resume
                  </Command.Item>
                  <Command.Item value="github" className={itemClass} onSelect={run(() => window.open("https://github.com/jjf2009", "_blank", "noopener"))}>
                    <Github size={14} className="text-primary" /> GitHub
                  </Command.Item>
                  <Command.Item value="linkedin" className={itemClass} onSelect={run(() => window.open("https://www.linkedin.com/in/jared-furtado/", "_blank", "noopener"))}>
                    <Linkedin size={14} className="text-primary" /> LinkedIn
                  </Command.Item>
                  <Command.Item value="email mail" className={itemClass} onSelect={run(() => (window.location.href = "mailto:jaredfurtadowork@gmail.com"))}>
                    <Mail size={14} className="text-primary" /> Send an email
                  </Command.Item>
                  <Command.Item value="copy email" className={itemClass} onSelect={run(() => navigator.clipboard?.writeText("jaredfurtadowork@gmail.com"))}>
                    <Copy size={14} className="text-primary" /> Copy email address
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
