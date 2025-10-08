import { PriceInfoSharedStyles as orderStyles } from "../../utils/shardStyles/PriceInfoSharedStyles.styles";
import { Box, Button, Paper, Typography } from "@mui/material";
import {  useAppDispatch } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { isApiError } from "../../utils/helpers/typeGuards";
import toast from "react-hot-toast";

interface IFinalOrderSummaryProps {
	totalPrice: number,
	taxPrice: number,
	shipping: number,
}

const FinalOrderSummary = ({ totalPrice, taxPrice, shipping }: IFinalOrderSummaryProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const orderHandler = async () => {
		try {
			// const res = await createOrder({

			// }).unwrap();
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
				<Typography variant="h3">Order Summary</Typography>
			</Box>
			<Box sx={orderStyles.flexWrapper}>
				<Box>
					<Typography variant="body1">Price:</Typography>
					<Typography variant="body1">Shipping Price:</Typography>
					<Typography variant="body1">Tax Price:</Typography>
				</Box>
				<Box>
					<Typography variant="body1">${totalPrice - shipping - taxPrice}</Typography>
					<Typography variant="body1">${shipping}</Typography>
					<Typography variant="body1">${taxPrice}</Typography>
				</Box>
			</Box>

			<Box sx={orderStyles.flexWrapper}>
				<Button
					onClick={
						orderHandler
					}
					variant="contained"
				>
					Place Order
				</Button>
			</Box>
		</Paper>
	);
};

export default FinalOrderSummary;