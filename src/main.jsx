import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </RouterProvider>

  </React.StrictMode>
);
