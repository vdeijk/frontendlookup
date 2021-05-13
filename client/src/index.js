import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SearchProvider } from "./context/search_context";
import { WordProvider } from "./context/word_context";

ReactDOM.render(
  <SearchProvider>
    <WordProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WordProvider>
  </SearchProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
