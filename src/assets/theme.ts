import { createTheme } from '@mui/material/styles';
import { borderRadius } from '@mui/system';

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#7C23B8',
    },
    secondary: {
      dark: '#2F2139',
      main: '#6B5D7A',
      light: '#6B5D7A',
    },
    success: {
      main: '#32CD32'
    },
    error: {
      main: '#FF4500'
    },
    warning: {
      main: '#FFA500'
    },
    info: {
      main: '#FFA500'
    }

  },
   components: {
    // Estiliza a borda dos TextFields do tipo Outlined
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "none", // Borda padrão branca
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray", // Quando passa o mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "none", // Quando focado
          },
        },
      },
    },

    // Checkbox com borda branca
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "white", // Cor padrão
          "&.Mui-checked": {
            color: "white", // Quando marcado
          },
        },
      },
    },

    // Select com borda branca
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
      },
    },

    // Radio Button com borda branca
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "white",
          "&.Mui-checked": {
            color: "white",
          },
        },
      },
    },

    // Switch com borda branca e botão branco
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase": {
            color: "white",
          },
          "& .Mui-checked": {
            color: "white",
          },
          "& .Mui-checked + .MuiSwitch-track": {
            backgroundColor: "white",
          },
        },
      },
    },
  },
});