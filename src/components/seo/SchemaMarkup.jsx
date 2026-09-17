// src/components/seo/SchemaMarkup.jsx
// JSON-LD structured data. Every claim here has to match what the page says
// and what the repos actually contain — this is the version search engines and
// AI crawlers read, so a wrong description here is worse than no description.

const SITE = "https://www.jaredfurtado.tech"

const schemas = [
  // === 1. PERSON (entity definition) ===
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: "Jared Furtado",
    givenName: "Jared",
    familyName: "Furtado",
    jobTitle: "Full-Stack Engineer",
    description:
      "Full-stack engineer and Computer Engineering student in Goa, India, moving into DevOps and infrastructure. Builds web applications with React, Next.js and TypeScript, takes freelance client work, and is currently building a Go monitoring service while learning containers, CI and observability.",
    url: SITE,
    image: {
      "@type": "ImageObject",
      url: `${SITE}/images/jared-furtado-profile.jpg`,
      width: 400,
      height: 500,
    },
    email: "jaredfurtadowork@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goa",
      addressCountry: "IN",
    },
    // He is still studying, so this is affiliation rather than alumniOf.
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Goa College of Engineering",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goa",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "Full Stack Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Python",
      "Computer Vision",
      "Go",
      "DevOps",
    ],
    sameAs: ["https://github.com/jjf2009", "https://www.linkedin.com/in/jared-furtado/"],
  },

  // === 2. WEBSITE ===
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "Jared Furtado — Full-Stack Engineer",
    description:
      "Portfolio of Jared Furtado, a full-stack engineer in Goa, India, moving into DevOps and infrastructure.",
    author: { "@id": `${SITE}/#person` },
    inLanguage: "en-IN",
  },

  // === 3. COLLECTION PAGE ===
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/#collection`,
    url: SITE,
    name: "Projects by Jared Furtado",
    description:
      "Client work, campus tools and infrastructure builds by Jared Furtado.",
    author: { "@id": `${SITE}/#person` },
  },

  // === 4. Global Tourist Centre (client work) ===
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SITE}/#project-gtc`,
    name: "Global Tourist Centre Website Rebuild",
    description:
      "A rebuild of a live Goa tourism operator's website in Next.js, with internationalisation across German, French, Russian and Italian, a persistent WhatsApp Business enquiry widget, and conversion-focused landing page work.",
    programmingLanguage: ["JavaScript", "TypeScript"],
    runtimePlatform: "Next.js",
    author: { "@id": `${SITE}/#person` },
    applicationCategory: "Travel & Tourism",
    url: "https://globaltouristcentre.com/",
  },

  // === 5. TechJeeva (client work) ===
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SITE}/#project-techjeeva`,
    name: "TechJeeva",
    description:
      "A searchable directory of Indian government funding schemes, grants and incubator programmes for founders, built for FIIRE. Users filter by category and eligibility; listings are fetched through the Google Apps Script API.",
    programmingLanguage: ["JavaScript"],
    runtimePlatform: "React",
    codeRepository: "https://github.com/jjf2009/Techjeeva-",
    author: { "@id": `${SITE}/#person` },
    applicationCategory: "Business & Finance",
    url: "https://findfund.vercel.app/",
  },

  // === 6. Campus Exchange ===
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SITE}/#project-campus-exchange`,
    name: "Campus Exchange",
    description:
      "A marketplace for Goa College of Engineering students to buy and sell used textbooks, lab equipment and hostel items. No payment rail — the seller's WhatsApp contact is revealed once they accept a request.",
    programmingLanguage: ["TypeScript"],
    runtimePlatform: "Next.js",
    codeRepository: "https://github.com/jjf2009/Campus-Exchange",
    author: { "@id": `${SITE}/#person` },
    applicationCategory: "Marketplace",
    url: "https://campus-exchange-nu.vercel.app",
  },

  // === 7. Beacon (in progress) ===
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SITE}/#project-beacon`,
    name: "Beacon",
    description:
      "An uptime and incident platform under development. The Go API covers endpoint and project management over PostgreSQL with JWT middleware; the monitoring worker, alerting and observability stack are in progress.",
    programmingLanguage: ["Go", "TypeScript"],
    codeRepository: "https://github.com/jjf2009/Beacon",
    author: { "@id": `${SITE}/#person` },
    applicationCategory: "Developer Tools",
  },

  // === 8. FREELANCE SERVICE ===
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE}/#service`,
    name: "Jared Furtado — Freelance Web Development",
    description:
      "Freelance full-stack web development: React and Next.js frontends, Node.js and Go backends, deployment, and the SEO and metadata work that follows a launch.",
    provider: { "@id": `${SITE}/#person` },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Full Stack Web Development",
    url: SITE,
  },

  // === 9. FAQ ===
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Jared Furtado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jared Furtado is a full-stack engineer based in Goa, India, and a third-year Computer Engineering student at Goa College of Engineering. He builds web applications with React, Next.js and TypeScript, takes freelance client work, and is currently moving into DevOps and infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Jared Furtado work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He builds with TypeScript, JavaScript, React, Next.js, Node.js, PostgreSQL, Supabase, Tailwind CSS and Python. He is currently learning the infrastructure side — Go, Docker, CI/CD, Terraform, Kubernetes and observability tooling — and treats those as in-progress rather than production experience.",
        },
      },
      {
        "@type": "Question",
        name: "Is Jared Furtado available for work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for internships and freelance projects, particularly backend and infrastructure work. He is a full-time student, so he is not looking for a full-time role. He can be reached at jaredfurtadowork@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "What has Jared Furtado built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Client work includes the Global Tourist Centre website rebuild and TechJeeva, a funding directory built for FIIRE. His own projects include Campus Exchange, a student marketplace for Goa College of Engineering, HeatWatch, an urban heat island analysis tool built with a hackathon team, and RideBuddy, a campus carpooling platform. He is currently building Beacon, a Go uptime and incident platform.",
        },
      },
    ],
  },
]

export default function SchemaMarkup() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  )
}
