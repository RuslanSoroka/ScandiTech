const styles = {
    card: {
        padding: "1rem",
        height: "100%",
    },
    img: {
        width: "100%",
        height: "auto",
        "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
        },
    },
    productName: {
        overflow: "hidden",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        textDecoration: "underline",
        fontSize: "1.3rem",
        cursor: "pointer",
    },
    price: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
};
export default styles;
