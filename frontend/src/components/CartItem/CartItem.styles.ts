import {Theme} from "@mui/material";
import theme from "../../utils/theme/theme";

export const styles = {
    cartItemBox: (theme: Theme) => ({
        display: "flex",
        gap: theme.spacing(2),
    }),
    itemImage: {
        width: "8rem",
        height: "8rem",
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
    },
    contentBox: (theme: Theme) => ({
        display: "flex",
        width: "100%",
        gap: theme.spacing(5),
        alignItems: "center",
        justifyContent: 'space-between',
    }),
    itemName: (theme: Theme) => ({
        flex: 3,
    }),
    price: (theme: Theme) => ({
        flex: 2,
    }),
    actionsBox: (theme: Theme) => ({
        display: "flex",
        gap: theme.spacing(1),
        justifyContent: 'flex-end',
        flex: 1.5,
    }),
    deleteButton: (theme: Theme) => ({
        borderRadius: theme.shape.borderRadius,
    }),
}
