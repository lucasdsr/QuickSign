import { Box as MUIBox } from "@mui/material";

import { styled } from '@mui/material/styles';

export const Box = styled(MUIBox)`
  display: inline-flex;
  padding: 12px;
  border-radius: 6px;

  background: ${({ theme }) => theme.palette.secondary.dark};
`
