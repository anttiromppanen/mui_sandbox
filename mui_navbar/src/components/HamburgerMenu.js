import React from 'react';
import {
  IconButton, Menu, MenuItem, Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import pages from '../data/const';

function HamburgerMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <IconButton
        data-testid="nav-open-button"
        size="large"
        aria-label="menu for small screen"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        data-testid="small-screen-hamburger-menu"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography aria-label="small-nav-page-link" textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default HamburgerMenu;
