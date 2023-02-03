import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import LoadingText from './LoadingText';
import { useGetBlogs } from '../hooks/useGetBlogs';
import BlogCard from './BlogCard/BlogCard';
import randomImage from '../utils/randomBlogImage';

function ThreeColGridItem({ children }) {
  return (
    <Grid item container justifyContent="center" xs={12} md={6} lg={4}>
      {children}
    </Grid>
  );
}

ThreeColGridItem.propTypes = {
  children: PropTypes.element,
};

ThreeColGridItem.defaultProps = {
  children: 'error',
};

function Blogs() {
  const { data, isLoading } = useGetBlogs();

  if (isLoading) return <LoadingText />;

  return (
    <Box sx={{ width: '100%', mt: { xs: 6, md: 8 } }}>
      <Grid container spacing={4}>
        {data.map((x) => (
          <ThreeColGridItem key={x.id}>
            <BlogCard
              imgSrc={randomImage()}
              heading={x.heading}
              bodyText={x.body_text}
              author={x.author}
              dateAdded={x.time_created}
              id={x.id}
            />
          </ThreeColGridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Blogs;
