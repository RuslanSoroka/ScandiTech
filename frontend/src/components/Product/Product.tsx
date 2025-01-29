import React from "react";
import { IProduct } from "../../models";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Rating from "../Rating";
import styles from "./Product.styles";

interface ProductProps {
    product: IProduct;
}

const Product = ({ product }: ProductProps) => {
    const {
        name,
        image,
        price,
        rating,
        numReviews,
    } = product;
    return (
        <Paper sx={styles.card}>
            <Stack direction="column" spacing={2}>
                <Box sx={styles.img}>
                    <img src={image} alt={name} />
                </Box>
                <Typography
                    sx={styles.productName}
                    variant={"h4"}
                    component={"h3"}
                >
                    {name}
                </Typography>
                <Rating rating={rating} numReviews={numReviews} />
                <Typography sx={styles.price} variant="body1" component={"p"}>
                    ${price}
                </Typography>
            </Stack>
        </Paper>
    );
};

export default Product;
