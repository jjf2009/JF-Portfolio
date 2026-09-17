import { lazy, useEffect, useState, Suspense } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import SchemaMarkup from "./components/seo/SchemaMarkup"

// Only the header and hero are prerendered into the HTML, so first paint needs
// no JavaScript. Everything below the fold is split into its own chunks —
// framer-motion and the contact form's validation stack among them — and is
// mounted after hydration.
const Skills = lazy(() => import("./components/skills"))
const Experience = lazy(() => import("./components/experience"))
const Freelance = lazy(() => import("./components/freelance"))
const Projects = lazy(() => import("./components/projects"))
const Infrastructure = lazy(() => import("./components/infrastructure"))
const About = lazy(() => import("./components/about"))
const Contact = lazy(() => import("./components/contact"))
const Footer = lazy(() => import("./components/footer"))

function SectionFallback() {
  return <div className="min-h-[60vh]" aria-hidden="true" />
}

function App() {
  // Two-pass render. The prerenderer emits the placeholder, and the first
  // client render must emit the same thing or hydration mismatches: rendering
  // a Suspense boundary the server never resolved throws React error #419.
  // Mounting the real sections only after hydration keeps both passes
  // identical and the console clean.
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  // Deep links have to be re-applied by hand. The browser tries to scroll to
  // #experience (or any other section) while the document still only contains
  // the header and hero, finds nothing, and gives up — so once the sections
  // exist, jump to the requested one.
  useEffect(() => {
    if (!hydrated) return
    const { hash } = window.location
    if (!hash || hash === "#home") return
    const target = document.querySelector(hash)
    if (target) target.scrollIntoView()
  }, [hydrated])

  return (
    <>
      <SchemaMarkup />
      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          {hydrated ? (
            <Suspense fallback={<SectionFallback />}>
              <Skills />
              <Experience />
              <Freelance />
              <Projects />
              <Infrastructure />
              <About />
              <Contact />
            </Suspense>
          ) : (
            <SectionFallback />
          )}
        </main>
        {hydrated && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default App
