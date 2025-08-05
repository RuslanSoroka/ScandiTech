import {Theme} from "@mui/material";

const styles = {
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
    iconButton:(theme: Theme)=>( {
        color: "white",
        fontSize: "1.3rem",
        "&:hover": {
            color: theme.palette.hover.color,
        },
    }),
};

export default styles;
