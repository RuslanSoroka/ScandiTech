import { styles } from "./LoginScreen.styles";
import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "../../utils/validationShemas/LoginSchema";
import { setCredentials } from "../../redux/slices/authSlice";
import { useLoginMutation } from "../../redux/apiSlices/usersApiSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginInfo } from "../../models";
import toast from "react-hot-toast";
import { isApiError } from "../../utils/helpers/typeGuards";
import FormInput from "../../components/UI/FormInput";

interface IFormInput {
	email: string;
	password: string;
}

const LoginScreen = () => {
	const { userInfo } = useAppSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [postUserInfo, { isLoading: isLoadingPostInfo }] = useLoginMutation();
	const { control, handleSubmit } = useForm<IFormInput>({
		resolver: yupResolver(LoginSchema),
	});

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [userInfo]);

	const onSubmit: SubmitHandler<IFormInput> = async (data: ILoginInfo) => {
		const { email, password } = data;
		try {
			const res = await postUserInfo({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.data.message as string);
			} else {
				toast.error("Something went wrong");
			}
		}
	};
	return (
		<Box sx={styles.loginScreen}>
			<Typography variant="h1">Sign In</Typography>
			<Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
				<Box sx={styles.formContent}>
					<FormInput name={"email"} label={"Email"} control={control} />
					<FormInput name={"password"} label={"Password"} control={control} />
				</Box>
				<Box sx={styles.formSubmit}>
					<Button disabled={isLoadingPostInfo} type="submit" variant="contained">
						Sign in
					</Button>
				</Box>
				<Box sx={styles.register}>
					<Typography>New customer?</Typography> <Link component={RouterLink} to={"/registration"}>Register</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default LoginScreen;
