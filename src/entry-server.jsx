import { renderToString } from "react-dom/server"
import App from "./App.jsx"

/**
 * Server entry used only by scripts/prerender.mjs at build time.
 *
 * renderToString does not wait on lazy components — it emits the Suspense
 * fallback instead. That is exactly what we want here: the header and hero are
 * rendered into the HTML so first paint needs no JavaScript, while the
 * below-the-fold sections stay in their own chunks and hydrate on the client.
 */
export function render() {
  return renderToString(<App />)
}
