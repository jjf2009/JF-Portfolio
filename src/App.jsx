import { lazy, Suspense } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import SchemaMarkup from "./components/seo/SchemaMarkup"

// Only the header and hero are needed for first paint. Everything below the
// fold — and framer-motion with it — is split out so it doesn't block the
// initial render. The fallback reserves height so lazy loading costs no CLS.
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
  return (
    <>
      <SchemaMarkup />
      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Skills />
            <Experience />
            <Freelance />
            <Projects />
            <Infrastructure />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default App
