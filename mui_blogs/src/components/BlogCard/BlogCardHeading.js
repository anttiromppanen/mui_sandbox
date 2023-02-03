import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function BlogCardHeading({
  heading,
}) {
  return (
    <Typography
      gutterBottom
      variant="h6"
      textAlign="left"
      color="primary"
    >
      {heading}
    </Typography>
  );
}

BlogCardHeading.propTypes = {
  heading: PropTypes.string,
};

BlogCardHeading.defaultProps = {
  heading: 'error',
};

export default BlogCardHeading;
