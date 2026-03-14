import { OrderSharedStyles as orderStyles } from "../../utils/shardStyles/OrderSharedStyles.styles";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../redux/apiSlices/orderApiSlice";
import OrderListItems from "../../components/OrderListItems";
import StatusBadge from "../../components/UI/StatusBadge";
import FinalOrderSummary from "../../components/FinalOrderSummary";
import FinalOrderScreenSkeleton from "src/components/Skeleton/FinalOrderScreenSkeletons/FinalOrderScreenSkeleton/FinalOrderScreenSkeleton";

const OrderScreen = () => {
	const { id: orderId } = useParams();
	const {
		data: orderInfo,
		isLoading,
		refetch,
	} = useGetSingleOrderQuery(orderId ?? "");

	if (isLoading) {
		return <FinalOrderScreenSkeleton orderId={orderId ?? ""} />;
	}

	const { address, city, postalCode, country } = orderInfo.shippingAddress;
	const fullShippingAddress = `${address}, ${city}, ${postalCode}, ${country}`;

	const deliveryStatusText = orderInfo.isDelivered
		? "Delivered"
		: "Not Delivered";
	const paymentStatusText = orderInfo.isPaid
		? `Paid at: ${orderInfo.paidAt}`
		: "Not Paid";

	return (
		<>
			<Typography sx={orderStyles.title} variant="h1">
				Order {orderId}
			</Typography>
			<Box sx={orderStyles.screen}>
				<Box sx={orderStyles.content}>
					<Box sx={orderStyles.screenSection} component="section">
						<Typography variant="h2">Shipping</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Box component="span">Email: </Box>
							{orderInfo.user.email}
						</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Box component="span">Address: </Box>
							{fullShippingAddress}
						</Typography>
						<StatusBadge
							content={deliveryStatusText}
							status={orderInfo.isDelivered}
						/>
					</Box>
					<Box sx={orderStyles.screenSection} component="section">
						<Typography variant="h2">Payment Method</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Box component="span">Method: </Box>
							{orderInfo.paymentMethod}
						</Typography>
						<StatusBadge
							content={paymentStatusText}
							status={orderInfo.isPaid}
						/>
					</Box>
					<Box sx={orderStyles.screenSection} component="section">
						<Typography variant="h2">Order Items</Typography>
						<OrderListItems cartItems={orderInfo.orderItems} />
					</Box>
				</Box>
				<Box sx={orderStyles.summaryWrapper}>
					<FinalOrderSummary
						paidAt={orderInfo.paidAt}
						refetch={refetch}
						orderId={orderId as string}
						totalPrice={orderInfo.totalPrice}
						taxPrice={orderInfo.taxPrice}
						shipping={orderInfo.shippingPrice}
					/>
				</Box>
			</Box>
		</>
	);
};

export default OrderScreen;
