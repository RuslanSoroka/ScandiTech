import { Theme } from "@mui/material";

export const styles =  {
    wrapper: (theme: Theme)=> ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: ".9375rem",
        backgroundColor: theme.palette.productCard.bacgroundColor,
        padding: "1.25rem",
        height: "50vh",
    }),
}
