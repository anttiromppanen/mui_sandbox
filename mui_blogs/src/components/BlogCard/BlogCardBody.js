import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function BlogCardBody({
  bodyText,
}) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      textAlign="left"
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '4',
        WebkitBoxOrient: 'vertical',
        mb: 1,
      }}
    >
      {bodyText}
    </Typography>
  );
}

BlogCardBody.propTypes = {
  bodyText: PropTypes.string,
};

BlogCardBody.defaultProps = {
  bodyText: 'error',
};

export default BlogCardBody;
