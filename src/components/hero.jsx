import { profile } from "../lib/site-data"

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto max-w-5xl px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
      <div className="grid gap-10 md:grid-cols-[1fr_220px] md:gap-16">
        <div className="max-w-[38rem]">
          <h1 id="hero-heading" className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Jared Furtado
          </h1>

          <div className="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-foreground/85">
            <p>
              Computer Engineering student at Goa College of Engineering (2024–2028). I'm a full-stack developer working toward DevOps and
              platform engineering: containerising services, automating pipelines, and learning Terraform and Kubernetes by building real
              projects.
            </p>
          </div>

          <dl className="mt-8 grid gap-x-6 gap-y-2 border-y border-border py-4 text-sm sm:grid-cols-[110px_1fr]">
            <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground sm:pt-0.5">Looking for</dt>
            <dd className="text-foreground">
              {profile.lookingFor}
            </dd>
            <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground sm:pt-0.5">Stack</dt>
            <dd className="text-foreground/85">React, Next.js, TypeScript, Node/Express, FastAPI, Supabase, Docker</dd>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" role="list">
            <li>
              <a className="link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="link" href={profile.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="link" href={profile.resume}>
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </div>

        <figure className="order-first w-40 md:order-none md:w-auto">
          <picture>
            <source srcSet="/images/jared-furtado-profile.avif" type="image/avif" />
            <source srcSet="/images/jared-furtado-profile.webp" type="image/webp" />
            <img
              src="/images/jared-furtado-profile.jpg"
              alt="Portrait of Jared Furtado"
              width={480}
              height={600}
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </picture>
          <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">Goa, India</figcaption>
        </figure>
      </div>
    </section>
  )
}
