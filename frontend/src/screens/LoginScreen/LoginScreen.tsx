import { styles } from "./LoginScreen.styles";
import { Box, Button, Typography } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface ILoginScreenProps {}

interface IFormInput {
	userName: string;
	password: string;
}

const LoginScreen = ({}: ILoginScreenProps) => {
	const { control, handleSubmit } = useForm<IFormInput>({
		defaultValues: {
			userName: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
	};
	return (
		<Box sx={styles.loginScreen}>
			<Typography variant="h1">Sign in</Typography>
			<Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
				<Box sx={styles.formContent}>
					<Controller
						name="userName"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								autoComplete="true"
								label="userName"
								helperText="Incorrect entry."
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field }) => <TextField {...field} autoComplete="true" />}
					/>
					<Button type="submit" variant="contained">
						Contained
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default LoginScreen;
