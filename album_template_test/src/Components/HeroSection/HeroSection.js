import { Box, Container, Typography, Stack, Button } from '@mui/material';

export const HeroSection = ({ mainHeading, mainText, buttonOneText, buttonTwoText, buttonColor }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        height: { xl: 'auto', lg: 'auto', md: 'auto', sm: 'auto', xs: '100vh'  }
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {mainHeading}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {mainText}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" color={buttonColor}>{buttonOneText}</Button>
          <Button variant="outlined" color={buttonColor}>{buttonTwoText}</Button>
        </Stack>
      </Container>
    </Box>
  );
};