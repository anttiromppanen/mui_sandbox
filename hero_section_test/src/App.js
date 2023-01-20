import { Box, Container, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar, HeroSection } from "./Components";
import theme from './theme';
import image from './static/undraw_just_browsing_re_ofnd.svg';
import image2 from './static/undraw_sunlight_re_0usx.svg';
import image3 from './static/undraw_woman_re_afr8.svg'

const firstHeroContent = {
  heroHeading: 'Hero heading one',
  heroText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae temporibus iure animi, laboriosam error culpa explicabo exercitationem, consectetur nam omnis aliquam repellendus autem obcaecati eligendi, corrupti excepturi repudiandae unde!',
  image
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

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters 
        maxWidth="x1"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Stack>
          <Navbar />
          <HeroSection {...firstHeroContent} />
          <HeroSection {...secondHeroContent} textRight />
          <HeroSection {...thirdHeroContent} />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
