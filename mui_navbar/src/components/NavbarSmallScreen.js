import React from 'react';
import {
  AppBar, Box, Container, Toolbar, Typography,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import HamburgerMenu from './HamburgerMenu';
import UserMenu from './UserMenu';

function NavbarSmallScreen() {
  return (
    <AppBar data-testid="small-navbar" position="static">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', flexGrow: 1, bgcolor: 'red' }}>
            <HamburgerMenu />
          </Box>
          <AdbIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography component="a" variant="h5" noWrap sx={{ display: 'flex', flexGrow: 1, mr: 2 }}>LOGO</Typography>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarSmallScreen;
