import { Theme } from "@mui/material";

const styles = {
	toolbar: {
		"&": {
			padding: 0,
		},
	},
	contentWrapper: (theme: Theme) => ({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBlock: theme.spacing(1),
		gap: theme.spacing(3),
	}),
	logo: (theme: Theme) => ({
		"& div": {
			color: theme.palette.header,
		},
	}),
	menuWrapper: {
		display: "flex",
		alignContent: "center",
	},
	menu: (theme: Theme) => ({
		display: "flex",
		flexDirection: "row",
		gap: theme.spacing(1),
		alignItems: "center",
		marginLeft: theme.spacing(1),
		"> *": { color: "white" },
	}),
	iconButton: (theme: Theme) => ({
		color: "white",
		fontSize: "1.3rem",
		"&:hover": {
			color: theme.palette.hover.color,
		},
	}),
};

export default styles;
