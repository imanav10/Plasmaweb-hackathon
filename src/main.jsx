import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Page from "./Page.jsx";
import OA from "./OurApproach.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Page />
    <OA />
  </React.StrictMode>,
);
