import { Box as MUIBox } from "@mui/material";

import styled from "styled-components";

export const Box = styled(MUIBox)`
  display: inline-flex;
  padding: 12px;
  border-radius: 6px;

  background: ${(props) => props.theme.colors.secondary};
`
