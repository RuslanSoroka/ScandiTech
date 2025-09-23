import * as yup from "yup";

const ShippingSchema = yup
	.object().shape({
		address: yup
			.string()
			.min(2, "at least 2 characters")
			.max(50, "maximum 50 characters")
			.matches(/^[\p{L}\p{N}\s\-'’#./]+$/u, "Invalid address")
			.required("Address is required"),

		city: yup
			.string()
			.min(2, "at least 2 characters")
			.max(30, "maximum 30 characters")
			.matches(/^[\p{L}\s\-'’]+$/u, "Invalid city name")
			.required("City is required"),

		postalCode: yup
			.string()
			.matches(/^[A-Za-z0-9\s-]+$/, "Invalid postal code")
			.required("Postal code is required"),

		country: yup
			.string()
			.matches(/^[\p{L}\s\-'’]+$/u, "Invalid country name")
			.required("Country is required"),
	})
	.required();

export default ShippingSchema;