import Section from "./section"
import { profile } from "../lib/site-data"

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-foreground/85">Looking for a remote DevOps / platform engineering internship from January 2027. Email is the best way to reach me.</p>
      <p className="mt-3 font-serif text-3xl">
        <a className="link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </p>
      <p className="mt-5 flex gap-6 text-sm">
        <a className="link" href={profile.social.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="link" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="link" href={profile.resume}>
          Résumé (PDF)
        </a>
      </p>
    </Section>
  )
}
