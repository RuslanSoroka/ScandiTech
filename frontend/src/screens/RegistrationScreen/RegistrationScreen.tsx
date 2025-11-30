import {FormScreensSharedStyles as registrationStyles, UnderFormLinkSharedStyles as registrationLinkStyles} from "../../utils/shardStyles/formsSharedStyles.styles";
import { Box, Link, Typography } from "@mui/material";
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
import UserDataForm from "../../components/UI/UserDataForm";


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
			const res = await registerNewUser({ name: userName.trim().toUpperCase(), email, password }).unwrap();
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
			<UserDataForm control={control} handleSubmit={handleSubmit} onSubmit={onSubmit} isLoading={isLoadingRegistration as boolean} buttonName='Registration'>
				<Box sx={registrationLinkStyles.link}>
					<Typography>Already have an account?</Typography> <Link component={RouterLink} to={"/login"}>Login</Link>
				</Box>
			</UserDataForm>
		</Box>
	);
};

export default RegistrationScreen;
