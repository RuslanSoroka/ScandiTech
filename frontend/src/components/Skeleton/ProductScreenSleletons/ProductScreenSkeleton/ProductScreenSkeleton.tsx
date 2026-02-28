import { Box } from "@mui/material";
import ImageGallerySkeleton from "../ImageGallerySkeleton";
import ProductDetailsSkeleton from "../ProductDetailsSkeleton";
import AddToCartWidgetSkeleton from "../AddToCartWidgetSkeleton";
import BackButton from "../../../UI/BackButton";
import { styles } from "../../../../screens/ProductScreen/ProductScreen.styles";
import NAVIGATION_LINKS from "../../../../routes/links";

const ProductScreenSkeleton = () => {
	return (
		<Box className="product__screen">
			<BackButton link={NAVIGATION_LINKS.home} />
			<Box sx={styles.productScreenContent}>
				<Box sx={styles.imageGalleryWrapper}>
					<ImageGallerySkeleton />
				</Box>
				<Box sx={styles.productDetailsWrapper}>
					<ProductDetailsSkeleton />
				</Box>
				<Box sx={styles.addToCartWrapper}>
					<AddToCartWidgetSkeleton />
				</Box>
			</Box>
		</Box>
	);
};

export default ProductScreenSkeleton;
