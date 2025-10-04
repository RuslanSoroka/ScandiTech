import { Button, Paper, Typography } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import { useAppSelector } from "../../hooks/reduxHooks";
import { styles } from "./CartSubtotal.styles";

const CartSubtotal = () => {
	const { cartItems, price } = useAppSelector((state) => state.cart);
	return (
		<Paper sx={styles.subtotal}>
			<Typography variant="h3" component="h2">
				{`Subtotal (${cartItems.length.toString()}) items`}
			</Typography>
			<Typography sx={styles.price} variant="body1">
				${price}
			</Typography>

			<Button
				sx={styles.button}
				variant="contained"
				component={RouterLink}
				to="/shipping"
			>
				Proceed to checkout
			</Button>
		</Paper>
	);
};

export default CartSubtotal;
