import { Grid, Stack, TextField, Button } from '@mui/material';
import { FormGridContainer, MainHeading } from "../../Components";
import { GreenTextField } from '../ContactUs/ContactUs';
import { useTheme } from "@mui/material/styles";

export const Login = () => {
  const theme = useTheme();
  return (
    <Stack>
      <MainHeading color={theme.palette.success.main}>Log in</MainHeading>
      <form>
        <FormGridContainer>
          <Grid item xs={12}>
            <GreenTextField label="Username" color="success" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <GreenTextField label="Password" color="success" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth>Login</Button>
          </Grid>
        </FormGridContainer>
      </form>
    </Stack>
  )
};