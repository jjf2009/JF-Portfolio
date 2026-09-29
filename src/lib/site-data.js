// Single source of truth for profile facts. The visible page, the JSON-LD schema,
// and llms.txt should all say the same thing — AI answer engines reward consistency.

export const SITE_URL = "https://jaredfurtado.tech"

export const profile = {
  name: "Jared Furtado",
  givenName: "Jared",
  familyName: "Furtado",
  tagline: "Portfolio",
  summary:
    "Jared Furtado is a Computer Engineering student at Goa College of Engineering (2024–2028) and a full-stack developer working toward DevOps and platform engineering. He is looking for a remote DevOps / platform engineering internship from January 2027, and is learning Docker, GitHub Actions, Terraform and Kubernetes through his own projects.",
  degree: "Computer Engineering",
  years: "2024–2028",
  lookingFor: "Remote DevOps / platform engineering internship, available from January 2027",
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
    description: "Docker, GitHub Actions, Terraform and Kubernetes, through small, deliberately scoped projects (see In progress above) and the 100xDevs DevOps cohort.",
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
