import theme from '@/shared/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './routes/Approutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
