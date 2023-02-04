import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ActionSection from './components/ActionSection/ActionSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <HeroSection />
        <ActionSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
