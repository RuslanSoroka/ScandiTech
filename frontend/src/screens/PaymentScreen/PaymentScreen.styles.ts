import { Theme } from "@mui/material";

export const styles = {
	paymentScreen: (theme: Theme) => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing(3),
		paddingY: theme.spacing(2),
	}),
	content: (theme: Theme) => ({
		"& h1": {
			marginBottom: theme.spacing(2),
		},
		"@media (max-width: 560px)": {
			textAlign: "center",
		},
	}),
	formLabel: (theme: Theme) => ({
		fontSize: theme.typography.pxToRem(24),
	}),
	button: (theme: Theme) => ({
		maxWidth: "7rem",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100%",
		},
	}),

};
