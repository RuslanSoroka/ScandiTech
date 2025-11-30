import { Theme } from "@mui/material";

export const styles = {
	updateProfile: (theme: Theme) => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: theme.spacing(3),
		height: "calc(100vh - 297.59px)",
	}),
};
