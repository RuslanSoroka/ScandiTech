import { lazy, memo, Suspense } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useGetAllProductsQuery } from "../../redux/apiSlices/productsSlice";
import ProductSkeleton from "../../components/Skeleton/ProductSkeleton";
import ErrorComponent from "../../components/ErrorComponent";
import { styles } from "./HomeScreen.styes";
import HomeScreenSkeleton from "../../components/Skeleton/HomeScreenSkeleton";

const Product = lazy(() => import("../../components/Product"));
const MemoizedProduct = memo(Product);

const HomeScreen = () => {
	const { data: products, isFetching, isError } = useGetAllProductsQuery();

	if (isError) {
		return <ErrorComponent />;
	}

	if (isFetching) {
		return (
			<HomeScreenSkeleton />
		);
	}

	return (
		<Box>
			<Typography
				sx={styles.title}
				variant="h1"
			>
				Products
			</Typography>
			<Grid container spacing={2}>
				{products?.map((product) => {
					return (
						<Grid xs={12} sm={6} md={4} lg={3} item key={product._id}>
							<Suspense fallback={<ProductSkeleton />}>
								<MemoizedProduct product={product} />
							</Suspense>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default HomeScreen;
