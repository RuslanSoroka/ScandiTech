import {Box, Skeleton} from "@mui/material";

const ProductDetailsSkeleton = () => {
    return (
        <Box sx={{width: "40vw", aspectRatio: "3/1"}}>
            <Skeleton
                variant="rectangular"
                height={"100%"}
                width={"100%"}
                sx={{backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 3}}
            />
        </Box>
    );
};

export default ProductDetailsSkeleton;