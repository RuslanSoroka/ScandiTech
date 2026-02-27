import { Box, Skeleton, Paper, Button } from "@mui/material";
import { PriceInfoSharedStyles as productStyles } from "../../../../utils/shardStyles/PriceInfoSharedStyles.styles";

const AddToCartWidgetSkeleton = () => {
	return (
		<Paper sx={productStyles.addToCartWidget}>
			<Box sx={productStyles.flexWrapper}>
				<Skeleton width="50%" />
				<Skeleton width="50%" />
			</Box>
			<Box sx={productStyles.flexWrapper}>
				<Skeleton width="50%" />
				<Skeleton width="50%" />
			</Box>
			<Box sx={productStyles.flexWrapper}>
				<Button variant="contained" disabled={true}>
					<Skeleton width="100%" height="100%"></Skeleton>
				</Button>
			</Box>
		</Paper>
	);
};

export default AddToCartWidgetSkeleton;
