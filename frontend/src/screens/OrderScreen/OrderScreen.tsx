import {OrderSharedStyles as orderStyles} from "../../utils/shardStyles/OrderSharedStyles.styles";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../redux/apiSlices/orderApiSlice";
import OrderListItems from "../../components/OrderListItems";
import StatusBadge from "../../components/UI/StatusBadge";
import FinalOrderSummary from "../../components/FinalOrderSummary";

const OrderScreen = () => {
	const { id: paramsId } = useParams();
	const { data, isLoading } = useGetSingleOrderQuery(paramsId);
	console.log(data);
	if (isLoading) {
		return;
	}
	const {
		address,
		city,
		postalCode,
		country,
	} = data.shippingAddress;
	const fullShippingAddress = `${address}, ${city}, ${postalCode}, ${country}`;

	const deliveryStatusText = data.isDelivered ? "Delivered" : "Not Delivered";
	const paymentStatusText = data.isDelivered ? "Paid" : "Not Paid";
	return (
		<>
			<Typography sx={orderStyles.title} variant="h1">Order {paramsId}</Typography>
			<Box sx={orderStyles.screen}>
				<Box sx={orderStyles.content}>
					<Box sx={orderStyles.screenSection} component="section">
						<Typography variant="h2">Shipping</Typography>
						<Typography sx={orderStyles.text} component="p"><Box component="span">Email: </Box>{data.user.email}
						</Typography>
						<Typography sx={orderStyles.text} component="p"><Box component="span">Address: </Box>{fullShippingAddress}
						</Typography>
						<StatusBadge content={deliveryStatusText} status={data.isDelivered} />
					</Box>
					<Box sx={orderStyles.screenSection} component="section">
						<Typography variant="h2">Payment Method</Typography>
						<Typography sx={orderStyles.text} component="p"><Box component="span">Method: </Box>{data.paymentMethod}
						</Typography>
						<StatusBadge content={paymentStatusText} status={data.isPaid} />
					</Box>
					<Box sx={orderStyles.screenSection} component="section">
						<Typography variant="h2">Order Items</Typography>
						<OrderListItems cartItems={data.orderItems} />
					</Box>
				</Box>
				<Box sx={orderStyles.summaryWrapper}>
					<FinalOrderSummary totalPrice={data.totalPrice} taxPrice={data.taxPrice} shipping={data.shippingPrice}/>
				</Box>
			</Box>

		</>
	);
};

export default OrderScreen;