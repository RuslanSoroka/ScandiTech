import { PriceInfoSharedStyles as orderStyles } from "../../utils/shardStyles/PriceInfoSharedStyles.styles";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../redux/apiSlices/orderApiSlice";
import { clearCartItems } from "../../redux/slices/cartSlice";
import { isApiError } from "../../utils/helpers/typeGuards";
import toast from "react-hot-toast";

const OrderSummary = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [createOrder] = useCreateOrderMutation();
	const cart = useAppSelector((state) => state.cart);
	useEffect(() => {
		if (!cart.shippingAddress.address) {
			navigate("/shipping");
		} else if (!cart.paymentMethod) {
			navigate("/payment");
		}
	}, [cart.shippingAddress.address, cart.paymentMethod, navigate]);

	const placeOrderHandler = async () => {
		try {
			const res = await createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.price,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			}).unwrap();

			dispatch(clearCartItems());
			navigate(`/orders/${res._id}`);
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.data.message as string);
			} else {
				toast.error("Something went wrong");
			}
		}
	};

	return (
		<Paper sx={orderStyles.addToCartWidget}>
			<Box sx={orderStyles.flexWrapper}>
				<Typography variant="body1">Price:</Typography>
				<Typography variant="body1">${cart.totalPrice - cart.shippingPrice - cart.taxPrice}</Typography>
			</Box>
			<Box sx={orderStyles.flexWrapper}>
				<Typography variant="body1">Shipping:</Typography>
				<Typography variant="body1">${cart.shippingPrice}</Typography>
			</Box>
			<Box sx={orderStyles.flexWrapper}>
				<Typography variant="body1">Tax:</Typography>
				<Typography variant="body1">${cart.taxPrice}</Typography>
			</Box>
			<Box sx={orderStyles.flexWrapper}>
				<Typography variant="body1">Total:</Typography>
				<Typography variant="body1">${cart.totalPrice}</Typography>
			</Box>

			<Box sx={orderStyles.flexWrapper}>
				<Button
					onClick={
						placeOrderHandler
					}
					variant="contained"
				>
					Place Order
				</Button>
			</Box>
		</Paper>
	);
};

export default OrderSummary;