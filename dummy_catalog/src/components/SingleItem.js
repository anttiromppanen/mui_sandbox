import React from 'react'
import { useParams } from 'react-router-dom';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useGetSingleItem } from '../hooks/useFetchItems'
import ItemImageSlider from './ItemImageSlider';

function SingleItem() {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetSingleItem(id);
  
  if (isLoading) return <Typography variant="h6">Loading...</Typography>
  
  return (
    <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
      <Stack>
        <Typography variant="h1">
          {data.item_name}
        </Typography>
        <ItemImageSlider images={data.item_images} />
        <Typography variant="body1">
          {data.item_description}
        </Typography>
      </Stack>
    </Container>
  )
}

export default SingleItem