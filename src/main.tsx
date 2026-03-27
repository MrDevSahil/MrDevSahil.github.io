import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ── GitHub Pages SPA redirect handler ────────────────────────────
// Companion to public/404.html — restores the original URL after
// the 404-page redirect trick encodes the path into ?p=
(function handleSpaRedirect() {
  const search = window.location.search;
  if (search.startsWith("?p=")) {
    const decoded = decodeURIComponent(search.slice(3).replace(/&h=.*$/, ""));
    const hash    = search.match(/&h=(.*)$/)
      ? decodeURIComponent(search.match(/&h=(.*)$/)![1])
      : "";
    window.history.replaceState(null, "", decoded + hash);
  }
})();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
