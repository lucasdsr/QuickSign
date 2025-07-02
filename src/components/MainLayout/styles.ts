import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainContainer = styled(Box)`
  display: flex;  
  align-items: center;
  justify-content: center;  
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  color: white;
  background-color: ${({ theme}) => theme.palette.secondary.light}
`