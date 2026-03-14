import { useAppSelector } from "../../hooks/reduxHooks";
import { Box, Stack, Typography } from "@mui/material";
import { styles } from "./CartScreen.styles";
import CartItem from "../../components/CartItem";
import CartSubtotal from "../../components/CartSubtotal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NAVIGATION_LINKS from "src/routes/links";
import { selectCartItemsIds } from "src/redux/slices/cartSlice";

const CartScreen = () => {
	const navigate = useNavigate();
	const cartItemsIds = useAppSelector(selectCartItemsIds);

	useEffect(() => {
		if (cartItemsIds.length < 1) navigate(NAVIGATION_LINKS.home);
	}, [cartItemsIds, navigate]);

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
