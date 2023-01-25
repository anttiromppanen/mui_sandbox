import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const NavLinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'block'
}));

export const Navbar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.success.main, color: theme.palette.primary.main }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <NavLinkButton component={RouterLink} to="/">About</NavLinkButton>
            <NavLinkButton component={RouterLink} to="/contact-us">Contact us</NavLinkButton>
          </Box>
          <NavLinkButton component={RouterLink} to="login">Login</NavLinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};