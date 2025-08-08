import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import styles from "./ProductScreen.styles";
import {useGetProductByIdQuery} from "../../redux/apiSlices/productsSlice";
import BackButton from "../../components/BackButton";
import ErrorComponent from "../../components/ErrorComponent";

import {lazy, memo, Suspense} from "react";
import ImageGallerySkeleton from "../../components/Skeleton/ProductScreenSleletons/ImageGallerySkeleton";
import ProductDetailsSkeleton from "../../components/Skeleton/ProductScreenSleletons/ProductDetailsSkeleton";
import AddToCartWidgetSkeleton from "../../components/Skeleton/ProductScreenSleletons/AddToCartWidgetSkeleton";

const ProductDetails = lazy(() => import('../../components/ProductDetails'));
const MemoizedProductDetails = memo(ProductDetails);
const ProductImageGallery = lazy(() => import("../../components/ProductImageGallery"));
const MemoizedProductImageGallery = memo(ProductImageGallery);
const AddToCartWidget = lazy(() => import("../../components/AddToCartWidget/AddToCartWidget"));
const MemoizedAddToCartWidget = memo(AddToCartWidget);

const ProductScreen = () => {
    const {id: producId} = useParams();
    const {data: product, isError: isErrorGetProduct} = useGetProductByIdQuery(producId ?? "");

    if (isErrorGetProduct) {
        return <ErrorComponent/>;
    }

    return (
        product && (
            <Box className='productScreen'>
                <BackButton link="/"/>
                <Box sx={styles.productScreenContent}>
                    <Suspense fallback={<ImageGallerySkeleton/>}>
                        <MemoizedProductImageGallery src={product.image} productName={product.name}/>
                    </Suspense>
                    <Suspense fallback={<ProductDetailsSkeleton/>}>
                        <MemoizedProductDetails productItem={product}/>
                    </Suspense>
                    <Suspense fallback={<AddToCartWidgetSkeleton/>}>
                        <MemoizedAddToCartWidget productItem={product}/>
                    </Suspense>
                </Box>
            </Box>
        )
    );
};

export default ProductScreen;
