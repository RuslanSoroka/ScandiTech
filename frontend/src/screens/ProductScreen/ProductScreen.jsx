import { Box, Button, Typography, Paper } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../products";
import Rating from "../../components/Rating/Rating";
import styles from "./ProductScreen.styles";

const ProductScreen = () => {
    const { id: ProducId } = useParams();
    const {
        _id,
        name,
        image,
        description,
        price,
        countInStock,
        rating,
        numReviews,
    } = products.find((product) => product._id === ProducId);
    return (
        <Box sx={styles.productScreenContainer}>
            <Button sx={{backgroundColor: 'lightgray', '> *': {color: 'black', textDecoration: 'none'}, marginBlock: '1rem' }} variant="contained">
                <Link to="/">Go Back</Link>
            </Button>
            <Box sx={styles.productScreen}>
                <Box sx={styles.imageContainer}>
                    <img src={image} alt={name} />
                </Box>
                <Box sx={styles.productInfo}>
                    <Typography sx={styles.title} variant="h1">{name}</Typography>
                    <Rating rating={rating} numReviews={numReviews} />
                    <Typography variant="sobtitle2">Price: ${price}</Typography>
                    <Typography variant="body1">{description}</Typography>
                </Box>
                <Paper sx={styles.addToCart}>
                    <Box sx={[styles.price, styles.item]}>
                        <Typography variant="body1">Price:</Typography>
                        <Typography variant="body1">${price}</Typography>
                    </Box>
                    <Box sx={[styles.status, styles.item ]}>
                        <Typography variant="body1">Status:</Typography>
                        <Typography variant="body1">{countInStock <= 0 ? "In the stock" : "Out of stock"}</Typography>
                    </Box>
                    <Box sx={styles.item}>
                    <Button
                        variant="contained"
                        disabled={countInStock === 0}
                        sx={styles.button}
                        >Add to Cart</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default ProductScreen;
