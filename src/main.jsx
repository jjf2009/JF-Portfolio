import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./fonts"
import "./index.css"

const root = document.getElementById("root")
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// The production build prerenders the page into #root (see scripts/prerender.mjs); hydrate it if present.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
