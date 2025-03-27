import { TextField as MUITextField } from "@mui/material";

import { styled } from "@mui/material/styles";

export const TextField = styled(MUITextField)`
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.secondary.light};
`;
