import { colors, Theme } from "@mui/material";

export const styles = {
    button: (theme: Theme) => ({
        backgroundColor: theme.palette.backButton.color,
        textDecoration: "none",
        marginBlock: "1rem",
        color: theme.palette.text.primary,
    }),
};
