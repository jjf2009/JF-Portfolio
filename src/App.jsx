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

function App() {
  return (
    <>
      <SchemaMarkup />
      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 selection:text-foreground">        
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <Skills />
          <Experience />
          <Freelance/>
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
