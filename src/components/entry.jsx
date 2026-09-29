// One project: title with links, a sentence, and the stack.
export default function Entry({ item }) {
  return (
    <li className="max-w-[38rem]">
      <h3 className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-medium text-foreground">{item.title}</span>
        {item.web && (
          <a className="link text-sm" href={item.web} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} website`}>
            Site ↗
          </a>
        )}
        {item.git && (
          <a className="link text-sm" href={item.git} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} source code on GitHub`}>
            Code ↗
          </a>
        )}
      </h3>
      <p className="mt-1 leading-relaxed text-muted-foreground">{item.description}</p>
      <p className="mt-1.5 font-mono text-xs text-muted-foreground">
        {item.technologies.join(" · ")}
        {item.devops && <span className="text-primary"> · DevOps: {item.devops.status.toLowerCase()}</span>}
      </p>
    </li>
  )
}
