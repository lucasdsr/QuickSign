import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './pages/ErrorPage.tsx';
import { Login } from './pages/Login/Login.tsx';

import './index.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
