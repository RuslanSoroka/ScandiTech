import { IProduct } from "../../models";
import { Box, Paper, Typography } from "@mui/material";
import Rating from "../UI/Rating";
import styles from "./Product.styles";
import { Link } from "react-router-dom";

interface ProductProps {
	product: IProduct;
}

const Product = ({ product }: ProductProps) => {
	const { name, image, price, rating, numReviews, _id } = product;
	return (
		<Paper sx={styles.card}>
				<Box sx={styles.img}>
					<Link to={`product/${_id}`}>
						<img src={image} alt={name} />
					</Link>
				</Box>
				<Box sx={styles.content}>
					<Link to={`product/${_id}`}>
						<Typography sx={styles.productName} variant={"h4"} component={"h3"}>
							{name}
						</Typography>
					</Link>
					<Rating rating={rating} numReviews={numReviews} />
					<Typography sx={styles.price} variant="body1" component={"p"}>
						${price}
					</Typography>
				</Box>
		</Paper>
	);
};

export default Product;
