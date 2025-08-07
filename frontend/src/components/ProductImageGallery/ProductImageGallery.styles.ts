import {Theme} from "@mui/material";

export const styles = {
    wrapper: (theme: Theme) => ({
        maxWidth: "30rem",
        width: "100%",
        "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
        },
        [theme.breakpoints.down('lg')]: {
            gridColumn: "1 / 3",
            justifySelf: "center",
        },
        [theme.breakpoints.down('md')]: {
            gridColumn: "1 / 2",
        },
    }),
}