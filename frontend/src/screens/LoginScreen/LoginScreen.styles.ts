import { Theme } from "@mui/material";

export const styles = {
	loginScreen: (theme: Theme) => ({
		display: "grid",
		gridTemplateColumns: "1fr",
	}),
	form: {
		maxWidth: "16rem",
	},
	formContent: {
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
	},
};
