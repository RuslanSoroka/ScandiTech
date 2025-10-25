import { Theme } from "@mui/material";

export const styles = {
	priceInfo:{
		justifyContent:"space-between",
	},
    paypalWrapper:(theme: Theme)=> ({
			padding: theme.spacing(3),
				textAlign: "center",
				width: "100%",
    }),
}
