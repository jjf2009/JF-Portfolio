const skills = [
  { name: "JavaScript", years: "2 years" },
  { name: "React", years: "2 years" },
  { name: "Node.js", years: "2 years" },
  { name: "Express.js", years: "2 years" },
  { name: "MongoDB", years: "2 years" },
  { name: "Tailwind CSS", years: "2 years" },
  { name: "Python", years: "0.5 years" },
  { name: "OpenCV", years: "0.5 years" },
  { name: "RESTful APIs", years: "2 years" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border">
      <div className="container px-4 md:px-6">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
          Skills
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 sm:text-5xl">
          What I work with
        </h2>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5 max-w-3xl"
          role="list"
          aria-label="Technical skills and years of experience"
        >
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center justify-between border-b border-border pb-4"
            >
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-muted-foreground text-sm">{skill.years}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
