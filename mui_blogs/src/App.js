import React from 'react';
import { Route, Routes } from 'react-router';
import {
  Container,
  createTheme, CssBaseline, ThemeProvider,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import SingleBlog from './components/SingleBlog/SingleBlog';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[800],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container disableGutters maxWidth="lg">
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
