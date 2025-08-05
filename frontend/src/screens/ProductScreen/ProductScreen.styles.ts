import { Theme } from "@mui/material";

const styles = {
    productScreen: (theme: Theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "2rem",
        "@media (max-width: 1024px)": {
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "1rem",
        },
        "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
        },
    }),
    imageContainer: {
        maxWidth: "30rem",
        width: "100%",
        "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
        },
        "@media (max-width: 1024px)": {
            gridColumn: "1 / 3",
            justifySelf: "center",
        },
        "@media (max-width: 768px)": {
            gridColumn: "1 / 2",
        },
    },
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
        "@media (max-width: 1024px)": {
            gridColumn: "1 / 2",
        },
        "@media (max-width: 768px)": {
            maxWidth: "100%",
            gridColumn: "1 / 2",
        },
    }),
    title: (theme: Theme) => ({
        fontSize: "2rem",
    }),
    addToCart: (theme: Theme) => ({
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "5px",
        maxWidth: "20rem",
        width: "100%",
        "& > *:not(:last-child)": {
            borderBottom: `2px solid ${theme.palette.divider}`,
        },
        "@media (max-width: 1024px)": {
            gridColumn: "2 / 3",
        },
        "@media (max-width: 768px)": {
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
export default styles;
