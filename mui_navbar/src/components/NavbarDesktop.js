import React from 'react';
import {
  AppBar, Box, Button, Container, Toolbar, Typography,
} from '@mui/material';
import { Adb as AbIcon } from '@mui/icons-material';
import pages from '../data/const';
import UserMenu from './UserMenu';

function NavbarDesktop() {
  return (
    <AppBar data-testid="desktop-navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AbIcon sx={{ mr: 0.5 }} />
          <Typography
            variant="h5"
            component="a"
            noWrap
            sx={{ mr: 2 }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarDesktop;
