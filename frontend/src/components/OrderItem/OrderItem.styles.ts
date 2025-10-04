import { Theme } from "@mui/material";

export const styles = {
	orderItem: ()=>({
		display: 'flex',
		justifyContent: "space-between",
		alignItems: "center",
	}),
	itemInfo: (theme: Theme)=>( {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
	}),
	itemImage: {
		width: '3rem',
		height: '3rem',
	},
	itemName: {
	fontSize: '1rem',
	}
}
