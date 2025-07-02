import { Skeleton, Box } from "@mui/material";
import { styles } from "./ProductSkeleton.styles";

const ProductSkeleton = () => {
    return (
        <Box sx={styles.wrapper}>
            <Box sx={{ height: "60%" }}>
                <Skeleton
                    variant="rectangular"
                    height={"100%"}
                    width={"100%"}
                />
            </Box>
            <Box>
                <Skeleton
                    variant="text"
                    height={"3.125rem"}
                    width={"100%"}
                />
                <Skeleton
                    variant="text"
                    height={"3.125rem"}
                    width={"100%"}
                />
                <Skeleton
                    variant="text"
                    height={"3.125rem"}
                    width={"100%"}
                />
            </Box>
        </Box>
    );
};

export default ProductSkeleton;
