import * as yup from "yup";

const LoginSchema = yup
	.object().shape({
		email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email").required("email is required"),
		password: yup.string()
			.min(6, "password must consist at least 6 characters, one capital letter and one sign")
			.max(35, "password must consist not more then 35 characters")
			.matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])(?!.*\s).{6,}$/, "password must consist at least 6 characters, one capital letter and one sign").required("password is required"),
	})
	.required();

export default LoginSchema;