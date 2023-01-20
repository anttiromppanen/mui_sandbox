import { Grid } from '@mui/material';
import { HeroImage } from './HeroImage';
import { HeroTextSection } from './HeroTextSection';

const HeroSectionTextLeft = ({ image, heroHeading, heroText, textRight}) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        p={5}
        textAlign={textRight ? "left" : "right"}
        order={!textRight ? { md: 1, xs: 2 } : { md: 2, xs: 2 }}
      >
        <HeroTextSection heroHeading={heroHeading} heroText={heroText} textRight={textRight} />
      </Grid>
      <Grid
        item
        xs={12} 
        md={6}
        textAlign="center"
        order={!textRight ? { md: 2, xs: 1 } : { md: 1, xs: 1 }}>
        <HeroImage image={image} />
      </Grid>
    </>
  );
};

export const HeroSection = ({ ...props }) => {
  return (
    <Grid container alignItems="center" mr={2} ml={2} mb={8}>
      <HeroSectionTextLeft {...props} />
    </Grid>
  )
};