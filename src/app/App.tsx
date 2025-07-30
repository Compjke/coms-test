import theme from '@/shared/theme/theme';
import { setDocumentTitle } from '@/shared/utils/setDocumentTitle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import AppRouter from './routes/Approutes';

function App() {
  const language = 'en'; // This should be dynamically set based on user preference or context

  useEffect(() => {
    setDocumentTitle(language);
  }, [language]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
