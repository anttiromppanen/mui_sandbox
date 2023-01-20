import { Button, Stack, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

export const HeroTextSection = ({ heroHeading, heroText, textRight }) => {
  const theme = useTheme();
  
  return (
    <Stack direction="column" alignItems={textRight || "flex-end"}>
      <Typography variant="h1" color={theme.palette.success.main} sx={{ fontWeight: 600, marginBottom: '1rem', lineHeight: 0.8, maxWidth: 700  }}>
        {heroHeading}
      </Typography>
      <Typography variant="h6" color="white" sx={{ fontWeight: 200, maxWidth: 700 }}>
        {heroText}
      </Typography>
    </Stack>
  );
};
