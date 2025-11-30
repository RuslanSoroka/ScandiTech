import TextField from "@mui/material/TextField";
import theme from "../../../utils/theme/theme";
import { Control, FieldValues, Controller, Path } from "react-hook-form";
import { Theme } from "@mui/material";

interface IFormInputProps<T extends FieldValues> {
	name: Path<T>;
	label: string;
	control: Control<T>;
}

const FormInput = <T extends FieldValues>({
	name,
	label,
	control,
}: IFormInputProps<T>) => {
	return (
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
					}}
				/>
			)}
		/>
	);
};

export default FormInput;
