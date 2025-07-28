import { createTheme } from '@mui/material/styles';
import colors from './colors';
import typography from './typography';

const theme = createTheme({
  palette: {
    ...colors,
  },
  typography,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('xl')]: {
            maxWidth: '1600px', // Adjust this value as needed
          },
        }),
      },
    },
  },
});

export default theme;
