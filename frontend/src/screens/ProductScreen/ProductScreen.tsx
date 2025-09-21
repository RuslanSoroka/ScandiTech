import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import styles from "./ProductScreen.styles";
import { useGetProductByIdQuery } from "../../redux/apiSlices/productsSlice";
import BackButton from "../../components/BackButton";
import ErrorComponent from "../../components/ErrorComponent";

import { lazy, memo, Suspense } from "react";
import ImageGallerySkeleton from "../../components/Skeleton/ProductScreenSleletons/ImageGallerySkeleton";
import ProductDetailsSkeleton from "../../components/Skeleton/ProductScreenSleletons/ProductDetailsSkeleton";
import AddToCartWidgetSkeleton from "../../components/Skeleton/ProductScreenSleletons/AddToCartWidgetSkeleton";

const ProductDetails = lazy(() => import("../../components/ProductDetails"));
const MemoizedProductDetails = memo(ProductDetails);
const ProductImageGallery = lazy(
	() => import("../../components/ProductImageGallery"),
);
const MemoizedProductImageGallery = memo(ProductImageGallery);
const AddToCartWidget = lazy(
	() => import("../../components/AddToCartWidget/AddToCartWidget"),
);
const MemoizedAddToCartWidget = memo(AddToCartWidget);

const ProductScreen = () => {
	const { id: producId } = useParams();
	const { data: product, isError: isErrorGetProduct, isFetching } = useGetProductByIdQuery(
		producId ?? "",
	);

	if (isErrorGetProduct) {
		return <ErrorComponent />;
	}

	if (isFetching) {
		return (
			<Box className="productScreen">
				<BackButton link="/" />
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
	}

	return (
		product && (
			<Box className="productScreen">
				<BackButton link="/" />
				<Box sx={styles.productScreenContent}>
					<Box sx={styles.imageGalleryWrapper}>
						<Suspense fallback={<ImageGallerySkeleton />}>
							<MemoizedProductImageGallery
								src={product.image}
								productName={product.name}
							/>
						</Suspense>
					</Box>
					<Box sx={styles.productDetailsWrapper}>
						<Suspense fallback={<ProductDetailsSkeleton />}>
							<MemoizedProductDetails productItem={product} />
						</Suspense>
					</Box>
					<Box sx={styles.addToCartWrapper}>
						<Suspense fallback={<AddToCartWidgetSkeleton />}>
							<MemoizedAddToCartWidget productItem={product} />
						</Suspense>
					</Box>

				</Box>
			</Box>
		)
	);
};

export default ProductScreen;
