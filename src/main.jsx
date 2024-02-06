import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router.jsx";
import Layout from "./Layout/Layout.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./Context APIs/UserContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <RouterProvider router={router}>
            <NextUIProvider>
              <Layout />
            </NextUIProvider>
          </RouterProvider>
        </Auth0Provider>
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>
);
