/* eslint-disable react/prop-types */
import React from 'react';
import { grey } from '@mui/material/colors';
import { Image } from 'mui-image';

function BlogImage({
  imgSrc,
  imageHeight,
  imageWidth,
}) {
  return (
    <Image
      src={imgSrc}
      height={imageHeight}
      width={imageWidth}
      bgColor={grey[100]}
      showLoading
    />
  );
}

export default BlogImage;
