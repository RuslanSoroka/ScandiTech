import { styles } from "./UpdateProfileData.styles";
import UserDataForm from "../UI/UserDataForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegistrationInfo, TUpdateProfile } from "../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import RegistrationSchema from "../../utils/validationShemas/RegistrarionSchema";
import { useProfileMutation } from "../../redux/apiSlices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import { isApiError } from "../../utils/helpers/typeGuards";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Box, Typography, CircularProgress } from "@mui/material";
import LoadingComponent from "../UI/LoadingComponent";

const UpdateProfileDataTab = () => {
	const { userInfo } = useAppSelector((state) => state.auth);
	const { name, email } = userInfo ?? {};
	const [firstName, lastName] = name?.split(" ") || [];

	const [updateProfile, { isLoading: isLoadingUpdateProfile }] =
		useProfileMutation();
	const { control, handleSubmit } = useForm<Partial<IRegistrationInfo>>({
		resolver: yupResolver(RegistrationSchema.partial()),
		defaultValues: {
			firstName: firstName,
			lastName: lastName,
			email: email,
		},
	});
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<Partial<IRegistrationInfo>> = async (
		data: Partial<IRegistrationInfo>
	) => {
		const { firstName, lastName, email, password, repeatPassword } = data;
		const userName = `${firstName} ${lastName}`;
		if (password !== repeatPassword) toast.error("Passwords do not match");
		try {
			const res = await updateProfile({
				name: userName.trim().toUpperCase(),
				email,
				password,
			}).unwrap();
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
		<Box sx={styles.updateProfile}>
			{isLoadingUpdateProfile ? (
				<LoadingComponent />
			) : (
				<>
					<Typography variant="h2">Update Profile</Typography>
					<UserDataForm
						control={control}
						handleSubmit={handleSubmit}
						onSubmit={onSubmit}
						isLoading={isLoadingUpdateProfile}
						buttonName="Update profile"
					/>
				</>
			)}
		</Box>
	);
};

export default UpdateProfileDataTab;
