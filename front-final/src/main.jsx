import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-5o2ot5rchgv4vcmr.eu.auth0.com"
        clientId="rv35PHRVIz2yGAYfQXRAtC8Rd3ozZgoV"
        authorizationParams={{
          redirect_uri: "http://localhost:5173/profile",
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
