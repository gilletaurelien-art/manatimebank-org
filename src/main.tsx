import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SolutionPage, { solutionSlugs } from "./SolutionPage";
import { FeaturesPage, PricingPage, DocsPage, AboutPage } from "./pages";
import CreatePage from "./CreatePage";
import "./index.css";

// Routeur minimal par pathname (pas de dépendance). Chaque route est prérendue
// en HTML statique par scripts/prerender.mjs (SEO), puis hydratée ici.
function route(): React.ReactElement {
  const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
  const m = path.match(/^\/solutions\/([a-z-]+)$/);
  if (m && solutionSlugs().includes(m[1])) return <SolutionPage slug={m[1]} />;
  if (path === "/fonctionnalites") return <FeaturesPage />;
  if (path === "/tarifs") return <PricingPage />;
  if (path === "/documentation") return <DocsPage />;
  if (path === "/a-propos") return <AboutPage />;
  if (path === "/creer") return <CreatePage />;
  return <App />;
}

const rootElement = document.getElementById("root") as HTMLElement;
const app = <React.StrictMode>{route()}</React.StrictMode>;

// Prérendu présent → hydrate le DOM statique ; sinon rend normalement.
if (rootElement.hasChildNodes()) ReactDOM.hydrateRoot(rootElement, app);
else ReactDOM.createRoot(rootElement).render(app);
