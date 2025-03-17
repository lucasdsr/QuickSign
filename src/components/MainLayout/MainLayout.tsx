import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "../../assets/theme.ts";

import * as S from "./styles.ts";

export const MainLayout = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <S.MainContainer>
      <Outlet />
    </S.MainContainer>
  </ThemeProvider>
);
