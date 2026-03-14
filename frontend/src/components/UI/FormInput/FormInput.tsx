import { styles } from "./FormInput.styles";
import TextField from "@mui/material/TextField";
import { Control, FieldValues, Controller, Path } from "react-hook-form";
import { Box, Theme, IconButton } from "@mui/material";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface IFormInputProps<T extends FieldValues> {
	name: Path<T>;
	label: string;
	type?: string;
	control: Control<T>;
}

const FormInput = <T extends FieldValues>({
	name,
	label,
	control,
	type = "text",
}: IFormInputProps<T>) => {
	const [showPassword, setShowPassword] = useState(false);
	const isTypePassword = type === "password";

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Box sx={styles.wrapper}>
			<Controller
				name={name}
				control={control}
				render={({ field, formState: { errors } }) => (
					<TextField
						{...field}
						autoComplete="true"
						label={label}
						error={!!errors[name]}
						helperText={errors[name]?.message as string | undefined}
						sx={{
							"& .MuiInputLabel-root": {
								color: (theme: Theme) => theme.palette.text.primary,
							},
							width: "100%",
						}}
						type={isTypePassword ? (showPassword ? "text" : "password") : type}
					/>
				)}
			/>
			{isTypePassword && (
				<IconButton
					sx={styles.showPasswordButton}
					onClick={togglePasswordVisibility}
				>
					{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
				</IconButton>
			)}
		</Box>
	);
};

export default FormInput;
