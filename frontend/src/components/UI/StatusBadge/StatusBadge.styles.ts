import { Theme } from "@mui/material";

export const styles = {
	badge: (theme: Theme, status: boolean) => ({
		padding: theme.spacing(2),
		width: "100%",
		backgroundColor: status ? "rgb(145 218 175 / 30%)" : "rgb(247 76 76 / 30%)",
		borderRadius: theme.shape.borderRadius,
		border: status ? "1px solid #87cf87" : "1px solid #d85d5d",
		"& > *": {
			color: status ? "green" : "#9b2929",
		},
	}),
};
