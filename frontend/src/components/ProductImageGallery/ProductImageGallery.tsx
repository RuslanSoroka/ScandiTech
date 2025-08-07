import {styles} from "./ProductImageGallery.styles"
import {Box} from "@mui/material";

interface ProductImageGalleryProps {
    src: string,
    productName: string,
}

const ProductImageGallery = ({src, productName}: ProductImageGalleryProps) => {
    return (
        <Box sx={styles.wrapper}>
            <Box component="img" src={src} alt={productName}/>
        </Box>
    );
};

export default ProductImageGallery;