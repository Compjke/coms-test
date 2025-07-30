import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(0, 5), // 0px top/bottom, 40px left/right
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  backgroundColor: theme.palette.background.default,
}));
