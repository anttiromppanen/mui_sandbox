import React from 'react';
import {
  Box, CssBaseline, ThemeProvider, useTheme,
} from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
