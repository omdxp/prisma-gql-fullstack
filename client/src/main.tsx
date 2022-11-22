import "./index.css";

import { Provider, createClient } from "urql";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
