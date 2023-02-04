import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B444E',
    },
    secondary: {
      main: '#7892BC',
    },
    background: {
      default: '#F4F9FF',
    },
    companyBlue: {
      main: '#236BAE',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
  shadows: 'none',
});

export default theme;
