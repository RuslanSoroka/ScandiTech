import { lazy, memo, Suspense } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useGetAllProductsQuery } from "../../redux/apiSlices/productsSlice";
import ProductSkeleton from "../../components/Skeleton/HomeScreenSkeleton";

const Product = lazy(() => import("../../components/Product"));
const MemoizedProduct = memo(Product);

const HomeScreen = () => {
    const { data: products} = useGetAllProductsQuery();

    return (
        <Box>
            <Typography
                sx={(theme) => ({
                    padding: {
                        xs: theme.spacing(2),
                        md: theme.spacing(3),
                    },
                })}
                variant="h1"
                color="text.secondary"
            >
                Products
            </Typography>
            <Grid container spacing={2}>
                {products?.map((product) => {
                    return (
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            item
                            key={product._id}
                        >
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
