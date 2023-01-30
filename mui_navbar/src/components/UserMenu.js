import {
  Avatar, Box, IconButton, Tooltip,
} from '@mui/material';
import React from 'react';

function UserMenu() {
  return (
    <Box sx={{
      flexGrow: 0,
    }}
    >
      <Tooltip title="Open settings">
        <IconButton sx={{
          p: 0,
        }}
        >
          <Avatar alt="User1" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default UserMenu;
