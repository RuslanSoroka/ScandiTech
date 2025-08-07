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
import AddToCartWidget from "../../components/AddToCartWidget/AddToCartWidget";

const ProductScreen = () => {
    const {id: producId} = useParams();
    const {data: product, isError: isErrorGetProduct} = useGetProductByIdQuery(producId ?? "");

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
                    <AddToCartWidget productItem={product}/>
                </Box>
            </Box>
        )
    );
};

export default ProductScreen;
