import { Box, Skeleton } from "@mui/material";

const ImageGallerySkeleton = () => {
	return (
		<Box sx={{ width: "100%", aspectRatio: "1/.8" }}>
			<Skeleton
				variant="rectangular"
				height="100%"
				width="100%"
			/>
		</Box>
	);
};

export default ImageGallerySkeleton;
