import { Theme } from "@emotion/react";

const styles = (theme: Theme) => ({
    toolbar: {
        "&": {
            padding: 0,
        },
    },
    input: {
        height: "40px",
        justifyContent: "center",
        width: {
            xs: "50%",
            sm: "75%",
            md: "100%",
        },
        "& .MuiOutlinedInput-root": {
            height: "100%",
        },
    },
    humburgerWrapper: {
        display: { xs: "block", md: "none" },
    },
    menu: {
        "> *": { color: "white" },
        display: {
            xs: "none",
            md: "flex",
        },
    },
    iconButton: {
        color: "white",
        fontSize: "1.3rem",
        "&:hover": {
            color: "black",
        },
    },
});

export default styles;
