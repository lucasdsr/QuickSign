import { PropsWithChildren } from "react";

import { Box } from "@mui/material";

import * as S from "./styles.ts";

export const FormsBox = ({ children }: PropsWithChildren) => (
  <S.Box sx={{ width: '1000px', height: '600px' }}>
    <Box sx={{ width: { sm: '100%', md: '50%' } }}>Scroll de imagens</Box>
    <Box
      sx={{
        padding: '48px',
        width: { sm: '100%', md: '50%' }
      }}
    >
      {children}
    </Box>
  </S.Box>
);
