import * as yup from "yup";

export const registerSchema = yup.object({
	email: yup
		.string()
		.email("Enter a valid email")
		.required("Email is required"),
	firstName: yup.string().required("First name is required"),
	gender: yup
		.object()
		.shape({
			label: yup.string().optional(),
			value: yup.string().optional(),
		})
		.optional(),
	lastName: yup.string().required("Last name is required"),
	phoneNumber: yup.string().required("Phone number is required"),
	password: yup
		.string()
		.required("password is required")
		.min(6, "Password must be 6 char long"),
	confirm_password: yup
		.string()
		.oneOf([yup.ref("password")], "Password does not match")
		.required("Confirm password is required"),
});
