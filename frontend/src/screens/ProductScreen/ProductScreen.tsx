import {Box, Button, Typography, Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import styles from "./ProductScreen.styles";
import {useGetProductByIdQuery} from "../../redux/apiSlices/productsSlice";
import BackButton from "../../components/BackButton";
import {addCartItem} from "../../redux/slices/cartSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";
import ErrorComponent from "../../components/ErrorComponent";

const ProductScreen = () => {
    const {id: producId} = useParams();
    const {data: product, isError: isErrorGetProduct} = useGetProductByIdQuery(producId ?? "");
    const dispatch = useAppDispatch();

    const addToCart = (
        _id: string,
        name: string,
        price: number,
        image: string,
        countInStock: number,
    ): void => {
        const cartItem = {_id, name, price, image, countInStock, quantity: 1};
        dispatch(addCartItem(cartItem));
    };

    if (isErrorGetProduct) {
        return <ErrorComponent />;
    }

    return (
        product && (
            <Box>
                <BackButton link="/"/>
                <Box sx={styles.productScreen}>
                    <Box sx={styles.imageContainer}>
                        <img src={product.image} alt={product.name}/>
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
                                onClick={() =>
                                    addToCart(
                                        product._id,
                                        product.name,
                                        product.price,
                                        product.image,
                                        product.countInStock,
                                    )
                                }
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
