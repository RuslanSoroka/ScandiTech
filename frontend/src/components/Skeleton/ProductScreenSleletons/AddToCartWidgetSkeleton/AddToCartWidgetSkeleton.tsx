import {Box, Skeleton} from "@mui/material";


const AddToCartWidgetSkeleton = () => {
  return (
      <Box sx={{width: "20vw", aspectRatio: "2/1.3"}}>
          <Skeleton
              variant="rectangular"
              height={"100%"}
              width={"100%"}
              sx={{backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 3}}
          />
      </Box>
  );
};

export default AddToCartWidgetSkeleton;