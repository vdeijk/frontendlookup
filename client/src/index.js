import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SearchProvider } from "./context/search_context";
import { WordpageProvider } from "./context/wordpage_context";
import { ResourcesProvider } from "./context/resources_context";

ReactDOM.render(
  <SearchProvider>
    <ResourcesProvider>
      <WordpageProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </WordpageProvider>
    </ResourcesProvider>
  </SearchProvider>,
  document.getElementById("root")
);
