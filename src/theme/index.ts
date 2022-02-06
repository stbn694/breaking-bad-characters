import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0D3E10',
      dark: '#093009',
      light: '#1F6032',
    },
    secondary: {
      main: '#C48F25',
    },
    background: {
      default: '#010a01',
      paper: '#032202',
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
