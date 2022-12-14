import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "boxicons";
import reportWebVitals from "./reportWebVitals";
//css
import "./assets/css/demo.css";
import "./assets/vendor/css/core.css";
import "./assets/vendor/css/theme-default.css";
import "./assets/vendor/css/pages/page-account-settings.css";
import "./assets/vendor/css/pages/page-auth.css";
import "./assets/vendor/css/pages/page-icons.css";
import "./assets/vendor/css/pages/page-misc.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
