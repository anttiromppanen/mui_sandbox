import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function BlogCardFooter({
  author,
  dateAdded,
}) {
  return (
    <>
      <Typography variant="body2" color="primary" textAlign="left">
        {author}
      </Typography>
      <Typography variant="body2" color="orange" mb={0}>
        {dateAdded}
      </Typography>
    </>
  );
}

BlogCardFooter.propTypes = {
  author: PropTypes.string,
  dateAdded: PropTypes.string,
};

BlogCardFooter.defaultProps = {
  author: 'error',
  dateAdded: 'error',
};

export default BlogCardFooter;
