import React from 'react';
import { Container, CssBaseline, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import MediaCard from './MediaCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
    },
  }
}

function App() {
  return (
    <Box>
      <Grid
        container
        height="100vh"
        width="100%"
        bgcolor="darkorange"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" color="white" component={motion.div} initial={{ opacity: 0 }}animate={{ opacity: 1 }} transition={{ duration: 1 }}>Hero text</Typography>
        </Grid>
      </Grid>
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid
        container
        width="100%"
        my={15}
        component={motion.div}
        variants={container}
        whileInView={"show"}
        initial="hidden"
        viewport={{ amount: "all" }}
      >
        <Grid item container justifyContent="center" xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item container justifyContent="center" xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item container justifyContent="center" xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}

export default App;
