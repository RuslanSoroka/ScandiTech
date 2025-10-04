import { Theme } from "@mui/material";

export const styles = {

	orderItems: (theme: Theme) => ({
		marginTop: theme.spacing(2),
		"& >:not(:last-child)": {
			borderBottom: `2px solid ${theme.palette.divider}`,
			marginBottom: theme.spacing(1),
		},
	}),
};
