import { PriceInfoSharedStyles as sharedStyles } from "../../utils/shardStyles/PriceInfoSharedStyles.styles";
import { styles } from "./FinalOrderSummary.styles";
import { Box, Paper, Typography, CircularProgress } from "@mui/material";
import { isApiError } from "../../utils/helpers/typeGuards";
import toast from "react-hot-toast";
import { usePayPalScriptReducer, PayPalButtons, PayPalButtonsComponentProps } from "@paypal/react-paypal-js";
import { usePayOrderMutation } from "../../redux/apiSlices/orderApiSlice";
import { useTheme } from "@mui/material";

interface IFinalOrderSummaryProps {
	refetch: () => void,
	orderId: string,
	totalPrice: number,
	taxPrice: number,
	shipping: number,
	paidAt: "string",
}

const FinalOrderSummary = ({ refetch, orderId, totalPrice, taxPrice, shipping, paidAt }: IFinalOrderSummaryProps) => {
	const theme = useTheme();
	const [payOrder] = usePayOrderMutation();
	const [{ isPending }] = usePayPalScriptReducer();

	const createOrder: PayPalButtonsComponentProps["createOrder"] = (data, actions) => {
		return actions.order.create({
			intent: "CAPTURE",
			purchase_units: [
				{
					amount: {
						currency_code: "EUR",
						value: totalPrice.toString(),
					},
				},
			],
		});
	};

	const onApproveOrder: PayPalButtonsComponentProps["onApprove"] = (data, actions) => {
		return actions.order!.capture().then(async (details) => {
			try {
				await payOrder({ id: orderId, details });
				refetch();
			} catch (error) {
				if (isApiError(error)) {
					toast.error(error.data.message as string);
				} else {
					toast.error("Something went wrong");
				}
			}
		});
	};
	return (
		<Paper sx={sharedStyles.addToCartWidget}>
			<Box sx={sharedStyles.flexWrapper}>
				<Typography variant="h3">Order Summary</Typography>
			</Box>
			<Box sx={sharedStyles.flexWrapper(theme, true)}>
				<Box>
					<Typography variant="body1">Price:</Typography>
					<Typography variant="body1">Shipping Price:</Typography>
					<Typography variant="body1">Tax Price:</Typography>
					<Typography variant="body1">Total Price:</Typography>
				</Box>
				<Box>
					<Typography variant="body1">${totalPrice - shipping - taxPrice}</Typography>
					<Typography variant="body1">${shipping}</Typography>
					<Typography variant="body1">${taxPrice}</Typography>
					<Typography variant="body1">${totalPrice}</Typography>
				</Box>
			</Box>
			{!paidAt && (
				<Box sx={styles.paypalWrapper}>
					{isPending ? (
						<Box>
							<CircularProgress />
						</Box>
					) : (
						<PayPalButtons style={{ layout: "vertical", disableMaxWidth: true }} onApprove={onApproveOrder}
													 createOrder={createOrder} />
					)}
				</Box>)}

		</Paper>
	);
};

export default FinalOrderSummary;