import { Grid, Stack, TextField, Button } from '@mui/material';
import { FormGridContainer, MainHeading } from "../../Components";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/system';

export const GreenTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: 'white'
  },
  label: {
    color: 'white'
  },
  '& input:valid + fieldset': {
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.success.main
    }
  }
}));

export const ContactUs = () => {
  const theme = useTheme();

  return (
    <Stack>
      <MainHeading color={theme.palette.success.main}>Contact us</MainHeading>
      <form>
        <FormGridContainer>
          <Grid item md={6} xs={12}>
            <GreenTextField label="Enter first name" color="success" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <GreenTextField label="Enter last name" color="success" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <GreenTextField label="City" color="success" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <GreenTextField label="Country" color="success" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <GreenTextField label="Zip code" color="success" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth>Submit</Button>
          </Grid>
        </FormGridContainer>
      </form>
    </Stack>
  );
};