import { Box, Button, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import styles from "./ProductScreen.styles";
import axios from "axios";
import { IProduct } from "../../models";

const ProductScreen = () => {
    const { id: ProducId } = useParams();
    const [product, setProduct] = useState<IProduct>({
        _id: "",
        name: "",
        image: "",
        description: "",
        brand: "",
        category: "",
        price: 0,
        countInStock: 0,
        rating: 0,
        numReviews: 0
    });
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get<IProduct>(
                    `/products/${ProducId}`
                );
                console.log(data);
                setProduct(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProduct();
    }, []);

    return (
        product && (
            <Box>
                <Button
                    sx={{
                        backgroundColor: "lightgray",
                        "> *": { color: "black", textDecoration: "none" },
                        marginBlock: "1rem",
                    }}
                    variant="contained"
                >
                    <Link to="/">Go Back</Link>
                </Button>
                <Box sx={styles.productScreen}>
                    <Box sx={styles.imageContainer}>
                        <img src={product.image} alt={product.name} />
                    </Box>
                    <Box sx={styles.productInfo}>
                        <Typography sx={styles.title} variant="h1">
                            {product.name}
                        </Typography>
                        <Rating
                            rating={product.rating}
                            numReviews={product?.numReviews}
                        />
                        <Typography variant="subtitle2">
                            Price: ${product?.price}
                        </Typography>
                        <Typography variant="body1">
                            {product.description}
                        </Typography>
                    </Box>
                    <Paper sx={styles.addToCart}>
                        <Box sx={styles.item}>
                            <Typography variant="body1">Price:</Typography>
                            <Typography variant="body1">
                                ${product.price}
                            </Typography>
                        </Box>
                        <Box sx={styles.item}>
                            <Typography variant="body1">Status:</Typography>
                            <Typography variant="body1">
                                {product.countInStock <= 0
                                    ? "In the stock"
                                    : "Out of stock"}
                            </Typography>
                        </Box>
                        <Box sx={styles.item}>
                            <Button
                                variant="contained"
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        )
    );
};

export default ProductScreen;
