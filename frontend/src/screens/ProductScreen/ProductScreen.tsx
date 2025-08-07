import {Box, Button, Typography, Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import styles from "./ProductScreen.styles";
import {useGetProductByIdQuery} from "../../redux/apiSlices/productsSlice";
import BackButton from "../../components/BackButton";
import {addCartItem} from "../../redux/slices/cartSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";
import ErrorComponent from "../../components/ErrorComponent";
import ProductDetails from "../../components/ProductDetails";
import ProductImageGallery from "../../components/ProductImageGallery";

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
        return <ErrorComponent/>;
    }

    return (
        product && (
            <Box>
                <BackButton link="/"/>
                <Box sx={styles.productScreen}>
                    <ProductImageGallery src={product.image} productName={product.name}/>
                    <ProductDetails productDetails={product}/>
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
                                {product.countInStock > 0
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
