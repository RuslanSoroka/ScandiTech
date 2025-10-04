import { styles } from "./OrderListItems.styles";
import { Box } from "@mui/material";
import { ICartItem } from "../../models";
import OrderItem from "../OrderItem";

interface IOrderListItemsProps {
	cartItems: ICartItem[],
}

const OrderListItems = ({ cartItems }: IOrderListItemsProps) => {
	return (
		<Box sx={styles.orderItems}>
			{cartItems.map((item) => (
				<OrderItem key={item._id} itemData={item} />
			))}
		</Box>
	);
};

export default OrderListItems;