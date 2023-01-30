import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarSmallScreen from './NavbarSmallScreen';

function Navbar() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return smallScreen ? <NavbarSmallScreen /> : <NavbarDesktop />;
}

export default Navbar;
