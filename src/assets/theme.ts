import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E90FF' // Um azul vibrante para elementos principais
    },
    secondary: {
      main: '#FFD700' // Um dourado brilhante para destaques secundários
    },
    success: {
      main: '#32CD32' // Um verde claro para indicar sucesso
    },
    error: {
      main: '#FF4500' // Um vermelho alaranjado para erros
    },
    warning: {
      main: '#FFA500' // Um laranja para avisos
    },
    info: {
      main: '#FFA500' // Um laranja para avisos
    }, 
  }
})