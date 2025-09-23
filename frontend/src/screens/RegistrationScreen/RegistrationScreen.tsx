import {FormScreensSharedStyles as registrationStyles, UnderFormLinkSharedStyles as registrationLinkStyles} from "../../utils/shardStyles/formsSharedStyles.styles";
import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCredentials } from "../../redux/slices/authSlice";
import { useRegistrationMutation } from "../../redux/apiSlices/usersApiSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IRegistrationInfo } from "../../models";
import toast from "react-hot-toast";
import { isApiError } from "../../utils/helpers/typeGuards";
import RegistrationSchema from "../../utils/validationShemas/RegistrarionSchema";
import FormInput from "../../components/UI/FormInput";


const RegistrationScreen = () => {
	const { userInfo } = useAppSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [registerNewUser, { isLoading: isLoadingRegistration }] = useRegistrationMutation();
	const { control, handleSubmit} = useForm<IRegistrationInfo>({
		resolver: yupResolver(RegistrationSchema),
	});

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [userInfo]);

	const onSubmit: SubmitHandler<IRegistrationInfo> = async (data: IRegistrationInfo) => {
		const { firstName, lastName, email, password } = data;
		const userName = `${firstName} ${lastName}`
		try {
			const res = await registerNewUser({ name: userName, email, password }).unwrap();
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
		<Box sx={registrationStyles.screen}>
			<Typography variant="h1">Sign Up</Typography>
			<Box sx={registrationStyles.formContainer} component="form" onSubmit={handleSubmit(onSubmit)}>
				<Box sx={registrationStyles.formContent}>
					<FormInput name={'firstName'} label={"First Name"} control={control}/>
					<FormInput name={'lastName'} label={"Last Name"} control={control}/>
					<FormInput name={'email'} label={"Email"} control={control}/>
					<FormInput name={'password'} label={"Password"} control={control}/>
					<FormInput name={'repeatPassword'} label={"Repeat password"} control={control}/>
				</Box>
				<Box sx={registrationStyles.formSubmit}>
					<Button disabled={isLoadingRegistration} type="submit" variant="contained">
						Register
					</Button>
				</Box>
				<Box sx={registrationLinkStyles.link}>
					<Typography>Already have an account?</Typography> <Link component={RouterLink} to={"/login"}>Login</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default RegistrationScreen;
