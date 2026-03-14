import { PriceInfoSharedStyles as sharedStyles } from "../../../../utils/shardStyles/PriceInfoSharedStyles.styles";
import { Box, Skeleton, Typography, Paper, Button } from "@mui/material";

const FinalOrderSummarySkeleton = () => {
	return (
		<Paper sx={sharedStyles.addToCartWidget}>
			<Box sx={sharedStyles.flexWrapper}>
				<Typography variant="h3">Order Summary</Typography>
			</Box>
			<Box sx={sharedStyles.flexWrapper}>
				<Box width="100%">
					<Typography variant="body1">
						<Skeleton />
					</Typography>
					<Typography variant="body1">
						<Skeleton />
					</Typography>
					<Typography variant="body1">
						<Skeleton />
					</Typography>
					<Typography variant="body1">
						<Skeleton />
					</Typography>
				</Box>
				<Box width="100%">
					<Typography variant="body1">
						<Skeleton />
					</Typography>
					<Typography variant="body1">
						<Skeleton />
					</Typography>
					<Typography variant="body1">
						<Skeleton />
					</Typography>
					<Typography variant="body1">
						<Skeleton />
					</Typography>
				</Box>
			</Box>
			<Box padding={3}>
				<Button fullWidth disabled>
					<Skeleton variant="rectangular" width="100%" height="3.4375rem" />
				</Button>
				<Button fullWidth disabled>
					<Skeleton variant="rectangular" width="100%" height="3.4375rem" />
				</Button>
			</Box>
		</Paper>
	);
};

export default FinalOrderSummarySkeleton;
