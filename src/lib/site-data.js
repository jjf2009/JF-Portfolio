// Single source of truth for profile facts. The visible page, the JSON-LD schema,
// and llms.txt should all say the same thing — AI answer engines reward consistency.

export const SITE_URL = "https://jaredfurtado.tech"

export const profile = {
  name: "Jared Furtado",
  givenName: "Jared",
  familyName: "Furtado",
  jobTitle: "Full Stack Developer",
  tagline: "Full Stack Developer in Goa, India",
  summary:
    "Jared Furtado is a full stack developer based in Goa, India, specialising in the MERN stack (MongoDB, Express, React, Node.js) and Next.js. He builds production web applications for clients, is currently learning DevOps through 100xDevs, and is a student at Goa College of Engineering with a strong interest in entrepreneurship.",
  availability: "Available for freelance & part-time work",
  email: "jaredfurtadowork@gmail.com",
  locality: "Goa",
  region: "Goa",
  country: "IN",
  countryName: "India",
  school: "Goa College of Engineering",
  image: `${SITE_URL}/images/jared-furtado-profile.jpg`,
  ogImage: `${SITE_URL}/images/jared-furtado-og-image.jpg`,
  resume: "/Jared_Furtado_Resume.pdf",
  social: {
    github: "https://github.com/jjf2009",
    linkedin: "https://www.linkedin.com/in/jared-furtado/",
  },
}

export const services = [
  {
    title: "Full stack web applications",
    description: "End-to-end MERN and Next.js builds — data model, API, authentication and a fast, responsive interface.",
  },
  {
    title: "Website rebuilds & modernisation",
    description: "Migrating live sites to modern stacks with better performance, multilingual support and conversion-focused UX.",
  },
  {
    title: "Technical SEO & discoverability",
    description: "Structured data, Open Graph, sitemaps and crawlability so search engines and AI assistants understand your site.",
  },
]

// What I'm focused on right now (rendered in the "Now" section).
export const now = [
  {
    key: "devops",
    title: "Learning DevOps",
    description: "Going through the 100xDevs DevOps cohort and applying it to my own projects as I go.",
    link: { href: "https://100xdevs.com/", text: "100xDevs" },
  },
  {
    key: "entrepreneurship",
    title: "Thinking about starting something",
    description:
      "I'd like to build a company eventually. I haven't yet. For now I'm learning from client work, my sales internship and the founders I meet at events.",
  },
  {
    key: "events",
    title: "Going to hackathons",
    description: "I try to make it to every hackathon and meetup in Goa that I can.",
    link: { href: "#photos", text: "Events" },
  },
]
