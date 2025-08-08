import { Theme } from "@mui/material";

const styles = {
    productScreenContent: (theme: Theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "2rem",
        [theme.breakpoints.down('lg')]: {
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "1rem",
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "1fr",
        },
    }),
};
export default styles;
