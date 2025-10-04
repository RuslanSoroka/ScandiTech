import { styles } from "./PlaceOrderScreen.styles";
import CheckoutSteps from "../../components/UI/CheckoutSteps";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxHooks";
import OrderItem from "../../components/OrderItem";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import OrderListItems from "../../components/OrderListItems";

const PlaceOrderScreen = () => {
	const { cartItems, shippingAddress, paymentMethod } = useAppSelector((state) => state.cart);
	const {
		address,
		city,
		postalCode,
		country,
	} = shippingAddress;
	const fullShippingAddress = `${address}, ${city}, ${postalCode}, ${country}`;
	return (
		<>
			<CheckoutSteps step1 step2 step3 step4 />
			<Box sx={styles.screen}>
				<Box sx={styles.content}>
					<Box sx={styles.screenSection} component="section">
						<Typography variant="h2">Shipping</Typography>
						<Typography sx={styles.text} component="p"><Box component="span">Address: </Box>{fullShippingAddress}
						</Typography>
					</Box>
					<Box sx={styles.screenSection} component="section">
						<Typography variant="h2">Payment Method</Typography>
						<Typography sx={styles.text} component="p"><Box component="span">Method: </Box>{paymentMethod}</Typography>
					</Box>
					<Box sx={styles.screenSection} component="section">
						<Typography variant="h2">Order Items</Typography>
						<OrderListItems cartItems={cartItems}/>
					</Box>
				</Box>
				<Box sx={styles.summaryWrapper}>
					<OrderSummary />
				</Box>
			</Box>

		</>
	);
};

export default PlaceOrderScreen;