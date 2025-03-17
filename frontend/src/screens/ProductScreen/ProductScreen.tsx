import { Box, Button, Typography, Paper } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import styles from "./ProductScreen.styles";
import { useGetProductByIdQuery } from "../../redux/apiSlices/productsSlice";

const ProductScreen = () => {
    const { id: ProducId } = useParams();
    const {data: product} = useGetProductByIdQuery(ProducId ?? '')

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
