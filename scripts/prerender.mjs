// Injects the server-rendered app into dist/index.html so crawlers and AI assistants
// that don't execute JavaScript still receive the full page content.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const serverDir = path.join(dist, "server")

const { render } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href)
const appHtml = render()

const indexPath = path.join(dist, "index.html")
const template = fs.readFileSync(indexPath, "utf8")
if (!template.includes('<div id="root"></div>')) throw new Error("prerender: #root placeholder not found")
fs.writeFileSync(indexPath, template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`))
fs.rmSync(serverDir, { recursive: true, force: true })

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} kB of HTML into dist/index.html`)
