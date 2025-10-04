import { styles } from "./OrderItem.styles";
import { ICartItem } from "../../models";
import { Box, Typography } from "@mui/material";

interface IOrderItemProps {
	itemData: ICartItem;
}

const OrderItem = ({ itemData }: IOrderItemProps) => {
	const { image, quantity, price, name } = itemData;
	return (
		<Box sx={styles.orderItem}>
			<Box sx={styles.itemInfo}>
				<Box
					sx={styles.itemImage}
					component="img"
					src={image}
					alt={`${name}`}
				/>
				<Typography sx={styles.itemName} component="h3" variant="h5">
					{name}
				</Typography>
			</Box>
			<Typography variant="body2">{`${quantity} x $${price} = ${quantity * price}`}</Typography>
		</Box>
	);
};

export default OrderItem;