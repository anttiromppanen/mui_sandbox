import { Route, Routes } from 'react-router';
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./Components";
import { Home, Login } from './Pages';
import theme from './theme';
import { ContactUs } from './Pages/';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters 
        maxWidth="x1"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
