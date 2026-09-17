/**
 * Curation layer for the GitHub-backed project sections.
 *
 * GitHub supplies the live stats (language breakdown, stars, last push,
 * homepage). This file controls the narrative: which repos appear at all,
 * what they're called, how they're described, and in what order.
 *
 * To feature a repo: add its slug here. To hide one: delete the entry.
 * Nothing is listed automatically — the account has ~58 public repos and
 * most of them are coursework or scratch work.
 *
 * Fields
 *   slug    required. The repo name under github.com/jjf2009.
 *   group   "shipped" | "infrastructure". Picks which section renders it.
 *   order   sort key within the group, ascending.
 *   title   display name, overriding the repo name.
 *   blurb   what problem it solves. Written here, never scraped.
 *   role    what Jared actually did. Required on team projects.
 *   stack   shown as-is. The live language breakdown comes from the API.
 *   live    demo URL. Falls back to the repo's homepage field if omitted;
 *           set it to null to suppress the link when that field is stale.
 *   status  "shipped" | "building" | "paused". Drives the badge.
 *   note    optional honesty caveat rendered under the blurb.
 *   image   optional local screenshot in public/images.
 */
export const featuredRepos = [
  // ---------------------------------------------------------------- shipped
  {
    slug: "Campus-Exchange",
    group: "shipped",
    order: 1,
    title: "Campus Exchange",
    blurb:
      "A marketplace where Goa College of Engineering students buy and sell used textbooks, lab equipment, electronics, and hostel gear. Deliberately has no payment rail — listings lead to a request, and the seller's WhatsApp number is only revealed once they accept, which keeps the trust model the same one students already use.",
    role: "Built solo — schema, auth, storage, and the full seller dashboard.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Drizzle ORM", "Playwright"],
    live: "https://campus-exchange-nu.vercel.app",
    status: "shipped",
  },
  {
    slug: "heat_watch",
    group: "shipped",
    order: 2,
    title: "HeatWatch",
    blurb:
      "Urban heat island analysis for city planners. Fuses NASA MODIS satellite readings from Google Earth Engine with ground telemetry, runs them through an ONNX model to predict heat intensity, and renders the result as an interactive risk map with an intervention simulator.",
    role: "One of four on a hackathon team. I worked on the data pipeline and the mapping frontend.",
    stack: ["Next.js", "TypeScript", "ONNX Runtime", "Google Earth Engine", "Leaflet", "Firebase"],
    live: "https://heat-watch-two.vercel.app",
    status: "shipped",
  },
  {
    slug: "RideBuddy",
    group: "shipped",
    order: 3,
    title: "RideBuddy",
    blurb:
      "Campus carpooling for GEC students. Riders publish or search for trips by live location, authenticate through Firebase, and see routes drawn on an interactive Leaflet map.",
    role: "Built for the InternSpirit hackathon. I handled the frontend and the geolocation state.",
    stack: ["React", "Redux", "Firebase", "Leaflet"],
    live: null, // the repo's homepage field still points at a deploy that 404s
    status: "shipped",
    note: "The original deployment is offline; the source is still up.",
    image: "/images/Ridebuddy.webp",
    imageFallback: "/images/Ridebuddy.png",
    imageAlt: "RideBuddy — campus carpooling platform interface",
  },
  {
    slug: "IntentOS",
    group: "shipped",
    order: 4,
    title: "IntentOS",
    blurb:
      "An intent-driven interface built on Tambo AI. Instead of clicking through menus, you state what you want in natural language and the system generates the workflow and renders the UI components needed to complete it.",
    role: "Built solo.",
    stack: ["Next.js", "React", "Tailwind CSS", "Tambo AI"],
    live: "https://intent-os-zeta.vercel.app",
    status: "shipped",
    image: "/images/indentos.webp",
    imageFallback: "/images/indentos.jpg",
    imageAlt: "IntentOS — intent-driven AI workflow interface",
  },
  {
    slug: "OpenCV_Projects",
    group: "shipped",
    order: 5,
    title: "OpenCV Projects",
    blurb:
      "A set of computer vision tools built on YOLO and MediaPipe — object detection, hand gesture tracking, and face recognition — all running locally with no cloud vision API.",
    role: "Built solo.",
    stack: ["Python", "OpenCV", "MediaPipe", "YOLO"],
    status: "shipped",
    image: "/images/opencv.webp",
    imageFallback: "/images/opencv.jpg",
    imageAlt: "OpenCV project showing real-time computer vision detection",
  },

  // --------------------------------------------------------- infrastructure
  {
    slug: "Beacon",
    group: "infrastructure",
    order: 1,
    title: "Beacon",
    blurb:
      "An uptime and incident platform I'm building to learn backend and operations work properly rather than from tutorials. The Go API is running: endpoint and project CRUD over PostgreSQL, JWT middleware, and a service/repository split. The monitoring worker, alerting, and the Prometheus/OpenTelemetry/Grafana layer are specified and not yet written.",
    role: "Built solo. Go backend, Next.js frontend.",
    stack: ["Go", "PostgreSQL", "Next.js", "TypeScript"],
    status: "building",
    note: "In progress. The API layer works; the observability stack is still a plan, not a deployment.",
  },
]

export const featuredSlugs = featuredRepos.map((r) => r.slug)
