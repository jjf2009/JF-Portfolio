import { profile } from "../lib/site-data"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name} · Goa, India
        </p>
        <ul className="flex gap-5" role="list">
          <li>
            <a className="hover:text-foreground" href={`mailto:${profile.email}`}>
              Email
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={profile.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
