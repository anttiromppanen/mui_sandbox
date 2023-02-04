import { useMediaQuery } from '@mui/material';
import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const largeScreenSize = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return largeScreenSize ? <DesktopNavbar /> : <MobileNavbar />;
}

export default Navbar;
