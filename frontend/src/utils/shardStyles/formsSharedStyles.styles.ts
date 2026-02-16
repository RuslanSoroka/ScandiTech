import { Theme } from "@mui/material";

export const FormScreensSharedStyles = {
	screen: (theme: Theme) => ({
		minHeight: "calc(100vh - 97px)",
		display: "grid",
		gridTemplateColumns: "1fr",
		gridTemplateRows: "auto auto auto",
		justifyItems: "center",
		alignContent: "center",
		gap: theme.spacing(5),
		paddingY: theme.spacing(2),
	}),
	formContainer: (theme: Theme) => ({
		width: "30rem",
		height: "100%",
		[theme.breakpoints.down("lg")]: {
			width: "100%",
		},
	}),
	formContent: (theme: Theme) => ({
		display: "flex",
		flexDirection: "column",
		gap: theme.spacing(2.5),
	}),
	formSubmit: (theme: Theme) => ({
		marginTop: theme.spacing(2),
	}),
};

export const UnderFormLinkSharedStyles = {
	link: {
		display: "flex",
		gap: ".3rem",
		marginTop: ".5rem",
		"& a": {
			textDecoration: "underline",
		},
	},
};
