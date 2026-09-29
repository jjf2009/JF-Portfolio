// Projects, in three groups. `technologies` lists only what each project actually uses.

// In-progress builds aimed at DevOps / platform engineering skills.
export const infraProjects = [
  {
    title: "Beacon",
    description: "A deploy-aware monitoring and incident platform, run with Docker Compose. Early stage; I'm building it to learn observability.",
    git: "https://github.com/jjf2009/Beacon",
    technologies: ["Docker Compose"],
    status: "In progress",
  },
  {
    title: "Cless-TUI",
    description: "A terminal chess game against a bot, built module by module as a way to practise Go, testing, Docker, CI/CD, Terraform and Kubernetes.",
    git: "https://github.com/jjf2009/Cless-TUI",
    technologies: ["Go", "Docker", "CI/CD", "Terraform", "Kubernetes"],
    status: "In progress",
  },
  {
    title: "PairUp",
    description: "A collaborative interview platform. Early stage.",
    git: "https://github.com/jjf2009/PairUp",
    status: "Early stage",
  },
  {
    title: "Runbox",
    description: "A sandboxed code-execution engine. Early stage.",
    git: "https://github.com/jjf2009/Runbox",
    status: "Early stage",
  },
  {
    title: "ReviewPilot",
    description: "An AI code-review GitHub App. Early stage.",
    git: "https://github.com/jjf2009/ReviewPilot",
    status: "Early stage",
  },
]

export const projectsData = [
  {
    title: "InvestorFinder",
    description:
      "A free weekly scraper that collects Indian startup funding news from public sources, filters for EdTech deals and checks investors against the SEBI AIF registry. Runs on a scheduled GitHub Actions workflow and writes results to public CSVs, with no server to maintain.",
    git: "https://github.com/jjf2009/InvestorFinder",
    technologies: ["GitHub Actions"],
  },
  {
    title: "Latex-Service",
    description: "A small Express.js service with a REST API that compiles LaTeX to PDF, so you don't need a local TeX setup. Packaged as a single stateless Docker container.",
    git: "https://github.com/jjf2009/Latex-Service",
    technologies: ["Express.js", "Docker"],
  },
  {
    title: "secure-image-encryption-aes-256-gcm",
    description: "Encrypts images in the browser with AES-256-GCM using the Web Crypto API, so neither the image nor the key ever reaches a server.",
    git: "https://github.com/jjf2009/secure-image-encryption-aes-256-gcm",
    technologies: ["Web Crypto API"],
  },
  {
    title: "broken-link-audit",
    description: "A free command-line crawler that finds broken links, images and media on any site with no URL limit, and reports them by page. Comes with automated tests.",
    git: "https://github.com/jjf2009/broken-link-audit",
    technologies: ["CLI"],
  },
  {
    title: "RideBuddy",
    description: "Carpooling for students: a React frontend and a Node/Express backend with Firebase sign-in, now merged into one monorepo. Containerising and deploying it is next.",
    git: "https://github.com/jjf2009/RideBuddy",
    technologies: ["React", "Node.js", "Express", "Firebase"],
  },
]

// Smaller or earlier projects, listed compactly.
export const otherProjects = [
  { title: "ScrapCo", description: "Scrap material trading platform", git: "https://github.com/jjf2009/ScrapCo" },
  { title: "IntentOS", description: "AI-driven intent interface", git: "https://github.com/jjf2009/IntentOS" },
  { title: "CampusHearts", git: "https://github.com/jjf2009/CampusHearts" },
  { title: "AnnaData", description: "Smart farm management portal", git: "https://github.com/jjf2009/AnnaData-Smart-Farm-Management-Portal" },
  { title: "litmus", description: "Real-time milk adulteration detection", git: "https://github.com/jjf2009/litmus-milk-adulteration-detector" },
]
