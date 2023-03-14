import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Box, Container, useTheme, useMediaQuery } from '@mui/material';

import 'swiper/swiper-bundle.min.css';

function ItemImageSlider({ images }) {
  const theme = useTheme();
  const breakpointLargeScreen = useMediaQuery(theme.breakpoints.only('xl'));
  const breakpointsMediumScreen = useMediaQuery(theme.breakpoints.only('lg'));
  const brekapointMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));


  const slidesPerViewByBreakpoint = () => {
    if (breakpointLargeScreen) return 3;
    if (breakpointsMediumScreen) return 2
    if (brekapointMobileScreen) return 1;
  }
  console.log(slidesPerViewByBreakpoint());
  return (
    <Box sx={{ my: 3 }}>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        spaceBetween={100}
        slidesPerView={slidesPerViewByBreakpoint()}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          images.map((image, i) => 
            <SwiperSlide key={i}>
              <img src={image} alt="" height="500" width="auto" />
            </SwiperSlide>
          )
        }
      </Swiper>
    </Box>
  )
}

export default ItemImageSlider