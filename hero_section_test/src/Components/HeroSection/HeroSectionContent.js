import { Grid } from '@mui/material';
import { HeroImage } from './HeroImage';
import { HeroTextSection } from './HeroTextSection';

export const HeroSectionContent = ({ image, heroHeading, heroText, alignForText }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        p={5}
        textAlign={alignForText}
        order={alignForText === "left" ? { md: 1, xs: 2 } : { md: 2, xs: 2 }}
      >
        <HeroTextSection
          heroHeading={heroHeading}
          heroText={heroText}
        />
      </Grid>
      <Grid
        item
        xs={12} 
        md={6}
        textAlign="center"
        order={alignForText === "left" ? { md: 2, xs: 1 } : { md: 1, xs: 1 }}>
        <HeroImage image={image} />
      </Grid>
    </>
  );
};