import { PriceInfoSharedStyles as productStyles } from "../../utils/shardStyles/PriceInfoSharedStyles.styles";
import { Box, Button, Paper, Typography } from "@mui/material";
import { IProduct, ICartItem } from "../../models";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addCartItem } from "../../redux/slices/cartSlice";

interface AddToCartWidgetProps {
	productItem: IProduct;
}

type AddToCartCallback = (cartItem: ICartItem) => void;

const AddToCartWidget = ({ productItem }: AddToCartWidgetProps) => {
	const dispatch = useAppDispatch();

	const handleAddToCart: AddToCartCallback = (cartItem): void => {
		dispatch(addCartItem(cartItem));
	};
	return (
		<Paper sx={productStyles.addToCartWidget}>
			<Box sx={productStyles.flexWrapper}>
				<Typography variant="body1">Price:</Typography>
				<Typography variant="body1">${productItem.price}</Typography>
			</Box>
			<Box sx={productStyles.flexWrapper}>
				<Typography variant="body1">Status:</Typography>
				<Typography variant="body1">
					{productItem.countInStock > 0 ? "In the stock" : "Out of stock"}
				</Typography>
			</Box>
			<Box sx={productStyles.flexWrapper}>
				<Button
					onClick={() =>
						handleAddToCart({
							_id: productItem._id,
							name: productItem.name,
							price: productItem.price,
							image: productItem.image,
							countInStock: productItem.countInStock,
							quantity: 1,
						})
					}
					variant="contained"
					disabled={productItem.countInStock === 0}
				>
					Add to Cart
				</Button>
			</Box>
		</Paper>
	);
};

export default AddToCartWidget;
