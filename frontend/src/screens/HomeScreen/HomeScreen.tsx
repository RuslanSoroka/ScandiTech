import { Grid, Typography } from "@mui/material";
import React from "react";
import products from "../../products";
import Product from "../../components/Product";

const HomeScreen = () => {
    return (
        <>
            <Typography variant="h1">Products</Typography>
            <Grid container spacing={2}>
                {products.map((product) => {
                    return (
                        <Grid xs={12} sm={6} md={3} item key={product._id}>
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default HomeScreen;
