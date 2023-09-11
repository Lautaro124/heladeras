import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#4C86A8',
    secondary: '#171d1c',
    error: '#DD394F',
    background: '#E9E3E6',
    divider: '#5A7D7C',
  },
  darkColors: {
    primary: '#4C86A8',
    secondary: '#E9E3E6',
    error: '#DD394F',
    background: '#232323',
    divider: '#5A7D7C',
  },
  spacing: {
    sm: 5,
    md: 10,
    lg: 15,
  },
  mode: 'dark',
});

export default theme;