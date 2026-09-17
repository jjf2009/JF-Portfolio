#!/usr/bin/env node
/**
 * Build-time prerender.
 *
 * Vite has no server runtime, so the app previously shipped an empty
 * <div id="root"> and painted nothing until React had downloaded, parsed and
 * run. On a throttled mobile profile that put first contentful paint at ~2.9s.
 *
 * This renders the app to HTML once at build time and writes it into
 * dist/index.html, so first paint needs only HTML, CSS and the preloaded fonts.
 * The client then hydrates that markup (see src/main.jsx).
 *
 * Runs as the `postbuild` step, after both the client and SSR builds.
 */
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const HERE = dirname(fileURLToPath(import.meta.url))
const INDEX = resolve(HERE, "../dist/index.html")
const SERVER_DIR = resolve(HERE, "../dist/server")
const ENTRY = resolve(SERVER_DIR, "entry-server.js")

if (!existsSync(ENTRY)) {
  console.error("[prerender] missing dist/server/entry-server.js — run the SSR build first")
  process.exit(1)
}

const { render } = await import(pathToFileURL(ENTRY).href)
const appHtml = render()

const html = readFileSync(INDEX, "utf8")
const marker = '<div id="root"></div>'

if (!html.includes(marker)) {
  console.error('[prerender] could not find <div id="root"></div> in dist/index.html')
  process.exit(1)
}

writeFileSync(INDEX, html.replace(marker, `<div id="root">${appHtml}</div>`))

// The SSR bundle is a build artifact, not something to deploy.
rmSync(SERVER_DIR, { recursive: true, force: true })

console.log(`[prerender] inlined ${Math.round(appHtml.length / 1024)} kB of markup into dist/index.html`)
