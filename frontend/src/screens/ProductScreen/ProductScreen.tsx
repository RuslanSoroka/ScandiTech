import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { styles } from "./ProductScreen.styles";
import { useGetProductByIdQuery } from "../../redux/apiSlices/productsSlice";
import AddToCartWidget from "../../components/AddToCartWidget/AddToCartWidget";
import ProductDetails from "../../components/ProductDetails";
import ProductImageGallery from "../../components/ProductImageGallery";
import BackButton from "../../components/UI/BackButton";
import ErrorComponent from "../../components/UI/ErrorComponent";
import ProductScreenSkeleton from "../../components/Skeleton/ProductScreenSleletons/ProductScreenSkeleton";
import NAVIGATION_LINKS from "src/routes/links";

const ProductScreen = () => {
	const { id: productId } = useParams();
	const {
		data: product,
		isError: isErrorGetProduct,
		isFetching,
	} = useGetProductByIdQuery(productId ?? "");

	if (isErrorGetProduct) <ErrorComponent />;

	if (isFetching) <ProductScreenSkeleton />;

	return (
		product && (
			<Box className="product__screen">
				<BackButton link={NAVIGATION_LINKS.home} />
				<Box sx={styles.productScreenContent}>
					<Box sx={styles.imageGalleryWrapper}>
						<ProductImageGallery
							src={product.image}
							productName={product.name}
						/>
					</Box>
					<Box sx={styles.productDetailsWrapper}>
						<ProductDetails productItem={product} />
					</Box>
					<Box sx={styles.addToCartWrapper}>
						<AddToCartWidget productItem={product} />
					</Box>
				</Box>
			</Box>
		)
	);
};

export default ProductScreen;
