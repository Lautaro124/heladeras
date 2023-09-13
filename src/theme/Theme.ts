import { createTheme, darkColors, lightColors } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    ...lightColors,
    primary: '#4C86A8',
    secondary: '#5A7D7C',
    error: '#DD394F',
    background: '#E9E3E6',
    divider: '#5A7D7C',
  },
  darkColors: {
    ...darkColors,
    primary: '#4C86A8',
    secondary: '#5A7D7C',
    error: '#DD394F',
    background: '#232323',
    divider: '#5A7D7C',
  },
  spacing: {
    sm: 5,
    md: 10,
    lg: 15,
  },
  mode: 'light',
});

export default theme;
