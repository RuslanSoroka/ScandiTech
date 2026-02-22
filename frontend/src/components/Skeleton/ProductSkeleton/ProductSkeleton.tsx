import { Box, Paper, Skeleton } from "@mui/material";
import { styles } from "../../Product/Product.styles";

const ProductSkeleton = () => {
	return (
		<Paper sx={styles.card}>
			<Box sx={styles.img}>
				<Skeleton
					variant="rounded"
					width="100%"
					height="100%"
					sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
				/>
			</Box>
			<Box sx={styles.content}>
				<Skeleton width="100%" sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
				<Skeleton width="100%" sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
				<Skeleton width="100%" sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
			</Box>
		</Paper>
	);
};

export default ProductSkeleton;
