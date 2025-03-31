import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Something, ErrorPage } from '../routes/index';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/kkirrin_web_site",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/kkirrin_web_site/something_interesting",
    element: <Something />,
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)