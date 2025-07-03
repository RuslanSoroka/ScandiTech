import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "./BackButton.styles";

interface BackButtonProps {
    link: string;
    variant?: "text" | "outlined" | "contained";
}

const BackButton = ({ link, variant = "contained" }: BackButtonProps) => {
    return (
        <Button sx={styles.button} variant={variant} component={RouterLink} to={link}>
            Back
        </Button>
    );
};

export default BackButton;
