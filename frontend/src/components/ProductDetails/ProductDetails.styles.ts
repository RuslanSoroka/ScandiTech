import { Theme } from "@mui/material";

export const styles = {
	productInfo: (theme: Theme) => ({
		"& > *": {
			paddingBlock: "1rem",
			display: "block",
			"&:not(:last-child)": {
				borderBottom: `2px solid ${theme.palette.divider}`,
			},
		},
	}),
	title: {
		fontSize: "2rem",
	},
};
