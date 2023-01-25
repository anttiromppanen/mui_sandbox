import { Grid } from '@mui/material';

export const FormGridContainer = ({ children }) => {
  return (
    <Grid container spacing={2} maxWidth="1000px" sx={{ margin: '0 auto' }}>
      {children}
    </Grid>
  )
};