import { styled } from '@mui/system';

const StyledHeroImage = styled('img')(({ theme }) => ({
  marginTop: '5rem',
  marginBottom: '5rem',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '80%',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '70%',
  }
}));

export const HeroImage = ({ image }) => {
  return (
    <StyledHeroImage
      src={image}
      style={{ marginTop: '5rem', marginBottom: '5rem' }}
      alt=""
    />
  );
};
