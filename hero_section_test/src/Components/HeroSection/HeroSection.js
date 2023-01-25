import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { HeroSectionContent } from './HeroSectionContent';

export const HeroSection = ({ ...props }) => {
  const theme = useTheme();
  const smallScreenActive = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container alignItems="center" mb={8} ml="auto" mr="auto" maxWidth="2200px">
      {
        smallScreenActive
          ? <HeroSectionContent {...props} alignForText="center" />
          : <HeroSectionContent {...props} />
      }
    </Grid>
  );
};