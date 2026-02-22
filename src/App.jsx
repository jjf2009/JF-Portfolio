import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Freelance from "./components/freelance"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Freelance />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
