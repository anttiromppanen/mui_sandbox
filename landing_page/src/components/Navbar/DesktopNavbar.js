import React from 'react';
import {
  Button, ButtonGroup, Link, Stack, styled,
} from '@mui/material';
import Logo from '../Logo';

const NavLink = styled(Link)({
  fontWeight: 500,
  letterSpacing: '1px',
  fontSize: '0.8rem',
});

function DesktopNavbar() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" py={1}>
      <Logo />
      <Stack direction="row" spacing={3}>
        <NavLink href="##">ABOUT</NavLink>
        <NavLink href="##">SERVICES</NavLink>
        <NavLink href="##">CONTACT US</NavLink>
        <NavLink href="##">FEATURES</NavLink>
      </Stack>
      <ButtonGroup>
        <Button variant="text" size="small">Sign Up</Button>
        <Button variant="contained" size="small" color="secondary">Register</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default DesktopNavbar;
