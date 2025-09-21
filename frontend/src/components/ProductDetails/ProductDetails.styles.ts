import { Theme } from "@mui/material";

export const styles = {
	productInfo: (theme: Theme) => ({
		"& > *:not(:last-child)": {
			borderBottom: `2px solid ${theme.palette.divider}`,
			paddingBottom: "1rem",
			display: "block",
		},
		"& > *:not(:first-of-type)": {
			paddingTop: "1rem",
		},
	}),
	title: {
		fontSize: "2rem",
	},
};
