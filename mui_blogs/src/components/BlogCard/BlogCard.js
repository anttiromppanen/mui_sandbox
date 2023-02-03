import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActionArea, CardContent, useMediaQuery, Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BlogCardHeading from './BlogCardHeading';
import BlogCardBody from './BlogCardBody';
import BlogImage from './BlogImage';
import BlogCardFooter from './BlogCardFooter';

const cardWidth = 300;

function BlogCard({
  imgSrc, heading, bodyText, author, dateAdded, id,
}) {
  const screenSizeSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Card elevation={0} sx={{ width: screenSizeSmall ? '80%' : cardWidth }}>
      <CardActionArea component={Stack} sx={{ height: '100%' }}>
        <Link to={`/blogs/${id}`} style={{ textDecoration: 'none' }}>
          <BlogImage
            imgSrc={imgSrc}
            imageWidth={screenSizeSmall ? 400 : cardWidth}
            imageHeight={screenSizeSmall ? 400 : cardWidth}
          />
          <CardContent sx={{ paddingLeft: 0, paddingTop: 1 }}>
            <BlogCardHeading heading={heading} />
            <BlogCardBody bodyText={bodyText} />
            <BlogCardFooter author={author} dateAdded={dateAdded} />
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

BlogCard.propTypes = {
  imgSrc: PropTypes.node,
  heading: PropTypes.string,
  bodyText: PropTypes.string,
  author: PropTypes.string,
  dateAdded: PropTypes.string,
  id: PropTypes.number.isRequired,
};

BlogCard.defaultProps = {
  imgSrc: 'image error',
  heading: 'heading error',
  bodyText: 'bodyText error',
  author: 'author error',
  dateAdded: 'dateAdded error',
};

export default BlogCard;
