import Section from "./section"

const groups = [
  ["Languages", "JavaScript, Python"],
  ["Frontend", "React, Next.js, Redux, Tailwind CSS, i18n"],
  ["Backend", "Node.js, Express.js, REST APIs, Prisma"],
  ["Data", "MongoDB, Supabase"],
  ["AI & vision", "OpenCV, MediaPipe, YOLO, RAG"],
  ["Learning", "DevOps (100xDevs)"],
]

export default function Skills() {
  return (
    <Section id="skills" title="Tools">
      <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[150px_1fr]">
        {groups.map(([label, items]) => (
          <div key={label} className="contents">
            <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground sm:pt-0.5">{label}</dt>
            <dd className="mb-2 text-foreground/85 sm:mb-0">{items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
