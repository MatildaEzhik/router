import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "./context/RouterProvider";
import { router } from "./context/router"

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
