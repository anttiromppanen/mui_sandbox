import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

const HeroTextHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 600,
  marginBottom: '1rem',
  lineHeight: 0.8,
  maxWidth: 700,
  fontSize: '10rem',

  [theme.breakpoints.down('lg')]: {
    fontSize: '6rem'
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const HeroText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 200,
  maxWidth: 700,

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  }
}));

export const HeroTextSection = ({ heroHeading, heroText }) => {
  return (
    <Stack direction="column" alignItems="center">
      <HeroTextHeading variant="h1">
        {heroHeading}
      </HeroTextHeading>
      <HeroText variant="h6">
        {heroText}
      </HeroText>
    </Stack>
  );
};
