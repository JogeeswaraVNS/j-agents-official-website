import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/geist-mono/400.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, <App />);
  } else {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
