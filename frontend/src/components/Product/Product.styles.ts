import { Theme } from "@mui/material";
export const styles = {
	card: (theme: Theme) => ({
		padding: "1rem",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "row" as const,
		},
		"@media screen and (max-width: 23.4375em)": {
			gap: ".5rem",
		},
	}),
	img: (theme: Theme) => ({
		width: "100%",
		aspectRatio: "1/.8",
		"& img,span": {
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
			width: "100%",
			maxWidth: "14rem",
			gap: "5px",
		},
		"@media screen and (max-width: 23.4375em)": {
			maxWidth: "10rem",
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
		"@media screen and (max-width: 26.4em)": {
			lineHeight: 1,
		},
		"@media screen and (max-width: 23.4375em)": {
			whiteSpace: "nowrap",
		},
	}),
	price: {
		fontSize: "inherit",
		fontWeight: "bold",
	},
};
