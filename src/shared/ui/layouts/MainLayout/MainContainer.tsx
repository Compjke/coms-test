import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';

export const MainContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  backgroundColor: theme.palette.background.default,
}));
