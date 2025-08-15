import { styles } from "./LoginScreen.styles";
import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import theme from "../../utils/theme/theme";

interface IFormInput {
  gmail: string;
  password: string;
}

const LoginScreen = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      gmail: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <Box sx={styles.loginScreen}>
      <Typography variant="h1">Sign In</Typography>
      <Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.formContent}>
          <Controller
            name="gmail"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="true"
                label="Gmail"
                helperText={false}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary
                  }
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) =>
              <TextField
                {...field}
                autoComplete="true"
                label="Password"
                helperText={false}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary
                  }
                }}
              />}
          />
        </Box>
        <Box sx={styles.formSubmit}>
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </Box>
        <Box sx={styles.register}>
          <Typography>New customer?</Typography> <Link component={RouterLink} to={""}>Register</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
