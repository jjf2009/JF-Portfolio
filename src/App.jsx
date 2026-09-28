import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import SchemaMarkup from "./components/seo/SchemaMarkup"
import Freelance from "./components/freelance"
import Faq from "./components/faq"
import Now from "./components/now"
import Gallery from "./components/gallery"
import ScrollProgress from "./components/fx/ScrollProgress"
import CommandPalette from "./components/fx/CommandPalette"

function App() {
  return (
    <>
      <SchemaMarkup />
      <ScrollProgress />
      <CommandPalette />
      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <Skills />
          <Experience />
          <Freelance />
          <Projects />
          <About />
          <Now />
          <Gallery />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
