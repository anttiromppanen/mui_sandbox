import {
  Avatar, Container, Stack, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlog } from '../../hooks/useGetBlogs';
import LoadingText from '../LoadingText';
import BlogImage from '../BlogCard/BlogImage';
import randomImage from '../../utils/randomBlogImage';

function SingleBlog() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBlog(id);
  const smallScreenSize = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const getInitialsFromAuthor = () => data.author.split(' ')[0][0] + data.author.split(' ')[0][1];

  if (isLoading) return <LoadingText />;

  return (
    <Stack maxWidth="md" m="0 auto">
      <Container>
        <Typography variant={smallScreenSize ? 'h3' : 'h2'} textAlign="center" my={5}>
          {data.heading}
        </Typography>
        <Stack alignItems="center" mb={5}>
          <Avatar sx={{
            width: 50, height: 50, bgcolor: 'orange', mb: 1,
          }}
          >
            {getInitialsFromAuthor()}
          </Avatar>
          <Typography variant="body1">
            {data.author}
          </Typography>
          <Typography variant="body2">
            {data.time_created}
          </Typography>
        </Stack>
      </Container>
      <BlogImage imgSrc={randomImage()} imageHeight={300} />
      <Container sx={{ my: 5 }}>
        <Typography variant="body1" px={1} fontSize="1.2rem" sx={{ whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>
          {data.body_text}
        </Typography>
      </Container>
    </Stack>
  );
}

export default SingleBlog;
