import React from "react"
import { hydrateRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// The HTML is prerendered at build time (scripts/prerender.mjs), so this
// hydrates the existing markup rather than rendering from an empty root.
hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
