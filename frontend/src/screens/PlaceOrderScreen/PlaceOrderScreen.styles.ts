import { Theme } from "@mui/material";

export const styles = {
	screen: (theme: Theme) => ({
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gap: theme.spacing(2),
		paddingBlock: theme.spacing(2),
	}),
	content: (theme: Theme) => ({
		"> *:not(:last-child)": {
			borderBottom: `2px solid ${theme.palette.divider}`,
		},
	}),
	screenSection: (theme: Theme) => ({
		padding: theme.spacing(2),
	}),
	text: (theme: Theme) => ({
		marginTop: theme.spacing(1),
		"& span": {
			fontWeight: 600,
		},
	}),
	summaryWrapper: {
		minWidth: "18.75rem",
	},
};
