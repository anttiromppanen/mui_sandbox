import React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import HeroImgMobile from '../../static/HeroImgMobile.svg';
import HeroImg from '../../static/HeroImg.svg';

function HeroSection() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Grid container alignItems="center" sx={{ mt: { xs: 5, md: 10 } }} mb={20}>
      <Grid
        item
        container
        xs={12}
        md={4}
        order={{ xs: 2, md: 1 }}
        alignItems="center"
        justifyContent="center"
        width={isSmallScreen ? '80%' : '100%'}
      >
        <Typography variant="h2" maxWidth="500px">Discover a Place where you&apos;ll love to live.</Typography>
        <Typography variant="body1" maxWidth="500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis justo vel ex tincidunt pulvinar eget sit amet risus. Proin mattis facilisis sapien, eu gravida tortor. Suspendisse eros erat, bibendum eget malesuada vitae, sagittis a mi.</Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={8}
        order={{ xs: 1, md: 2 }}
        alignItems="center"
        justifyContent={isSmallScreen ? 'center' : 'flex-start'}
        width={isSmallScreen ? '80%' : '100%'}
        mb={isSmallScreen && 5}
      >
        <img src={isSmallScreen ? HeroImgMobile : HeroImg} alt="" width="100%" />
      </Grid>
    </Grid>
  );
}

export default HeroSection;
