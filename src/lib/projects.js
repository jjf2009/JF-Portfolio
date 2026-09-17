import { featuredRepos } from "../data/featured-repos"
import snapshot from "../data/github-snapshot.json"

/**
 * Joins the curated entries with the build-time GitHub snapshot.
 *
 * The curation file is the source of truth for what appears and what it says;
 * the snapshot supplies live stats. A repo missing from the snapshot (renamed,
 * made private, fetched during an outage) still renders from curation alone —
 * it just loses its stats rather than disappearing.
 */
function merge(entry) {
  const gh = snapshot.repos[entry.slug] ?? null
  const languages = gh ? Object.entries(gh.languages) : []

  return {
    ...entry,
    repoUrl: gh?.url ?? `https://github.com/jjf2009/${entry.slug}`,
    live: entry.live ?? gh?.homepage ?? null,
    stars: gh?.stars ?? 0,
    forks: gh?.forks ?? 0,
    pushedAt: gh?.pushedAt ?? null,
    primaryLanguage: gh?.language ?? null,
    // Below 5% is noise from config files — not worth a bar.
    languages: languages.filter(([, pct]) => pct >= 5),
    hasStats: Boolean(gh),
  }
}

const all = featuredRepos.map(merge).sort((a, b) => a.order - b.order)

export const shippedProjects = all.filter((p) => p.group === "shipped")
export const infraProjects = all.filter((p) => p.group === "infrastructure")
export const githubProfile = snapshot.profile
export const githubActivity = snapshot.activity
export const snapshotDate = snapshot.generatedAt

/** "Aug 2026" — used for the last-push line on each card. */
export function formatMonth(iso) {
  if (!iso) return null
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
}
