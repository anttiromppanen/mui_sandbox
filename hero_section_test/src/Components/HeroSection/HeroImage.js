import { styled } from '@mui/system';

const StyledHeroImage = styled('img')(({ theme }) => ({
  marginTop: '5rem',
  marginBottom: '5rem',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '80%',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '50%',
    marginBottom: 0,
    marginTop: '2rem'
  }
}));

export const HeroImage = ({ image }) => {
  return (
    <StyledHeroImage
      src={image}
      alt=""
    />
  );
};
