import {Theme} from "@mui/material";
import AddToCartWidget from "./AddToCartWidget";

export const styles = {
    addToCartWidget: (theme: Theme) => ({
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "5px",
        maxWidth: "20rem",
        width: "100%",
        "& > *:not(:last-child)": {
            borderBottom: `2px solid ${theme.palette.divider}`,
        },
        [theme.breakpoints.down('lg')]: {
            gridColumn: "2 / 3",
        },
        [theme.breakpoints.down('md')]: {
            gridColumn: "1 / 2",
            maxWidth: "100%",
        },
    }),
    item: (theme: Theme) => ({
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(3),
        gap: theme.spacing(3),
        "> :last-child": {
            fontWeight: {
                fontWeight: "700",
            },
        },
        "&:last-child": {
            justifyContent: "flex-end",
        },
    }),
};
