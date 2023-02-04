import React from 'react';
import { Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Logo() {
  return (
    <Stack direction="row" alignItems="center">
      <HomeIcon fontSize="large" sx={{ marginRight: 0.4 }} color="secondary" />
      <Typography sx={{ letterSpacing: '1px', fontSize: '1.2rem', fontWeight: 400 }} color="primary" fontFamily="Lora, serif">iHome</Typography>
    </Stack>
  );
}

export default Logo;
