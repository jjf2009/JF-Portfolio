#!/usr/bin/env node
/**
 * Build-time GitHub fetch.
 *
 * Runs as the `prebuild` step and refreshes src/data/github-snapshot.json,
 * which is committed to the repo and imported by the app. Nothing is fetched
 * in the browser: client-side calls would burn the unauthenticated rate limit
 * per visitor and push the project cards below the fold into a loading state.
 *
 * Failure policy — a GitHub outage must never break a deploy:
 *   1. try authenticated (GITHUB_TOKEN) or unauthenticated requests
 *   2. on any error, keep the committed snapshot and exit 0 with a warning
 * The build only fails if the snapshot is missing AND the API is unreachable,
 * because at that point there is genuinely no data to render.
 *
 * Refresh cadence is handled by .github/workflows/refresh-github-data.yml,
 * which re-runs this every 12 hours and commits when the output changes.
 */
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { featuredRepos } from "../src/data/featured-repos.js"

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(HERE, "../src/data/github-snapshot.json")
const USER = "jjf2009"
const API = "https://api.github.com"

const token = process.env.GITHUB_TOKEN
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${USER}-portfolio-build`,
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

const log = (...a) => console.log("[github]", ...a)
const warn = (...a) => console.warn("[github]", ...a)

async function get(path) {
  const res = await fetch(`${API}${path}`, { headers })
  if (!res.ok) {
    const remaining = res.headers.get("x-ratelimit-remaining")
    throw new Error(
      `GET ${path} -> ${res.status}${remaining === "0" ? " (rate limit exhausted)" : ""}`,
    )
  }
  return res.json()
}

/** Newest pushes across the account, for the activity strip. */
async function recentActivity() {
  // /events/public is one request and needs no extra dependency.
  const events = await get(`/users/${USER}/events/public?per_page=100`)
  const pushes = events.filter((e) => e.type === "PushEvent")
  const byRepo = new Map()
  for (const e of pushes) {
    const name = e.repo.name.replace(`${USER}/`, "")
    const prev = byRepo.get(name)
    if (!prev || e.created_at > prev.at) {
      byRepo.set(name, { repo: name, at: e.created_at, commits: 0 })
    }
    byRepo.get(name).commits += e.payload?.commits?.length ?? 0
  }
  return {
    pushesObserved: pushes.length,
    windowStart: pushes.at(-1)?.created_at ?? null,
    repos: [...byRepo.values()].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 6),
  }
}

async function build() {
  log(token ? "using GITHUB_TOKEN" : "no GITHUB_TOKEN — unauthenticated (60 req/hr)")

  const profile = await get(`/users/${USER}`)
  const repos = {}

  for (const { slug } of featuredRepos) {
    const r = await get(`/repos/${USER}/${slug}`)
    const languages = await get(`/repos/${USER}/${slug}/languages`)
    const total = Object.values(languages).reduce((a, b) => a + b, 0) || 1
    repos[slug] = {
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      languages: Object.fromEntries(
        Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .map(([k, v]) => [k, Math.round((v / total) * 1000) / 10]),
      ),
      topics: r.topics ?? [],
      stars: r.stargazers_count,
      forks: r.forks_count,
      pushedAt: r.pushed_at,
      createdAt: r.created_at,
      archived: r.archived,
    }
    log(`fetched ${slug}`)
  }

  let activity = null
  try {
    activity = await recentActivity()
  } catch (e) {
    warn(`activity fetch failed, omitting: ${e.message}`)
  }

  return {
    generatedAt: new Date().toISOString(),
    profile: {
      login: profile.login,
      name: profile.name,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      url: profile.html_url,
    },
    repos,
    activity,
  }
}

const hasSnapshot = existsSync(OUT)

try {
  const data = await build()
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n")
  log(`wrote ${Object.keys(data.repos).length} repos to src/data/github-snapshot.json`)
} catch (err) {
  warn(`fetch failed: ${err.message}`)
  if (hasSnapshot) {
    const age = JSON.parse(readFileSync(OUT, "utf8")).generatedAt
    warn(`falling back to committed snapshot from ${age} — build continues`)
  } else {
    console.error("[github] no snapshot to fall back to; cannot build project sections")
    process.exit(1)
  }
}
