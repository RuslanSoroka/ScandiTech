import { Box, Button } from "@mui/material";
import {
	FormScreensSharedStyles as registrationStyles,
} from "../../../utils/shardStyles/formsSharedStyles.styles";
import FormInput from "../FormInput";
import { IRegistrationInfo } from "../../../models";
import {  ReactNode } from "react";
import { Control, UseFormHandleSubmit, Path } from "react-hook-form";

interface IUserDataFormProps <T extends IRegistrationInfo | Partial<IRegistrationInfo>> {
	control: Control<T>;
	handleSubmit: UseFormHandleSubmit<T>
	onSubmit: (data: T) => void;
	isLoading: boolean,
	children?: ReactNode;
	buttonName: string;
}

const UserDataForm = <T extends Record<string, any>>({ control, handleSubmit, onSubmit, isLoading, children, buttonName }: IUserDataFormProps<T>) => {
	return (
		<Box sx={registrationStyles.formContainer} component="form" onSubmit={handleSubmit(onSubmit) }>
			<Box sx={registrationStyles.formContent}>
				<FormInput name={"firstName" as Path<T>} label={"First Name"} control={control} />
				<FormInput name={"lastName" as Path<T>} label={"Last Name"} control={control} />
				<FormInput name={"email" as Path<T>} label={"Email"} control={control} />
				<FormInput name={"password" as Path<T>} label={"Password"} control={control} />
				<FormInput name={"repeatPassword" as Path<T>} label={"Repeat password"} control={control} />
			</Box>
			<Box sx={registrationStyles.formSubmit}>
				<Button disabled={isLoading} type="submit" variant="contained">
					{buttonName}
				</Button>
			</Box>
			{children}
		</Box>
	);
};

export default UserDataForm;