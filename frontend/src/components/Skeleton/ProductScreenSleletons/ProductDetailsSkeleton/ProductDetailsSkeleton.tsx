import { Box, Skeleton } from "@mui/material";

const ProductDetailsSkeleton = () => {
	return (
		<Box sx={{ width: "100%", aspectRatio: "3/1" }}>
			<Skeleton
				variant="rectangular"
				height="10.94rem"
				width={"100%"}
				sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 3 }}
			/>
		</Box>
	);
};

export default ProductDetailsSkeleton;
