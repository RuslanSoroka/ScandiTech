import { Theme } from "@mui/material";

export const OrderSharedStyles = {
	title: (theme: Theme) => ({
		textAlign: "center",
		[theme.breakpoints.down("lg")]: {
			fontSize: "2.5rem",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
	}),
	screen: (theme: Theme) => ({
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gap: theme.spacing(2),
		paddingTop: theme.spacing(2),
		[theme.breakpoints.down("lg")]: {
			gridTemplateColumns: "1fr",
			"& h2": {
				fontSize: "1.8rem",
			},
		},
		[theme.breakpoints.down("md")]: {
			"& h2": {
				fontSize: "1.2rem",
			},
		},
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
		marginY: theme.spacing(1),
		"& span": {
			fontWeight: 600,
		},
	}),
	summaryWrapper: (theme: Theme) => ({
		minWidth: "25rem",
		[theme.breakpoints.down("md")]: {
			minWidth: "100%",
		},
	}),
};
