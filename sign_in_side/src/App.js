import { Box, CssBaseline, Grid, ThemeProvider, Paper, createTheme, Stack, Typography, TextField, FormControlLabel, Checkbox, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const FormImageLeftSide = styled(Grid)(({ theme }) => ({
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundColor: theme.palette.grey[200],
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const App = () => {
  const theme = createTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container component="main" sx={{ height: '100vh' }}>
          <FormImageLeftSide item md={5} xs={false} />
          <Grid item md={7} xs={12} component={Paper} elevation={6} >
            <Stack my={8} mx={4} spacing={2} alignItems="center" justifyContent="center">
              <Avatar sx={{ backgroundColor: 'primary.light', width: 56, height: 56 }} /> 
              <Typography component="h1" variant="h3">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ width: '80%' }}>
                <Stack spacing={2}>
                  <TextField label="Email address" name="email" fullWidth />
                  <TextField label="Password" name="password" fullWidth />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button type="submit" variant="contained" fullWidth>Sign in</Button>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}

export default App;
