import { useAppSelector } from "../../hooks/reduxHooks";
import { createSelector } from "@reduxjs/toolkit";
import { Box, Stack, Typography } from "@mui/material";
import { styles } from "./CartScreen.styles";
import CartItem from "../../components/CartItem";
import CartSubtotal from "../../components/CartSubtotal";

const CartScreen = () => {
	const cartState = useAppSelector((state) => state.cart);

	const selectCartIds = createSelector(
		[(state) => state.cartItems],
		(cartItems: any) => {
			return cartItems.map((item: any) => item._id);
		}
	);

	const cartItemsIds = selectCartIds(cartState);
	return (
		<Box sx={styles.cartScreen}>
			<Typography variant="h1">Cart</Typography>
			<Box sx={styles.contentWrapper}>
				<Stack sx={styles.itemsWrapper}>
					{cartItemsIds &&
						cartItemsIds.map((item: string) => (
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
