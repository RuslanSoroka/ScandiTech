import { Grid, Typography } from "@mui/material";
import Product from "../../components/Product";
import { useGetAllProductsQuery } from "../../redux/apiSlices/productsSlice";

const HomeScreen = () => {
    const {data: products} = useGetAllProductsQuery(); 

    return (
        <>
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
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default HomeScreen;
