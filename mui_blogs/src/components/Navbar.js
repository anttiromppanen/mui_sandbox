import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Box, Button, Toolbar, Container, useTheme,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

function Navbar() {
  const theme = useTheme();
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: theme.palette.grey[100] }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CloudIcon sx={{ color: 'black' }} />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button>antti blog</Button>
            </Link>
          </Box>
          <Box sx={{
            display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Button>About</Button>
            <Button>Blog</Button>
            <Button>Contact Us</Button>
            <Button>Discover</Button>
          </Box>
          <Button sx={{ marginLeft: 7 }}>Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
