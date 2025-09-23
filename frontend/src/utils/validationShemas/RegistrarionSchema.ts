import * as yup from "yup";

const RegistrationSchema = yup
	.object().shape({
		firstName: yup.string().min(2, "at least 2 characters").max(20, "maximum 12 characters").matches(/^[\p{L}\s\-'’]+$/u,'invalid first name').required('first name is required'),
		lastName: yup.string().min(2, "at least 2 characters").max(20, "maximum 15 characters").matches(/^[\p{L}\s\-'’]+$/u, 'invalid last name').required('last name is required'),
		email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email").required("email is required"),
		password: yup.string()
			.min(6, "password must consist at least 6 characters, one capital letter and one sign")
			.max(35, "password must consist not more then 35 characters")
			.matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])(?!.*\s).{6,}$/, "password must consist at least 6 characters, one capital letter and one sign").required("password is required"),
		repeatPassword: yup.string().oneOf([yup.ref("password") , undefined], 'password ust mach').required('repeat password is required'),
	})
	.required();

export default RegistrationSchema;