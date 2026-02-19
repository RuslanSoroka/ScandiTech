import { useAppSelector } from "../../hooks/reduxHooks";
import { Box, Stack, Typography } from "@mui/material";
import CartItem from "../../components/CartItem";
import { styles } from "./CartScreen.styles";
import CartSubtotal from "../../components/CartSubtotal";

const CartScreen = () => {
	const cartItemIDs  = useAppSelector((state) => state.cart.cartItems.map(item => item._id));

	return (
		<Box sx={styles.cartScreen}>
			<Typography variant="h1">Cart</Typography>
			<Box sx={styles.contentWrapper}>
				<Stack sx={styles.itemsWrapper}>
					{cartItemIDs &&
						cartItemIDs.map((item: string) => (
							<CartItem key={item} itemId={item} />
						))}
				</Stack>
				<Box sx={styles.subtotalWrapper}>
					<CartSubtotal />
				</Box>
			</Box>
		</Box>
	);
};

export default CartScreen;
