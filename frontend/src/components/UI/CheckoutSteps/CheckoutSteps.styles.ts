import { Theme } from "@mui/material";

export const styles = {
	navStep: (theme: Theme) => ({
		display: "flex",
		gap: theme.spacing(2),
		fontWeight: '500',
		"& a:hover": {
			textDecoration:"underline",
		},
		"[aria-disabled]": {
			cursor: "default",
			opacity: .6,
		},
	}),
};
