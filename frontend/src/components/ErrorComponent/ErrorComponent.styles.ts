import { Theme } from "@mui/material";
import { text } from "express";

export const styles = {
    box: (theme: Theme) => ({
        minHeight: "calc(100vh - 4rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
    text: (theme: Theme) => ({
        fontSize: '1.5rem',
        color: theme.palette.errors.color,
    }),
};
