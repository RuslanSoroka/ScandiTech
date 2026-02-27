import { Theme } from "@mui/material";

export const styles = {
	productScreenContent: (theme: Theme) => ({
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		gap: "2rem",
		[theme.breakpoints.down("lg")]: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gridTemplateRows: "1fr 1fr",
			gridTemplateAreas: "'gallery gallery'" +
				"									'details widget'",
			gap: "1rem",
		},
		[theme.breakpoints.down("md")]: {
			gridTemplateAreas: "'gallery'" + "'details'" + "'widget'",
			gridTemplateColumns: "1fr",
			gridTemplateRows: "1fr",
		},
	}),
	imageGalleryWrapper: (theme: Theme) => ({
		maxWidth: "30rem",
		width: "100%",
		[theme.breakpoints.down("lg")]: {
			gridArea: "gallery",
			justifySelf: "center",
		},
	}),
	productDetailsWrapper: (theme: Theme) => ({
		width: "100%",
		maxWidth: "37rem",
		[theme.breakpoints.down("lg")]: {
			gridArea: "details",
		},

	}),
	addToCartWrapper: (theme: Theme) => ({
		maxWidth: "13.246875rem",
		width: "100%",
		[theme.breakpoints.down("lg")]: {
			gridArea: "widget",
			maxWidth: "100%",

		},
		[theme.breakpoints.down("md")]: {
			maxWidth: "100%",
		},
	}),
};
