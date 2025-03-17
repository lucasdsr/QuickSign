import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "../../assets/theme.ts";

export const MainLayout = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <div>
      <h1>MainLayout</h1>
      <Outlet />
    </div>
  </ThemeProvider>
);
