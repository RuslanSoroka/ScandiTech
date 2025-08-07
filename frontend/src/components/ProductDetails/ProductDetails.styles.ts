import {Theme} from "@mui/material";

export const styles = {
    productInfo: (theme: Theme) => ({
        padding: theme.spacing(2),
        width: "100%",
        maxWidth: "37rem",
        "& > *:not(:last-child)": {
            borderBottom: `2px solid ${theme.palette.divider}`,
            paddingBottom: "1rem",
            display: "block",
        },
        "& > *:not(:first-of-type)": {
            paddingTop: "1rem",
        },
        [theme.breakpoints.down('lg')]: {
            gridColumn: "1 / 2",
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: "100%",
            gridColumn: "1 / 2",
        },
    }),
    title: {
        fontSize: "2rem",
    },
}