import { FaZhihu } from "react-icons/fa";

const styles = {
    card: {
        padding: "1rem",
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
    },
    price: {
        fontSize: "1.5rem",
    },
};
export default styles;
