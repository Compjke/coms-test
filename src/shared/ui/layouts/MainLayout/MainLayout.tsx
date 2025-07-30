import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { MainContainer } from './MainContainer';

export default function MainLayout() {
  return (
    <MainContainer maxWidth='xl'>
      <header>Header</header>
      <Box sx={{ flex: 1 }}>
        <main>
          <Outlet />
        </main>
      </Box>
      <footer>Footer</footer>
    </MainContainer>
  );
}
