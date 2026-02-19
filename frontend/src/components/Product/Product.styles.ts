import { Theme } from "@mui/material";
const styles = {
	card: (theme: Theme) => ({
		padding: "1rem",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "row",
		},
	}),
	img: (theme: Theme) => ({
		width: "100%",
		height: "auto",
		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			[theme.breakpoints.down("sm")]: {
				clipPath: "circle(42% at 50% 50%)",
			},
		},
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			width: "10.5rem",
			height: "100%",
		},
	}),
	content: (theme: Theme) => ({
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			maxWidth: "14rem",
		},
	}),
	productName: (theme: Theme) => ({
		overflow: "hidden",
		fontWeight: "bold",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		textDecoration: "underline",
		cursor: "pointer",
		[theme.breakpoints.down("sm")]: {
			whiteSpace: "wrap",
		},
	}),
	price: {
		fontSize: "inherit",
		fontWeight: "bold",
	},
};
export default styles;
