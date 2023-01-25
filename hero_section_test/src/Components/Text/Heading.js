import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 600,
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: '4rem'
  }
}));