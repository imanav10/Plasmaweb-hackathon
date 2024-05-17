import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Page from "./Page.jsx";
import Whatwedo from "./whatwedo/WhatWeDo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Page />
    <Whatwedo />
  </React.StrictMode>,
);
