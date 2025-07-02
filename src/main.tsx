import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from "./pages/ErrorPage.tsx";
import { MainLayout } from "./components/MainLayout/MainLayout.tsx";

import { Login } from "./pages/Login/Login.tsx";
import { Register } from "./pages/Register/Register.tsx";

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
