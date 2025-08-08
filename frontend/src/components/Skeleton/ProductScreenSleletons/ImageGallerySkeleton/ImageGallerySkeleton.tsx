import {Box, Skeleton} from "@mui/material";


const ImageGallerySkeleton = () => {
    return (
        <Box sx={{width: '25vw', aspectRatio: '1/1'}}>
            <Skeleton
                variant="rectangular"
                height={"100%"}
                width={"100%"}
                sx={{backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 3}}
            />
        </Box>
    );
};

export default ImageGallerySkeleton;