import {styles} from "../../../screens/HomeScreen/HomeScreen.styes";
import { Box, Grid, Typography } from "@mui/material";
import ProductSkeleton from "../ProductSkeleton";

const HomeScreenSkeleton = () => {
	return (
		<Box>
			<Typography
				sx={styles.title}
				variant="h1"
			>
				Products
			</Typography>
			<Grid container spacing={2}>
				{[...Array(8)].map((_, index) => {
					return (
						<Grid xs={12} sm={6} md={4} lg={3} item key={index}>
							<ProductSkeleton />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default HomeScreenSkeleton;