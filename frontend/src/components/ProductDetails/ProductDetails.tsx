import {styles} from "./ProductDetails.styles"
import {Box, Typography} from "@mui/material";
import Rating from "../Rating";
import {IProduct} from "../../models";

interface ProductDetailsProps {
    productDetails: IProduct,
}

const ProductDetails = ({productDetails}: ProductDetailsProps) => {
    return (
        <Box sx={styles.productInfo} component='article'>
            <Typography sx={styles.title} variant="h1">
                {productDetails.name}
            </Typography>
            <Rating
                rating={productDetails.rating}
                numReviews={productDetails?.numReviews}
            />
            <Typography variant="subtitle2">
                Price: ${productDetails?.price}
            </Typography>
            <Typography variant="body1">
                {productDetails.description}
            </Typography>
        </Box>

    );
};

export default ProductDetails;