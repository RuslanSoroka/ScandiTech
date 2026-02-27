import { Box, Skeleton, Typography } from "@mui/material";
import { styles } from "../../../ProductDetails/ProductDetails.styles";

const ProductDetailsSkeleton = () => {
	return (
		<Box sx={styles.productInfo}>
			<Typography sx={styles.title} variant="h1">
				<Skeleton variant="rectangular" />
			</Typography>
			<Typography variant="body1">
				<Skeleton variant="rectangular" />
			</Typography>
			<Typography variant="body1">
				<Skeleton variant="rectangular" />
			</Typography>
			<Typography variant="body1">
				<Skeleton sx={{ marginBottom: 0.5 }} variant="rectangular" />
				<Skeleton sx={{ marginBottom: 0.5 }} variant="rectangular" />
				<Skeleton variant="rectangular" />
			</Typography>
		</Box>
	);
};

export default ProductDetailsSkeleton;
