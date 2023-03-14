import React from 'react';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useFetchItems } from './hooks/useFetchItems';
import { Route, Routes } from 'react-router';
import Item from './components/Item';
import SingleItem from './components/SingleItem';

function Items({ items }) {
  return (
    <Grid container spacing={5} my={15} m="0 auto">
      {
        items.map((item) =>
          <Item
            key={item.id}
            id={item.id}
            name={item.item_name}
            description={item.item_description}
            image={item.item_images[0]}
          />
        )
      }
    </Grid>
  )
}

function App() {
  const { isLoading, isError, error, data } = useFetchItems();
  
  if (isLoading) return <Typography variant="h6">Loading...</Typography>

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={5} my={15}>
        <Routes>
          <Route path="/" element={<Items items={data} />} />
          <Route path="/items/:id" element={<SingleItem />} />
        </Routes>
      </Grid>
    </Container>
  );
}

export default App;
