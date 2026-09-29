import Header from "./components/header"
import Hero from "./components/hero"
import Freelance from "./components/freelance"
import Experience from "./components/experience"
import Projects, { InfraProjects } from "./components/projects"
import Now from "./components/now"
import Gallery from "./components/gallery"
import Contact from "./components/contact"
import Footer from "./components/footer"
import SchemaMarkup from "./components/seo/SchemaMarkup"

function App() {
  return (
    <>
      <SchemaMarkup />
      <div className="flex min-h-screen flex-col selection:bg-primary/20">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <InfraProjects />
          <Projects />
          <Experience />
          <Freelance />
          <Now />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
