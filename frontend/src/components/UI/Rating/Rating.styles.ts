import { Theme } from "@mui/material";
export const styles = {
	rate: (theme: Theme) => ({
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
		},
	}),
};
