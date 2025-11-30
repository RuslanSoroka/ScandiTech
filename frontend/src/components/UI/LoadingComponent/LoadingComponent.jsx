import { styles } from "./LoadingComponent.styles";
import { Box, CircularProgress } from "@mui/material";

const LoadingComponent = () => {
	return (
		<Box sx={styles.wrapper}>
			<CircularProgress />
		</Box>
	);
};

export default LoadingComponent;
