import {styles} from "./ProductDetails.styles"
import {Box, Typography} from "@mui/material";
import Rating from "../Rating";
import {IProduct} from "../../models";

interface IProductDetailsProps {
    productItem: IProduct,
}

const ProductDetails = ({productItem}: IProductDetailsProps) => {
    return (
        <Box sx={styles.productInfo} component='section'>
            <Typography sx={styles.title} variant="h1">
                {productItem.name}
            </Typography>
            <Rating
                rating={productItem.rating}
                numReviews={productItem?.numReviews}
            />
            <Typography variant="subtitle2">
                Price: ${productItem?.price}
            </Typography>
            <Typography variant="body1">
                {productItem.description}
            </Typography>
        </Box>

    );
};

export default ProductDetails;