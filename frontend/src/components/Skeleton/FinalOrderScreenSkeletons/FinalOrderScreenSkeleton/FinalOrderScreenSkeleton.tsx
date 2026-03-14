import { Box, Skeleton, Typography} from "@mui/material";
import { OrderSharedStyles as orderStyles } from "../../../../utils/shardStyles/OrderSharedStyles.styles";
import FinalOrderSummarySkeleton from "../FinalOrderSummarySkeleton";

interface IFinalOrderScreenSkeletonProps {
	orderId: string;
}
const FinalorderScreenSkeleton = ({
	orderId,
}: IFinalOrderScreenSkeletonProps) => {
	return (
		<>
			<Typography sx={orderStyles.title} variant="h1">
				Order {orderId}
			</Typography>
			<Box sx={orderStyles.screen}>
				<Box sx={orderStyles.content}>
					<Box sx={orderStyles.screenSection}>
						<Typography variant="h2">Shipping</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Skeleton variant="rectangular" />
						</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Skeleton variant="rectangular" />
						</Typography>
						<Box>
							<Skeleton variant="rectangular" height="3.6rem" />
						</Box>
					</Box>
					<Box sx={orderStyles.screenSection}>
						<Typography variant="h2">Payment Method</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Skeleton variant="rectangular" />
						</Typography>
						<Typography sx={orderStyles.text} component="p">
							<Skeleton variant="rectangular" />
						</Typography>
						<Box>
							<Skeleton variant="rectangular" height="3.6rem" width="100%" />
						</Box>
					</Box>
					<Box sx={orderStyles.screenSection}>
						<Typography variant="h2">Order Items</Typography>
						<Box>
							<Skeleton variant="rectangular" height='10rem'/>
						</Box>
					</Box>
				</Box>
				<Box sx={orderStyles.summaryWrapper}>
					<FinalOrderSummarySkeleton />
				</Box>
			</Box>
		</>
	);
};

export default FinalorderScreenSkeleton;
