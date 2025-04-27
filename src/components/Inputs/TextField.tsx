import { TextField as MUITextField, TextFieldProps } from "@mui/material";

import { styled } from "@mui/material/styles";

export const TextField = styled(
  (props: TextFieldProps & { color?: string }) => (
    <MUITextField color="none" {...props} />
  )
)`
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.secondary.light};
`;
