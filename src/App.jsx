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
import Preloader from "./components/fx/Preloader"
import CustomCursor from "./components/fx/CustomCursor"
import ScrollProgress from "./components/fx/ScrollProgress"
import CommandPalette from "./components/fx/CommandPalette"
import ChaosMode from "./components/fx/ChaosMode"

function App() {
  return (
    <>
      <SchemaMarkup />
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      <ChaosMode />
      <div className="grain flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <Skills />
          <Experience />
          <Freelance />
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
