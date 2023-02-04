import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import action1 from '../../static/action1.svg';
import action2 from '../../static/action2.svg';
import action3 from '../../static/action3.svg';

function ActionSection() {
  return (
    <Grid container spacing={4}>
      <Grid item md="4" xs="12">
        <Stack>
          <img src={action1} alt="" width="80%" />
        </Stack>
        <Stack px={2}>
          <Typography variant="h4">Aliquam auctor sapien vitae sodales congue.</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis justo vel ex tincidunt pulvinar eget sit amet risus. Proin mattis facilisis sapien, eu gravida tortor. Suspendisse eros erat, bibendum eget malesuada vitae, sagittis a mi.</Typography>
        </Stack>
      </Grid>
      <Grid item md="4" xs="12">
        <Stack>
          <img src={action2} alt="" width="80%" />
        </Stack>
        <Stack px={2}>
          <Typography variant="h4">Praesent nec arcu sit amet felis laoreet ultrices</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis justo vel ex tincidunt pulvinar eget sit amet risus. Proin mattis facilisis sapien, eu gravida tortor. Suspendisse eros erat, bibendum eget malesuada vitae, sagittis a mi.</Typography>
        </Stack>
      </Grid>
      <Grid item md="4" xs="12">
        <Stack justifyContent="flex-end">
          <img src={action3} alt="" width="92%" />
        </Stack>
        <Stack px={2}>
          <Typography variant="h4">Aenean sollicitudin vehicula elementum</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis justo vel ex tincidunt pulvinar eget sit amet risus. Proin mattis facilisis sapien, eu gravida tortor. Suspendisse eros erat, bibendum eget malesuada vitae, sagittis a mi.</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ActionSection;
