const si = require("simple-icons")
const fs = require("fs")

// skill label -> simple-icons slug
const MAP = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Supabase: "supabase",
  Prisma: "prisma",
  "Tailwind CSS": "tailwindcss",
  Python: "python",
  OpenCV: "opencv",
  Redux: "redux",
  Go: "go",
  Docker: "docker",
  "CI/CD": "githubactions",
  Linux: "linux",
  Terraform: "terraform",
  Kubernetes: "kubernetes",
  Prometheus: "prometheus",
  Grafana: "grafana",
}

// Brands whose official colour is black or near-black would disappear against
// the dark background, so they render white instead.
const LIGHTEN = { "Next.js": "#FFFFFF", "Express.js": "#FFFFFF", Prisma: "#FFFFFF" }

function tint(hex) {
  // A very dark, low-saturation wash of the brand colour for the tile background.
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const f = 0.09
  const to2 = (v) => Math.round(v * f).toString(16).padStart(2, "0")
  return `#${to2(r)}${to2(g)}${to2(b)}`
}

const entries = Object.entries(MAP).map(([label, slug]) => {
  const key = "si" + slug.charAt(0).toUpperCase() + slug.slice(1)
  const icon = si[key]
  if (!icon) throw new Error(`missing simple-icons entry for ${slug}`)
  const color = LIGHTEN[label] || `#${icon.hex}`
  const quoted = /[^A-Za-z0-9]/.test(label) ? JSON.stringify(label) : label
  return `  ${quoted}: {
    color: "${color}",
    bg: "${tint(icon.hex)}",
    path: "${icon.path}",
  },`
})

const out = `/**
 * Brand logos for the skills grid.
 *
 * Paths come from the simple-icons set and were generated, not hand-copied, so
 * they are the official marks rather than approximations. simple-icons is not a
 * dependency — regenerate with scripts/gen-skill-icons.cjs if the list changes.
 *
 * Each entry is a single 24x24 path plus the brand colour and a dark tint of it
 * for the tile background. A few brands are black in their official palette and
 * would be invisible here, so they are overridden to white.
 */
export const skillIcons = {
${entries.join("\n")}
  // Not a brand, so hand-drawn rather than generated.
  "RESTful APIs": {
    color: "#38BDF8",
    bg: "#02131c",
    node: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="2.5" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="4" cy="6" r="1.8" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="4" cy="18" r="1.8" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="1.8" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M5.6 7.2 9.9 10.6M5.6 16.8 9.9 13.4M14.5 12h3.7" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
}
`
fs.writeFileSync("src/components/skill-icons.jsx", out)
console.log(`wrote ${entries.length + 1} icons`)
