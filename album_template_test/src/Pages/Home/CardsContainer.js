import { Container, Grid } from '@mui/material';

export const CardsContainer = ({ children }) => {
  return (
      <Container sx={{ py: 8, backgroundColor: 'lightgrey' }} maxWidth="lg">
        <Grid container spacing={4}>
          {children}
        </Grid>
      </Container>
  );
};
