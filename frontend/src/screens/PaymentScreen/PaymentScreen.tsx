import { styles } from "./PaymentScreen.styles";
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";
import CheckoutSteps from "../../components/UI/CheckoutSteps";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { addPaymentMethod } from "../../redux/slices/cartSlice";
import NAVIGATION_LINKS from "src/routes/links";

const PaymentScreen = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { shippingAddress } = useAppSelector((state) => state.cart);
	const [paymentMethod, setPaymentMethod] = useState<string>("PayPal");

	useEffect(() => {
		if (!shippingAddress.address) {
			navigate(NAVIGATION_LINKS.shipping);
		}
	}, [shippingAddress, navigate]);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addPaymentMethod(paymentMethod));
		navigate(NAVIGATION_LINKS.orderPlace);
	};
	return (
		<Box sx={styles.paymentScreen}>
			<CheckoutSteps step1 step2 step3 />
			<Box sx={styles.content}>
				<Typography variant="h1">Payment Method</Typography>
				<Box
					component="form"
					onSubmit={(e) => {
						submitHandler(e);
					}}
				>
					<FormControl sx={{ gap: 1 }}>
						<FormLabel
							sx={styles.formLabel}
							id="payment-radio-buttons-group-label"
						>
							Select Method
						</FormLabel>
						<RadioGroup
							aria-labelledby="payment-radio-buttons-group-label"
							defaultValue="PayPal"
							name="payment-radio-buttons-group"
							onChange={(e) => setPaymentMethod(e.target.value)}
						>
							<FormControlLabel
								value="PayPal"
								control={<Radio checked />}
								label="PayPal or Credit Card"
							/>
						</RadioGroup>
						<Button sx={styles.button} type="submit" variant="contained">
							Continue
						</Button>
					</FormControl>
				</Box>
			</Box>
		</Box>
	);
};

export default PaymentScreen;
