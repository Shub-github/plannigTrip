import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// here we find the Js root and make it react root  and then render the components
// index.js is the first file to trigger when project is open
// here we import some files like index.css
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
