import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
  return (
      <React.Fragment>
      <CssBaseline  />
      <Container  maxWidth="sm">
        <Box  className='main' sx={{ bgcolor: 'grey', height: '100vh' }} >
        {children}
        </Box>

      </Container>
    </React.Fragment>
  );
}
