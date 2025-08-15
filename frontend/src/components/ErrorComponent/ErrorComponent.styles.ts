import { Theme } from "@mui/material";

export const styles = {
	box: {
		minHeight: "calc(100vh - 4rem)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: (theme: Theme) => ({
		fontSize: "1.5rem",
		color: theme.palette.errors.color,
	}),
};
