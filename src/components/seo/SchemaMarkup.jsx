// JSON-LD structured data, generated from the same data the page renders so the two never drift apart.
import { SITE_URL, profile, services } from "../../lib/site-data"
import { freelanceData } from "../../lib/freelance-data"
import { projectsData } from "../../lib/projects-data"
import { experiences } from "../../lib/experience-data"
import { galleryData } from "../../lib/gallery-data"

const PERSON_ID = `${SITE_URL}/#person`

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

const workToSchema = (p, isClient) => ({
  "@type": p.git ? "SoftwareSourceCode" : "CreativeWork",
  "@id": `${SITE_URL}/#work-${slug(p.title)}`,
  name: p.title,
  description: p.description,
  ...(p.web && { url: p.web }),
  ...(p.git && { codeRepository: p.git }),
  image: `${SITE_URL}${p.imageFallback}`,
  keywords: p.technologies.join(", "),
  creator: { "@id": PERSON_ID },
  ...(isClient && { genre: "Client project" }),
})

const graph = [
  {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${profile.name} — ${profile.tagline}`,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: profile.image },
    hasPart: [...freelanceData, ...projectsData].map((p) => ({ "@id": `${SITE_URL}/#work-${slug(p.title)}` })),
  },
  {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: profile.name,
    description: profile.summary,
    inLanguage: "en-IN",
    publisher: { "@id": PERSON_ID },
  },
  {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    jobTitle: profile.jobTitle,
    description: profile.summary,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: { "@type": "ImageObject", url: profile.image, width: 480, height: 600 },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.locality,
      addressRegion: profile.region,
      addressCountry: profile.country,
    },
    homeLocation: { "@type": "Place", name: `${profile.locality}, ${profile.countryName}` },
    affiliation: { "@type": "CollegeOrUniversity", name: profile.school },
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.school },
    hasOccupation: {
      "@type": "Occupation",
      name: profile.jobTitle,
      occupationLocation: { "@type": "Country", name: profile.countryName },
      skills: "React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Python",
    },
    knowsAbout: [
      "Full Stack Web Development",
      "MERN Stack",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Supabase",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
      "Internationalization (i18n)",
      "Technical SEO",
      "Python",
      "OpenCV",
      "Computer Vision",
      "Retrieval-Augmented Generation",
      "DevOps",
    ],
    knowsLanguage: ["en"],
    sameAs: [profile.social.github, profile.social.linkedin],
    worksFor: experiences
      .filter((e) => e.current)
      .map((e) => ({ "@type": "Organization", name: e.company === "Self-Employed" ? `${profile.name} (Freelance)` : e.company })),
  },
  {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${profile.name} — Freelance Web Development`,
    url: SITE_URL,
    image: profile.image,
    email: profile.email,
    founder: { "@id": PERSON_ID },
    provider: { "@id": PERSON_ID },
    address: { "@type": "PostalAddress", addressLocality: profile.locality, addressRegion: profile.region, addressCountry: profile.country },
    areaServed: [{ "@type": "Country", name: "India" }, { "@type": "Place", name: "Worldwide" }],
    serviceType: "Full Stack Web Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web development services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  },
  ...freelanceData.map((p) => workToSchema(p, true)),
  ...projectsData.map((p) => workToSchema(p, false)),
  {
    "@type": "ImageGallery",
    "@id": `${SITE_URL}/#gallery`,
    name: `${profile.name} — Hackathons & events`,
    about: { "@id": PERSON_ID },
    image: galleryData.map((g) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${g.src}.jpg`,
      width: g.width,
      height: g.height,
      caption: g.caption,
      description: g.alt,
      ...(g.date && { dateCreated: g.date }),
      ...(g.location && { contentLocation: { "@type": "Place", name: g.location } }),
    })),
  },
]

const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")

export default function SchemaMarkup() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
