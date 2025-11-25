import {styles} from "./UpdateProfileDataTab.styles";
import UserDataForm from "../UI/UserDataForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegistrationInfo } from "../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import RegistrationSchema from "../../utils/validationShemas/RegistrarionSchema";
import { useProfileMutation } from "../../redux/apiSlices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import { isApiError } from "../../utils/helpers/typeGuards";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { Box, Typography } from "@mui/material";


interface IUpdateUserDataTabProps {

}

const UpdateProfileDataTab = ({}: IUpdateUserDataTabProps) => {
	const [updateProfile, { isLoading: isLoadingUpdateProfile }] = useProfileMutation();
	const { control, handleSubmit } = useForm<IRegistrationInfo>({
		resolver: yupResolver(RegistrationSchema),
	});
const dispatch = useAppDispatch()

	const onSubmit: SubmitHandler<IRegistrationInfo> = async (data: IRegistrationInfo) => {
		const { firstName, lastName, email, password } = data;
		const userName = `${firstName} ${lastName}`
		try {
			const res = await updateProfile({ name: userName, email, password }).unwrap();
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
			<Typography variant="h2">Update Profile</Typography>
			<UserDataForm control={control} handleSubmit={handleSubmit} onSubmit={onSubmit}
										isLoading={isLoadingUpdateProfile} buttonName="Update profile" />
		</Box>
	);
};

export default UpdateProfileDataTab;