import { Stack } from '@mui/material';
import { HeroSection } from '../../Components';
import image2 from '../../static/undraw_sunlight_re_0usx.svg';
import image3 from '../../static/undraw_woman_re_afr8.svg';
import image4 from '../../static/undraw_projections_re_ulc6.svg'

const firstHeroContent = {
  heroHeading: 'Hero heading one',
  heroText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae temporibus iure animi, laboriosam error culpa explicabo exercitationem, consectetur nam omnis aliquam repellendus autem obcaecati eligendi, corrupti excepturi repudiandae unde!',
  image: image4
}

const secondHeroContent = {
  heroHeading: 'Some random heading two',
  heroText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae temporibus iure animi, laboriosam error culpa explicabo exercitationem, consectetur nam omnis aliquam repellendus autem obcaecati eligendi, corrupti excepturi repudiandae unde!',
  image: image3
}

const thirdHeroContent = {
  heroHeading: 'Esta es heading numero tres',
  heroText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae temporibus iure animi, laboriosam error culpa explicabo exercitationem, consectetur nam omnis aliquam repellendus autem obcaecati eligendi, corrupti excepturi repudiandae unde!',
  image: image2
}

export const Home = () => {
  return (
    <Stack>
      <HeroSection {...firstHeroContent} alignForText="left" />
      <HeroSection {...secondHeroContent} alignForText="right" />
      <HeroSection {...thirdHeroContent} alignForText="left" />
    </Stack>
  );
};