#!/usr/bin/env node
/**
 * Link audit: walks the source tree, collects every outbound URL, internal
 * anchor, and local asset reference, then reports status for each.
 * Usage: node scripts-link-check.mjs [--json]
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs"
import { join, relative, resolve } from "node:path"

const ROOT = resolve(process.cwd())
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", ".agent", "scratchpad"])
const EXTS = /\.(jsx?|tsx?|html|css|json|txt|xml|md)$/

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (EXTS.test(entry)) out.push(p)
  }
  return out
}

const IGNORE_HOST = /^https?:\/\/(schema\.org|www\.w3\.org|www\.sitemaps\.org|ogp\.me)/

// (kind, value, file, line)
const refs = []
// Reports and notes deliberately quote dead URLs, so they are not scanned.
const files = walk(ROOT).filter(
  (f) => !/^(package-lock|linkedin-profile-data|PHASE-1-AUDIT|CHANGES)/.test(relative(ROOT, f)),
)

for (const file of files) {
  const rel = relative(ROOT, file)
  const lines = readFileSync(file, "utf8").split("\n")
  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`
    for (const m of line.matchAll(/https?:\/\/[^"'`\s)<>\]]+/g)) {
      const url = m[0].replace(/[.,;]$/, "")
      if (IGNORE_HOST.test(url)) continue
      // Template literals are built at runtime, so the literal source text is
      // not a real URL to check.
      if (url.includes("${")) continue
      refs.push({ kind: "external", value: url, at })
    }
    // href/src/image/web/git fields pointing at local paths
    for (const m of line.matchAll(/(?:href|src|srcSet|image|imageFallback)[=:]\s*["'](\/[^"']*)["']/g)) {
      // /src/... is Vite's dev entry; the build rewrites it.
      if (m[1].startsWith("/src/")) continue
      refs.push({ kind: "asset", value: m[1], at })
    }
    for (const m of line.matchAll(/href=["'](#[^"']*)["']/g)) {
      refs.push({ kind: "anchor", value: m[1], at })
    }
    for (const m of line.matchAll(/(?:web|git):\s*["']["']/g)) {
      refs.push({ kind: "empty-field", value: "(empty string)", at })
    }
  })
}

// Section ids present in the app, for anchor resolution
const ids = new Set()
for (const file of files) {
  for (const m of readFileSync(file, "utf8").matchAll(/\bid=["']([A-Za-z0-9_-]+)["']/g)) ids.add(m[1])
}

async function head(url) {
  const opts = { redirect: "manual", headers: { "user-agent": "link-audit/1.0" } }
  try {
    let r = await fetch(url, { method: "HEAD", ...opts })
    if (r.status === 405 || r.status === 501) r = await fetch(url, { method: "GET", ...opts })
    return { status: r.status, location: r.headers.get("location") || "" }
  } catch (e) {
    return { status: 0, location: "", error: e.cause?.code || e.message }
  }
}

const seen = new Map()
const rows = []

for (const ref of refs) {
  if (ref.kind === "external") {
    if (!seen.has(ref.value)) seen.set(ref.value, await head(ref.value))
    const r = seen.get(ref.value)
    let verdict
    if (r.status === 0) verdict = `DEAD (${r.error})`
    else if (r.status >= 300 && r.status < 400) verdict = `REDIRECT -> ${r.location}`
    else if (r.status >= 400) verdict = "BROKEN"
    else verdict = "OK"
    rows.push({ ...ref, status: r.status || "—", verdict })
  } else if (ref.kind === "asset") {
    const onDisk = join(ROOT, "public", ref.value)
    const rootDisk = join(ROOT, ref.value)
    const ok = existsSync(onDisk)
    rows.push({
      ...ref,
      status: ok ? "200" : "404",
      verdict: ok ? "OK" : existsSync(rootDisk) ? "MISPLACED (exists at repo root, not public/)" : "MISSING FILE",
    })
  } else if (ref.kind === "anchor") {
    const id = ref.value.slice(1)
    const ok = id === "" ? false : ids.has(id)
    rows.push({ ...ref, status: "—", verdict: id === "" ? 'PLACEHOLDER href="#"' : ok ? "OK" : "NO MATCHING id" })
  } else {
    rows.push({ ...ref, status: "—", verdict: "EMPTY LINK FIELD (renders no link)" })
  }
}

const bad = rows.filter((r) => r.verdict !== "OK")
if (process.argv.includes("--json")) {
  console.log(JSON.stringify(rows, null, 2))
} else {
  console.log("| URL / ref | Referenced in | Status | Verdict |")
  console.log("|---|---|---|---|")
  for (const r of rows) console.log(`| \`${r.value}\` | ${r.at} | ${r.status} | ${r.verdict} |`)
  console.log(`\n${rows.length} refs checked, ${bad.length} problems.`)
}
process.exit(0)
