import { Box, Typography } from "@mui/material";
import { styles } from "./ErrorComponent.styles";

const ErrorComponent = ()=> {
    return(
        <Box sx={styles.box}>
            <Typography sx={styles.text} variant="body1">Oops! Something went wrong. Please try again in a few minutes.</Typography>
        </Box>
    );
};

export default ErrorComponent;