import { skillIcons } from "./skill-icons"

/**
 * Split deliberately. "Building with" is everything backed by shipped code in
 * public repos. "Learning" is the infrastructure track — real work, but not yet
 * something to claim as a skill. Moving an item up a group requires code to
 * point at, not just time spent reading.
 */
const skillGroups = [
  {
    label: "Building with",
    caption: "Backed by shipped projects",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Prisma",
      "Tailwind CSS",
      "Python",
      "OpenCV",
      "Redux",
      "RESTful APIs",
    ],
  },
  {
    label: "Learning",
    caption: "Infrastructure track — in progress, not yet production experience",
    items: ["Go", "Docker", "CI/CD", "Linux", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
  },
]

function SkillTile({ skill }) {
  const icon = skillIcons[skill]

  return (
    <div
      className="group flex cursor-default flex-col items-center gap-2 rounded-xl border border-border p-3 transition-all duration-300 hover:scale-105"
      style={{ background: icon?.bg ?? "transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 18px 2px ${icon?.color ?? "#888"}44`
        e.currentTarget.style.borderColor = `${icon?.color ?? "#888"}55`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = ""
        e.currentTarget.style.borderColor = ""
      }}
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
        {/* Generated brand marks are a single path; the one hand-drawn icon
            supplies its own node. The label below names the skill, so the
            artwork is decorative. */}
        {icon?.path ? (
          <svg viewBox="0 0 24 24" fill={icon.color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d={icon.path} />
          </svg>
        ) : (
          icon?.node ?? (
            <span className="font-mono text-sm font-semibold text-muted-foreground" aria-hidden="true">
              {skill.slice(0, 2)}
            </span>
          )
        )}
      </div>
      <span className="text-center text-xs font-medium leading-tight text-foreground">{skill}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          01. Skills
        </p>
        <h2 className="mb-12 font-display text-4xl font-bold text-foreground sm:text-5xl">
          What I work with
        </h2>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-foreground">{group.label}</h3>
                <p className="font-mono text-xs text-muted-foreground">{group.caption}</p>
              </div>
              <div className="grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {group.items.map((skill) => (
                  <SkillTile key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
