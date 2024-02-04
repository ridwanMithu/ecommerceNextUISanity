import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import Layout from './Layout/Layout.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <NextUIProvider>
          <Layout />
        </NextUIProvider>
      </RouterProvider>
    </HelmetProvider>

  </React.StrictMode>
);
