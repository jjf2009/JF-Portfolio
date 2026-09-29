// Single source of truth for profile facts. The visible page, the JSON-LD schema,
// and llms.txt should all say the same thing — AI answer engines reward consistency.

export const SITE_URL = "https://jaredfurtado.tech"

export const profile = {
  name: "Jared Furtado",
  givenName: "Jared",
  familyName: "Furtado",
  tagline: "Portfolio",
  summary:
    "Jared Furtado is an engineering student at Goa College of Engineering in Goa, India who is learning web development. He has practised with React, Next.js and Node.js through personal projects, two client websites (Global Tourist Centre and Techjeeva) and eight hackathons, and is currently learning DevOps through 100xDevs.",
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
    description: "Eight so far, all in Goa. I try to make it to every one I can.",
    link: { href: "#photos", text: "See the list" },
  },
]
