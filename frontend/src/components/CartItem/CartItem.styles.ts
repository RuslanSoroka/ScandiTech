import {Theme} from "@mui/material";
import theme from "../../utils/theme/theme";

export const styles = {
    cartItem: (theme: Theme) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        background: 'inherit',
        boxShadow: "none",
        borderBottom: '1px solid grey',
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    }),
    itemImage: {
        width: "6rem",
        height: "6rem",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            width: "8rem",
            height: "8rem",
        }
    },
    contentBox: (theme: Theme) => ({
        display: "flex",
        width: "100%",
        gap: theme.spacing(5),
        alignItems: "center",
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(2),

        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',

        },
    }),
    itemName: (theme: Theme) => ({
        flex: 3,
        [theme.breakpoints.down("md")]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.25rem'
        }
    }),
    price: (theme: Theme) => ({
        flex: 2,
        [theme.breakpoints.down("md")]: {
            fontSize: '.9rem'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1rem'
        },
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
