/* eslint-disable no-unused-vars */
import React from 'react';
import { Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo';

function MobileNavbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={1}
    >
      <Logo />
      <MenuIcon
        fontSize="large"
        color="companyBlue"
      />
    </Stack>
  );
}

export default MobileNavbar;
