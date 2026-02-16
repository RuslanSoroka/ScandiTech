import { Theme } from "@mui/material";

export const PriceInfoSharedStyles = {
	addToCartWidget: (theme: Theme) => ({
		display: "flex",
		flexDirection: "column",
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: "5px",
		width: "100%",
		"& > *:not(:last-child)": {
			borderBottom: `2px solid ${theme.palette.divider}`,
		},
	}),
	flexWrapper: (theme: Theme, finalOrder?: boolean) => ({
		display: "flex",
		justifyContent: "space-between",
		padding: theme.spacing(3),
		gap: theme.spacing(3),

		"> :last-child": {
			fontWeight: {
				fontWeight: "700",
			},
		},
		...(!finalOrder && {
			"&:last-child": {
				justifyContent: "flex-end",
			},
		}),
		[theme.breakpoints.down("lg")]: {
			"& h3": {
				fontSize: '1.5rem',
			},
			"& p": {
				fontSize: "1.2rem",
			},
		},
		[theme.breakpoints.down("md")]: {
			"& h3": {
				fontSize: '1.3rem',
			},
		}
	}),
};
