import { Theme } from "@mui/material";

export const OrderSharedStyles = {
	title: (theme: Theme) => ({
		textAlign: 'center',
		[theme.breakpoints.down("md")]: {
			fontSize: '2rem',
		}
	}),
	screen: (theme: Theme) => ({
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gap: theme.spacing(2),
		paddingTop: theme.spacing(2),
		[theme.breakpoints.down("lg")] : {
			gridTemplateColumns: "1fr",
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
	summaryWrapper:(theme: Theme) => ( {
		minWidth: "25rem",
	}),
};