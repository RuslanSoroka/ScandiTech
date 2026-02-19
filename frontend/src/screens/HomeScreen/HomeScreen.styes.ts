import { Theme } from "@mui/material";

export const styles = {
	homeScreen: (theme: Theme) => ({
		display: "flex",
		flexDirection: "column",
		gap: { xs: theme.spacing(2), md: theme.spacing(3) },
	}),
};
